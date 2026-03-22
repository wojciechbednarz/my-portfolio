# Habit Tracker Blog Site Deployment

This repository is configured for automatic deployment to GitHub Pages.

## 1. Create a GitHub repository
Create an empty GitHub repository (for example: `habit-tracker-blog`).

## 2. Add remote and push this code
Run these commands from `C:\Users\wed\Documents\Playground`:

```powershell
git add .
git commit -m "Add recruiter-facing blog site and GitHub Pages deploy workflow"
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin master
```

If your default branch is `main`, push with:

```powershell
git push -u origin master:main
```

## 3. Enable GitHub Pages
In GitHub:

1. Open your repo.
2. Go to `Settings -> Pages`.
3. Under `Build and deployment`, choose `Source: GitHub Actions`.

After that, each push to `master` or `main` will auto-deploy.

## 4. Your live URL
- Project repo: `https://<your-username>.github.io/<repo>/`
- User/Org repo named `<your-username>.github.io`: `https://<your-username>.github.io/`

## Optional: Custom domain
You can add a custom domain in `Settings -> Pages`.
GitHub provides free TLS certificates.