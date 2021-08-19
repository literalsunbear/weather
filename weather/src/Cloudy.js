import React from 'react';
import video from './images/clouds_video_compressed.mp4';

class Cloudy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const screenEffectName = this.props.cloudy ? "screen-effect display-block" : "screen-effect display-none";

        return (
            <div
            className={screenEffectName}>
                <video
                id="cloudy-screen-effect"
                className="screen-effect-video"
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

export default Cloudy;