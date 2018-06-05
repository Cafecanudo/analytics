"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./config/helpers");
const RouterDefault_1 = require("../../server/modules/RouterDefault");
describe('Serviços de Usuário', () => {
    describe(`GET ${RouterDefault_1.pathApi}/usuario/perfil`, () => {
        it('Deve retornar perfil de usuario com estrutura espeficica', done => {
            helpers_1.request(helpers_1.app)
                .get(`${RouterDefault_1.pathApi}/usuario/perfil`)
                .end((error, res) => {
                helpers_1.expect(res.status).to.equal(200);
                done(error);
            });
        });
    });
});
