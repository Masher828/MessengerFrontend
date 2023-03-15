import * as ActionConstants from "./action_constants"
import axios from "axios";

const url = "http://localhost:8085/";

const searchFriendRequest = () => {
    return {
        type : ActionConstants.SEARCH_FRIEND_REQUEST
    }
}

const searchFriendRequestSuccess = (data) => {
    return {
        type : ActionConstants.SEARCH_FRIEND_REQUEST_SUCCESS,
        data : data
    }
}

const searchFriendRequestFailure = (err) => {
    return {
        type : ActionConstants.SEARCH_FRIEND_REQUEST_FAILURE,
        err : err
    }
}

export const SearchFriend = (query) => dispatch => {
    dispatch(searchFriendRequest())

    axios
        .get(url + "auth/friend/search?query="+query)
        .then((resp) => {
            if (resp != null && resp.data != null) {
                dispatch(searchFriendRequestSuccess(resp.data));
            } else {
                dispatch(searchFriendRequestFailure({}));
            }
        })
        .catch((err) => {
            console.log(err);
            dispatch(searchFriendRequestFailure(err?.response?.data?.err));
        });
}