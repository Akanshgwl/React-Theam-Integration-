import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
        render() {
        return(
                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    <Link to="/" className="brand-link">
                        <img src="dist/img/AdminLTELogo.png" className="brand-image img-circle elevation-3" style={{float: 'left', paddingRight: '5px'}} />
                        <span className="brand-text font-weight-light">AdminLTE 3</span>
                    </Link>
                    <div className="sidebar">
                        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div className="image">
                                <img src="https://joeschmoe.io/api/v1/react" className="img-circle elevation-2" alt="User Image" />
                            </div>
                            <div className="info">
                                <a href="#" className="d-block">Alexander Pierce</a>
                            </div>
                        </div>
                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/user">
                                    <i className="nav-icon fas fa-user"></i><p>User</p>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>                    
                </aside>
                );
        }
        }

        export default Nav; 