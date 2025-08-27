# TomeOfWyatt

A dark-wizard themed personal portfolio built with [Astro](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/), featuring an **interactive grimoire book** for projects, a raven-delivered blog, and clickable artifacts for About, Wishlist, and Donate.

---

## Features
- **Interactive homepage** with clickable objects (skull, raven, crystal ball, pouch, grimoire).
- **Grimoire book view** with page-turn animations powered by [st-pageflip](https://github.com/Nodlik/StPageFlip).
- **Blog system** built from Markdown content.
- **Wishlist** page (gifts on my wishlist for friends/family to possibly purchase for holidays).
- **Donate** page (crypto wallet public addresses).
- Deployed on a **Linux host** with [Caddy](https://caddyserver.com/) for blazing fast static serving.

---

## Tech Stack
- **Frontend:** [Astro](https://astro.build/), [React islands](https://docs.astro.build/en/core-concepts/framework-components/), [Framer Motion](https://www.framer.com/motion/)
- **Styling:** Tailwind CSS + custom animations
- **Content:** Markdown (for blog posts)
- **Deployment:** Arch Linux + Caddy (static hosting)

---

## Project Structure
```text
src/
  assets/      # images and background art
  components/  # reusable UI (hotspots, book flip, etc.)
  content/     # blog markdown posts
  layouts/     # base Astro layouts
  pages/       # routes: /, /about, /blog, /wishlist, /donate, /grimoire
