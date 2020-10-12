import React, { Component } from 'react';
class CreateLanguageComponent extends Component {
    render() {
        return (
            <div className="create-lang">
                <h2>Add Language</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="listItem" class="form-control" onChange={this.handleChange} placeholder="Enter the language name" />
                    <input type="text" ref="listItem" class="form-control" onChange={this.handleChange} placeholder="Enter the description" />
                    <input type="submit" class="add-new" value="Submit" />
                    <input type="submit" class="add-new" value="Cancel" />
                </form>
            </div>
        )
    }
}

export default CreateLanguageComponent;