import { app, expect, request } from './config/helpers';

describe('Teste Unitario do Controller', () => {

    describe('GET / Verifica servidor UP', () => {
        it('Deve retornar 200, confirmando servidor no AR', done => {
            request(app).get('/').end((error, res) => {
                expect(res.status).to.equal(200);
                done(error);
            });
        });
    });

    describe('GET /api/profile', () => {
        it('Deve retornar configuracoes do perfil de usuario', done => {
            console.log(done);
            request(app)
                .get('/api/profile')
                .end((error, res) => {
                    expect(res.status).to.equal(200);
                    done(error);
                });
        });
    });
});
