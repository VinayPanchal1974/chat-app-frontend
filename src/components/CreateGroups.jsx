import { IconButton } from "@mui/material";
import "./myStyles.css";
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
const CreateGroups = () => {
  return (
    <div className="createGroups-container">
      <input placeholder="Enter Group Name" className="search-box" />
      <IconButton>
        <DoneOutlineIcon />
      </IconButton>
    </div>
  )
}

export default CreateGroups