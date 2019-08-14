import React, { Component }
from 'react';
import { Link }
from 'react-router-dom';

class Adduser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: 'Akansh',
            email: 'akansh@gmail.com',
            phone: '1234567980',
            message: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.',
            error: null
        }

        this.handelfield = this.handelfield.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handelfield(event) {

        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {

        event.preventDefault();

        const user = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            message: this.state.message,
        }

        axios.post('api/users/store', user)
                .then(response => {
                    history.push('/')
                })
                .catch(error => {
                    this.setState({
                        errors: error.response.data.errors
                    })
                })
    }

    render() {
        return (
                <div className="content-wrapper" >
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1></h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                                        <li className="breadcrumb-item active">Add User</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="content">
                        <div className="row">
                            <div className="col-12">
                                <div className="card card-primary">
                                    <div className="card-header">
                                        <h3 className="card-title">Add User</h3>
                                    </div>
                                    <form role="form" onSubmit = {this.handleSubmit}>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Name:</label>
                                                <input type="text" onChange={this.handelfield} className="form-control" value={this.state.name} name="name" placeholder="Enter the name." />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Email address</label>
                                                <input type="email" onChange={this.handelfield} className="form-control" value={this.state.email} name="email" placeholder="Enter the email." />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Phone</label>
                                                <input type="number" onChange={this.handelfield} className="form-control" value={this.state.phone} name="phone" placeholder="Enter the phone." />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Message</label>
                                                <input type="text" onChange={this.handelfield} className="form-control" value={this.state.message} name="message" placeholder="Enter the message." />
                                            </div>
                                        </div>                
                                        <div className="card-footer">
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </div>
                                    </form>
                                </div>                              
                            </div>
                        </div>
                    </section>
                </div>
                );
    }
}

export default Adduser;