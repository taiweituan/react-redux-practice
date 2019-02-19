import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPostsAndUsers = () => {
    return async (dispatch, getState) => {
        console.log("Fetching Post...");
        await dispatch(fetchPosts());
        console.log("Post Fetched!");
        
        // Pull up just 'userId' Property
        // const userIds = _.uniq(
        //     _.map(getState().posts, "userId")
        // );
        // userIds.forEach((id) => {
        //     // Don't need 'await' since its not important
        //     dispatch(fetchUser(id));
        // });

        // Pull up just 'userId' Property (Shorter version)
        //
        // chain() - Creates a lodash wrapper instance that wraps value with explicit
        // method chain sequences enabled. The result of such sequences must be 
        // unwrapped with _#value.
        _.chain(getState().posts)
            .map("userId")
            .uniq()
            .forEach(id => {
                dispatch(fetchUser(id));
            })
            .value();   // required to end the _.chain()
    };
};

export const fetchPosts = () => {
    return async (dispatch, getState) => {
        const response = await jsonPlaceholder.get("/posts");
        
        dispatch({ 
            type: "FETCH_POSTS",
            payload: response.data
        });
    };
};

export const fetchUser = (id) => {
    return async (dispatch, getState) => {
        const response = await jsonPlaceholder.get(`/users/${id}`);
        
        dispatch({ 
            type: "FETCH_USER",
            payload: response.data
        });
    };
};

// Memoize Version
// export const fetchUser = (id) => {
//     return function(dispatch){
//         _fetchUser(id, dispatch);
//     };
// };

// const _fetchUser = _.memoize(async (id,dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({ 
//         type: "FETCH_USER",
//         payload: response.data
//     });
// });