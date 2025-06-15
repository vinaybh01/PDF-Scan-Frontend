import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import bug from "../Home/bug.png";
import bug2 from "../Home/bug (1).png";
import bug3 from "../Home/malware.png";
import bug4 from "../Home/virus.png";

function Header() {
  const location = useLocation();
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down("md"));

  const navigate = useNavigate();

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const isActive = (pathname: string) => {
    return location.pathname === pathname
      ? { fontWeight: "550", color: "#4254F2", fontSize: "22px" }
      : { fontSize: "20px", color: "#939393" };
  };

  const renderDivider = (isActive: boolean, pathname: string) => (
    <div
      style={{
        borderBottom: isActive ? "4px solid #4254F2" : "none",
        marginLeft: pathname === "/" ? "20px" : "0px",
        borderTopLeftRadius: isActive ? "20px" : "0px",
        borderTopRightRadius: isActive ? "20px" : "0px",
        marginRight: pathname === "/contact" ? "20px" : "0px",
      }}
    />
  );

  const token = localStorage.getItem("token");
  const isLoggedIn = !!token;

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleLogo = () => {
    navigate("/");
  };

  return (
    <Grid sx={{ position: "absolute", zIndex: 2, top: 0 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "20px 0px",
          width: "100vw",
          height: "10vh",
        }}
      >
        {" "}
        <Box sx={{ margin: "10px", marginLeft: "30px" }}>
          <Typography sx={{ color: "white" }}>
            <img
              src={bug3}
              onClick={handleLogo}
              style={{ width: "50px", height: "50px", cursor: "pointer" }}
              alt=""
            />
          </Typography>
        </Box>
        <Box
          className="custom-gradient-background"
          sx={{
            padding: "10px 10px 0px 15px",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "space-between",
            width: "40vw",
          }}
        >
          <Box>
            <Button
              color="inherit"
              component={Link}
              to="/"
              sx={{
                textTransform: "none",
                marginLeft: "20px",
                ...isActive("/"),
              }}
            >
              Home
            </Button>
            {renderDivider(location.pathname === "/", location.pathname)}
          </Box>
          <Box>
            <Button
              color="inherit"
              component={Link}
              to="/uploadFile"
              sx={{
                textTransform: "none",
                ...isActive("/uploadFile"),
                marginRight: "20px",
              }}
            >
              Upload
            </Button>
            {renderDivider(
              location.pathname === "/uploadFile",
              location.pathname
            )}
          </Box>
          <Box>
            <Button
              color="inherit"
              component={Link}
              to="/about"
              sx={{
                textTransform: "none",
                ...isActive("/about"),
                marginRight: "20px",
              }}
            >
              About
            </Button>
            {renderDivider(location.pathname === "/about", location.pathname)}
          </Box>
          <Box>
            <Button
              color="inherit"
              component={Link}
              to="/contact"
              sx={{
                textTransform: "none",
                ...isActive("/contact"),
                marginRight: "20px",
              }}
            >
              Contact
            </Button>
            {renderDivider(location.pathname === "/contact", location.pathname)}
          </Box>
        </Box>
        <Box sx={{ margin: "10px", marginRight: "30px" }}>
          {isLoggedIn ? (
            <button
              className="custom-button"
              onClick={handleLogout}
              style={{
                padding: "10px 30px",
              }}
            >
              Log out
            </button>
          ) : (
            <button
              className="custom-button"
              onClick={() => navigate("/login")}
              style={{
                padding: "10px 30px",
              }}
            >
              Log in
            </button>
          )}
        </Box>
      </Box>
    </Grid>
  );
}

export default Header;
