if ('serviceWorker' in navigator && !location.host.startsWith('localhost:')) {
    window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js'));
}
