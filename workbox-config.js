module.exports = {
    "globDirectory": ".",
    "globPatterns": [
        "**/*.css",
        "**/*.html",
        "**/*.js",
        "assets/*.png",
        "manifest.webmanifest",
        "favicon.ico"
    ],
    "globIgnores": [
        "sw.js",
        "workbox*.js",
        "node_modules/**"
    ],
    "swDest": "sw.js",
    "skipWaiting": true,
    "sourcemap": false
};
