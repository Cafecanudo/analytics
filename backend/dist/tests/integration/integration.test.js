"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./config/helpers");
describe('Teste Unitario do Controller', function () {
    describe('GET / Verifica servidor UP', function () {
        it('Deve retornar 200, confirmando servidor no AR', function (done) {
            helpers_1.request(helpers_1.app).get('/').end(function (error, res) {
                helpers_1.expect(res.status).to.equal(200);
                done(error);
            });
        });
    });
    describe('GET /api/profile', function () {
        it('Deve retornar configuracoes do perfil de usuario', function (done) {
            console.log(done);
            helpers_1.request(helpers_1.app)
                .get('/api/profile')
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(200);
                done(error);
            });
        });
    });
});
