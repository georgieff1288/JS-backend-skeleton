const config = {
    PORT: 4000,
    DB_URI: 'mongodb://localhost/skeleton',  //'skeleton' is db name
    SALT_ROUNDS: 10,
    SECRET: 'nqkakvasol',
    COOKIE_NAME: 'TOKEN'
};

module.exports = config;