export default function NoteForm({
  title, setTitle,
  content, setContent,
  editingId,
  handleSave,
  cancelEdit
}) {
  return (
    <form onSubmit={handleSave} className="mb-6 bg-slate-800/60 p-4 rounded-2xl border border-slate-700">
      <div className="flex gap-3 items-start">
        <div className="flex-1">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="w-full bg-transparent border-b border-slate-600 pb-2 mb-3 text-white placeholder-slate-400 focus:outline-none"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={5}
            placeholder="Write your note..."
            className="w-full bg-transparent text-slate-100 placeholder-slate-400 focus:outline-none"
          />
        </div>

        <div className="w-56 flex flex-col gap-2">
          <div className="text-xs text-slate-300">Preview</div>
          <div className="bg-slate-900 p-3 rounded-md h-full overflow-auto text-slate-200 text-sm">
            <div className="font-semibold">{title || "(no title)"}</div>
            <div className="whitespace-pre-wrap text-sm mt-2 text-slate-300">{content || "(empty)"}</div>
          </div>

          <button type="submit" className="mt-2 px-3 py-2 rounded-md bg-emerald-500 text-black font-bold">
            {editingId ? "Update" : "Save"}
          </button>
          {editingId && (
            <button type="button" onClick={cancelEdit} className="px-3 py-2 rounded-md bg-slate-700 text-slate-200">
              Cancel
            </button>
          )}
        </div>
      </div>
    </form>
  );
}
