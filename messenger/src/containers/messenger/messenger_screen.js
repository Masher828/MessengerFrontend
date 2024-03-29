import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import useWindowSize from "../../customhooks/screensizehook";
import ConversationScreen from "./conversation";
import ChatScreen from "./chat_screen";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetConversations } from "../../redux/messenger/action_creator";
import { GetLoggedInUserinfo } from "../../redux/auth/action_creator";

const MessengerScreenContainer = ({ mqttConnect, mqttStatus, mqttSubscribe }) => {
    const size = useWindowSize();
    const navigate = useNavigate()
    const [chatScreenToggle, setChatScreenToggle] = React.useState(0);
    const authStore = useSelector(state => state.auth)
    const messagesStore = useSelector(state => state.messenger)
    const dispatch = useDispatch();

    useEffect(() => {
        if (!authStore.isAuthenticated) {
            navigate("/", { replace: true });
        }

        dispatch(GetLoggedInUserinfo())
        dispatch(GetConversations())
    }, [authStore.isAuthenticated])


    useEffect(() => {
        if (authStore.userDetails?.id) {
            console.log(authStore.userDetails?.id)
            mqttConnect("wss://broker.emqx.io:8084/mqtt")
        }
    }, [authStore.userDetails])

    useEffect(()=>{
        if (mqttStatus === "Connected") {
            mqttSubscribe("user/topic/"+authStore.userDetails?.id)
        }
    },[mqttStatus])
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="stretch">
                {!chatScreenToggle || size.width > 900 ? (
                    <Grid item xs={12} md={4} lg={3} bgcolor="#F8F8F8">
                        <ConversationScreen chatScreenToggle={setChatScreenToggle} />
                    </Grid>
                ) : null}

                {(size.width > 900 || chatScreenToggle) && messagesStore.openedConversation ? (
                    <Grid item xs={12} md={8} lg={9}>
                        <ChatScreen setChatScreenToggle={setChatScreenToggle} />
                    </Grid>
                ) : null}
            </Grid>
        </Box>
    );
};

export default MessengerScreenContainer;
