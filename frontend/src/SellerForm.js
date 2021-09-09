import React from 'react';
import config from "./config";
import FileBase64 from 'react-file-base64';

export default class SellerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            phone: "",
            price: "",
            location: "",
        };
    }

    onChange(event) {
        this.setState({[event.target.id]: event.target.value});
    }

    getFiles(files) {
        this.setState({ images: JSON.stringify(files) }, () => console.log(this.state.images));
    }

    onSubmit() {
        let body = {
            title: this.state.title,
            description: this.state.description,
            phone: this.state.phone,
            price: parseInt(this.state.price),
            location: this.state.location,
            images: this.state.images,
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
        // if (false)
        fetch(config.host + "/product", requestOptions)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    title: "",
                    description: "",
                    phone: "",
                    price: "",
                    location: "",
                });
                alert("Created successfully!");
            });
    }

    render() {
        return (<div>
            <h1> Post a new product </h1>
                <table><tbody>
                <tr>
                    <td>
                    Title:
                    </td>
                    <td className="inputColumn">
                    <input type="text" id="title" value={this.state.title} onChange={this.onChange.bind(this)} />
                    </td>
                </tr>
                <tr>
                    <td>
                    Description:
                    </td>
                    <td className="inputColumn">
                    <input type="text" id="description" value={this.state.description} onChange={this.onChange.bind(this)} />
                    </td>
                </tr>
                <tr>
                    <td>
                    Phone:
                    </td>
                    <td className="inputColumn">
                    <input type="text" id="phone" value={this.state.phone} onChange={this.onChange.bind(this)} />
                    </td>
                </tr>
                <tr>
                    <td>
                    Price:
                    </td>
                    <td className="inputColumn">
                    <input type="number" id="price" value={this.state.price} onChange={this.onChange.bind(this)} />
                    </td>
                </tr>
                <tr>
                    <td>
                    Address:
                    </td>
                    <td className="inputColumn">
                    <input type="text" id="location" value={this.state.location} onChange={this.onChange.bind(this)} />
                    </td>
                </tr>
                <tr>
                    <td>
                        Images:
                    </td>
                    <td className="inputColumn">
                        <FileBase64 multiple={ true } onDone={ this.getFiles.bind(this) } />
                    </td>
                </tr>
            </tbody></table>
            <input type="submit" value="Submit" onClick={this.onSubmit.bind(this)}/><br/>
        </div>);
    }
}