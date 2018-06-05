import { app, expect, request } from './config/helpers';
import { pathApi } from '../../server/modules/RouterDefault';

describe('Serviços do sistema', () => {

    describe('GET /', () => {
        it('Verifica se servidor ONLINE', done => {
            request(app).get('/').end((error, res) => {
                expect(res.status).to.equal(200);
                expect(res.body).to.keys(['version']);
                done(error);
            });
        });
    });

    describe(`GET ${pathApi}/configuracao`, () => {
        it('Verifica estrutura de configurações', done => {
            request(app)
                .get(`${pathApi}/configuracao`)
                .end((error, res) => {
                    expect(res.status).to.equal(200);
                    done(error);
                });
        });
    });

});
