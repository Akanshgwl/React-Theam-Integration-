import React, { Component }
from 'react';
import { Link }
from 'react-router-dom';
import axios from 'axios';

class User extends Component {

constructor() {
super();
        this.state = {
        users: []
        }
}

componentDidMount() {
    axios.get('/api/users').then(response => {
        this.setState({
            users: response.data
        });
    })
}

render() {
const {users} = this.state;
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
                        <li className="breadcrumb-item active">Users List</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
    <section className="content">
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">User List</h3>
                    </div>
                    <div className="card-body">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Email</th>
                                    <th>Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, i) => (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{user.email}</td>
                                    <td style={{textTransform: 'capitalize'}}>{user.name}</td>
                                    <td>
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-success">Action</button>
                                            <button type="button" className="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                <span className="caret"></span>
                                                <span className="sr-only">Toggle Dropdown</span>
                                            </button>
                                            <div className="dropdown-menu" >
                                                <Link className="dropdown-item" to={`${user.id}`}>Edit</Link>
                                                <Link className="dropdown-item" to={`${user.id}`}>Delete</Link>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                ))}                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
                                );
                        }
                }
                export default User;