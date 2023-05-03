import { useEffect, useState } from "react";
import {
  DriverCompletedRide,
  getDriverRating,
  getDriverReward,
} from "../services/services";
import { useGlobalState } from "../App";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Card, CardContent, Rating, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  title: {
    fontSize: 14,
    fontFamily:'Montserrat',
  },
  pos: {
    marginBottom: 12,
  },
});
const Profile = () => {
  const classes = useStyles();
  const [account] = useGlobalState("account");
  const [user] = useGlobalState("user");
  const [rating, setRating] = useState(0);
  const [reward, setReward] = useState(0);
  const [completedRide, setCompletedRide] = useState(0);
  useEffect(() => {
    getDriverRating(account).then((res) => {
      setRating(res);
    });
    getDriverReward(account).then((res) => {
      setReward(res);
    });
    DriverCompletedRide(account).then((res) => {
      setCompletedRide(res);
    });
  }, []);
  const [openHandle, setOpenHandle] = useState(false);
  const handleClick = async () => {
    console.log("hii");
    setOpenHandle(!openHandle);
  };

  return (
    <div style={{padding:'5rem 15rem'}}>
      <Link to= "/dashboard">
      <ArrowBackIcon/>
      </Link>
    
    <Card sx={{width:'50vw'}}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Completed Ride
        </Typography>
        <Typography variant="h5" component="h2">
          {completedRide}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Remaining Reward
        </Typography>
        <Typography variant="h6" component="h3">
          {reward}
        </Typography>
        {/* <Typography className={classes.pos} color="textSecondary">
          Balance
        </Typography>
        <Typography variant="h6" component="h3">
          
        </Typography> */}
        <Typography className={classes.pos} color="textSecondary">
          Rating
        </Typography>
        <Typography variant="h6" component="h3">
        {rating}
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
};

export default Profile;
