import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material/";

export default function BasicCard({ className, key, id, name }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          #{id + 1}
        </Typography>
        <div style={{ display: "flex" , textAlign: "center" , alignItems: "center" }}>
          <Avatar />
          <Typography variant="h5" component="div" sx={{ ml: 1 }}>
            {name}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined" style={{color: "red", border: "1px solid red"}}>See More</Button>
      </CardActions>
    </Card>
  );
}
