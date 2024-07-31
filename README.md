# Astro Starter Kit: Minimal

```text
/
├── .astro/
│   └── settings.json
├── .vscode/
│   ├── extensions.json
│   ├── launch.json
│   └── settings.json
├── node_modules/
├── public/
│   ├── sectionOne/
│   │   ├── slide12.png
│   │   ├── slide16a.png
│   │   └── slide16b.png
│   ├── sectionThree/
│   │   ├── S3I1.png
│   │   └── S3I2.png
│   ├── sectionTwo/
│   │   ├── CanadaDeclassified.png
│   │   ├── Denmark.png
│   │   ├── Finland.png
│   │   ├── France.png
│   │   ├── New_Brunswick.png
│   │   ├── Newfoundland_and_Labrador.png
│   │   ├── Norway.png
│   │   ├── Nova_Scotia.png
│   │   ├── OpenByDefault.png
│   │   ├── Quebec.png
│   │   ├── SecretCanada.png
│   │   └── Usa.png
│   ├── vids/
│   │   ├── Vid1S.webm
│   │   ├── Vid2S.webm
│   │   ├── Vid3S.webm
│   │   ├── Vid4S.webm
│   │   ├── Vid5S.webm
│   │   ├── Vid6S.webm
│   │   ├── Vid7.mp4
│   │   ├── Vid8S.webm
│   │   ├── Vid9S.webm
│   │   ├── Vid10S.webm
│   │   └── Vid11S.webm
│   ├── favicon.svg
│   ├── InsideHOC.png
│   ├── OutsideHOC.png
│   └── ParHill.png
├── src/
│   ├── components/
│   │   ├── BarGraph.jsx
│   │   ├── FadeIn.jsx
│   │   ├── GroupText.jsx
│   │   ├── Img.css
│   │   ├── Img.jsx
│   │   ├── LineGraph.jsx
│   │   ├── Text.css
│   │   ├── Text.jsx
│   │   ├── Timeline.css
│   │   ├── Typewriter.jsx
│   │   ├── Video.css
│   │   └── Video.jsx
│   ├── layouts/
│   │   ├── MainLayout.astro
│   │   ├── MainLayout.css
│   │   └── ParallaxContent.jsx
│   ├── pages/
│   │   └── index.astro
│   ├── astro.d.ts
│   ├── env.d.ts
│   └── vite-env.d.ts
├── .gitignore
├── astro.config.mjs
├── package-lock.json
├── package.json
├── README.md
├── tailwind.config.mjs
└── tsconfig.json

```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
