import React, { Component } from 'react';

import { Loading } from './loading';
import { CSVLink } from 'react-csv';

const data = [
    { firstname: 'Ahmed', lastname: 'Tomi', email: 'ah@smthing.co.com' },
    { firstname: 'Raed', lastname: 'Labes', email: 'rl@smthing.co.com' },
    { firstname: 'Yezzi', lastname: 'Min l3b', email: 'ymin@cocococo.com' }
];

export default class Tabela extends Component {

    constructor(props) {
        super(props);
        this.state = {
            provider: props.provider || [],
            pagination: props.pagination || 10,
            titulo: props.titulo
        };
    }

    componentWillReceiveProps(props) {
        this.setState({
            provider: props.provider
        });
    }

    getHeadersCSV() {
        return (this.props.collumns || []).map(it => {
            return {
                label: it.display, key: it.name
            };
        });
    }

    collumns() {
        return (this.props.collumns || []).map((it, i) => {
            return (<th key={i} style={{ width: it.width || '' }}>{it.display}</th>);
        });
    }

    rows(data) {
        return (this.props.collumns || []).map((it, i) => {
            return (
                <td key={i}>{data[it.name]}</td>
            );
        });
    }

    provider() {
        if ((this.state.provider || []).length === 0) {
            return (
                <tr>
                    <td colSpan={(this.props.collumns || []).length} style={{ textAlign: 'center' }}>
                        <span style={{ fontSize: '16px', color: '#8a8a8a' }}>Não possui dados.</span>
                    </td>
                </tr>
            );
        }
        return (this.state.provider || []).map((it, i) => {
            return (
                <tr key={i}>
                    {this.rows(it)}
                </tr>
            );
        });
    }

    pagination() {
        return (
            <pagination-table>
                <div className="export-button">
                    <CSVLink data={this.state.provider} headers={this.getHeadersCSV()}>Exportar CVS</CSVLink>
                </div>
                <ul className="pagination pagination-sm m-0 float-right">
                    <li className="page-item"><a className="page-link" href="#">«</a></li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">»</a></li>
                </ul>
            </pagination-table>
        );
    }

    loading() {
        return (
            <tr>
                <td colSpan={(this.props.collumns || []).length}>
                    <Loading show={true} message={this.props.tituloLoading || ''}/>
                </td>
            </tr>
        );
    }

    search(e) {
        // console.log(e.target.value);
    }

    render() {
        if (!(this.props.show || true)) {
            return null;
        }
        return (
            <div className="card card-primary card-outline">
                <div className="card-header">
                    {this.props.titulo ? <h3 className="card-title">{this.props.titulo}</h3> : ''}
                    <div className="card-tools">
                        <div className="input-group input-group-sm" style={{ width: '150px' }}>
                            <input type="text" name="table_search" className="form-control float-right" placeholder="Pesquisar" onChange={this.search}/>
                            <div className="input-group-append">
                                <button type="submit" className="btn btn-default"><i className="fa fa-search"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body p-0">

                    <table className="table table-bordered" style={{ borderLeft: 0, borderRight: 0 }}>
                        <tbody>
                        <tr>
                            {this.collumns()}
                        </tr>
                        {(this.state.provider || []).length > 0 ? this.provider() : this.loading()}
                        </tbody>
                    </table>
                </div>
                <div className="card-footer clearfix">
                    {(this.state.provider || []).length > 0 ? this.pagination() : (
                        <ul className="pagination pagination-sm m-0 float-right">
                            <li className="page-item">
                                <i className="fa fa-spinner fa-pulse fa-3x fa-fw" style={{ fontSize: '14px', color: '#007bff' }}></i>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        );
    }
}
