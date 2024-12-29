# Repository Contribution Guide

Follow the steps below to clone the repository, create your branch, make changes, and push your updates to the remote repository.

## Steps to Contribute

### 1. Clone the Repository
Clone the repository's develop branch to your local system:
```bash
git clone https://github.com/Alpha-One-sae/club-history-page.git
```

### 2. Create a New Branch
Create a new branch with your name:
```bash
git branch <your-branch-name>
```
Switch to the newly created branch:
```bash
git checkout <your-branch-name>
```

### 3. Start Programming
Begin making changes or adding new features in your local branch.

### 4. Check Untracked Files
Check the list of untracked files:
```bash
git status
```

### 5. Track All Files
Track all the untracked files:
```bash
git add .
```
Check the status again to ensure all files are tracked (they should appear in green):
```bash
git status
```

### 6. Commit Your Changes
Commit the changes with a suitable commit message:
```bash
git commit -m "<suitable-commit-message>"
```

### 7. Pull Updates from Develop Branch
Before pushing your changes, ensure your branch is up-to-date with the develop branch:
```bash
git pull origin develop
```

### 8. Push Your Changes
Push your changes to the remote repository on your own branch:
```bash
git push origin <your-branch-name>
```

## Notes
- Replace `<your-branch-name>` with a meaningful name for your branch.
- Replace `<suitable-commit-message>` with a descriptive message summarizing your changes.
- Always pull the latest changes from the develop branch before pushing your updates to avoid conflicts.

Thank you for contributing!
```

