import { Box, Button, Card, Typography } from "@mui/material";
import drivericon from "../resources/8104105.png";
import img from "../resources/orange-modern-abstract-background-modern-orange-abstract-design-concept-of-web-page-design-easy-to-edit-illustration-vector.png";
import MetamaskInit from "../services/metamaskInit";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useGlobalState } from "../App";

const Login = () => {
  useEffect(() => {
    setisMetamaskLogged(false);
  }, []);
  const [account, setAccount] = useGlobalState('account')
  const [user,setUser]=useGlobalState('user')
  const [isMetamaskLogged, setisMetamaskLogged] = useState(false);
  const handleSubmit = async () => {
    await MetamaskInit().then((res) => {
      if (res !== undefined) {
        console.log(res);
        setAccount(res);
        setisMetamaskLogged(true);
      }
    });
  };
  const buttonColor = account === undefined ? "success" : "warning";

  return (
    <div style={{ overflow: "auto", background: "linear-gradient(to right bottom, #1B262C, #BBE1FA)" }}>
      <Box
        sx={{
          width: "50vw",
          height: "70vh",
          backgroundColor: "#3282B8",
          opacity: "70%",
          borderRadius: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "15vh 25vw",
          boxShadow: ".2px 3px 5px .2px",
        }}
      >
        <Box >
          <Box style={{ textAlign: "center" }}>
            <Typography
              variant="h4"
              sx={{
                color: "whitesmoke",
                textShadow: "2px 2px 3px rgba(46,91,173,0.6)",
              }}
            >
              WELCOME TO RIDEX
            </Typography>
          </Box>
          <Box style={{ textAlign: "center", marginTop: "2vh" }}>
            {isMetamaskLogged === true ? (
              <Typography sx={{ color: "whitesmoke" }}>
                Account : {account}
              </Typography>
            ) : (
              <Button
                variant="contained"
                onClick={handleSubmit}
                color={buttonColor}
              >
                Login to metamask
              </Button>
            )}
          </Box>
          {isMetamaskLogged && (
            <Box sx={{ display: "flex", margin: "4vh 3vw", gap: "25vw" }}>
              <Link
                style={{textDecoration:'none'}}
                onClick={()=>{setUser("rider")}}
                to={{
                  pathname: "/dashboard",
                  state: { user: "rider", account: account },
                }}
              >
                <Card
                  style={{
                    minHeight: "20vh",
                    minWidth: "10vw",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={drivericon}
                    style={{ height: "10vh", width: "6vw", margin: "2vh 1vw" }}
                  ></img>
                  <Typography>Rider</Typography>
                </Card>
              </Link>
              <Link
                onClick={()=>{setUser("driver")}}
                style={{textDecoration:'none'}}
                to={{
                  pathname: "/dashboard",
                  state: { user: "driver"}
                }}
              >
                <Card
                  style={{
                    height: "20vh",
                    width: "10vw",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={drivericon}
                    style={{ height: "10vh", width: "6vw", margin: "2vh 1vw" }}
                  ></img>
                  <Typography>Driver</Typography>
                </Card>
              </Link>
            </Box>
          )}
        </Box>
      </Box>
    </div>
  );
};
export default Login;
