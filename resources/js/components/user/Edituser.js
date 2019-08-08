import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Edituser extends Component {

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
                                        <li className="breadcrumb-item active">Edit User</li>
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
                                        <h3 className="card-title">Edit User</h3>
                                    </div>                
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                );
    }
}

export default Edituser;