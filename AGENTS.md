# Agent Guidelines

## Automatic Git Commit & Push Workflow
Whenever the user says **"commit"** (or phrases like "commit to github", "commit this", etc.):
1. Run `git status` and inspect modified/untracked files.
2. If the working directory is clean, inform the user that there are no changes to commit.
3. If changes exist:
   - Stage all relevant changes: `git add .` (respecting `.gitignore`).
   - Generate a concise, meaningful commit message summarizing the actual changes.
   - Run `git commit -m "<message>"`.
   - Push immediately to the remote branch: `git push origin main`.
   - Provide a clear confirmation message with the commit hash, message, and files updated.
