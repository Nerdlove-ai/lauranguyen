# Laura's Blog — Complete Deployment Guide
## From zero to live in ~20 minutes. No coding required.

---

## How it works (plain English)

Your blog has three pieces:
- **GitHub** — stores all your files (like Google Drive, but for websites)
- **Netlify** — turns those files into a live website automatically
- **Decap CMS** — the admin panel at /admin where you write posts in your browser

When you publish a new post in the admin panel, it saves the post to GitHub, GitHub tells Netlify to rebuild the site, and your post is live in about 2 minutes. You never touch code again.

---

## PART 1 — First-time setup (~20 minutes, done once)

### Step 1 — Create a GitHub account
1. Go to **github.com**
2. Click **Sign up**
3. Enter your email, create a password, choose a username
4. Verify your email

---

### Step 2 — Upload your blog to GitHub
1. Log into GitHub
2. Click the **+** button (top right) → **New repository**
3. Repository name: `laura-blog`
4. Set to **Public**
5. Click **Create repository**
6. On the next screen, click **"uploading an existing file"** (small link under the heading)
7. Open your `laura-blog` folder on your computer
8. Select ALL files and folders inside it (Cmd+A on Mac / Ctrl+A on Windows)
9. Drag them all into the GitHub upload area
10. Wait for upload to finish
11. Scroll down, click **Commit changes**

> ⚠️ **Important**: upload the *contents* of the laura-blog folder, not the folder itself. GitHub should show files like `package.json`, `netlify.toml`, `src/`, `admin/` at the top level.

---

### Step 3 — Connect Netlify to GitHub
1. Go to **netlify.com** → Sign up → choose **Sign up with GitHub**
2. Authorise Netlify to access your GitHub
3. Click **Add new site** → **Import an existing project**
4. Click **GitHub**
5. Find and click **laura-blog**
6. Build settings — these should auto-fill, but verify:
   - **Build command:** `npm run build`
   - **Publish directory:** `_site`
7. Click **Deploy site**
8. Wait about 2 minutes — you'll see a green **"Published"** status
9. Netlify gives you a URL like `amazing-fox-123.netlify.app` — your site is live!

---

### Step 4 — Point your domain (lauranguyen.life) to this new site
1. In Netlify, go to **Domain management**
2. Click **Add custom domain** → type `lauranguyen.life`
3. Follow the instructions to update your DNS (or ask me and I'll walk you through it)

---

### Step 5 — Enable login for your admin panel
1. In Netlify, go to **Site configuration** in the left sidebar
2. Click **Identity** → click **Enable Identity**
3. Scroll to **Registration preferences** → select **Invite only**
4. Scroll to **External providers** → you can skip this
5. Click **Services** (still in Identity settings) → **Git Gateway** → click **Enable Git Gateway**
6. Now go to **Identity** in the left sidebar → click **Invite users**
7. Enter your own email address → click **Send**
8. Check your email → click the invite link → set your password

**Your admin panel is now live at:** `yoursite.netlify.app/admin`

---

## PART 2 — How to publish a new post (every time)

### From the browser — no files, no code

1. Go to `lauranguyen.life/admin` (or `yoursite.netlify.app/admin`)
2. Log in with your email and password
3. In the left panel, click the category you want:
   - **About Me / Journal** — personal thoughts
   - **Research Journey** — academic/research posts
   - **Responsible AI Reflections** — ethics/governance
   - **Resources** — papers, tools, links
4. Click **New [Category]** button (top right)
5. Fill in:
   - **Title** — your post title
   - **Date** — today's date (auto-fills)
   - **Tags** — optional keywords
   - **Excerpt** — 1-2 sentence summary (shown on homepage cards)
   - **Published** — toggle ON to make it live
   - **Content** — write your full post here (rich text editor, like Google Docs)
6. Click **Publish** when ready (or **Save draft** to come back later)
7. Wait ~2 minutes
8. Your post appears on the live site automatically ✓

---

### Editing an existing post
1. Go to `/admin` → click the category
2. Find your post in the list → click it
3. Make your changes
4. Click **Publish** again
5. Live in ~2 minutes

### Deleting a post
1. Go to `/admin` → click the category
2. Find your post → click the three dots or delete button
3. Confirm deletion
4. Live in ~2 minutes

---

## PART 3 — Getting help with future updates

For anything bigger than writing a post — new sections, design changes, adding features — just come back to Claude and describe what you want. The files are all in GitHub, Claude can update them, and Netlify auto-deploys the changes.

You never need to touch code, terminals, or anything technical.

---

## Quick reference

| What you want to do | Where to go |
|---|---|
| Write a new post | lauranguyen.life/admin |
| Edit an existing post | lauranguyen.life/admin → find the post |
| See your live site | lauranguyen.life |
| Check deploy status | netlify.com → your site → Deploys |
| Manage your domain | netlify.com → your site → Domain management |
