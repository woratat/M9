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

export default function NestedList() {
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

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
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
        <List component="div" disablePadding>
          {locations.map((data) => {
            return (
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <RoomIcon />
                </ListItemIcon>
                <ListItemText primary={data.name} />
              </ListItemButton>
            );
          })}
        </List>
      </Collapse>
    </List>
  );
}
