<h1 align="center">CineFX - Movie Streaming Service</h1>

<p align="center">
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#hammer_and_wrench-how-to-edit-and-build-css">How To Edit and Build CSS</a>&nbsp;&nbsp;&nbsp;
</p>

![CineFX](https://i.imgur.com/NiwKfCM.jpg)

<p align="center">
  <a href="https://cinefx.vercel.app/" target="_blank">
    <img alt="Demo on Netlify" height="60px" width="160px" src="https://i.imgur.com/CoGI4YX.png">
  </a>
</p>

### :rocket: Technologies

This project was developed with the following technologies:

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.netlify.com/)
- [Swiper](https://swiperjs.com/)
- [React-Scroll](https://www.npmjs.com/package/react-scroll)

## :information_source: How To Use

1. Clone repo

```bash
git clone https://github.com/UrielGui/cinefx.git
```

2. Install NPM packages

```bash
npm install
```

3. Run the app

```bash
npm run dev
Open http://localhost:3000 to view it in the browser.
```

## :hammer_and_wrench: How To Edit and Build CSS

1. Switch to global css for use the tailwind css

```bash
go to pages\_app.js, uncomment "import '../styles/globals.css';"
and comment "'../public/css/main.css';"
and you will be able to use new tailwind classes in the project.
```

2. After edit, build css

```bash
run: npm run build-css
and a new file will be generated in public\css\main.css
```

3. Switch to css generated by tailwind css

```bash
go back to pages\_app.js, comment "import '../styles/globals.css';"
and uncomment "'../public/css/main.css';"
```
