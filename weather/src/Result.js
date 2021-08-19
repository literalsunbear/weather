import React from 'react';

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div
            className="result-container">
                <p>{this.props.location}</p>
                <p>{this.props.temp}</p> 
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default Result;