import { MongoDbSchema } from '../../api/@core/decorators/decorators';
import { RepositoryBase } from '../../api/@core/repositorio.base';
import { IUsuarioModel, usuarioSchema } from './models/usuario.model';

/**
 * Repositorio
 */
class UsuarioRepositorio extends RepositoryBase<IUsuarioModel> {

    @MongoDbSchema('usuario')
    schema() {
        return usuarioSchema;
    }

    obterMenusUsuario(): Promise<any> {
        return new Promise((resolve, reject) => {

            /*ALTERAR ESSA LINHA PARA PESQUISAR NO BANCO*/
            resolve({
                dashboards: [
                    {
                        principal: true,
                        _id: 'be4c425a7d15b3a1dbb838a0779f1d3e',
                        name: 'resumo',
                        descricao: 'Resumo',
                        hint: 'Resumo com os principais gráficos',
                        icone: 'fa fa-line-chart'
                    },
                    {
                        _id: 'c16a3b1af0746dcf4c5319015fc02865',
                        name: 'contingencia',
                        descricao: 'Contingência',
                        icone: 'fa fa-area-chart'
                    },
                    {
                        _id: '7f003b62c582d1040942285839585e54',
                        name: 'notas-divergentes',
                        descricao: 'Notas Divegentes',
                        icone: 'fa fa-bar-chart'
                    },
                    {
                        descricao: 'Sem Dashboard',
                        icone: 'fa fa-exclamation-circle',
                        hint: 'Você não possuir dashboards cadastradas para seu perfil.'
                    }
                ],
                grupo_menus: [
                    {
                        menus: [
                            {
                                _id: '6e90cffbe969c4e39ec755ae04465da5',
                                tipo: 'GRAFICO',
                                name: 'contingencia',
                                descricao: 'Contingência',
                                icone: 'fa fa-bar-chart'
                            },
                            {
                                _id: '13f5a88115b5488b6c31e9aadfc56dd6',
                                tipo: 'GRAFICO',
                                name: 'notas-divergentes',
                                descricao: 'Notas Divegentes',
                                icone: 'fa fa-line-chart'
                            }
                        ]
                    },
                    {
                        titulo: 'Configurações',
                        menus: [
                            {
                                _id: '2b08b9562dd8095452efe2c26fdfa3ff',
                                tipo: 'PAGE',
                                name: 'geral',
                                descricao: 'Geral',
                                icone: 'fa fa-sliders',
                                url: 'configuracao/geral'
                            },
                            {
                                _id: '07c3c9642100fdc4d5bd635e1d8f1558',
                                tipo: 'PAGE',
                                name: 'graficos',
                                descricao: 'Gráficos',
                                icone: 'fa fa-bar-chart',
                                url: 'configuracao/graficos'
                            }
                        ]
                    }
                ]
            });
        });
    }

    obterPerfilUsuario(): Promise<IUsuarioModel> {
        return new Promise((resolve, reject) => {
            /*ALTERAR ESSA LINHA PARA PESQUISAR NO BANCO*/
            resolve({
                login: 'cafecanudo',
                foto: 'https://belicosa.com.br/novo/wp-content/uploads/2013/02/belicosa-mariaaugusta.jpg',
                dadosUsuario: {
                    nome: 'Renata Silva',
                    email: 'cafecanudo@gmail.com'
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
