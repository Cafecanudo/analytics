import { MongoCollection } from '../../api/@core/decorators/decorators';
import { RepositoryBase } from '../../api/@core/repositorio.base';
import { dashboardRepositorio } from '../dashboards/dashboard.repositorio';
import { IUsuarioModel, usuarioSchema } from './models/IUsuarioModel';

/**
 * Repositorio
 */
class UsuarioRepositorio extends RepositoryBase<IUsuarioModel> {

    @MongoCollection('usuario')
    schema() {
        return usuarioSchema;
    }

    login(login, senha): Promise<any> {
        console.log(login, senha);
        return new Promise((resolve, reject) => {
            if (login === 'admin@softbox.com.br' && senha === 'johny') {
                this.obterPerfilUsuario().then(value => {
                    resolve(value);
                });
            } else {
                resolve({
                    statusCode: 403,
                    message: 'Usuário ou senha inválida!'
                });
            }
        });
    }

    obterMenusUsuario(): Promise<any> {
        return new Promise((resolve, reject) => {
            dashboardRepositorio.obterDashboardPerfilUsuario().then(dashboards => {
                /*ALTERAR ESSA LINHA PARA PESQUISAR NO BANCO*/
                resolve({
                    dashboards: dashboards,
                    grupo_menus: [
                        {
                            menus: [
                                {
                                    _id: '6e90cffbe969c4e39ec755ae04465da5',
                                    tipo: 'GRAFICO',
                                    name: 'notas-nfs-e',
                                    descricao: 'NFS-e',
                                    hint: 'Notas Fiscais de Serviços Eletrônicas',
                                    icone: 'fa fa-bar-chart'
                                },
                                {
                                    _id: '62bf79144f4112d070a6b48f6f621c21',
                                    tipo: 'GRAFICO',
                                    name: 'notas-nf-e',
                                    descricao: 'NF-e',
                                    hint: 'Notas Fiscais de Eletrônicas\'',
                                    icone: 'fa fa-bar-chart'
                                },
                                {
                                    _id: '2b08b9562dd8095452efe2c26fdfa3ff',
                                    tipo: 'GRAFICO',
                                    name: 'notas-ct-e',
                                    descricao: 'CT-e',
                                    hint: 'Notas de Conhecimento de Transporte Eletrônico',
                                    icone: 'fa fa-bar-chart'
                                }
                            ]
                        }
                    ]
                });
            }).catch(reason => {
                reject(reason);
            });
        });
    }

    obterPerfilUsuario(): Promise<any> {
        return new Promise((resolve, reject) => {
            /*ALTERAR ESSA LINHA PARA PESQUISAR NO BANCO*/
            resolve({
                login: 'magazineluiza',
                foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe8DxY9BZGJm4XRk1yzaxVymx6n3chfn2B02k2hlEGP3oTVNbpPw',
                dadosUsuario: {
                    nome: 'Magazine Luiza',
                    email: 'magazineluiza@softbox.com.br'
                }
            });
        });
    }

    /**
     * Obter quantidades de notificações para o perfil
     * @returns {Promise<any>}
     */
    obterPerfilNotificacaoResumo(): Promise<any> {
        return new Promise((resolve, reject) => {
            /*ALTERAR ESSA LINHA PARA PESQUISAR NO BANCO*/
            resolve({
                notificacao: [
                    {
                        tipo: 'MESSAGE',
                        icone: 'fa fa-envelope',
                        quant: 4,
                        descricao: 'Novas mensagens',
                        ultima: '3 min'
                    },
                    {
                        tipo: 'ACTIVIT',
                        icone: 'fa fa-database',
                        quant: 2,
                        descricao: 'Notas com duplicadas',
                        ultima: '34 min'
                    },
                    {
                        tipo: 'ALERTAS',
                        icone: 'fa fa-refresh',
                        quant: 22,
                        descricao: 'Notas com Rejeitadas',
                        ultima: '1 Hora'
                    },
                    {
                        tipo: 'ALERTAS',
                        icone: 'fa fa-exclamation-triangle',
                        quant: 423,
                        descricao: 'Notas em contingência',
                        ultima: '10 min'
                    }
                ]
            });
        });
    }
}

/**
 * Deve exporta sempre com construtor para Repositorio
 * @type {ConfiguracaoRepo}
 */
export const usuarioRepositorio = new UsuarioRepositorio();
