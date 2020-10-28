const path = require("path");

module.exports = {
    stories: ["../stories/index.stories.ts"],
    webpackFinal: (config, mode) => {
        // remove original storybook webpack rules for svelte
        config.module.rules = config.module.rules.filter((r) => {
            return !r.test.toString().includes("svelte");
        });

        config.module.rules.push({
            test: /\.svelte$/,
            exclude: /node_modules/,
            use: {
                loader: "svelte-loader",
                options: {
                    preprocess: require("svelte-preprocess")({}),
                    dev: true,
                },
            },
        });

        config.resolve.extensions.push(".ts", ".tsx");
        return config;
    },
};
