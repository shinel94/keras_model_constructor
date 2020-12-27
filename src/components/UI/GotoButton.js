import React, { Component } from 'react';

class GotoButton extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <button onClick={() => this.props.history.push(this.props.url)}> Go to {this.props.target} </button>
        )
    }
}

export default GotoButton