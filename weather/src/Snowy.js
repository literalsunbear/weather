import React from 'react';
import video from './images/day_snow_compressed.mp4';

class Snowy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const screenEffectName = this.props.snowy ? "screen-effect display-block" : "screen-effect display-none";

        return (
            <div
            className={screenEffectName}>
                <video
                className="screen-effect-video"
                id="snowy-screen-effect"
                src={video}
                type="video/mp4"
                autoPlay
                loop
                muted>
                </video>
            </div>
        )
    }
}

export default Snowy;