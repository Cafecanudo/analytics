import { app, expect, request } from './config/helpers';
import { pathApi } from '../../server/modules/RouterDefault';

describe('Serviços de Usuário', () => {

    describe(`GET ${pathApi}/usuario/perfil`, () => {
        it('Deve retornar perfil de usuario com estrutura espeficica', done => {
            request(app)
                .get(`${pathApi}/usuario/perfil`)
                .end((error, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body).to.be.keys(['login', 'foto', 'dadosUsuario']);
                    expect(res.body.dadosUsuario).to.be.keys(['nome', 'email']);
                    done(error);
                });
        });
    });

    describe(`GET ${pathApi}/usuario/perfil/nome`, () => {
        it('Deve retornar perfil de usuario com estrutura espeficica e verificar se nome de usuario esta corrento na estructura', done => {
            request(app)
                .get(`${pathApi}/usuario/perfil/nome`)
                .end((error, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body).to.be.keys(['nome', 'email']);
                    expect(res.body.nome).to.not.equal('');
                    expect(res.body.email).to.not.equal('');
                    done(error);
                });
        });
    });

    describe(`GET ${pathApi}/usuario/perfil/notificacao-resumo`, () => {
        it('Verificar se serviço esta retornando as notificações na estrutura esperada.', done => {
            request(app)
                .get(`${pathApi}/usuario/perfil/notificacao-resumo`)
                .end((error, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body).to.have.keys('notificacao');
                    expect(res.body.notificacao).to.be.an.instanceof(Array);
                    expect(res.body.notificacao).to.have.length.above(0);
                    expect(res.body.notificacao[0]).to.have.keys(['tipo', 'icone', 'descricao', 'ultima', 'quant']);
                    done(error);
                });
        });
    });

    describe(`GET ${pathApi}/usuario/perfil/menu`, () => {
        it('Verifica se menu esta na estruta especificada.', done => {
            request(app)
                .get(`${pathApi}/usuario/perfil/menu`)
                .end((error, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body).to.be.keys(['dashboards', 'grupo_menus']);

                    //verificando dashboards
                    expect(res.body.dashboards).to.be.an.instanceof(Array);
                    expect(res.body.dashboards).to.have.lengthOf.above(0, `Lista de dashboard esta vazia: [${res.body.dashboards.length}]`);
                    expect(res.body.dashboards[0]).to.have.contains.keys(['_id', 'descricao', 'name']);

                    //Verificando grupo menus
                    expect(res.body.grupo_menus).to.be.an.instanceof(Array);
                    expect(res.body.grupo_menus).to.have.length.above(0, `Lista de "Grupo de Menus" esta vazia: [${res.body.grupo_menus.length}]`);
                    expect(res.body.grupo_menus[0]).to.have.keys('menus');

                    //menus
                    expect(res.body.grupo_menus[0].menus).to.be.an.instanceof(Array);
                    expect(res.body.grupo_menus[0].menus).to.have.length.above(0, `Lista de "Menus" esta vazia: [${res.body.grupo_menus[0].menus.length}]`);
                    expect(res.body.grupo_menus[0].menus[0]).to.have.keys(['_id', 'tipo', 'descricao', 'icone', 'name']);

                    //end
                    done(error);
                });
        });
    });
});
