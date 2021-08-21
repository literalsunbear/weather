import React from 'react';
import dayRainy from './images/day_rain_compressed.mp4';
import nightRainy from './images/night_rain_compressed.mp4';
import daySnowy from './images/day_snow_compressed.mp4';
import nightSnowy from './images/night_snow_compressed.mp4';
import dayClear from './images/day_clear_compressed.mp4';
import nightClear from './images/night_clear_compressed.mp4';
import dayCloudy from './images/day_clouds_compressed.mp4';
import nightCloudy from './images/night_clouds_compressed.mp4';


class Effect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const screenEffectShow = this.props.showEffect ? "screen-effect display-block" : "screen-effect display-none";
        const code = parseInt(this.props.weatherCode);
        var url = '';

        if(this.props.daytime) {
            if(code >= 300 && code <= 531) {
                url = dayRainy;
            } else if(code >= 600 && code <= 622) {
                url = daySnowy;
            } else if(code == 800) {
                url = dayClear;
            } else if(code > 800) {
                url = dayCloudy;
            }
        } else if(!this.props.daytime) {
            if(code >= 300 && code <= 531) {
                url = nightRainy;
            } else if(code >= 600 && code <= 622) {
                url = nightSnowy;
            } else if(code == 800) {
                url = nightClear;
            } else if(code > 800) {
                url = nightCloudy;
            }
        }
        

        return (
            <video
            className={screenEffectShow}
            id="screen-effect-video"
            src={url}
            type="video/mp4"
            autoPlay
            loop
            muted>
            </video>
        )
    }
}

export default Effect;