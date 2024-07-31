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

## 📁 Directory Structure
.astro/
Contains Astro-specific configuration files.

.vscode/
Contains VSCode configuration files for extensions, launch settings, and workspace settings.

node_modules/
Contains project dependencies.

public/
Contains static assets like images and videos that can be served directly.

src/
Contains the source code for the project.

src/components/
Contains reusable components for the project.

src/layouts/
Contains layout components for the project.

src/pages/
Contains page components that define the routes of the application.

## Configuration Files
.gitignore: Specifies files to be ignored by Git.

astro.config.mjs: Astro configuration file.

package-lock.json: Describes the exact version of dependencies installed.

package.json: Lists project dependencies and scripts.

README.md: Project documentation.

tailwind.config.mjs: Tailwind CSS configuration file.

tsconfig.json: TypeScript configuration file.

## ✨ Features
Component-Based Architecture: The project follows a component-based architecture using Astro, which allows for modular and reusable code.

Tailwind CSS: The project is styled using Tailwind CSS, providing utility-first CSS for rapid UI development.

TypeScript: The project uses TypeScript for type safety and better developer experience.

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

## 📦 Dependencies
To install the necessary dependencies for this project, run the following commands:

Using npm:
```text
npm install @fontsource/aldrich
```
```text
npm install @react-spring/parallax
```
```text
npm install react-vertical-timeline-component
```
```text
npm install react
```
```text
npm install react-chartjs-2
```
```text
npm install react-intersection-observer
```
```text
npm install react-type-animation
```
