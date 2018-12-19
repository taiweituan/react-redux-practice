import React from "react";
import {connect} from "react-redux";

const SongDetail = (props) => {
    console.log(props);
    if (!props.song) {
        return <div>Select a song</div>;
    }
    return (
        <div>{props.song.title}</div>
    );
};


const mapStateToProps = (state) => {
    console.log(state);
    
    return {song: state.selectedSong};
};

export default connect(mapStateToProps)(SongDetail);