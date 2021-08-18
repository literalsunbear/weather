import React from 'react';

class Cloudy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div
            className="screen-effect display-none">this is the Cloudy div</div>
        )
    }
}

export default Cloudy;