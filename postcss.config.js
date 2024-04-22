module.exports = {
    plugins: [
        require('cssnano')({ // https://github.com/cssnano/cssnano
            preset: 'default',
        }),
        require('postcss-preset-env')({ // https://preset-env.cssdb.org/features/
            stage: 2
        })
    ],
};