import React from "react";
import ReactTable from "react-table-v6";
import 'react-table-v6/react-table.css'
import {Link} from "react-router-dom";
import config from "./config";

export default class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            column: [
                {
                    Header: "Id",
                    accessor: "id",
                },
                {
                    Header: "Title",
                    accessor: "title",
                },
                {
                    Header: "Description",
                    accessor: "description",
                },
                {
                    Header: "Phone",
                    accessor: "phone",
                },
                {
                    Header: "Address",
                    accessor: "location",
                },
                {
                    Header: "Price",
                    accessor: "price",
                },
                {
                    Header: "Info",
                    accessor: "link",
                },
            ],
            name: "",
            location: "",
            priceLower: null,
            priceUpper: null,
            filterData: [],
        };
    }

    onChange(event) {
        this.setState({[event.target.id]: event.target.value});
    }

    componentDidMount() {
        fetch(config.host + "/products", {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: "Basic " + btoa("user:password123")
            }
        }).then((response) => {
            console.log(response);
            response.json().then((data) => {
                this.setState({data: data}, () => this.applyFilter());
            });
        });
    }

    applyFilter() {
        let name = this.state.name;
        let location = this.state.location;
        let priceLower = this.state.priceLower || 0;
        let priceUpper = this.state.priceUpper || -1;

        console.log(name, priceLower, priceUpper);

        let filterData = [];
        this.state.data.forEach((product) => {
            console.log(product);
            if (!product.title.toLowerCase().includes(name.toLowerCase())) return;
            if (!product.location.toLowerCase().includes(location.toLowerCase())) return;
            if (product.price < priceLower) return;
            if (priceUpper >= 0 && product.price > priceUpper) return;
            filterData.push({...product, link: <Link to={"/product/"+product.id}>More info</Link>});
        });
        this.setState({filterData: filterData});
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <table><tbody>
                    <tr>
                        <td>
                        Product name:
                        </td>
                        <td className="inputColumn">
                        <input id={"name"} type={"text"} onChange={this.onChange.bind(this)} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                         Location:
                        </td>
                        <td className="inputColumn">
                        <input id={"location"} type={"text"} onChange={this.onChange.bind(this)} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        Price:
                        </td>
                        <td className="inputColumn">
                        <input id={"priceLower"} type={"number"} onChange={this.onChange.bind(this)} /> - <input id={"priceUpper"} type={"number"} onChange={this.onChange.bind(this)} />
                        </td>
                    </tr>
                </tbody></table>
                <button onClick={this.applyFilter.bind(this)}>Search</button>
                <br/>
                <br/>
                <ReactTable data={this.state.filterData} columns={this.state.column}/>
            </div>
        );
    }
}