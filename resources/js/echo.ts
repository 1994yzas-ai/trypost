import { configureEcho } from '@laravel/echo-vue';

const scheme = import.meta.env.VITE_REVERB_SCHEME || (window.location.protocol === 'https:' ? 'https' : 'http');
const forceTLS = scheme === 'https';
const port = Number(import.meta.env.VITE_REVERB_PORT || window.location.port || (forceTLS ? 443 : 80));

configureEcho({
    broadcaster: 'reverb',
    key: import.meta.env.VITE_REVERB_APP_KEY,
    wsHost: import.meta.env.VITE_REVERB_HOST || window.location.hostname,
    wsPort: port,
    wssPort: port,
    forceTLS,
    enabledTransports: ['ws', 'wss'],
});
