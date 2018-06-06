"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./config/helpers");
const RouterDefault_1 = require("../../server/modules/RouterDefault");
describe('Serviços do sistema', () => {
    describe('GET /', () => {
        it('Verifica se servidor ONLINE', done => {
            helpers_1.request(helpers_1.app).get('/').end((error, res) => {
                helpers_1.expect(res.status).to.equal(200);
                helpers_1.expect(res.body).to.keys(['version']);
                done(error);
            });
        });
    });
    describe(`GET ${RouterDefault_1.pathApi}/app`, () => {
        it('Verifica estrutura de configurações', done => {
            helpers_1.request(helpers_1.app)
                .get(`${RouterDefault_1.pathApi}/app`)
                .end((error, res) => {
                helpers_1.expect(res.status).to.equal(200);
                done(error);
            });
        });
    });
});
