import React from 'react';

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

    // TESTING DAYTIME PROP
    let daytime = '';
    if(this.props.daytime) {
        daytime = "true";
    } else {
        daytime = "false";
    }
    // END TESTING DAYTIME PROP
    
        return (
            <div
            className="result-card">
                <p>{this.props.data.location}</p>
                <p>{this.props.data.description}</p>
                <p>{this.props.data.temp}</p>
                <p>{this.props.data.max}</p> 
                <p>{this.props.data.min}</p> 
                <p>{this.props.data.humidity}</p> 
                <p>{daytime}</p> 
            </div>
        )
    }
}

export default Result;