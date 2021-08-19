import React from 'react';
import video from './images/rain_video_compressed.mp4';


class Rainy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const screenEffectName = this.props.rainy ? "screen-effect display-block" : "screen-effect display-none";

        return (
            <div
            className={screenEffectName}>
                <video
                id="rainy-screen-effect"
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

export default Rainy;