import {combineReducers } from "redux";

const songsReducer = () => {
    return [
        {title: "No Scrubs", duration: "4:05"},
        {title: "Test song2", duration: "4:02"},
        {title: "Test songs3", duration: "2:25"},
        {title: "I want it that way", duration: "3:33"},
    ];
};

const selectedSongReducer = (selectedSong = null, action)=> {
    if ( action.type === "SONG_SELECTED") {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});