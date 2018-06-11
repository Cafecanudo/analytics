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

    getMenusUsuario(): Promise<any> {
        return new Promise((resolve, reject) => {

            /*ALTERAR ESSA LINHA PARA PESQUISAR NO BANCO*/
            resolve({
                dashboards: [
                    {
                        preload: true,
                        _id: 'be4c425a7d15b3a1dbb838a0779f1d3e',
                        descricao: 'Resumo'
                    }
                ],
                grupo_menus: [
                    {
                        titulo: null,
                        menus: [
                            {
                                _id: '6e90cffbe969c4e39ec755ae04465da5',
                                tipo: 'GRAFICO',
                                descricao: 'Contingência',
                                icone: null,
                                url: null
                            },
                            {
                                _id: '13f5a88115b5488b6c31e9aadfc56dd6',
                                tipo: 'GRAFICO',
                                descricao: 'Notas Divegentes',
                                icone: null,
                                url: null
                            }
                        ]
                    },
                    {
                        titulo: 'Configurações',
                        menus: [
                            {
                                _id: '2b08b9562dd8095452efe2c26fdfa3ff',
                                tipo: 'PAGE',
                                descricao: 'Geral',
                                icone: 'fa fa-sliders',
                                url: 'settings/geral'
                            },
                            {
                                _id: '07c3c9642100fdc4d5bd635e1d8f1558',
                                tipo: 'PAGE',
                                descricao: 'Graficos',
                                icone: 'fa fa-bar-chart',
                                url: 'settings/geral'
                            }
                        ]
                    }
                ]
            });
        });
    }

    getPerfilUsuario(): Promise<IUsuarioModel> {
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
}

/**
 * Deve exporta sempre com construtor para Repositorio
 * @type {ConfiguracaoRepo}
 */
export const usuarioRepositorio = new UsuarioRepositorio();
