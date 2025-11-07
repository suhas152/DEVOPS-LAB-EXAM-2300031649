# React Exam App

## Setup
1. Navigate to folder:
   ```
   cd reactexamapp
   ```
2. Install:
   ```
   npm install
   ```
3. Run:
   ```
   npm run dev
   ```
4. Default dev server:
   - http://localhost:5173

## Notes
- Backend base URL is read from `.env` (VITE_API_BASE_URL).
- Home page detects environment by `window.location.port`:
  - `5173` -> local (green banner)
  - `30000-32767` -> Kubernetes (purple banner)
- Login state is stored in `sessionStorage`.
