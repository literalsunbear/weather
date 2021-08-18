import React from 'react';
import video from './images/sun_video_compressed.mp4';

class Sunny extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const screenEffectName = this.props.sunny ? "screen-effect display-block" : "screen-effect display-none";

        return (
            <div className={screenEffectName}>
                <video
                id="sunny-screen-effect"
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

export default Sunny;
