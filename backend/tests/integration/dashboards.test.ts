import { app, expect, request } from './config/helpers';
import { pathApi } from '../../server/modules/RouterDefault';

describe('Serviços do dashboards', () => {

    let idFirstDashboard = null;

    describe(`GET ${pathApi}/dashboards/perfil`, () => {
        let dashboard = null;

        it('Obtendo dados de dashboard do usuario e verificando e existe lista de dashboards.', done => {
            request(app)
                .get(`${pathApi}/dashboards`)
                .end((error, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body).to.be.an.instanceof(Array);
                    dashboard = res.body;
                    done(error);
                });
        });

        it('Verificando se e uma array e se contem as keys necessarias', done => {
            expect(dashboard).to.be.an.instanceof(Array);
            expect(dashboard).to.have.length.above(0);
            expect(dashboard[0]).to.have.keys(['_id', 'principal', 'name', 'descricao', 'hint', 'icone']);
            idFirstDashboard = dashboard[0]._id;
            done();
        });

    });

    describe(`GET ${pathApi}/dashboards/id/:id`, () => {

        let graficos = null;

        it('Verificar se estrutura contem as keys necessarias.', done => {
            request(app)
                .get(`${pathApi}/dashboards/id/${idFirstDashboard}`)
                .end((error, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body).to.have.keys(['_id', 'principal', 'name', 'descricao', 'hint', 'icone', 'graficos']);
                    graficos = res.body.graficos;
                    done(error);
                });
        });

        it('Verificar se lista de graficos e maior que um e se possui as keys', done => {
            expect(graficos).to.be.an.instanceof(Array);
            expect(graficos).to.have.length.above(0);
            expect(graficos[0]).to.have.keys(['_id', 'name', 'descricao', 'tipo']);
            expect(graficos[0].tipo).to.be.oneOf(['BAR', 'BAR-COLOR']);
            done();
        });
    });
});
