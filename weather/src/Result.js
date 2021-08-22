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
                <div id="result-card-content">
                    <div id="card-left">
                        <img
                        src={this.props.data.imgSrc}
                        alt="weather icon"></img>
                        
                        {/* <p id="current-description">{this.props.data.description}</p> */}

                        <div id="temp-range">
                            <div>
                                <p className="underline">hi</p>
                                <p>{this.props.data.max}&#176;</p>
                            </div>
                            <div>
                                <p className="underline">lo</p>
                                <p>{this.props.data.min}&#176;</p>
                            </div>
                        </div>
                    </div>

                    <div id="card-right">
                        <p id="current-temp">{this.props.data.temp}&#176;</p>
                    </div>

                </div>
            </div>

        )
    }
}

export default Result;