import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect } from 'react-router-dom';

class LanguageListComponent extends Component {
    render() {
        return (
            <div>
                <h3>Language List</h3>
                <Router>
                    <div className="add-language-link">
                        <Link to={'/create'} className="nav-link">Add Language</Link>
                    </div>
                </Router>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.languages.map((item, index) => (
                            <tr>
                                <td>{item.name}</td>
                                <td><button className={item.status} onClick={() => { this.props.statusUpdate(item.id, item.status) }}>{item.status}</button></td>
                                <td>actions</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default LanguageListComponent;