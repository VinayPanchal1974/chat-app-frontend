import { useState } from 'react';
import ChatArea from './ChatArea';
import './myStyles.css';
import Sidebar from './Sidebar';

const MainContainer = () => {
    const [conversations, __setConversation] = useState([
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
        ])
    return (
        <div className='main-container'>
            <Sidebar />
            <ChatArea props={conversations[1]}/>
        </div>
    )
}

export default MainContainer