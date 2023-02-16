import * as ActionConstants from "./action_constants"

const initState = {isConversationLoading : false, isMessagesLoading : false, conversations : [], messages : [], error : null}



const MessengerReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionConstants.GET_CONVERSATION_REQUEST :
            return { ...state, isConversationLoading: true, error: null };

        case ActionConstants.GET_CONVERSATION_SUCCESS:
            return { ...state, isConversationLoading: false, conversations: action.data };

        case ActionConstants.GET_CONVERSATION_FAILURE:
            return { ...state, isConversationLoading: false, error: action.err };

        case ActionConstants.GET_MESSAGES_IN_CONVERSATION_REQUEST || ActionConstants.GET_MESSAGES_WITH_FRIEND_REQUEST:
            return { ...state, isMessagesLoading: true, error: null };

        case ActionConstants.GET_MESSAGES_IN_CONVERSATION_SUCCESS || ActionConstants.GET_MESSAGES_WITH_FRIEND_SUCCESS:
            return { ...state, isMessagesLoading: false, messages: action.data };

        case ActionConstants.GET_MESSAGES_IN_CONVERSATION_FAILURE || ActionConstants.GET_MESSAGES_WITH_FRIEND_FAILURE:
            return { ...state, isMessagesLoading: false, error: action.err };

        default:
            return state;
    }
};

export default MessengerReducer;
