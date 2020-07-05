module.exports = {
  globDirectory: '.',
  globPatterns: [
    '**/*.css',
    '**/*.html',
    '**/*.js',
    'assets/*.png',
    'manifest.webmanifest',
    'favicon.ico',
    '3rdpartylicenses.txt',
  ],
  globIgnores: ['sw.js', 'workbox*.js', 'node_modules/**', 'docs/**'],
  swDest: 'sw.js',
  skipWaiting: true,
  sourcemap: false,
};
