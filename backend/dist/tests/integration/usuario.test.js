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
                helpers_1.expect(res.body).to.be.keys(['login', 'foto', 'dadosUsuario']);
                helpers_1.expect(res.body.dadosUsuario).to.be.keys(['nome', 'email']);
                done(error);
            });
        });
    });
    describe(`GET ${RouterDefault_1.pathApi}/usuario/perfil/nome`, () => {
        it('Deve retornar perfil de usuario com estrutura espeficica e verificar se nome de usuario esta corrento na estructura', done => {
            helpers_1.request(helpers_1.app)
                .get(`${RouterDefault_1.pathApi}/usuario/perfil/nome`)
                .end((error, res) => {
                helpers_1.expect(res.status).to.equal(200);
                helpers_1.expect(res.body).to.be.keys(['nome', 'email']);
                helpers_1.expect(res.body.nome).to.not.equal('');
                helpers_1.expect(res.body.email).to.not.equal('');
                done(error);
            });
        });
    });
    describe(`GET ${RouterDefault_1.pathApi}/usuario/perfil/notificacao-resumo`, () => {
        it('Verificar se serviço esta retornando as notificações na estrutura esperada.', done => {
            helpers_1.request(helpers_1.app)
                .get(`${RouterDefault_1.pathApi}/usuario/perfil/notificacao-resumo`)
                .end((error, res) => {
                helpers_1.expect(res.status).to.equal(200);
                helpers_1.expect(res.body).to.have.keys('notificacao');
                helpers_1.expect(res.body.notificacao).to.be.an.instanceof(Array);
                helpers_1.expect(res.body.notificacao).to.have.length.above(0);
                helpers_1.expect(res.body.notificacao[0]).to.have.keys(['tipo', 'icone', 'descricao', 'ultima', 'quant']);
                done(error);
            });
        });
    });
    describe(`GET ${RouterDefault_1.pathApi}/usuario/perfil/menu`, () => {
        it('Verifica se menu esta na estruta especificada.', done => {
            helpers_1.request(helpers_1.app)
                .get(`${RouterDefault_1.pathApi}/usuario/perfil/menu`)
                .end((error, res) => {
                helpers_1.expect(res.status).to.equal(200);
                helpers_1.expect(res.body).to.be.keys(['dashboards', 'grupo_menus']);
                helpers_1.expect(res.body.dashboards).to.be.an.instanceof(Array);
                helpers_1.expect(res.body.dashboards).to.have.lengthOf.above(0, `Lista de dashboard esta vazia: [${res.body.dashboards.length}]`);
                helpers_1.expect(res.body.dashboards[0]).to.have.contains.keys(['_id', 'descricao', 'name']);
                helpers_1.expect(res.body.grupo_menus).to.be.an.instanceof(Array);
                helpers_1.expect(res.body.grupo_menus).to.have.length.above(0, `Lista de "Grupo de Menus" esta vazia: [${res.body.grupo_menus.length}]`);
                helpers_1.expect(res.body.grupo_menus[0]).to.have.keys('menus');
                helpers_1.expect(res.body.grupo_menus[0].menus).to.be.an.instanceof(Array);
                helpers_1.expect(res.body.grupo_menus[0].menus).to.have.length.above(0, `Lista de "Menus" esta vazia: [${res.body.grupo_menus[0].menus.length}]`);
                helpers_1.expect(res.body.grupo_menus[0].menus[0]).to.have.keys(['_id', 'tipo', 'descricao', 'icone', 'name']);
                done(error);
            });
        });
    });
});
//# sourceMappingURL=usuario.test.js.map