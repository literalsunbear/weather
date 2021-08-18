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
            // <iframe
            // class={screenEffectName}>
            //     <video
            //     id="sunny-screen-effect"
            //     src={'https://player.vimeo.com/video/588706001?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;h=b122de8642'}
            //     autoPlay
            //     loop>
            //     this is the Sunny div
            //     </video>
            // </iframe>
            <div></div>
        )
    }
}

export default Sunny;
