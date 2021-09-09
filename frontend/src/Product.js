import React from "react";
import config from "./config";

export default class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product:{},
            comments: [],
            name: "",
            text: "",
            quantity: "",
            phone: "",
            email: "",
            address: "",
        };
    }

    onChange(event) {
        this.setState({[event.target.id]: event.target.value});
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        const { id } = this.props.match.params;
        const options = {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: "Basic " + btoa("user:password123")
            }
        };
        fetch(config.host + `/product/${id}`, options)
            .then((response) => response.json()
                .then((product) => {
                    fetch(config.host + `/comments`, options)
                        .then((response) => response.json()
                            .then((allComments) => {
                                let comments = [];
                                allComments.forEach((c) => {
                                    if (c.product.id === id) {
                                        comments.push(c);
                                    }
                                })

                                this.setState({ product: product, comments: comments });
                            }))
                }));
    }

    onSubmit() {
        const { id } = this.props.match.params;
        let body = {
            writter: this.state.name,
            text: this.state.text,
            quantity: this.state.quantity,
            phone: this.state.phone,
            email: this.state.email,
            address: this.state.address,
            product: {id: id}
        }
        console.log(body);

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Basic " + btoa("user:password123"),
            },
            body: JSON.stringify(body),
        };
        fetch(config.host + "/comment", requestOptions)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    name: "",
                    text: "",
                    quantity: "",
                    phone: "",
                    email: "",
                    address: "",
                }, () => this.fetchData());
            });
    }

    render() {
        console.log(this.state.product.images);
        return (
            <div>
                <h1>{this.state.product.title}</h1>
                <h3>Price: {this.state.product.price}</h3>
                <h3>Phone: {this.state.product.phone}</h3>
                <p>{this.state.product.description}</p>
                <p>{
                    this.state.product.images && JSON.parse(this.state.product.images).map((img, idx) => {
                        return <img key={idx} alt={this.state.product.name} src={img.base64} width="50%" style={{margin: "10px"}} />;
                    })
                }</p>
                <h2>Comments:</h2>
                {
                    this.state.comments.map((c, i) => {
                        return (<div key={i}>
                            <div>
                                <b>{c.writter}</b> wrote:
                           </div>
                            {c.text}
                            <div>
                                <b>Quantity:</b> {c.quantity}
                            </div>
                            <div>
                                <b>Phone:</b> {c.phone}
                            </div>
                            <div>
                                <b>Email:</b> {c.email}
                            </div>
                            <div>
                                <b>Address:</b> {c.address}
                            </div>
                            <br/>
                            <br/>
                        </div>);
                    })
                }
                <div>
                    <h3>Post your comment</h3>
                    <div>
                        <table><tbody>
                            <tr>
                                <td>
                                Name:
                                </td>
                                <td className="inputColumn">
                                <input id={"name"} value={this.state.name} type={"text"} onChange={this.onChange.bind(this)} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                Comment:
                                </td>
                                <td className="inputColumn">
                                <input id={"text"} value={this.state.text} type={"text"} onChange={this.onChange.bind(this)} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                Quantity:
                                </td>
                                <td className="inputColumn">
                                <input id={"quantity"} value={this.state.quantity} type={"number"} onChange={this.onChange.bind(this)} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                Phone:
                                </td>
                                <td className="inputColumn">
                                <input id={"phone"} value={this.state.phone} type={"text"} onChange={this.onChange.bind(this)} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                Email:
                                </td>
                                <td className="inputColumn">
                                <input id={"email"} value={this.state.email} type={"text"} onChange={this.onChange.bind(this)} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                Address:
                                </td>
                                <td className="inputColumn">
                                <input id={"address"} value={this.state.address} type={"text"} onChange={this.onChange.bind(this)} />
                                </td>
                            </tr>
                        </tbody></table>
                        <button onClick={this.onSubmit.bind(this)}>Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}