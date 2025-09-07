import { useEffect, useState } from "react";
import { openDB, idbGetAll, idbPut, idbDelete } from "./utils/db";
import { encrypt, decrypt } from "./utils/crypto";
import Header from "./components/Header";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

export default function App() {
  const [db, setDb] = useState(null);
  const [notes, setNotes] = useState([]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingId, setEditingId] = useState(null);

  const [passphrase, setPassphrase] = useState("");
  const [search, setSearch] = useState("");

  // open IndexedDB on mount
  useEffect(() => {
    openDB().then((dbInstance) => {
      setDb(dbInstance);
      refreshNotes(dbInstance);
    });
  }, []);

  async function refreshNotes(dbInstance) {
    const dbToUse = dbInstance || db;
    if (!dbToUse || !passphrase) return;
    const stored = await idbGetAll(dbToUse);
    const decrypted = stored.map((n) => ({
      ...n,
      content: decrypt(n.content, passphrase),
    }));
    setNotes(decrypted);
  }

  async function handleSave(e) {
    e.preventDefault();
    if (!db || !passphrase || !title.trim() || !content.trim()) return;

    const now = new Date().toISOString();
    const note = {
      id: editingId || Date.now(),
      title,
      content: encrypt(content, passphrase),
      updatedAt: now,
    };

    await idbPut(db, note);
    setTitle("");
    setContent("");
    setEditingId(null);
    refreshNotes();
  }

  function startEdit(note) {
    setTitle(note.title);
    setContent(note.content);
    setEditingId(note.id);
  }

  function cancelEdit() {
    setTitle("");
    setContent("");
    setEditingId(null);
  }

  async function handleDelete(id) {
    if (!db) return;
    await idbDelete(db, id);
    refreshNotes();
  }

  const filteredNotes = notes.filter((n) =>
    n.title.toLowerCase().includes(search.toLowerCase()) ||
    n.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-slate-100 font-sans">
      <Header
        passphrase={passphrase}
        setPassphrase={setPassphrase}
        search={search}
        setSearch={setSearch}
      />

      <main className="p-6 max-w-6xl mx-auto">
        <NoteForm
          title={title}
          setTitle={setTitle}
          content={content}
          setContent={setContent}
          editingId={editingId}
          handleSave={handleSave}
          cancelEdit={cancelEdit}
        />

        <NoteList notes={filteredNotes} startEdit={startEdit} handleDelete={handleDelete} />
      </main>
    </div>
  );
}
