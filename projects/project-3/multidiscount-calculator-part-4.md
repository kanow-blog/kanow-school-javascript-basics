# Multidiscount calculator

> Part 4

## Description

In this part, we will set up CI/CD pipeline for deploying our app to github-pages

## Setting up

Please reuse code from **Part 3**.

1. Copy all files from [***deploy-config***](./deploy-config) to root of your project
2. Make sure `base` field in [***vite.config.ts***](./deploy-config/vite.config.ts) is set to name of your repository
3. Make sure all your public assets are served correctly

## Requirements

1. Running `npm run prettyprint` doesn't produce any errors
2. Running `npm run lint` doesn't produce any errors
3. Running `npm run build` creates a valid build that can be used by the end user
4. You can access **multidiscount-calculator** from GitHub pages

## Hints

- What is CI/CD: [CI/CD: The what, why, and how](https://resources.github.com/ci-cd/)
- What are GitHub Actions: [Learn GitHub Actions](https://docs.github.com/en/actions)
- How to handle static-assets as images in vite: [Static Asset Handling](https://vitejs.dev/guide/assets)
