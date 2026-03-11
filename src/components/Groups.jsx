import "./myStyles.css";
import logo from '../images/chatting.png'
import { IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Groups = () => {
  return (
    <div className="list-container">
      <div className="ug-header">
        <img src={logo} alt="Logo" style={{ height: "2rem", width: "2rem", marginLeft: "10px" }} />
        <p className="ug-title">Available Groups</p>
      </div>
      <div className="ug-search">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input placeholder="Search" className="search-box" />
      </div>
      <div className="ug-list">
        <div className="list-tem">
          <p className="con-icon">T</p>
          <p className="con-title">Test Group</p>
        </div>
        <div className="list-tem">
          <p className="con-icon">T</p>
          <p className="con-title">Test Group</p>
        </div>
        <div className="list-tem">
          <p className="con-icon">T</p>
          <p className="con-title">Test Group</p>
        </div>
        <div className="list-tem">
          <p className="con-icon">T</p>
          <p className="con-title">Test Group</p>
        </div>
        <div className="list-tem">
          <p className="con-icon">T</p>
          <p className="con-title">Test Group</p>
        </div>
        <div className="list-tem">
          <p className="con-icon">T</p>
          <p className="con-title">Test Group</p>
        </div>
        <div className="list-tem">
          <p className="con-icon">T</p>
          <p className="con-title">Test Group</p>
        </div>
        <div className="list-tem">
          <p className="con-icon">T</p>
          <p className="con-title">Test Group</p>
        </div>
        <div className="list-tem">
          <p className="con-icon">T</p>
          <p className="con-title">Test Group</p>
        </div>

      </div>
    </div>
  )
}

export default Groups