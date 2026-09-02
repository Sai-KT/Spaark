# Agent Guidelines

## Automatic Git Commit & Push Workflow
**CRITICAL RULE:** Whenever changes are made to the codebase (or whenever the user asks to commit):
1. Run `git status` and inspect modified/untracked files.
2. If the working directory is clean, no action is needed.
3. If changes exist:
   - Stage all relevant changes: `git add .` (respecting `.gitignore`).
   - Generate a concise, meaningful commit message summarizing the actual changes made.
   - Run `git commit -m "<message>"`.
   - Push immediately to the remote branch: `git push origin main`.
   - Provide a clear confirmation message with the commit hash, message, and files updated.
