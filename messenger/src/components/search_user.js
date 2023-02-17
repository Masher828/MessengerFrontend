import * as React from 'react';
import {useState} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import {useDispatch, useSelector} from "react-redux";
import {SearchUser} from "../redux/auth/action_creator";
import {GetConversationWithFriend} from "../redux/messenger/action_creator";

function sleep(delay = 0) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}

const SearchUserModal = ({openModal, setOpenModal}) => {
    const [open, setOpen] = React.useState(false);
    const userStore = useSelector((state)=>state.auth)
    const [options, setOptions] = React.useState(userStore.users);
    const [inputValue, setInputValue] = useState()
    const dispatch = useDispatch()

    const handleUserSearchInput = (e) => {
        if (e.target.value.length > 3 ){
            dispatch(SearchUser(inputValue))
        }
        setInputValue(e.target.value)
    }
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleChange = (event, value) => setSelectedOptions(value);

    const openConversation = () => {
        dispatch(GetConversationWithFriend(selectedOptions.id))
        handleClose()
    }
    const handleClose = () => {
        setOpenModal(false);
    };

    React.useEffect(() => {
        let active = true;
        //
        if (!userStore.isSearching) {
            return undefined;
        }


        (async () => {
            await sleep(1e3); // For demo purposes.

            if (active) {
            setOptions([...userStore.users]);
            }
        })();

        return () => {
            active = false;
        };
    }, [userStore.isSearching]);

    React.useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    return (
        <div>
            <Dialog
                open={openModal}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">{"Add Friend"}</DialogTitle>
                <DialogContent>
                    <Autocomplete
                        id="search-users"
                        onChange={handleChange}
                        onInputChange={handleUserSearchInput}
                        sx={{width: 300}}
                        open={open}
                        onOpen={() => {
                            setOpen(true);
                        }}
                        onClose={() => {
                            setOpen(false);
                        }}
                        isOptionEqualToValue={(option, value) => option.id === value.id}
                        getOptionLabel={(option) => option.name}
                        options={userStore.users}
                        loading={userStore.isSearching}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                InputProps={{
                                    ...params.InputProps,
                                    endAdornment: (
                                        <React.Fragment>
                                            {userStore.isSearching ? <CircularProgress color="inherit" size={20}/> : null}

                                        </React.Fragment>
                                    ),
                                }}
                            />
                        )}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={openConversation} autoFocus>
                        Open Conversation
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default SearchUserModal;