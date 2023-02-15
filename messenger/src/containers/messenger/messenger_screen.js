import {Box} from "@mui/material";
import Grid from "@mui/material/Grid";
import useWindowSize from "../../customhooks/screensizehook";
import ConversationScreen from "./conversation";
import ChatScreen from "./chat_screen";
import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const MessengerScreenContainer = () => {
    const size = useWindowSize();
    const navigate = useNavigate()
    const [chatScreenToggle, setChatScreenToggle] = React.useState(false);
    const authStore = useSelector(state => state.auth)
    useEffect(() => {
        if (!authStore.isAuthenticated) {
            navigate("/", {replace: true});
        }
    }, [authStore.isAuthenticated])

    return (
        <Box sx={{flexGrow: 1}}>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="stretch">
                {!chatScreenToggle || size.width > 900 ? (
                    <Grid item xs={12} md={4} lg={3} bgcolor="#F8F8F8">
                        <ConversationScreen chatScreenToggle={setChatScreenToggle}/>
                    </Grid>
                ) : null}

                {size.width > 900 || chatScreenToggle ? (
                    <Grid item xs={12} md={8} lg={9}>
                        <ChatScreen setChatScreenToggle={setChatScreenToggle}/>
                    </Grid>
                ) : null}
            </Grid>
        </Box>
    );
};

export default MessengerScreenContainer;
