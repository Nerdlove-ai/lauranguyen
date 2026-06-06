# Laura's Blog — GitHub Pages Setup Guide
## 100% free. No Netlify. No credit card.

---

## What's happening

Your site `lauranguyen.life` is currently on GitHub Pages, served from the `main` branch of `Nerdlove-ai/lauranguyen`. 

The new setup keeps the same URL but adds:
- **Auto-build**: GitHub Actions builds the site automatically whenever you save a post
- **Admin panel**: Write posts at `lauranguyen.life/admin` — login with your GitHub account

---

## PART 1 — Upload the new files to your existing repo (~10 minutes)

### Step 1 — Upload using GitHub Desktop

1. Open **GitHub Desktop**
2. Make sure you have the `Nerdlove-ai/lauranguyen` repo open (not laura-blog)
3. In Finder, open your **`laura-blog`** folder
4. Select ALL files and folders inside it
5. Drag them into the GitHub Desktop window (it will show them as changes)
6. In the Summary box at the bottom left, type: `Add blog with CMS and auto-build`
7. Click **Commit to main**
8. Click **Push origin**

> ⚠️ This will replace your current files with the new blog project. Your domain (lauranguyen.life) and all 47 posts are included — nothing is lost.

---

### Step 2 — Watch GitHub build the site

1. Go to **github.com/Nerdlove-ai/lauranguyen**
2. Click the **Actions** tab
3. You'll see "Build and Deploy Blog" running
4. Wait ~2 minutes for the green tick ✓
5. This creates a new branch called **`gh-pages`** with the built site

---

### Step 3 — Switch GitHub Pages to the gh-pages branch

1. In your repo → **Settings** → **Pages** (left sidebar)
2. Under **Branch** → change from `main` to **`gh-pages`**
3. Folder: **/ (root)**
4. Click **Save**
5. Wait 1 minute → your site rebuilds at lauranguyen.life ✓

---

### Step 4 — Log into your admin panel

1. Go to **lauranguyen.life/admin**
2. Click **Login with GitHub**
3. If GitHub asks "Authorize Sveltia CMS?" → click **Authorize**
4. You're in ✓

Only you can log in because only you have write access to your repo.

---

## PART 2 — Writing a new post

1. Go to **lauranguyen.life/admin**
2. Click a category (Journal, Research, Reflections, Resources)
3. Click **New [Category]**
4. Fill in Title, Excerpt, toggle Published ON, write Content
5. Click **Save**
6. GitHub Actions rebuilds automatically → post is live in ~2 minutes ✓

---

## PART 3 — Editing or deleting posts

- **Edit**: /admin → category → click post → edit → Save
- **Delete**: /admin → category → hover post → delete

Both trigger an automatic rebuild.

---

## Quick reference

| What | Where |
|---|---|
| Write / edit posts | lauranguyen.life/admin |
| Live site | lauranguyen.life |
| Check build status | github.com/Nerdlove-ai/lauranguyen → Actions tab |
| Your files | github.com/Nerdlove-ai/lauranguyen |
