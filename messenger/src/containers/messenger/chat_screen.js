import React from "react";
import {Box, Grid, IconButton, InputAdornment, OutlinedInput, Paper, Typography,} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import useWindowSize from "../../customhooks/screensizehook";
import UserHeaderComponent from "../../components/user_header";
import SentimentSatisfiedSharpIcon from "@mui/icons-material/SentimentSatisfiedSharp";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import {useDispatch, useSelector} from "react-redux";
import {ConversationTypeOne2One} from "../../utils/utils";
import {SendMessage} from "../../redux/messenger/action_creator";

const ChatScreen = ({setChatScreenToggle}) => {
    const windowSize = useWindowSize();
    const [bottomNavWidth, setBottomNavWidth] = React.useState(0);
    const authStore = useSelector(state => state.auth)
    const messageState = useSelector((state) => state.messenger)
    const [messageBody, setMessageBody] = React.useState("")
    const dispatch = useDispatch()

    React.useEffect(() => {
        if (windowSize.width > 1200) {
            setBottomNavWidth(windowSize.width - windowSize.width / 4);
        } else if (windowSize.width > 900) {
            setBottomNavWidth(windowSize.width - windowSize.width / 3);
        } else {
            setBottomNavWidth(windowSize.width);
        }
    }, [windowSize.width]);

    const handleSendMessage = () => {
        var data = {
            body : messageBody,
            conversationId : messageState.openedConversation?.id,
            messageType:"text"
        }
        dispatch(SendMessage(data))
        setMessageBody("")
    }
    return (
        <Box
            sx={{pb: 7, pt: 10, maxHeight: windowSize.height, overflowY: "auto"}}>
            <CssBaseline/>
            <Grid container sx={{float: "left"}}>
                {messageState?.messages?.map((message, index) => (
                    <Grid item xs={12} sx={{textAlign: "left"}} key={message.id}>
                        {authStore.userDetails.id !== message.senderId ? (
                            <Paper
                                sx={{
                                    float: "left",
                                    backgroundColor: "#0288d1",
                                    mt: 3,
                                    mr: 6,
                                }}>
                                <Typography key={index} sx={{p: 2}}>
                                    {message.body}
                                </Typography>
                            </Paper>
                        ) : (
                            <Paper
                                sx={{
                                    float: "right",
                                    backgroundColor: "#F8F8F8",
                                    mt: 3,
                                    ml: 6,
                                }}>
                                <Typography key={index} sx={{p: 2, textAlign: "right"}}>
                                    {message.body}
                                </Typography>
                            </Paper>
                        )}
                    </Grid>
                ))}
            </Grid>

            <Paper
                sx={{
                    position: "fixed",
                    top: 0,
                    width: bottomNavWidth,
                    right: 0,
                    maxHeight: 200,
                    overflow: "auto",
                }}
                elevation={3}>
                <UserHeaderComponent
                    primary={messageState.openedConversation?.conversationType === ConversationTypeOne2One ? messageState.openedConversation?.participantsName[0] === authStore.userDetails.name ? messageState.openedConversation?.participantsName[1] : messageState.openedConversation?.participantsName[0] : messageState.openedConversation?.name}
                    avatarHeight={56}
                    avatarWidth={56}
                    avatarMarginLeft={2}
                    secondary="Status"
                    showEdit={false}
                    setChatScreenToggle={setChatScreenToggle}
                />
            </Paper>
            <Box
                sx={{
                    position: "fixed",
                    bottom: 0,
                    width: bottomNavWidth,
                    right: 0,

                    maxHeight: 200,
                    overflow: "auto",
                }}
                elevation={5}>
                <OutlinedInput
                    placeholder="Type Message ..."
                    id="outlined-adornment-password"
                    type={"text"}
                    value={messageBody}
                    onChange={(e) => {
                        setMessageBody(e.target.value)
                    }
                    }
                    sx={{borderRadius: "40px", backgroundColor: "white"}}
                    fullWidth={true}
                    startAdornment={
                        <InputAdornment position="start">
                            <IconButton aria-label="toggle password visibility" edge="end">
                                <SentimentSatisfiedSharpIcon/>
                            </IconButton>
                        </InputAdornment>
                    }
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton aria-label="toggle password visibility" edge="end">
                                <>
                                    <AttachFileIcon/>
                                </>
                            </IconButton>
                            <IconButton aria-label="toggle password visibility" edge="end">
                                <>
                                    <SendIcon
                                        onClick={handleSendMessage}
                                        sx={{
                                            bgcolor: "#0288d1",
                                            borderRadius: "20px",
                                            fontSize: "35px",
                                            padding: "2px",
                                        }}
                                    />
                                </>
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </Box>
        </Box>
    );
};

export default ChatScreen;
