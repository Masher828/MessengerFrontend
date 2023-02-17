import * as ActionConstants from "./action_constants"

const initState = {isConversationLoading: false, isMessagesLoading: false, conversations: [], messages: [], error: null, openedConversation :null}


const MessengerReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionConstants.GET_CONVERSATION_REQUEST :
            return {...state, isConversationLoading: true, error: null};

        case ActionConstants.GET_CONVERSATION_SUCCESS:
            return {...state, isConversationLoading: false, conversations: action.data?.data};

        case ActionConstants.GET_CONVERSATION_FAILURE:
            return {...state, isConversationLoading: false, error: action.err};

        case ActionConstants.GET_MESSAGES_IN_CONVERSATION_REQUEST :
            return {...state, isMessagesLoading: true, error: null};

        // case ActionConstants.GET_CONVERSATION_WITH_FRIEND_SUCCESS:
        //     return {...state, isMessagesLoading: false, messages: action?.data?.data ? action.data.data : []};

        case ActionConstants.GET_MESSAGES_IN_CONVERSATION_SUCCESS :

            return {...state, isMessagesLoading: false, messages: action.data};

        case ActionConstants.GET_MESSAGES_IN_CONVERSATION_FAILURE || ActionConstants.GET_CONVERSATION_WITH_FRIEND_FAILURE:
            return {...state, isMessagesLoading: false, error: action.err};

        case ActionConstants.SEND_MESSAGE_REQUEST:
            return {...state, isMessagesLoading: true, error: null}

        case ActionConstants.SEND_MESSAGE_SUCCESS:
            return {...state, isMessagesLoading: false, messages: action?.data?.data}

        case ActionConstants.SEND_MESSAGE_FAILURE:
            return {...state, isMessagesLoading: false, error: action.err}

        case ActionConstants.OPEN_CONVERSATION_REQUEST :
            return {...state, isMessagesLoading: true, error: null}

        case ActionConstants.GET_CONVERSATION_WITH_FRIEND_REQUEST:
            return {...state, isMessagesLoading: true, error: null}

        case ActionConstants.OPEN_CONVERSATION_SUCCESS :
            return {...state, openedConversation: action?.data?.data, isMessagesLoading: false}

        case ActionConstants.GET_CONVERSATION_WITH_FRIEND_SUCCESS:
            return {...state, openedConversation: action?.data?.data, isMessagesLoading: false}

        case ActionConstants.GET_CONVERSATION_WITH_FRIEND_FAILURE:
            return {...state, isMessagesLoading: false, error: action?.err}

        case ActionConstants.OPEN_CONVERSATION_FAILURE :
            return {...state, isMessagesLoading: false, error: action?.err}

        default:
            return state;
    }
};

export default MessengerReducer;
