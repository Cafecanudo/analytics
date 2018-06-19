import { MongoCollection } from '../../api/@core/decorators/decorators';
import { RepositoryBase } from '../../api/@core/repositorio.base';
import { INotaModel, NotaSchema } from './models/INotaModel';
import { dataListaNotasNFSE } from './temp/notas.nfse';
import { NFSECollumns } from './params/nfse.collumns';
import { NFECollumns } from './params/nfe.collumns';
import { dataListaNotasNFE } from './temp/notas.nfe';
import { CTECollumns } from './params/cte.collumns';
import { dataListaNotasCTE } from './temp/notas.cte';

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
        return new Promise<any>((resolve, reject) => {
            resolve(NFSECollumns);
        });
    }

    listaNotasNFSE(tipo): Promise<any> {
        console.log(tipo);
        return new Promise<any>((resolve, reject) => {
            resolve(dataListaNotasNFSE);
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
            resolve(NFECollumns);
        });
    }

    listaNotasNFE(tipo): Promise<any> {
        console.log(tipo);
        return new Promise<any>((resolve, reject) => {
            resolve(dataListaNotasNFE);
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
            resolve(CTECollumns);
        });
    }

    listaNotasCTE(tipo): Promise<any> {
        console.log(tipo);
        return new Promise<any>((resolve, reject) => {
            resolve(dataListaNotasCTE);
        });
    }

    appendNota(notas: INotaModel[] = []): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            notas.forEach((notaModel: INotaModel) => {
                this.saveOrUpdate({ tipo: notaModel.tipo }, notaModel);
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
