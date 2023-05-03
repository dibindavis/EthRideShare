import Showride from "./Driver/showride";
import { List } from "@mui/material";
import { Typography } from "@material-ui/core";
import { useEffect } from "react";
import {
  getAllRide,
  startRide,
  ReadyRide,
  CancelRide,
  toWei
} from "./../services/services";
import { useState } from "react";
import { useGlobalState } from "../App";

const Ridehistory = () => {
  const [rides, setRides] = useState([]);
  const [completedrides, setcompletedRides] = useState([]);
  const [user] = useGlobalState("user");
  
  const [address] = useGlobalState("account");
  useEffect(() => {
    getAllRide(user,0)
      .then((res) => {
        setRides(res);
        console.log(rides);
      })
      .catch((error) => {
        console.log(error);
      });
      getAllRide(user,3)
      .then((res) => {
        setcompletedRides(res);
        console.log(completedrides);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [List]);

  const HandleRideStart = (id) => {
    startRide(id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const HandleRideReady = (id) => {
    ReadyRide(id).then((res) => {
      console.log(res);
    });
  };
  const HandleCancel = (id) => {
    CancelRide(id, address).then((res) => {
      console.log(address);
      console.log(res);
    });
  };
  return (
    <>
      <Typography>Upcoming Rides</Typography>
      <hr></hr>
      <List>
        {rides.length == 0 ? (
          <h2 style={{ textAlign: "center" }}>No Upcoming ride</h2>
        ) : (

          rides.map(
            (ride) =>
            ride.status == 0 && (
              <Showride
                  key={ride.id}
                  Id={ride.rideId}
                  driver={ride.driver}
                  fare={toWei(ride.fare)}
                  pickup={ride.pickup}
                  distance={ride.distance}
                  dropoff={ride.dropoff}
                  status={ride.status}
                  remainingSeats={ride.capacity - ride.passengers.length}
                  departureTime={new Date(
                    parseInt(ride.departure)
                  ).toLocaleString()}
                  onStart={
                    user !== "rider"
                      ? () => HandleRideStart(ride.rideId)
                      : undefined
                  }
                  onReady={
                    user === "rider"
                      ? () => HandleRideReady(ride.rideId)
                      : undefined
                  }
                  onCancel={
                       () => {
                          HandleCancel(ride.rideId);
                        }
                  }
                />
              )
          )
        )}
      </List>
      <Typography>Completed Rides</Typography>
      <hr></hr>

      <List>
        {completedrides.length == 0 ? (
          <h2 style={{ textAlign: "center" }}>No Completed ride</h2>
        ) : (
          completedrides.map(
             (ride) =>
              ride.status === "3" && (
                <>
                  <Showride
                    user = {user}
                    Id={ride.rideId}
                    driver={ride.driver}
                    key={ride.rideId}
                    pickup={ride.pickup}
                    dropoff={ride.dropoff}
                    fare={toWei(ride.fare)}
                    distance={ride.distance}
                    status={ride.status}
                    remainingSeats='0'
                    departureTime={new Date(
                      parseInt(ride.departure)
                      ).toLocaleString()}
                      />
                     
                </>
              )
          )
        )}
      </List>
    </>
  );
};
export default Ridehistory;
