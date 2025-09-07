import NoteCard from "./NoteCard";

export default function NoteList({ notes, startEdit, handleDelete }) {
  return (
    <section>
      <h2 className="text-lg text-slate-200 font-semibold mb-4">Your notes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.length > 0 ? (
          notes.map((note) => (
            <NoteCard key={note.id} note={note} startEdit={startEdit} handleDelete={handleDelete} />
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-slate-400">
            No notes yet — create your first encrypted note above.
          </div>
        )}
      </div>
    </section>
  );
}
