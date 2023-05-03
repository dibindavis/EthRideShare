import Showride from "./Driver/showride";
import { Button, List } from "@mui/material";
import { Typography } from "@material-ui/core";
import { useEffect } from "react";
import {
  CompleteRide,
  FinishRide,
  calculateDistance,
  doReverseGeocode,
  getAllAvailableRide,
  getCurrentRide,
  getGeolocation,
  joinRide,
  toWei,
} from "./../services/services";
import { useState } from "react";
import { useGlobalState } from "../App";
const Rides = () => {
  const [user] = useGlobalState("user");
  const [account] = useGlobalState("account");
  const [dropoff, setDropoff] = useState({
    lat: "",
    long: "",
  });
  const [location, setLocation] = useState("");
  const [fare, setFare] = useState("");
  const [distance, setDistance] = useState("");
  const [currrides, setCurrRides] = useState([]);
  const [availableRide, setAvailableRide] = useState([]);
  useEffect(() => {
    getAllAvailableRide().then((res) => {
      setAvailableRide(res);
    });
    getCurrentRide(user).then((res) => {
      setCurrRides(res);
    });
  }, []);

  const handleJoinRide = (id, fare) => {
    joinRide(id, fare)
      .then((res) => {
        if (res.status) {
          alert("Joined Ride" + id);
        }
      })
      .catch((error) => {
        alert("cannot join the ride");
      });
  };
  const HandleFinish = (id) => {
    FinishRide(id).then((res) => {
      console.log(res);
    });
  };
  // const getDropOff = async (pickup) => {
  //   getGeolocation().then(async (res) => {
  //     setDropoff({
  //       ...dropoff,
  //       lat: await res.latitude,
  //       long: await res.longitude,
  //     });
  //     doReverseGeocode(dropoff).then((res) => {
  //       console.log(res);
  //       setLocation(res);
  //       calculateDistance(pickup, location).then((res) => {
  //         console.log(res);
  //         setDistance(Math.round(res));
  //       });
  //     });
  //   });
  // };
  const HandleComplete = async (id, pickup, rate) => {
    // await getDropOff(pickup).then((res) => {
    //   CompleteRide(
    //     id,
    //     toWei(JSON.stringify(parseInt(distance * rate))),
    //     location,
    //     Math.round(distance)
    //   ).then((res) => {
    //     console.log(res);
    //   });
    // });
    getGeolocation().then((res) => {
      doReverseGeocode({ lat: res.latitude, long: res.longitude }).then(
        (res) => {
          setLocation(res);
          calculateDistance(res, pickup)
            .then((res) => {
              setDistance(Math.round(res));
              console.log(location, distance);
            })
            .then((res) => {
              if (toWei(JSON.stringify(parseInt(distance * rate))) > 0) {
                CompleteRide(
                  id,
                  toWei(JSON.stringify(parseInt(distance * rate))),
                  location,
                  Math.round(distance)
                );
              }
            });
        }
      );
    });
    // console.log(
    //   id,
    //   toWei(JSON.stringify(parseInt(distance * rate))),
    //   location,
    //   distance
    // );
  };
  return (
    <>
      {/* <Button onClick={()=>getDropOff()}>Check</Button> */}
      <Typography>Current Ride</Typography>
      <hr></hr>
      <List>
        {currrides.length === 0 ? (
          <h2 style={{ textAlign: "center" }}>No current ride</h2>
        ) : (
          currrides.map(
            (ride) =>
              ride.status == 1 && (
                // totalFee, rideInfo.occupancy,rideInfo.pickup,rideInfo.dropoff,rideInfo.departure,rideInfo.distance
                <Showride
                  Id={ride.rideId}
                  key={ride.id}
                  fare={toWei(ride.fare)}
                  status={ride.status}
                  driver={ride.driver}
                  pickup={ride.pickup}
                  dropoff={ride.dropoff}
                  distance={ride.distance}
                  departureTime={new Date(
                    parseInt(ride.departure)
                  ).toLocaleString()}
                  onFinish={
                    user === "driver"
                      ? () => {
                          HandleFinish(ride.rideId);
                        }
                      : undefined
                  }
                  onComplete={
                    user === "rider"
                      ? () => {
                          HandleComplete(ride.rideId, ride.pickup, ride.rate);
                        }
                      : undefined
                  }
                />
              )
          )
        )}
      </List>
      <Typography>Available Rides</Typography>
      <hr></hr>

      <List>
        {availableRide.length == 0 ? (
          <h2 style={{ textAlign: "center" }}>No Available ride</h2>
        ) : (
          availableRide.map(
            (ride) =>
              ride.fare !== "0" &&
              ride.status === "0" && (
                <Showride
                  Id={ride.rideId}
                  key={ride.rideId}
                  driver={ride.driver}
                  fare={toWei(ride.fare)}
                  pickup={ride.pickup}
                  distance={ride.distance}
                  rate={ride.rate}
                  dropoff={ride.dropoff}
                  remainingSeats={ride.capacity - ride.passengers.length}
                  departureTime={new Date(
                    parseInt(ride.departure)
                  ).toLocaleString()}
                  status={ride.status}
                  onJoin={
                    user === "rider"
                      ? () => handleJoinRide(ride.rideId, ride.fare)
                      : undefined
                  }
                />
              )
          )
        )}
      </List>
    </>
  );
};
export default Rides;
