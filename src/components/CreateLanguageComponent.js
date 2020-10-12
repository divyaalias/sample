import React, { Component } from 'react';

class CreateLanguageComponent extends Component {
    render() {
        return (
            <div className="create-lang">
                <h2>Add Language</h2>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" onChange={e => this.setState({ name: e.target.value })} class="form-control" placeholder="Enter the language name" />
                    <input type="text" onChange={e => this.setState({ description: e.target.value })} class="form-control" placeholder="Enter the description" />
                    <input type="submit" class="add-new" value="Submit" />
                    <button type="button" class="add-new">Cancel</button>
                </form>
            </div>
        )
    }
    handleSubmit(e) {
        e.preventDefault();
        const newItem = {
            id: Date.now(),
            name: this.state.name,
            description: this.state.description,
            status: "Inactive",
            count: 0
        };
        this.props.addItem(newItem)
       
    }
    
}

export default CreateLanguageComponent;