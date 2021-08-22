import React from 'react';
import dayRainy from './images/day_rainy.jpg';
import nightRainy from './images/night_rainy.jpg';
import daySnowy from './images/day_snowy.jpg';
import nightSnowy from './images/night_snowy.jpg';
import dayClear from './images/day_clear.jpg';
import nightClear from './images/night_clear.jpg';
import dayCloudy from './images/day_cloudy.jpg';
import nightCloudy from './images/night_cloudy.jpg';


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
            } else if(code >= 600 && code <= 622){
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

        console.log(url);
        

        return (
            <div
                className={screenEffectShow}
                id="screen-effect"
                style={{
                    backgroundImage: `url(${url})`
                }}
            >
            </div>
        )
    }
}

export default Effect;