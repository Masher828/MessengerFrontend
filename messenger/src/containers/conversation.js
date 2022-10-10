import * as React from "react";
import Box from "@mui/material/Box";

import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import useWindowSize from "../customhooks/screensizehook";
import ListItemComponent from "../components/list_item";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Grid } from "@mui/material";
import UserHeaderComponent from "../components/user_header";

function refreshMessages() {
  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

  return Array.from(new Array(50)).map(
    () => messageExamples[getRandomInt(messageExamples.length)]
  );
}

export default function ConversationScreen({ chatScreenToggle }) {
  const windowSize = useWindowSize();
  const [value, setValue] = React.useState(0);
  const [bottomNavWidth, setBottomNavWidth] = React.useState(0);
  const ref = React.useRef(null);
  const [messages, setMessages] = React.useState(() => refreshMessages());

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

  return (
    <Box
      sx={{ pb: 7, pt: 7, maxHeight: windowSize.height, overflowY: "auto" }}
      ref={ref}>
      <CssBaseline />

      <Grid
        container
        direction={"row"}
        alignItems={"center"}
        wrap="nowrap"
        sx={{ pl: 2, pt: 4 }}>
        <Grid item xs={10}>
          <InputBase
            placeholder="Search Conversation"
            fullWidth={true}
            inputProps={{ "aria-label": "search google maps" }}
          />
        </Grid>
        <Grid item xs={1}>
          <IconButton type="button" aria-label="search">
            <SearchIcon />
          </IconButton>
        </Grid>
      </Grid>

      <Divider orientation="horizontal" />

      {/* ConversationList */}
      <List>
        {messages.map(({ primary, secondary, person }, index) => (
          <ListItemComponent
            onClicking={chatScreenToggle}
            primary={primary}
            secondary={secondary.substring(0, 48) + "..."}
            person={person}
            index={index}
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
          primary={"Manish Sharma"}
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
            setValue(newValue);
          }}>
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

const messageExamples = [
  {
    primary: "Brunch this week?",
    secondary:
      "I'll be in the neighbourhood this week. Let's grab a bite to eat",
    person: "/static/images/avatar/5.jpg",
  },
  {
    primary: "Birthday Gift",
    secondary: `Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,
    person: "/static/images/avatar/1.jpg",
  },
  {
    primary: "Recipe to try",
    secondary:
      "I am try out this new BBQ recipe, I think this might be amazing",
    person: "/static/images/avatar/2.jpg",
  },
  {
    primary: "Yes!",
    secondary: "I have the tickets to the ReactConf for this year.",
    person: "/static/images/avatar/3.jpg",
  },
  {
    primary: "Doctor's Appointment",
    secondary:
      "My appointment for the doctor was rescheduled for next Saturday.",
    person: "/static/images/avatar/4.jpg",
  },
  {
    primary: "Discussion",
    secondary: `Menus that are generated by the bottom app bar (such as a bottom
      navigation drawer or overflow menu) open as bottom sheets at a higher elevation
      than the bar.`,
    person: "/static/images/avatar/5.jpg",
  },
  {
    primary: "Summer BBQ",
    secondary: `Who wants to have a cookout this weekend? I just got some furniture
      for my backyard and would love to fire up the grill.`,
    person: "/static/images/avatar/1.jpg",
  },
];
