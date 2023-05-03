import { Button, InputLabel, TextField } from "@material-ui/core";
import { useState } from "react";
import { addRide, calculateDistance } from "../../services/services";

import { Autocomplete, Stack, Typography } from "@mui/material";
import axios from "axios";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useGlobalState } from "../../App";
const API_KEY = "R65a16jMmWLk6JtND4kZwIuG6QDdlQVP";
dayjs.extend(localizedFormat);
const Addride = () => {
  const [option, setOption] = useState([]);
  const [rideInfo, setRideInfo] = useState({
    pickup: "",
    dropoff: "",
    rate: "",
    distance: "",
    occupancy: "",
    departure: new Date()+10,
  });

  const HandleSubmit = async () => {

    await getDistance(rideInfo.pickup, rideInfo.dropoff);
    const totalFee = rideInfo.rate * rideInfo.distance * 0.1;
    console.log(
      Math.round(parseInt(totalFee)),
      rideInfo.occupancy,
      rideInfo.rate,
      rideInfo.distance
    );
    addRide(
      Math.round(parseInt(totalFee)),
      rideInfo.occupancy,
      rideInfo.pickup,
      rideInfo.dropoff,
      rideInfo.departure,
      rideInfo.rate,
      Math.round(parseInt(rideInfo.distance))
    ).then((res) => {
      if (res.status) {
        alert("Ride added");
      }
    });
  };
  const handleLocationChange = async (event, value) => {
    const suggestion = await getSuggestion(value);
    setOption(suggestion);
    setRideInfo({ ...rideInfo, [event.target.name]: value });
  };
  const getSuggestion = async (data) => {
    let result;
    await axios
      .get(
        `https://www.mapquestapi.com/search/v3/prediction?key=${API_KEY}&limit=6&collection=adminArea&q=${data}`
      )
      .then((res) => {
        result = res.data.results;
      });
    const suggestion = result.map((item) => item.displayString);
    return suggestion;
  };
  const getDistance = async (source, destination) => {
    calculateDistance(source, destination).then((res) => {
      setRideInfo({
        ...rideInfo,
        distance: Math.ceil(JSON.stringify(res)),
      });
    });
  };
  const onChange = (event) => {
    setRideInfo({ ...rideInfo, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Stack spacing={"1rem"} sx={{ width: 300, padding: "2.5%" }}>
          <div>
            <Typography sx={{ fontSize: "3rem" }}>Add Ride</Typography>
          </div>
          <InputLabel>Pickup location</InputLabel>
          <Autocomplete
            freeSolo
            options={option ?? []}
            renderInput={(params) => (
              <TextField {...params} name="pickup" label="Pickup" />
            )}
            onInputChange={handleLocationChange}
          />
          <InputLabel>Dropoff location</InputLabel>
          <Autocomplete
            freeSolo
            options={option ?? []}
            renderInput={(params) => (
              <TextField {...params} name="dropoff" label="DropOff" />
            )}
            onInputChange={handleLocationChange}
          />{" "}
          <InputLabel>Rate per Km</InputLabel>
          <TextField onChange={onChange} name="rate" type="number" />
          <InputLabel>Occupancy</InputLabel>
          <TextField onChange={onChange} name="occupancy" type="number" />
          <InputLabel>Departure Time</InputLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              id="datetime"
              disablePast
              onChange={(event) => {
                  setRideInfo({ ...rideInfo, departure: event.$d.getTime() });
                }
              }
            />
          </LocalizationProvider>
          <br></br>
          <Button
            style={{ background: "rgba(119, 198, 247)", color: "whitesmoke" }}
            variant="contained"
            onClick={HandleSubmit}
          >
            Add Ride
          </Button>
        </Stack>
      </div>
    </>
  );
};
export default Addride;
