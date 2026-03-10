import { IconButton } from "@mui/material";
import "./myStyles.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SearchIcon from '@mui/icons-material/Search';
import ConversationItem from "./ConversationItem";
import { useState } from "react";


const Sidebar = () => {
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
        }
    ])
    return (
        <div className="sidebar-container">
            <div className="sb-header">
                <div>
                    <IconButton>
                        <AccountCircleIcon />
                    </IconButton>
                </div>
                <div>
                    <IconButton>
                        <PersonAddIcon />
                    </IconButton>
                    <IconButton>
                        <GroupAddIcon />
                    </IconButton>
                    <IconButton>
                        <AddCircleIcon />
                    </IconButton>
                    <IconButton>
                        <NightlightIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sb-search">
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <input placeholder="Search..." className="search-box"></input>
            </div>
            <div className="sb-conversations">
                {conversations.map((conversation) => {
                    return <ConversationItem props={conversation} key={conversation.name}/>
                })}
            </div>
        </div>
    )
}

export default Sidebar