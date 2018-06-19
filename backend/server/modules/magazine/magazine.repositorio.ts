import { MongoCollection } from '../../api/@core/decorators/decorators';
import { RepositoryBase } from '../../api/@core/repositorio.base';
import { INotaModel, NotaSchema } from './models/INotaModel';

/**
 * Repositorio
 */
class MagazineRepositorio extends RepositoryBase<INotaModel> {

    @MongoCollection('nfse')
    schema() {
        return NotaSchema;
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    notasNFSE(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            resolve([
                {
                    'name_id': 'liberados',
                    'display_name': 'Liberados',
                    'value_data': this.getRandomInt(1000, 5000),
                    'color_data': '#007f1e'
                },
                {
                    'name_id': 'pendentes',
                    'display_name': 'Pendentes',
                    'value_data': this.getRandomInt(1000, 5000),
                    'color_data': '#ff0600'
                },
                {
                    'name_id': 'cancelados',
                    'display_name': 'Cancelados',
                    'value_data': this.getRandomInt(1000, 5000),
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
                    'value_data': this.getRandomInt(1000, 5000)
                },
                {
                    'name_id': 'erros_batimentos',
                    'display_name': 'Erros Batimentos',
                    'value_data': this.getRandomInt(1000, 5000)
                },
                {
                    'name_id': 'falta_po',
                    'display_name': 'Falta PO',
                    'value_data': this.getRandomInt(1000, 5000)
                },
                {
                    'name_id': 'repovado',
                    'display_name': 'Repovado',
                    'value_data': this.getRandomInt(1000, 5000)
                },
                {
                    'name_id': 'duplicidade',
                    'display_name': 'Duplicidade',
                    'value_data': this.getRandomInt(1000, 5000)
                }
            ]);
        });
    }

    colunasListaNotasNFSE(tipo): Promise<any> {
        console.log(tipo);
        return new Promise<any>((resolve, reject) => {
            resolve([
                {
                    display: 'Chave', name: 'chave'
                },
                {
                    display: 'Número', name: 'numero', width: 100
                },
                {
                    display: 'Data Emissão', name: 'data_emissao'
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
                    chave: '843b174f9753ad386ae2112d62f21166',
                    numero: '54861',
                    data_emissao: '15/06/2018 15:45',
                    uf: 'GO'
                },
                {
                    chave: '0aa1ea9a5a04b78d4581dd6d17742627',
                    numero: '3456',
                    data_emissao: '15/06/2018 12:43',
                    uf: 'GO'
                },
                {
                    chave: '34adbf92c082f8092fd28de4ef114e65',
                    numero: '3453',
                    data_emissao: '15/06/2018 09:12',
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
                    'value_data': this.getRandomInt(1000, 5000),
                    'color_data': '#007f1e'
                },
                {
                    'name_id': 'pendentes',
                    'display_name': 'Pendentes',
                    'value_data': this.getRandomInt(1000, 5000),
                    'color_data': '#ff0600'
                },
                {
                    'name_id': 'cancelados',
                    'display_name': 'Cancelados',
                    'value_data': this.getRandomInt(1000, 5000),
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
                    'value_data': this.getRandomInt(1000, 5000)
                },
                {
                    'name_id': 'erros_batimentos',
                    'display_name': 'Erros Batimentos',
                    'value_data': this.getRandomInt(1000, 5000)
                },
                {
                    'name_id': 'falta_po',
                    'display_name': 'Falta PO',
                    'value_data': this.getRandomInt(1000, 5000)
                },
                {
                    'name_id': 'repovado',
                    'display_name': 'Repovado',
                    'value_data': this.getRandomInt(1000, 5000)
                },
                {
                    'name_id': 'duplicidade',
                    'display_name': 'Duplicidade',
                    'value_data': this.getRandomInt(1000, 5000)
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
                    'value_data': this.getRandomInt(1000, 5000),
                    'color_data': '#007f1e'
                },
                {
                    'name_id': 'cancelados',
                    'display_name': 'Cancelados',
                    'value_data': this.getRandomInt(1000, 5000),
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
                    'value_data': this.getRandomInt(1000, 5000),
                    'color_data': '#007f1e'
                },
                {
                    'name_id': 'cancelados',
                    'display_name': 'Cancelados',
                    'value_data': this.getRandomInt(1000, 5000),
                    'color_data': '#ff3900'
                }
            ]);
        });
    }

    appendNota(notas: INotaModel[] = []): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            notas.forEach((notaModel: INotaModel) => {
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
