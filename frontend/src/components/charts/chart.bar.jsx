import React, { Component } from 'react';
import AmCharts from '@amcharts/amcharts3-react';


export default class CharBar extends Component {

    constructor(props) {
        super(props);
        this.obterDataProvider = this.obterDataProvider.bind();
    }

    obterDataProvider() {
        return [{
            'country': 'Liberado',
            'visits': 2025
        }, {
            'country': 'Pendente',
            'visits': 1882
        }, {
            'country': 'Cancelado',
            'visits': 1809
        }, {
            'country': 'Integradas',
            'visits': 2767
        }, {
            'country': 'Sem Orde Comp.',
            'visits': 1423
        }];
    }

    static actionClick(index) {
        console.log(33333333333333333);
    }

    listener(ev) {
        $(ev.chart.chartDiv).on('click', () => CharBar.actionClick(ev.chart.lastCursorPosition));
    }

    componentChart() {
        return React.createElement(AmCharts.React, {
            style: {
                width: '100%',
                height: '500px'
            },
            options: this.config()
        });
    }

    config() {
        return {
            'type': 'serial',
            'theme': 'light',
            'dataProvider': this.obterDataProvider(),
            'graphs': [{
                'fillAlphas': 0.9,
                'lineAlpha': 0.2,
                'type': 'column',
                'valueField': 'visits'
            }],
            'categoryField': 'country',
            'chartCursor': {
                'fullWidth': true,
                'cursorAlpha': 0.1
            },
            'listeners': [
                {
                    'event': 'changed',
                    'method': function (ev) {
                        ev.chart.lastCursorPosition = ev.index;
                    }
                },
                {
                    'event': 'init',
                    'method': this.listener
                }]
        };
    }

    render() {
        return (
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            {/*<AmCharts.React*/}
                            {/*className="my-class"*/}
                            {/*style={{*/}
                            {/*width: "100%",*/}
                            {/*height: "500px"*/}
                            {/*}}*/}
                            {/*options={this.config()} />*/}

                            {this.componentChart()}
                            {/*<h5 className="card-title">Pagina Demo</h5>
                    <div id="chartdivStacked"></div>
                    <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
                        corporis debitis
                        ea facilis fugit, illum magni molestias, non perspiciatis possimus
                        totam.
                    </p>
                    <a href="#" className="card-link">Link</a>*/}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
