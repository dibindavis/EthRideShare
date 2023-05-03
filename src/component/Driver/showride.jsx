// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import {
//   ListItem,
//   ListItemText,
//   ListItemSecondaryAction,
//   Button,
// } from "@material-ui/core";
// import { Rating, Typography } from "@mui/material";
// import { RateDriver } from "../../services/services";
// import { useState } from "react";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import {
  Box,
  Button,
  Card,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Rating,
  Tooltip,
  Typography,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import ethimage from "../../resources/4373172_ethereum_logo_logos_icon.png";
import { useState } from "react";
import { CancelRide, RateDriver, getStop } from "../../services/services";
import { useEffect } from "react";
import Header from "../header";

const Showride = (props) => {
  useEffect(() => {
    const timeOut=undefined;
    getStops(pickup, dropoff);
    if (status === 0 && remainingSeats === 0) {
      timeOut = setTimeout(() => {
        CancelRide(Id).then((res) => {
          alert(`Ride ${Id} is cancelled`);
        });
      }, new Date().getTime() - departureTime);
    }
    return()=>clearTimeout(timeOut);
  }, []);

  const [rating, setRating] = useState(3);
  const [toolTip, setToolTip] = useState("");
  const {
    Id,
    user,
    fare,
    pickup,
    driver,
    dropoff,
    remainingSeats,
    departureTime,
    distance,
    rate,
    status,
    onJoin,
    onStart,
    onReady,
    onFinish,
    onCancel,
    onComplete,
  } = props;
  const getStatus = (id) => {
    switch (id) {
      case "0":
        return "Created";
      case "1":
        return "Started";
      case "2":
        return "Cancelled";
      case "3":
        return "Finished";
      default:
        return "no status";
    }
  };
  const getStops = async (pickup, dropoff) => {
    const street = [];
    const toolTip = [];
    await getStop(pickup, dropoff).then((res) => {
      res.data.route.legs.map((data) =>
        data.maneuvers.map((data) =>
          data.streets.map((data) => {
            street.push(data);
          })
        )
      );
    });
    street.filter(onlyUnique).map((place) => {
      if (place.includes("Junction") || place.includes("Road")) {
        toolTip.push(place);
      }
    });
    setToolTip(toolTip);
  };
  function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
  }
  return (
    <>
      <Card
        sx={{
          height: "15rem",
          minWidth: "70%",
          padding: "1rem",
          margin: "2vh 2vw",
          background: "linear-gradient(to right bottom, #3282B8, #0F4C75)",
          borderRadius: "18px",
          display: "flex",
        }}
      >
        <Box width="70vw">
          <ListItem>
            <ListItemText
              primary={
                <>
                  <Typography
                    fontFamily="Montserrat"
                    fontWeight="bolder"
                    width="80%"
                  >
                    {`${pickup} -> ${dropoff}`}
                    <Tooltip sx={{ marginBottom: "5px" }} title={toolTip}>
                      <IconButton>
                        <InfoIcon />
                      </IconButton>
                    </Tooltip>
                  </Typography>
                </>
              }
              secondary={
                <>
                  <Typography
                    sx={{ fontWeight: "bold", fontFamily: "Montserrat" }}
                  >
                    {`Departure :${departureTime}`}
                  </Typography>
                  <Typography
                    sx={{ fontWeight: "bold", fontFamily: "Montserrat" }}
                  >
                    {`Driver Address :${driver}`}
                  </Typography>
                 {
                    rate !== undefined &&
                   <Typography
                   sx={{ fontWeight: "bold", fontFamily: "Montserrat" }}
                   >
                    {`Rate per km :${rate}`}
                  </Typography>
                  }
                  <Typography
                    sx={{ fontWeight: "bold", fontFamily: "Montserrat" }}
                  >
                    {`Ride Id:  ${Id}`}
                  </Typography>
                  {
                    remainingSeats > 0 &&
                    <Typography
                    sx={{ fontWeight: "bold", fontFamily: "Montserrat" }}
                    >
                    {`Capacity : ${remainingSeats}`}
                  </Typography>
                  }
                  <Typography
                    sx={{ fontWeight: "bold", fontFamily: "Montserrat" }}
                  >
                    {`Status : ${getStatus(status)}`}
                  </Typography>
                </>
              }
            />
            <ListItemSecondaryAction>
              {user == "rider" && (
                <>
                  <Typography component="legend">Rate Driver</Typography>
                  <Rating
                    name="simple-controlled"
                    value={rating}
                    onChange={(event) => {
                      console.log("hi");
                      console.log(event.target.value);
                      setRating(event.target.value);
                      RateDriver(Id, event.target.value).then((res) =>
                        console.log(res)
                      );
                    }}
                  />
                </>
              )}
            </ListItemSecondaryAction>
          </ListItem>
        </Box>
        <hr
          style={{
            height: "90%",
            width: "2px",
            background: "#1B262C",
            margin: "1rem 2rem",
            border: "#1B262C",
          }}
        ></hr>
        <Box>
          <Box
            sx={{ display: "flex", padding: "1rem", flexDirection: "column" }}
          >
            {/* { status !== 1 &&
              <Box sx={{display:'flex',gap:'1rem'}}>
            <MyLocationIcon/>
            <Typography fontFamily="Montserrat">Current Location</Typography>
            </Box>
            } */}
            <Box sx={{ display: "flex", gap: "1rem" }}>
              <Typography
                sx={{
                  minwidth: "40%",
                  fontWeight: "bold",
                  paddingTop: "6px",
                  fontFamily: "Montserrat",
                }}
              >{`${fare} ETH`}</Typography>
              <img src={ethimage} width="30vw" height="40rem" />
            </Box>
          </Box>
          <Box sx={{ padding: "1rem", display: "flex", gap: "1rem" }}>
            {onJoin && (
              <Button
                onClick={onJoin}
                sx={{
                  ":hover": {
                    color: "#1B262C",
                    background: "#BBE1FA",
                    borderWidth: "2rem",
                  },
                  color: "whitesmoke",
                  backgroundColor: "#1B262C",
                  borderRadius: "2rem",
                }}
              >
                JOIN
              </Button>
            )}
            {onStart && (
              <Button
                onClick={onStart}
                sx={{
                  ":hover": {
                    color: "#1B262C",
                    background: "#BBE1FA",
                    borderWidth: "2rem",
                  },
                  color: "whitesmoke",
                  backgroundColor: "#1B262C",
                  borderRadius: "2rem",
                }}
              >
                START
              </Button>
            )}
            {onReady && (
              <Button
                onClick={onReady}
                sx={{
                  ":hover": {
                    color: "#1B262C",
                    background: "#BBE1FA",
                    borderWidth: "2rem",
                  },
                  color: "whitesmoke",
                  backgroundColor: "#1B262C",
                  borderRadius: "2rem",
                }}
              >
                READY
              </Button>
            )}
            {onCancel && (
              <Button
                onClick={onCancel}
                sx={{
                  ":hover": {
                    color: "#1B262C",
                    background: "#BBE1FA",
                    borderWidth: "2rem",
                  },
                  color: "whitesmoke",
                  backgroundColor: "#1B262C",
                  borderRadius: "2rem",
                }}
              >
                CANCEL
              </Button>
            )}
            {onFinish && (
              <Button
                onClick={onFinish}
                sx={{
                  ":hover": {
                    color: "#1B262C",
                    background: "#BBE1FA",
                    borderWidth: "2rem",
                  },
                  color: "whitesmoke",
                  backgroundColor: "#1B262C",
                  borderRadius: "2rem",
                }}
              >
                FINISH
              </Button>
            )}
            {onComplete && (
              <Button
                onClick={onComplete}
                sx={{
                  ":hover": {
                    color: "#1B262C",
                    background: "#BBE1FA",
                    borderWidth: "2rem",
                  },
                  color: "whitesmoke",
                  backgroundColor: "#1B262C",
                  borderRadius: "2rem",
                }}
              >
                COMPLETE
              </Button>
            )}
          </Box>
        </Box>
      </Card>
    </>
  );
};
export default Showride;
