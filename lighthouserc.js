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
            },
        },
        upload: {
            target: 'temporary-public-storage',
        },
    },
};
