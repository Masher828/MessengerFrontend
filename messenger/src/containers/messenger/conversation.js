import * as React from "react";
import {useState} from "react";
import Box from "@mui/material/Box";

import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import useWindowSize from "../../customhooks/screensizehook";
import ListItemComponent from "../../components/list_item";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import {Grid} from "@mui/material";
import UserHeaderComponent from "../../components/user_header";
import SearchUserModal from "../../components/search_user";
import {useDispatch, useSelector} from "react-redux";
import {ConversationTypeOne2One} from "../../utils/utils";
import {GetMessagesInConversation, OpenConversation} from "../../redux/messenger/action_creator";

function refreshMessages() {
    // const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
    //
    // return Array.from(new Array(50)).map(
    //     () => messageExamples[getRandomInt(messageExamples.length)]
    // );
}

export default function ConversationScreen({chatScreenToggle}) {
    const windowSize = useWindowSize();
    const [openUserSearchModal, setOpenUserSearchModal] = useState(false)
    const [value, setValue] = React.useState(0);
    const [bottomNavWidth, setBottomNavWidth] = React.useState(0);
    const ref = React.useRef(null);
    const [messages, setMessages] = React.useState(() => refreshMessages());
    const authStore = useSelector(state => state.auth)
    const messengerStore = useSelector((state) => state.messenger)
    const dispatch = useDispatch()
    React.useEffect(() => {
        ref.current.ownerDocument.body.scrollTop = 0;
        setMessages(refreshMessages());
    }, [value, setMessages]);

    React.useEffect(() => {
        if (windowSize.width > 1200) {
            setBottomNavWidth(windowSize.width / 4);
        } else if (windowSize.width > 900) {
            setBottomNavWidth(windowSize.width / 3);
        } else {
            setBottomNavWidth(windowSize.width);
        }
    }, [windowSize.width]);

    const handleConversationClick = (conversationId, index) => {
        dispatch(OpenConversation(conversationId))
        dispatch(GetMessagesInConversation(conversationId))
        chatScreenToggle(true)
    }

    return (
        <Box
            sx={{pb: 7, pt: 7, maxHeight: windowSize.height, overflowY: "auto"}}
            ref={ref}>
            <CssBaseline/>

            <Grid
                container
                direction={"row"}
                alignItems={"center"}
                wrap="nowrap"
                sx={{pl: 2, pt: 4}}>
                <Grid item xs={10}>
                    <InputBase
                        placeholder="Search Conversation"
                        fullWidth={true}
                        inputProps={{"aria-label": "search google maps"}}
                    />
                </Grid>
                <Grid item xs={1}>
                    <IconButton type="button" aria-label="search">
                        <SearchIcon/>
                    </IconButton>
                </Grid>
            </Grid>

            <Divider orientation="horizontal"/>

            {/* ConversationList */}
            <List>
                {messengerStore.conversations?.map((message, index) => (
                    <ListItemComponent
                        key = {message.id}
                        onClicking={(index)=>handleConversationClick(message.id, index)}
                        primary={message?.conversationType === ConversationTypeOne2One ? message.participantsName[0] === authStore.userDetails?.name ? message?.participantsName[1] : message?.participantsName[0] : message?.name}
                        secondary={message.recentMessage ? message.recentMessage.substring(0, 48) + "..." : " "}
                        person={message?.conversationType === ConversationTypeOne2One ? message.participantsName[0] === authStore.userDetails?.name ? message?.participantsName[1] : message?.participantsName[0] : message?.name}
                        id={message.id}
                        index={index+1}
                        messageCount={0}
                        messageStatus="READ"
                    />
                ))}
            </List>

            {/* Current User Header */}
            <Paper
                sx={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: bottomNavWidth,
                    maxHeight: 200,
                    overflow: "auto",
                }}>
                <UserHeaderComponent
                    primary={authStore?.userDetails?.name}
                    avatarHeight={56}
                    avatarWidth={56}
                    avatarMarginLeft={2}
                    secondary="Status"
                    showEdit={true}
                />
            </Paper>

            {/* Bottom Navigator */}
            <Paper
                sx={{
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    width: bottomNavWidth,
                    maxHeight: 200,
                    overflow: "auto",
                }}
                elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        if (newValue === 4) {
                            setOpenUserSearchModal(true)
                        } else {
                            setValue(newValue);
                        }
                    }}>
                    <BottomNavigationAction label="Recents" icon={<RestoreIcon/>}/>
                    <BottomNavigationAction label="Favorites" icon={<FavoriteIcon/>}/>
                    <BottomNavigationAction label="Archive" icon={<ArchiveIcon/>}/>
                    <SearchUserModal openModal={openUserSearchModal} setOpenModal={setOpenUserSearchModal}/>
                    <BottomNavigationAction label="Add Friends" icon={<PersonAddIcon/>}/>
                </BottomNavigation>
            </Paper>
        </Box>
    );
}
