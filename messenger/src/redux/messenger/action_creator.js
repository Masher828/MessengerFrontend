import * as ActionConstants from "./action_constants"
import axios from "axios";

const url = "http://localhost:8081/";

const getConversationRequest = () => {
    return {
        type : ActionConstants.GET_CONVERSATION_REQUEST
    }
}

const getConversationSuccess = (data) => {
    return {
        type : ActionConstants.GET_CONVERSATION_SUCCESS,
        data :data
    }
}

const getConversationFailure = (err) => {
    return {
        type : ActionConstants.GET_CONVERSATION_FAILURE,
        err : err
    }
}

export const GetConversations = (query) => dispatch => {
    dispatch(getConversationRequest())

    axios
        .get(url + "messenger/conversations?"+query)
        .then((resp) => {
            if (resp != null && resp.data != null) {
                dispatch(getConversationSuccess(resp.data));
            } else {
                dispatch(getConversationFailure({}));
            }
        })
        .catch((err) => {
            console.log(err);
            dispatch(getConversationFailure(err?.response?.data?.err));
        });
}

const getMessagesInConversationRequest = () => {
    return {
        type : ActionConstants.GET_MESSAGES_IN_CONVERSATION_REQUEST
    }
}

const getMessagesInConversationSuccess = (data) => {
    return {
        type : ActionConstants.GET_MESSAGES_IN_CONVERSATION_SUCCESS,
        data : data
    }
}

const getMessageInConversationFailure = (err) => {
    return {
        type : ActionConstants.GET_MESSAGES_IN_CONVERSATION_FAILURE,
        err : err
    }
}

export const GetMessagesInConversation = (conversationId) => dispatch => {
    dispatch(getMessagesInConversationRequest())

    axios
        .get(url + "messenger/"+ conversationId +"/messages/list")
        .then((resp) => {
            if (resp != null && resp.data != null) {
                dispatch(getMessagesInConversationSuccess(resp.data));
            } else {
                dispatch(getMessageInConversationFailure({}));
            }
        })
        .catch((err) => {
            console.log(err);
            dispatch(getMessageInConversationFailure(err?.response?.data?.err));
        });
}

const getMessagesWithFriendRequest = () => {
    return {
        type : ActionConstants.GET_MESSAGES_WITH_FRIEND_REQUEST
    }
}

const getMessagesWithFriendSuccess = (data) => {
    return {
        type : ActionConstants.GET_MESSAGES_WITH_FRIEND_SUCCESS,
        data : data
    }
}

const getMessagesWithFriendFailure = (err) => {
    return {
        type : ActionConstants.GET_MESSAGES_WITH_FRIEND_FAILURE,
        err : err
    }
}

export const GetMessagesWithFriend = (friendId) => dispatch => {
    dispatch(getMessagesWithFriendRequest())

    axios
        .get(url + "messenger/"+ friendId +"/messages/list")
        .then((resp) => {
            if (resp != null && resp.data != null) {
                dispatch(getMessagesWithFriendSuccess(resp.data));
            } else {
                dispatch(getMessagesWithFriendFailure({}));
            }
        })
        .catch((err) => {
            console.log(err);
            dispatch(getMessagesWithFriendFailure(err?.response?.data?.err));
        });
}