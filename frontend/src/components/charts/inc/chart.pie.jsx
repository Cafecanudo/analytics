import React, { Component } from 'react';
import AmCharts from '@amcharts/amcharts3-react/index';

/**
 * Parametros:
 *  animate         = Animar mudanca de esta (padrao true)
 *  dataProvider    = dados do grafico
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
 *  showLegend      = Especifica que deve exibir Legenda das cores (padrao false)
 *  legendPosition  = Posicao da Leganda (padrao right [letf, right]
 */
export class ___CharPie___ extends Component {

    config() {
        const config = {
            'type': 'pie',
            'theme': 'light',
            'valueField': 'value_data',
            'titleField': 'display_name',
            'startDuration': 1,
            'outlineAlpha': 0.4,
            'depth3D': (this.props.chart3D || false) ? 10 : 0,
            'angle': (this.props.chart3D || false) ? 30 : 0,
            'balloonText': '[[title]]<br><span style=\'font-size:14px\'><b>[[value]]</b> ([[percents]]%)</span>',
            'dataProvider': [],
            'export': {
                'enabled': this.props.export || false
            },
            'clickSlice': (dataItem) => {
                if (this.props.click) {
                    this.props.click(dataItem.index, dataItem.value, dataItem.title, dataItem.dataContext);
                }
            },
            'listeners': this.obterListeners()
        };
        if (this.props.showLegend) {
            config.legend = {
                'position': (this.props.legendPosition || 'right'),
                'marginRight': 100,
                'autoMargins': false
            };
        }
        return config;
    };

    obterListeners() {
        return [
            {
                'event': 'init',
                'method': it => this.animate(it)
            }
        ];
    }

    animate(it) {
        it.chart.animateData(this.props.dataProvider || [], {
            duration: (this.props.animate || true) ? 1000 : 0,
            complete: () => {
                setTimeout(() => this.animate(it), 2000);
            }
        });
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
