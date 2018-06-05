import { app, expect, request } from './config/helpers';
import { pathApi } from '../../server/modules/RouterDefault';

describe('Serviços de Usuário', () => {

    describe(`GET ${pathApi}/usuario/perfil`, () => {
        it('Deve retornar perfil de usuario com estrutura espeficica', done => {
            request(app)
                .get(`${pathApi}/usuario/perfil`)
                .end((error, res) => {
                    expect(res.status).to.equal(200);
                    done(error);
                });
        });
    });
});
