module.exports = {
    version: '0.0.1-SNAPSHOT',
    env: 'development',
    secretKeyCript: 'softbox@2018',
    server: {
        ssl: {
            certificado: 'server.crt',
            privateKey: 'private.pem',
            portssl: 3003
        },
        protocolo: 'http', //Mudar para HTTPS todos as rotas somente funcionara como o mesmo
        hostname: 'localhost',
        port: 3000
    },
    frontend: {
        protocolo: 'http',
        host: 'localhost',
        port: '8080'
    },
    database: {
        host: 'localhost',
        databasename: 'eldoc-analytics-dev',
        username: null,
        password: null
    }
};
