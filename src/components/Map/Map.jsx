import React from "react";
import "./styles";
import GoogleMapReact from "google-map-react";
import { paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab";
import useStyles from "./styles.js";
function Map() {
  const classes = useStyles();

  //this means this variable will be set false if the width of the device is larger than 600px
  const isMobile = useMediaQuery("(min-width:600px)");

  const coordinates = { lat: 0, lon: 0 };

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={""}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
}

export default Map;
