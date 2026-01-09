# Password Manager (Frontend)

A simple, static, frontend-only password manager demo built with HTML, CSS, and JavaScript. It includes a login screen, a dashboard with sample entries and a password generator modal, and a standalone password generator page.

> Note: This project has no backend. Data is simulated in memory and via `localStorage` for the demo login state only.

## Features
- Login flow with demo credentials (`testuser` / `password123`)
- Dashboard with sample stored passwords and pagination
- Password generator (standalone and as a modal from the dashboard)
- Basic styling via Bootstrap and custom CSS

## Project Structure
- [index.html](index.html): Landing page and entry point
- [login.html](login.html): Demo login page
- [dashboard.html](dashboard.html): Main dashboard after login
- [d.html](d.html): Alternate/simple dashboard example with embedded password generator
- [password.html](password.html): Standalone password generator
- [style.css](style.css): General styles (not heavily used by current pages)
 - [main.js](main.js): Unrelated sample script (not used by pages)
 - [site.webmanifest](site.webmanifest): PWA manifest (icons referenced and linked from index)
- [about.txt](about.txt): Favicon attribution info

## Getting Started (Local)
- Open [index.html](index.html) directly in your browser; or
- Use a local server for a better experience:
  - VS Code extension: Live Server
  - Or with Python: `python -m http.server` from this folder and browse to `http://localhost:8000`

Demo login: `testuser` / `password123`

## Deploy to GitHub Pages
1. Push this project to a GitHub repository (instructions below).
2. On GitHub, go to Settings → Pages.
3. Set Source to `Deploy from a branch` and select `main` branch, `/ (root)`.
4. Save. Your site will be available at `https://<your-username>.github.io/<repo-name>/`.

## Push to GitHub
If you don't already have a repo, create one on GitHub (e.g., `password-manager`). Then run these commands in PowerShell from the project folder:

```powershell
# Initialize local repository
git init

# Optional: set your name and email (once per machine)
git config user.name "Your Name"
git config user.email "you@example.com"

# Add files and commit
git add .
git commit -m "Initial commit: Password Manager frontend"

# Add remote (replace with your repo URL)
# Example: https://github.com/<username>/password-manager.git
git remote add origin https://github.com/<username>/<repo>.git

# Push main branch
git branch -M main
git push -u origin main
```

## Notes
 - Icons (favicons and Android/Apple icons) are present and used by the manifest.
 - `main.js` is a sample quiz file not used by the app; safe to keep or remove.
 - You can rename or remove [d.html](d.html) if you don't need the alternate dashboard.

## License
No license provided. Add one if you plan to open-source or share.
