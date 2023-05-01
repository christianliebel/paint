# Paint: An open-source, Web Components-based remake of MS Paint using modern web capabilities

![Node.js CI](https://github.com/christianliebel/paint/workflows/Node.js%20CI/badge.svg)
[![Known Vulnerabilities](https://snyk.io/test/github/christianliebel/paint/badge.svg?targetFile=package.json)](https://snyk.io/test/github/christianliebel/paint?targetFile=package.json)
![GitHub](https://img.shields.io/github/license/christianliebel/paint)

Paint is back—right in your browser! Try it on [paint.js.org](https://paint.js.org).

![Paint](https://raw.githubusercontent.com/christianliebel/paint/main/docs/screenshot.png)

This project aims to demonstrate modern web capabilities and Web Component-based application architectures on the example of a productivity app dinosaur: Paint.
All offline-capable and installable, just as [Progressive Web Apps](https://web.dev/progressive-web-apps/) should be.

## PLEASE NOTE

This project is in an early state. Not all tools and actions are implemented right now. Your help and feedback are wanted!

## Modern Web Technology

This project demonstrates the use of:

- [Web Components](https://www.webcomponents.org/introduction), the built-in component model of the web (via [Lit](https://lit.dev/))
- [Service Workers](https://developers.google.com/web/fundamentals/primers/service-workers) for offline capability (via [Workbox](https://developers.google.com/web/tools/workbox))
- [Web App Manifest](https://github.com/w3c/manifest) for installability
- [File System Access API](https://web.dev/file-system-access/) for file system access (via [browser-fs-access](https://github.com/GoogleChromeLabs/browser-fs-access)), including drag and drop
- [File Handling API](https://web.dev/file-handling/) for registering as a handler for \*.png files
- [Async Clipboard API](https://web.dev/image-support-for-async-clipboard/) for clipboard access
- [Web Share API](https://web.dev/web-share/#sharing-files) for sharing images to other applications via _File > Send…_
- [StorageManager API](https://web.dev/storage-for-the-web/#check) for estimating storage usage in _Help > About Paint_
- [prefers-color-scheme](https://web.dev/prefers-color-scheme/) for dark mode
- [Local Font Access API](https://web.dev/local-fonts/) for accessing local fonts
- [Snowpack](https://www.snowpack.dev/), a lightning-fast frontend build tool

## Goals

- This implementation tries to stick as closely as possible to the original Paint for Windows 95—not more, but also not less. You might want to check out [Felix Rieseberg’s windows95 to run the original Paint](https://github.com/felixrieseberg/windows95).
- This implementation should stay smaller (= transferred bytes) than Paint’s executable size of 340K.
- Everything must be achieved with web technology only, so no Cordova/Capacitor or Electron/Tauri builds. Features that are not exposed to the web must be disabled in the menu.
- Where modern web APIs are used, they should be [progressively enhanced](https://web.dev/progressively-enhance-your-pwa/).

## Setup

1. Clone this repository
2. Run `npm i`
3. Run `npm start`
4. Done!

## Using the Web Component

Paint is available as a web component, so you can easily embed it into other applications or websites.

1. Install the library
   - Download the npm package [@christianliebel/paint](https://www.npmjs.com/package/@christianliebel/paint) and register the elements by importing the library: `import '@christianliebel/paint';`
   - Alternatively, use a service like unpkg.com: `<script src="https://unpkg.com/@christianliebel/paint/dist/elements/index.js" type="module"></script>`
2. Use the `<paint-app>` component in your application.
3. Optional: If you want to react to changes of the document title, listen to the `titlechange` event. You can find the updated title in the `event.details.title` property.
4. Done!

## Wait, I’ve seen this before

You’re right! The awesome [JSPaint](https://jspaint.app/) ([GitHub](https://github.com/1j01/jspaint)) has been around for a long time and is, by far, more complete.
In contrast to JSPaint, this project is offline-capable and makes use of modern web platform APIs.

## License

This project is provided for educational purposes only.
It is not affiliated with and has not been approved by Microsoft.
