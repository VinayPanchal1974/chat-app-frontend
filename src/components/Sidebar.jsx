import { IconButton } from "@mui/material";
import "./myStyles.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SearchIcon from '@mui/icons-material/Search';
import ConversationItem from "./ConversationItem";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/themeSlice";

const Sidebar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const lightTheme = useSelector((state) => state.themeKey);

    const [conversations, __setConversation] = useState([
        {
            name: "Test#1",
            lastMessage: "Last Message #1",
            timeStamp: "today",
        },
        {
            name: "Test#2",
            lastMessage: "Last Message #2",
            timeStamp: "today",
        },
        {
            name: "Test#3",
            lastMessage: "Last Message #3",
            timeStamp: "today",
        },
        {
            name: "Test#4",
            lastMessage: "Last Message #4",
            timeStamp: "today",
        },
        {
            name: "Test#5",
            lastMessage: "Last Message #5",
            timeStamp: "today",
        },


    ])

    return (
        <div className="sidebar-container">
            <div className={`sb-header ${lightTheme == true ? "" : "dark"}`}>
                <div>
                    <IconButton onClick={() => { navigate('') }}>
                        <AccountCircleIcon className={`icon ${lightTheme == true ? "" : "dark"}`} />
                    </IconButton>
                </div>
                <div>
                    <IconButton onClick={() => { navigate('users') }}>
                        <PersonAddIcon className={`icon ${lightTheme == true ? "" : "dark"}`} />
                    </IconButton>
                    <IconButton onClick={() => { navigate('groups') }}>
                        <GroupAddIcon className={`icon ${lightTheme == true ? "" : "dark"}`} />
                    </IconButton>
                    <IconButton onClick={() => { navigate('create-groups') }}>
                        <AddCircleIcon className={`icon ${lightTheme == true ? "" : "dark"}`} />
                    </IconButton>
                    <IconButton onClick={() => {dispatch(toggleTheme())}}>
                        {lightTheme == true ? <NightlightIcon className={`icon ${lightTheme == true ? "" : "dark"}`} /> : <LightModeIcon className={`icon ${lightTheme == true ? "" : "dark"}`} />}
                    </IconButton>
                </div>
            </div>
            <div className={`sb-search ${lightTheme == true ? "" : "dark"}`}>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <input placeholder="Search..." className={`search-box ${lightTheme == true ? "" : "dark"}`}></input>
            </div>
            <div className={`sb-conversations ${lightTheme == true ? "" : "dark"}`}>
                {conversations.map((conversation) => {
                    return <ConversationItem props={conversation} key={conversation.name} />
                })}
            </div>
        </div>
    )
}

export default Sidebar