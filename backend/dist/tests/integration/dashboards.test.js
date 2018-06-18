"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./config/helpers");
const RouterDefault_1 = require("../../server/modules/RouterDefault");
describe('Serviços do dashboards', () => {
    let idFirstDashboard = null;
    describe(`GET ${RouterDefault_1.pathApi}/dashboards/perfil`, () => {
        let dashboard = null;
        it('Obtendo dados de dashboard do usuario e verificando e existe lista de dashboards.', done => {
            helpers_1.request(helpers_1.app)
                .get(`${RouterDefault_1.pathApi}/dashboards`)
                .end((error, res) => {
                helpers_1.expect(res.status).to.equal(200);
                helpers_1.expect(res.body).to.be.an.instanceof(Array);
                dashboard = res.body;
                done(error);
            });
        });
        it('Verificando se e uma array e se contem as keys necessarias', done => {
            helpers_1.expect(dashboard).to.be.an.instanceof(Array);
            helpers_1.expect(dashboard).to.have.length.above(0);
            helpers_1.expect(dashboard[0]).to.have.keys(['_id', 'principal', 'name', 'descricao', 'hint', 'icone']);
            idFirstDashboard = dashboard[0]._id;
            done();
        });
    });
    describe(`GET ${RouterDefault_1.pathApi}/dashboards/id/:id`, () => {
        let graficos = null;
        it('Verificar se estrutura contem as keys necessarias.', done => {
            helpers_1.request(helpers_1.app)
                .get(`${RouterDefault_1.pathApi}/dashboards/id/${idFirstDashboard}`)
                .end((error, res) => {
                helpers_1.expect(res.status).to.equal(200);
                helpers_1.expect(res.body).to.have.keys(['_id', 'principal', 'name', 'descricao', 'hint', 'icone', 'graficos']);
                graficos = res.body.graficos;
                done(error);
            });
        });
        it('Verificar se lista de graficos e maior que um e se possui as keys', done => {
            helpers_1.expect(graficos).to.be.an.instanceof(Array);
            helpers_1.expect(graficos).to.have.length.above(0);
            helpers_1.expect(graficos[0]).to.have.keys(['_id', 'name', 'descricao', 'tipo']);
            helpers_1.expect(graficos[0].tipo).to.be.oneOf(['BAR', 'BAR-COLOR']);
            done();
        });
    });
});
//# sourceMappingURL=dashboards.test.js.map