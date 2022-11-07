const config = {
    app: {
        port: process.env.PORT || 3000,
    },
    db: {
        uri: process.env.MONGODB_URI || 'mongodb+srv://huynhdaihuybikeshop:123456789Aa@cluster0.j7uou1m.mongodb.net/bikeshop',
    },
};

module.exports = config