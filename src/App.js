import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect  } from 'react-router-dom';  
import './App.css';
import CreateLanguageComponent from './components/CreateLanguageComponent';
import LanguageListComponent from './components/LanguageListComponent';
import VoteComponent from './components/VoteComponent';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: "",
            languages: [
                {
                    id: 1,
                    name: "Ruby",
                    description: "",
                    status: "active",
                    count: 10,
                    created_at: null,
                    updated_at: null
                },
                {
                    id: 2,
                    name: "Pearl",
                    description: "",
                    status: "Inactive",
                    count: 10,
                    created_at: null,
                    updated_at: null
                }
            ]
        }
    }
    statusUpdate(id, status) {
        const languages = this.state.languages
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

    buttonWinner() {
        const languages = this.state.languages;
        function getMax(languages, prop) {
            var max;
            for (var i = 0; i < languages.length ; i++) {
                if (!max || parseInt(languages[i][prop]) > parseInt(max[prop]))
                    max = languages[i];
            }
            return max;
        }
        var winner = getMax(languages, "count");
        this.setState({ result: winner})
    }

    componentWillMount() {
        let itemsList = localStorage.getItem('languages')
        if (itemsList) {
            this.setState({
                languages: JSON.parse(localStorage.getItem('languages'))
            })
        }
    }

    componentDidUpdate() {
        localStorage.setItem('languages', JSON.stringify(this.state.languages));
    }
    render() {
        return (
            <div className="App">
                <Router>
                    
                        <header>
                            <div className="head">Language Voting Application</div>
                    </header>
                    <div className="container">    
                        <nav>
                            <ul>
                                <li><Link to={'/'} className="nav-link">Languages</Link></li>
                                <li><Link to={'/Vote'} className="nav-link">Vote</Link></li>
                            </ul>
                        </nav>
                        <Switch>
                            <div class="body_sec"> 
                                <Route path="/create" component={CreateLanguageComponent}></Route>
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
                                                <VoteComponent languages={this.state.languages.filter(x => x.status === "active")} buttonClicked={this.buttonClicked.bind(this)} buttonWinner={this.buttonWinner.bind(this)} result={this.state.result} />
                                            </div>
                                        );
                                    }
                                } />
                            </div>
                        </Switch>
                    </div>
                </Router>
            </div>
            )
    }
}

export default App;