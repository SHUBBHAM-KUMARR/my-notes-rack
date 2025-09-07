export default function Header({ passphrase, setPassphrase, search, setSearch }) {
  return (
    <header className="p-6 flex items-center justify-between border-b border-slate-700 bg-opacity-40 backdrop-blur-sm">
      <div>
        <h1 className="text-2xl font-extrabold text-white">TechNotes</h1>
        <p className="text-sm text-slate-300">Encrypted notes (AES) • IndexedDB • React + Tailwind</p>
      </div>

      <div className="flex items-center gap-3">
        <input
          value={passphrase}
          onChange={(e) => setPassphrase(e.target.value)}
          type="password"
          placeholder="passphrase"
          className="px-3 py-2 rounded-md bg-slate-900 text-slate-100 border border-slate-700 focus:outline-none"
        />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search notes..."
          className="px-3 py-2 rounded-md bg-slate-900 text-slate-100 border border-slate-700 focus:outline-none"
        />
      </div>
    </header>
  );
}
