import React from 'react';

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const resultClass = this.props.showResult ? "result-card-show" : "result-card-hide";

        return (
            <div
            className={resultClass}
            id="result-card">
                <p>{this.props.data.location}</p>
                <p>{this.props.data.description}</p>
                <p>{this.props.data.temp}</p>
                <img
                src={this.props.data.imgSrc}></img>
            </div>
        )
    }
}

export default Result;