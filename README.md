## My Notes Rack

A simple yet secure notes app built with React, IndexedDB, and CryptoJS (AES encryption).
Your notes are stored locally in the browser using IndexedDB and encrypted with AES before saving — ensuring privacy and security.

### Features

 - Create, edit, and delete notes

-  AES-encrypted storage with CryptoJS

- Offline-first with IndexedDB

-  Fast and responsive UI built with React

-  Search  your notes easily



## Tech Stack

Frontend: React (CRA / Vite)

Database: IndexedDB (via idb
 or native API)

Encryption: AES (CryptoJS)



##  Getting Started
Prerequisites

Make sure you have Node.js (>= 16) and npm or yarn installed.

Installation
# Clone the repository
git clone https://github.com/shubbham-kumarr/my-notes-rack.git

# Navigate into the project
cd my-notes-rack

# Install dependencies
npm install

Run in Development
npm start


The app will be available at http://localhost:5173

Build for Production
npm run build

🔒 Security

All notes are encrypted client-side with AES before being stored in IndexedDB.

Your encryption key is derived from the password you provide.

No data ever leaves your browser.

⚠️ Note: If you forget your password, your notes cannot be decrypted. Keep it safe!

my-notes-rack/
├── src/
│   ├── components/      # React components (NotesList, Editor, etc.)
│   ├── utils/          # Encryption/decryption helpers (CryptoJS + AES),db
│   ├── App.js           # Main app entry
│   └── index.js         # React DOM bootstrap
├── public/              # Static assets
├── package.json
└── README.md



🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to open an issue
 or submit a pull request.


