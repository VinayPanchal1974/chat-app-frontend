import "./myStyles.css"

const MessageOthers = () => {
  const props1 = { name: "RandomUser", message: "This is Sample a Message"};
  return (
      <div className="conversation-container">
        <p className="con-icon">{props1.name[0]}</p>
        <div className="other-text-content">
          <p className="con-title">{props1.name}</p>
          <p className="con-lastMessage">{props1.message}</p>
          <p className="con-other-timeStamp">12:00am</p>
        </div>
      </div>
  )
}

export default MessageOthers    