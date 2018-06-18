import { MongoCollection } from '../../api/@core/decorators/decorators';
import { RepositoryBase } from '../../api/@core/repositorio.base';
import { NotaModel, NotaSchema } from './models/NotaModel';

/**
 * Repositorio
 */
class MagazineRepositorio extends RepositoryBase<NotaModel> {

    @MongoCollection('nfse')
    schema() {
        return NotaSchema;
    }

    notasNFSE(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            resolve([
                {
                    'name_id': 'liberados',
                    'display_name': 'Liberados',
                    'value_data': 3425,
                    'color_data': '#007f1e'
                },
                {
                    'name_id': 'pendentes',
                    'display_name': 'Pendentes',
                    'value_data': 1882,
                    'color_data': '#ff0600'
                },
                {
                    'name_id': 'cancelados',
                    'display_name': 'Cancelados',
                    'value_data': 1809,
                    'color_data': '#ff3900'
                }
            ]);
        });
    }

    notasNFSEPendentes(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            resolve([
                {
                    'name_id': 'erros_integracoes',
                    'display_name': 'Erros Integrações',
                    'value_data': 1882
                },
                {
                    'name_id': 'erros_batimentos',
                    'display_name': 'Erros Batimentos',
                    'value_data': 1809
                },
                {
                    'name_id': 'falta_po',
                    'display_name': 'Falta PO',
                    'value_data': 1322
                },
                {
                    'name_id': 'repovado',
                    'display_name': 'Repovado',
                    'value_data': 1122
                },
                {
                    'name_id': 'duplicidade',
                    'display_name': 'Duplicidade',
                    'value_data': 1114
                }
            ]);
        });
    }

    colunasListaNotasNFSE(tipo): Promise<any> {
        console.log(tipo);
        return new Promise<any>((resolve, reject) => {
            resolve([
                {
                    display: 'Número', name: 'numero'
                },
                {
                    display: 'Tipo', name: 'tipo', width: 100
                },
                {
                    display: 'Descrição', name: 'descricao'
                },
                {
                    display: 'Cidade', name: 'cidade'
                },
                {
                    display: 'UF', name: 'uf', width: 40
                }
            ]);
        });
    }

    listaNotasNFSE(tipo): Promise<any> {
        console.log(tipo);
        return new Promise<any>((resolve, reject) => {
            resolve([
                {
                    numero: '843b174f9753ad386ae2112d62f21166',
                    tipo: 'NFS-e',
                    descricao: 'NOTAS Descricao 1',
                    cidade: 'Goiania',
                    uf: 'GO'
                },
                {
                    numero: '34adbf92c082f8092fd28de4ef114e65',
                    tipo: 'NFS-e',
                    descricao: 'NOTAS Descricao 2',
                    cidade: 'Goiania',
                    uf: 'GO'
                },
                {
                    numero: '5aae839318ec9c097865a2e37f94b1e1',
                    tipo: 'NFS-e',
                    descricao: 'NOTAS Descricao 3',
                    cidade: 'Goiania',
                    uf: 'GO'
                }
            ]);
        });
    }

    notasNFE(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            resolve([
                {
                    'name_id': 'liberados',
                    'display_name': 'Liberados',
                    'value_data': 1025,
                    'color_data': '#007f1e'
                },
                {
                    'name_id': 'pendentes',
                    'display_name': 'Pendentes',
                    'value_data': 1882,
                    'color_data': '#ff0600'
                },
                {
                    'name_id': 'cancelados',
                    'display_name': 'Cancelados',
                    'value_data': 1809,
                    'color_data': '#ff3900'
                }
            ]);
        });
    }

    notasNFEPendentes(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            resolve([
                {
                    'name_id': 'erros_integracoes',
                    'display_name': 'Erros Integrações',
                    'value_data': 1882
                },
                {
                    'name_id': 'erros_batimentos',
                    'display_name': 'Erros Batimentos',
                    'value_data': 1809
                },
                {
                    'name_id': 'falta_po',
                    'display_name': 'Falta PO',
                    'value_data': 1322
                },
                {
                    'name_id': 'repovado',
                    'display_name': 'Repovado',
                    'value_data': 1122
                },
                {
                    'name_id': 'duplicidade',
                    'display_name': 'Duplicidade',
                    'value_data': 1114
                }
            ]);
        });
    }

    colunasListaNotasNFE(tipo): Promise<any> {
        console.log(tipo);
        return new Promise<any>((resolve, reject) => {
            resolve([
                {
                    display: 'Número', name: 'numero'
                },
                {
                    display: 'Tipo', name: 'tipo', width: 100
                },
                {
                    display: 'Descrição', name: 'descricao'
                },
                {
                    display: 'Cidade', name: 'cidade'
                },
                {
                    display: 'UF', name: 'uf', width: 40
                }
            ]);
        });
    }

    listaNotasNFE(tipo): Promise<any> {
        console.log(tipo);
        return new Promise<any>((resolve, reject) => {
            resolve([
                {
                    numero: '843b174f9753ad386ae2112d62f21166',
                    tipo: 'NFS-e',
                    descricao: 'NOTAS Descricao 1',
                    cidade: 'Goiania',
                    uf: 'GO'
                },
                {
                    numero: '34adbf92c082f8092fd28de4ef114e65',
                    tipo: 'NFS-e',
                    descricao: 'NOTAS Descricao 2',
                    cidade: 'Goiania',
                    uf: 'GO'
                },
                {
                    numero: '5aae839318ec9c097865a2e37f94b1e1',
                    tipo: 'NFS-e',
                    descricao: 'NOTAS Descricao 3',
                    cidade: 'Goiania',
                    uf: 'GO'
                }
            ]);
        });
    }

    notasCTE(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            resolve([
                {
                    'name_id': 'pendentes',
                    'display_name': 'Liberados',
                    'value_data': 3025,
                    'color_data': '#007f1e'
                },
                {
                    'name_id': 'cancelados',
                    'display_name': 'Cancelados',
                    'value_data': 1809,
                    'color_data': '#ff3900'
                }
            ]);
        });
    }

    colunasListaNotasCTE(tipo): Promise<any> {
        console.log(tipo);
        return new Promise<any>((resolve, reject) => {
            resolve([
                {
                    display: 'Número', name: 'numero'
                },
                {
                    display: 'Tipo', name: 'tipo', width: 100
                },
                {
                    display: 'Descrição', name: 'descricao'
                },
                {
                    display: 'Cidade', name: 'cidade'
                },
                {
                    display: 'UF', name: 'uf', width: 40
                }
            ]);
        });
    }

    listaNotasCTE(tipo): Promise<any> {
        console.log(tipo);
        return new Promise<any>((resolve, reject) => {
            resolve([
                {
                    'name_id': 'liberados',
                    'display_name': 'Liberados',
                    'value_data': 3025,
                    'color_data': '#007f1e'
                },
                {
                    'name_id': 'cancelados',
                    'display_name': 'Cancelados',
                    'value_data': 1809,
                    'color_data': '#ff3900'
                }
            ]);
        });
    }

    appendNota(notas = []): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            notas.forEach((notaModel: NotaModel) => {
                this.save(notaModel);
            });
            return resolve();
        });
    }
}

/**
 * Deve exporta sempre com construtor para Repositorio
 * @type {ConfiguracaoRepo}
 */
export const magazineRepositorio = new MagazineRepositorio();
