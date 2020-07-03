module.exports = {
    "globDirectory": ".",
    "globPatterns": [
        "**/*.css",
        "**/*.html",
        "**/*.js"
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
