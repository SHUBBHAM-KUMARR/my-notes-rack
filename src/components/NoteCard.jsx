export default function NoteCard({ note, startEdit, handleDelete }) {
  return (
    <article className="bg-slate-800/60 p-4 rounded-xl border border-slate-700 hover:scale-[1.01] transition-transform">
      <h3 className="font-bold text-lg text-white mb-1">{note.title}</h3>
      <p className="text-slate-300 text-sm whitespace-pre-line mb-3">{note.content}</p>
      <div className="flex items-center justify-between text-xs text-slate-400">
        <div>{new Date(note.updatedAt).toLocaleString()}</div>
        <div className="flex gap-2">
          <button onClick={() => startEdit(note)} className="px-2 py-1 rounded bg-slate-700 text-slate-100 text-xs">Edit</button>
          <button onClick={() => handleDelete(note.id)} className="px-2 py-1 rounded bg-rose-600 text-white text-xs">Delete</button>
        </div>
      </div>
    </article>
  );
}
