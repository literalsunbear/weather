import React from 'react';

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div
            className="result-card">
                <p>{this.props.data.location}</p>
                <p>{this.props.data.description}</p>
                <p>{this.props.data.temp}</p>
                <p>{this.props.data.max}</p> 
                <p>{this.props.data.min}</p> 
                <p>{this.props.data.humidity}</p> 
            </div>
        )
    }
}

export default Result;