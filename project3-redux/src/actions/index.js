// ACtion creator
export const selectSong = (song) => {    
    // reutrn an action
    return{
        type: "SONG_SELECTED",
        payload: song
    };
};

