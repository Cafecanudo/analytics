import React, { Component } from 'react';
import AmCharts from '@amcharts/amcharts3-react/index';

/**
 * Parametros:
 *  dataProvider    = dados do grafico
 *  rotation        = Rotacao do titulo de cada barra (Padrao 45)
 *  export          = se aceita exportacao (Padrao false)
 *  width           = largura (Padrao 100%)
 *  height          = altura (Padrao 400px)
 *  click           = Evento que vai disparar quando clicar na barra, quando executar vai passar os parametros
 *                    EX: click(
 *                            index, // Indice da barra, pode ser usado para achar o valor no dataProvider informado
 *                            valor, // Valor da barra
 *                            name,  // Nome da Barra
 *                            bar    // Objeto contendo detalhes da barra.
 *                        );
 *  chart3D         = se o grafico e em 3D (Padrao false)
 *  color           = informa que as colunas vao ser coloridas
 */
export class ___CharBar___ extends Component {

    config() {
        const config = {
            'type': 'serial',
            'theme': 'light',
            'marginRight': ((this.props.export || false) ? 70 : 0),
            'startDuration': 1,
            'dataProvider': this.props.dataProvider || [],
            'graphs': [{
                'balloonText': '<b>[[category]]: [[value]]</b>',
                'fillAlphas': 0.9,
                'lineAlpha': 0.2,
                'type': 'column',
                'valueField': 'value_data'
            }],
            'depth3D': (this.props.chart3D || false) ? 20 : 0,
            'angle': (this.props.chart3D || false) ? 30 : 0,
            'chartCursor': {
                'categoryBalloonEnabled': false,
                'cursorAlpha': 0,
                'zoomable': false
            },
            'categoryField': 'display_name',
            'categoryAxis': {
                'gridPosition': 'start',
                'labelRotation': this.props.rotation || 45
            },
            'export': {
                'enabled': this.props.export || false
            },
            'listeners': this.obterListeners()
        };
        if ((this.props.color || false)) {
            config.graphs[0].fillColorsField = 'color_data';
        }
        return config;
    };

    obterListeners() {
        return [
            {
                'event': 'clickGraphItem',
                'method': it => {
                    if (this.props.click) {
                        this.props.click(it.item.index, it.item.values.value, it.item.category, it.item.serialDataItem);
                    }
                }
            },
            {
                'event': 'clickGraph',
                'method': (e) => {
                    if (this.props.clickGraph) {
                        this.props.clickGraph(e.target.data);
                    }
                }
            }
        ];
    }

    render() {
        return React.createElement(AmCharts.React, {
            style: {
                width: this.props.width || '100%',
                height: this.props.height || 300
            },
            options: this.config()
        });
    }
}
