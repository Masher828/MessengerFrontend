import * as ActionConstants from "./action_constants";

const initState = {isLoading : false, err : null, users : []}


const FriendReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionConstants.SEARCH_FRIEND_REQUEST:
            return { ...state, isLoading: true, error: null };

        case ActionConstants.SEARCH_FRIEND_REQUEST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                users: action.data.data,
            };

        case ActionConstants.SEARCH_FRIEND_REQUEST_FAILURE:
            return { ...state, isLoading: false, error: action.err };

        default:
            return state;
    }
};

export default FriendReducer;
