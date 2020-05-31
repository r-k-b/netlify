module.exports = {
    ci: {
        assert: {
            preset: 'lighthouse:recommended',
            assertions: {
                'installable-manifest': 'off',
                'redirects-http': 'off',
                'uses-http2': 'off',
                'works-offline': 'off',
                'offline-start-url': 'off',
                'service-worker': 'off',
                'splash-screen': 'off',
                'apple-touch-icon': 'off',
                'maskable-icon': 'off',
            },
        },
        upload: {
            target: 'temporary-public-storage',
        },
    },
};
