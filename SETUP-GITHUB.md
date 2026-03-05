# Simple Setup: Get Confluxe on GitHub

You only need to do **2 things**. That's it.

---

## Part 1: Create the Repo (5 minutes, one-time)

### 1. Open this link in your browser:
**https://github.com/new**

### 2. Fill in:
- **Repository name:** `confluxe`
- **Visibility:** Public
- **Leave everything else UNCHECKED** (no README, no .gitignore, no license)

### 3. Click the green **"Create repository"** button

### 4. Copy the URL GitHub shows you
It will look like: `https://github.com/nihar-manwatkar/confluxe.git`

If your username is different, that's fine — just note the exact URL.

---

## Part 2: Run the Script

### 1. Open Terminal in Cursor (or VS Code)
- Press `` Ctrl+` `` (backtick) or go to **Terminal → New Terminal**

### 2. Make sure you're in the project folder:
```powershell
cd "C:\Users\Nihar Manwatkar\Documents\confluxe_main"
```

### 3. If your GitHub URL is different, update it first:
```powershell
git remote set-url origin https://github.com/YOUR-USERNAME/confluxe.git
```
(Replace YOUR-USERNAME with your actual GitHub username)

### 4. Run the push script:
```powershell
.\scripts\push-to-github.ps1
```

---

## Done!

After the script runs successfully:
- **main** branch → will deploy to www.confluxe.in
- **preview** branch → will deploy to staging.confluxe.in

Then go to **Vercel → Domains → Add staging.confluxe.in** and connect it to Preview.

---

## Need Help?

If the script fails, it will tell you what went wrong. Most common issue: the repo wasn't created on GitHub yet (Part 1).
