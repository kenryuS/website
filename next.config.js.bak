module.exports = {
    webpack: (config, options) => {
        config.resolve.fallback = {fs: false, buffer: false, path: false, process: false};
        config.module.rules.push({
            test: /\.mdx?$/,
            use: [
                options.defaultLoaders.babel,
                {
                    loader: '@mdx-js/loader',
                },
            ],
        });

        return config;
    },
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
}