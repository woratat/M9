import * as React from "react";
import axios from "axios";
import MapIcon from "@mui/icons-material/Map";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import RoomIcon from "@mui/icons-material/Room";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export default function NestedList({parentCallback}) {
  const [open, setOpen] = React.useState(false);
  const [locations, setLocations] = React.useState([]);

  React.useEffect(() => {
    getdata();
  }, []);
  const getdata = async () => {
    const location = await axios.get("http://localhost:5000/api/locations");
    setLocations(location.data);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  const childToParent = (location) => {
    parentCallback(location)
  }
  

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" , display: "flex", flexDirection: "column"}}
      component="nav"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <MapIcon />
        </ListItemIcon>
        <ListItemText primary="Locations" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{display: "flex", flexDirection: "column", flex: 1}}>
          {locations.map((data, key) => {
            return (
              <ListItemButton sx={{ pl: 4 }} key={key}>
                <ListItemIcon>
                  <RoomIcon />
                </ListItemIcon>
                <ListItemText primary={data.name} onClick={() => childToParent(data)}/>
              </ListItemButton>
            );
          })}
        </List>
      </Collapse>
    </List>
  );
}
