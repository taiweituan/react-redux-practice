import "./SeasonDisplay.css";
import React from 'react';

const seasonConfig = {
    summer: {
        text: "GET TO DA BEACH",
        iconName: "sun"
    },
    winter: {
        text: "BURRRR CHILLY",
        iconName: "snowflake"
    }
};

const getSeason = (lat, month) => {
    if (month >2 && month < 9){
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat < 0 ? 'winter' : 'summer';
    }
};


const SeasonDisplay = (props) =>{
    console.log(props.lat);
    const season = getSeason(props.lat, new Date().getMonth());
    console.log(season);
    
    const {text, iconName } = seasonConfig[season];
    
    return (
        <div className={`season-display ${season}`}>
            <h1>
                <i className={`icon-left massive ${iconName} icon`} />
                {text}
                <i className={`icon-right massive ${iconName} icon`} />
            </h1>
        </div>
    );
};

export default SeasonDisplay;