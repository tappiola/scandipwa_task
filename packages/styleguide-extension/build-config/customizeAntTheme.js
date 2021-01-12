module.exports = {
    plugin: {
        overrideWebpackConfig: ({ webpackConfig }) => {
            webpackConfig.module.rules.push({
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                modifyVars: {
                                    'primary-color': '#1DA57A'
                                },
                                javascriptEnabled: true
                            }
                        }
                    }
                ]
            },);

            return webpackConfig;
        }
    }
};
