# Student Portal Backend

Scaffold for the Student Portal backend. Contains a modular structure under `src/modules` for features such as academic, payments, profile, leave-requests, hostel, tickets, and chatbot.

Quick start:

1. Copy `.env` to `.env.local` and update values.
2. Install dependencies: `npm install`.
3. Start: `node src/server.js` (or your preferred runner).

Project layout highlights:

- `src/server.js` - entry that starts the HTTP server
- `src/app.js` - express app and route mounting
- `src/modules/*` - feature modules, each with controller/service/routes (and models where required)
- `config/` - environment/config helpers
- `tests/` - unit tests
- `docs/` - documentation
