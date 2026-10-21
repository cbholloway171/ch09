# ch09project_username

Chapter 9 project: a small static website (Home page + first post) with a header, menu, image with alt text, list, button, sidebar and footer widgets, a site icon, and plug-in style features (dark mode switch and back-to-top button).

Open `index.html` in a browser, or use the Live Server extension in VS Code.

## Folder layout

```
ch09project_username/
  index.html                           Home page
  getting-started-with-wordpress.html  First post
  css/style.css                        Theme styling
  js/main.js                           Dark mode + back-to-top "plug-in"
  images/site-icon.svg                 Site icon (favicon)
  images/hero.svg                      Image used on Home page (has alt text)
  media/                               Screenshots of the homepage
```

## How each assignment step is covered

| Step | Where |
|------|-------|
| 3-4 | Folder is ready to open in VS Code and push to GitHub (commands below) |
| 4-5 | `index.html` is the "Home" page and the site's front page |
| 6 | `css/style.css` is the theme |
| 7 | Site title "Code Corner" and tagline are in the header of every page |
| 8 | `images/site-icon.svg`, linked with `<link rel="icon">` |
| 9 | Heading 1, name paragraph and date paragraph at the top of `index.html` |
| 10 | Image with alt text in `index.html` |
| 11 | "Why WordPress?" list |
| 12 | "Read the first post" button |
| 13 | Primary menu with Home in the header |
| 14 | Sidebar widgets and footer widget area |
| 15 and 18 | `js/main.js`: dark mode switch and back-to-top button (visible change) |
| 16 | `getting-started-with-wordpress.html` |
| 17 | Site Health note in the Comments section of the Home page |
| 19 | Screenshots in `media/` |

## Git and GitHub (VS Code terminal)

```
git init
git add .
git commit -m "Add Chapter 9 project site"
```

Then in VS Code open Source Control and choose **Publish Branch**, pick **Public repository**, and it will push everything. (Or create an empty public repo on github.com and run `git remote add origin <your repo url>`, `git branch -M main`, `git push -u origin main`.)

To publish it as a live site: GitHub repo > Settings > Pages > Deploy from a branch > `main` / root.

## Things to double check before you submit

- If your instructor needs a real WordPress install, the steps in the assignment (AMPPS domain, MySQL database, WordPress install, theme, plug-in, Site Health) still have to be done on your computer. This folder is a static version of the same content.
- The Site Health comment on the Home page is a sample suggestion (caching). If your real Site Health screen recommends something else, edit the text in the Comments section of `index.html`.
- Rename the folder if your assignment wants your real username in `ch09project_username`.
