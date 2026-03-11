import { IconButton } from "@mui/material"
import "./myStyles.css"
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import MessageOthers from "./MessageOthers";
import MessageSelf from "./MessageSelf";

const ChatArea = () => {
    const props = [
        {
            name: "Test#1",
            lastMessage: "Last Message #1",
            timeStamp: "today",
        },
        {
            name: "Jest#2",
            lastMessage: "Last Message #2",
            timeStamp: "today",
        },
        {
            name: "Test#3",
            lastMessage: "Last Message #3",
            timeStamp: "today",
        }
    ]
    return (
        <div className="chatArea-container">
            <div className="chatArea-header">
                <p className="con-icon">{props[0].name[0]}</p>
                <div className="header-text">
                    <p className="con-title">{props[0].name}</p>
                    <p className="con-chat-timeStamp">{props[0].timeStamp}</p>
                </div>
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </div>
            <div className="message-container">
                <MessageOthers />
                <MessageSelf />
                <MessageOthers />
                <MessageSelf />
                <MessageOthers />
                <MessageSelf />
                <MessageOthers />
                <MessageSelf />
            </div>
            <div className="text-input-area">
                <input placeholder="Type a Message" className="search-box" />
                <IconButton>
                    <SendIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default ChatArea