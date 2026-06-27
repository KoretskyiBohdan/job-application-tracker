# Job Application Tracker

A personal tool to track job applications, their status, and notes.
One user, no login.

## Stack

- React (Vite) frontend
- React query for API
- Node.js + Express backend
- JSON file for data storage (db/jobs.json)
- Plain CSS (no frameworks)
- Typescript

## Project Structure

- /client — React frontend
- /server — Express API
- /db — jobs.json data file

## Running the Project

- `npm run dev` — starts both client and server (via concurrently)
- `npm run client` — frontend only
- `npm run server` — backend only

## Data Storage

- Single JSON file at /db/jobs.json
- Read and write directly with Node fs module
- No database, no ORM

## Pages & Functionality

### Dashboard (/)

- Summary stats: total applications, count by status
- Recent applications list (last 5)

### Applications (/applications)

- Full list of all jobs
- Filter by status
- Sort by date applied
- Add new application (modal)
- Delete application

### Application Detail (/applications/:id)

- View all fields
- Edit any field inline or via form
- Delete application

## Data model

Application: {
id: number,
company: string,
role: string,
status: "Applied" | "Phone Screen" | "Interview" | "Offer" | "Rejected",
date_applied: ISO Date,
note: string,
link: string
}

## Coding Conventions

- Functional React components only
- Plain CSS, no frameworks
- Keep components small and single-purpose

## Do Not

- Use a database or ORM
- Use CSS frameworks
- Generate mock/dummy data
