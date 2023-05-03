import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Button, Typography } from "@mui/material";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalState } from "../App";
import { doReverseGeocode, getGeolocation } from "../services/services";
const Header = () => {
  const [user] = useGlobalState("user");
  const [account] = useGlobalState("account");
  console.log(user + " from header");

  const navigate = useNavigate();

  const [anchorElUser, setAnchorElUser] = useState(null);
  const settings = ["profile", "logout"];
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = (event) => {
    const page = event.target.parentNode.getAttribute("name");
    if (page !== null) {
      navigate(`/${page}`);
    }
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={{ background: "#0F4C75" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link
            to="/dashboard"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
              }}
            >
              Ride X
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            {user === "driver" && (
              <Link
                to="addride"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <MenuItem>
                  <Typography textAlign="center">Add Ride</Typography>
                </MenuItem>
              </Link>
            )}
          </Box>
          <Link
            to="/dashboard"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
              }}
            >
              Ride X
            </Typography>
          </Link>
          <Box
            sx={{
              flexGrow: 3,
              gap: "1rem",
              display: { xs: "none", md: "flex" },
              justifyContent: "right",
              alignContent: "right",
              marginRight: "2vw",
            }}
          >
            <Link
              to="ridehistory"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <Typography
                component="span"
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  borderBottomColor: "whitesmoke",
                  borderBlockWidth: "4px",
                }}
              >
                Ride History
              </Typography>
            </Link>
            {user === "driver" && (
              <Link
                to="addride"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <Typography
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                  }}
                >
                  Add Ride
                </Typography>
              </Link>
            )}
            
          </Box>

          <Box sx={{ flexGrow: 0, gap: "3px" }}></Box>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt={user} src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Typography component={"span"}>{account.slice(0, 8)}</Typography>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              setting == 'profile' && user == "rider" ||
              <MenuItem
                name={setting}
                key={setting}
                onClick={handleCloseUserMenu}
              >
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
