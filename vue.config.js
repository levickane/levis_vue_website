module.exports = {
    transpileDependencies: ['vuetify'],
    publicPath:
        process.env.NODE_ENV === 'production' ? '/levis_vue_website/dist' : '/'
};
