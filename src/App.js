import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  
import './App.css';

class LanguageListComponent extends Component {
    render() {
        return (
            <div>
            <h1> All Languages</h1>
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
                            <td><button onClick={() => { this.props.statusUpdate(item.id, item.status) }}>{item.status}</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        )
    }
}

class VoteComponent extends Component {
    render() {
        return (
            <div>
                <h1> VOting List</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Count</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.languages.map((item, index) => (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.count}</td>
                                <td><button onClick={() => { this.props.buttonClicked(item.id,item.count)}}>Click to vote</button></td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            languages: [
                {
                    id: 1,
                    name: "Ruby",
                    description: "",
                    status: "active",
                    count: 0,
                    created_at: null,
                    updated_at: null
                },
                {
                    id: 2,
                    name: "Pearl",
                    description: "",
                    status: "Inactive",
                    count: 0,
                    created_at: null,
                    updated_at: null
                }
            ]
        }
    }
    statusUpdate(id, status) {
        const languages = this.state.languages
        let obj = languages.find(o => o.name === 'string 1');
        languages.map(item => {
            if (item.id === id) {
                status == "Inactive" ? item.status = "active" : item.status = "Inactive"
            }
        })
        this.setState({ languages: languages });
    }

    buttonClicked(id, count) {
        const languages = this.state.languages;
        languages.map(item => {
            if (item.id === id) {
                item.count = item.count + 1;
            }
        })
        this.setState({ languages: languages });
    }
    render() {
        return (
            <div className="App">
                <Router>
                    
                    <ul>
                        <li>
                            <Link to={'/'} className="nav-link">Languages</Link>
                        </li>
                        <li>
                            <Link to={'/Vote'} className="nav-link">Vote</Link>    
                        </li>
                    </ul>
                    <Switch>
                        
                        <Route path="/" exact strict render={
                            () => {
                                return (
                                    <div className="app1">
                                        <LanguageListComponent languages={this.state.languages} statusUpdate={this.statusUpdate.bind(this)} />
                                    </div>
                                );
                            }
                        } />

                        <Route path="/Vote" exact strict render={
                            () => {
                                return (
                                    <div className="app1">
                                        <VoteComponent languages={this.state.languages.filter(x => x.status === "active")} buttonClicked={this.buttonClicked.bind(this)} />
                                    </div>
                                );
                            }
                        } />
                    </Switch>
                </Router>
            </div>
            )
    }
}

export default App;