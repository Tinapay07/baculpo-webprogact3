# Baculpo Webprog

## Frontend

Install dependencies and start the Vite app:

```bash
npm install
npm run dev
```

The frontend expects the API host at `http://localhost:8000/api` by default.

## Backend

Open a second terminal, go to the `server` folder, and install backend dependencies:

```bash
cd server
npm install
cp .env.example .env
```

Then start the backend:

```bash
npm run dev
```

## Notes

- The backend will run on port `8000` by default.
- The frontend should be able to login using `/api/users/login`.
- If you need to change the frontend API URL, update `VITE_API_URL` in a root `.env` file.
