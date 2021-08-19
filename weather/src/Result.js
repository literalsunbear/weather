import React from 'react';

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div
            className="result-container">{this.props.test}</div>
        )
    }
}

export default Result;