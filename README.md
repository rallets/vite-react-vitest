# Vite + React + TypeScript + Vitest

Setup with Vite, React, Typescript, Vitest and browser testing.

NB. this repo use the old `Eslint 8`, as provided by the`vite template`.

## pre-requisites

> npm install react-hook-form
> npm install yup
> npm install @hookform/resolvers
> npm install -D tailwindcss postcss autoprefixer
> npx tailwindcss init -p
> setup tailwind configuration files from <https://tailwindcss.com/docs/guides/vite>

## setup

> npm create vite vite-react-vitest

> React
> TypeScript

> npm install

> npm install -D vitest

> npm i -D @vitest/ui

Then you can visit the Vitest UI at <http://localhost:51204/__vitest__/>

> npx vitest init browser

> TypeScript
> Playwright
> Chromium
> React
> Install Playwrigth browser

> npm run test:browser

> npm install -D @testing-library/react @testing-library/jest-dom jsdom
> setup `vitest.setup.ts` and `vitest.workspace.ts` (and not `test` in `vitest.config.ts`) as from `vitest-browser-react`: <https://vitest.dev/guide/browser/#examples>

### Vitest Visual Studio Code extension

<https://marketplace.visualstudio.com/items?itemName=vitest.explorer>

## About the template

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
