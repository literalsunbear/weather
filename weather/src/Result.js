import React from 'react';

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const resultClass = this.props.showResult ? "result-card result-card-show" : "result-card result-card-hide";

        return (
            <div
            className={resultClass}
            id="result-card">
                <p>{this.props.data.location}</p>
                <p>{this.props.data.description}</p>
                <p>{this.props.data.temp}</p>
                <img
                src={this.props.data.imgSrc}
                alt="weather icon"></img>
                <div className="blur-test-div"></div>
            </div>
        )
    }
}

export default Result;