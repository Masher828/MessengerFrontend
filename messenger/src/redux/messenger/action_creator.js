import * as ActionConstants from "./action_constants"
import axios from "axios";

const url = "http://localhost:8082/";

const getConversationRequest = () => {
    return {
        type: ActionConstants.GET_CONVERSATION_REQUEST
    }
}

const getConversationSuccess = (data) => {
    return {
        type: ActionConstants.GET_CONVERSATION_SUCCESS,
        data: data
    }
}

const getConversationFailure = (err) => {
    return {
        type: ActionConstants.GET_CONVERSATION_FAILURE,
        err: err
    }
}

export const GetConversations = (query) => dispatch => {
    dispatch(getConversationRequest())

    const header = {headers: {"Authorization": `Bearer ${localStorage.getItem("sessionToken")}`}}

    axios
        .get(url + "messenger/conversations?" + query, header)
        .then((resp) => {
            if (resp != null && resp.data != null) {
                dispatch(getConversationSuccess(resp.data));
            } else {
                dispatch(getConversationFailure({}));
            }
        })
        .catch((err) => {
            dispatch(getConversationFailure(err?.response?.data?.err));
        });
}

const getMessagesInConversationRequest = () => {
    return {
        type: ActionConstants.GET_MESSAGES_IN_CONVERSATION_REQUEST
    }
}

const getMessagesInConversationSuccess = (data) => {
    return {
        type: ActionConstants.GET_MESSAGES_IN_CONVERSATION_SUCCESS,
        data: data
    }
}

const getMessageInConversationFailure = (err) => {
    return {
        type: ActionConstants.GET_MESSAGES_IN_CONVERSATION_FAILURE,
        err: err
    }
}

export const GetMessagesInConversation = (conversationId) => dispatch => {
    dispatch(getMessagesInConversationRequest())

    const header = {headers: {"Authorization": `Bearer ${localStorage.getItem("sessionToken")}`}}
    axios
        .get(url + "messenger/" + conversationId + "/messages/list", header)
        .then((resp) => {
            if (resp != null && resp.data != null) {
                dispatch(getMessagesInConversationSuccess(resp.data?.data));
            } else {
                dispatch(getMessageInConversationFailure({}));
            }
        })
        .catch((err) => {
            console.log(err);
            dispatch(getMessageInConversationFailure(err?.response?.data?.err));
        });
}

const getConversationWithFriendRequest = () => {
    return {
        type: ActionConstants.GET_CONVERSATION_WITH_FRIEND_REQUEST
    }
}

const getConversationWithFriendSuccess = (data) => {
    return {
        type: ActionConstants.GET_CONVERSATION_WITH_FRIEND_SUCCESS,
        data: data
    }
}

const getConversationWithFriendFailure = (err) => {
    return {
        type: ActionConstants.GET_CONVERSATION_WITH_FRIEND_FAILURE,
        err: err
    }
}

export const GetConversationWithFriend = (friendId) => dispatch => {
    dispatch(getConversationWithFriendRequest())

    const header = {headers: {"Authorization": `Bearer ${localStorage.getItem("sessionToken")}`}}
    axios
        .get(url + "messenger/conversation/friend/" + friendId, header)
        .then((resp) => {
            if (resp != null && resp.data != null) {
                dispatch(getConversationWithFriendSuccess(resp.data));
                dispatch(GetMessagesInConversation(resp?.data?.data?.id))
            } else {
                dispatch(getConversationWithFriendFailure({}));
            }
        })
        .catch((err) => {
            console.log(err);
            dispatch(getConversationWithFriendFailure(err?.response?.data?.err));
        });
}

const sendMessageRequest = () => {
    return {
        type: ActionConstants.SEND_MESSAGE_REQUEST
    }
}

const sendMessageSuccess = (data) => {
    return {
        type: ActionConstants.SEND_MESSAGE_SUCCESS,
        data: data
    }
}

const sendMessageFailure = (err) => {
    return {
        type: ActionConstants.SEND_MESSAGE_FAILURE,
        err: err
    }
}

export const SendMessage = (body) => dispatch => {
    dispatch(sendMessageRequest())

    const header = {headers: {"Authorization": `Bearer ${localStorage.getItem("sessionToken")}`}}
    axios
        .post(url + "messenger/messages/send", body, header)
        .then((resp) => {
            if (resp != null && resp.data != null) {
                dispatch(sendMessageSuccess(resp.data));
            } else {
                dispatch(sendMessageFailure({}));
            }
        })
        .catch((err) => {
            console.log(err);
            dispatch(sendMessageFailure(err?.response?.data?.err));
        });
}

const openConversationRequest = () => {
    return {
        type: ActionConstants.OPEN_CONVERSATION_REQUEST
    }
}

const openConversationSuccess = (data) => {
    return {
        type: ActionConstants.OPEN_CONVERSATION_SUCCESS,
        data: data
    }
}

const openConversationFailure = (err) => {
    return {
        type: ActionConstants.OPEN_CONVERSATION_FAILURE,
        err: err
    }
}

export const OpenConversation = (conversationId) => (dispatch) => {
    dispatch(openConversationRequest())
    const header = {headers: {"Authorization": `Bearer ${localStorage.getItem("sessionToken")}`}}

    axios
        .get(url + "messenger/conversation/"+conversationId, header)
        .then((resp) => {
            if (resp != null && resp.data != null) {
                dispatch(openConversationSuccess(resp.data));
            } else {
                dispatch(openConversationFailure({}));
            }
        })
        .catch((err) => {
            console.log(err);
            dispatch(openConversationFailure(err?.response?.data?.err));
        });
}
