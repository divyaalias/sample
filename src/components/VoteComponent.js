import React, { Component } from 'react';
import Popup from 'reactjs-popup';

class VoteComponent extends Component {
    render() {
        let { result } = this.props;
        return (
            <div>
                <h3>Voting List</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Language</th>
                            <th>Count</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.languages.map((item, index) => (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.count}</td>
                                <td><button onClick={() => { this.props.buttonClicked(item.id, item.count) }}>Click to vote</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="winner">
                    <button onClick={() => { this.props.buttonWinner() }}>Winner</button>
                    <div className="content">
                        {result.name + "-" + result.count}
                    </div>
                </div>
            </div>
           
        )
    }
}

export default VoteComponent;