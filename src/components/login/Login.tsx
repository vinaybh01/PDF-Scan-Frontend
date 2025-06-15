import { Box, Grid, Typography } from "@mui/material";
import backgroundImage from "./medium-shot-man-city-lifestyle 1.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import bug3 from "../Home/malware.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async () => {
    if (!email.trim() || !password.trim()) {
      alert("Email and password cannot be empty");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Success:", data);
        localStorage.setItem("token", data.token);
        navigate("/");
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error connecting to server");
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#07090D",
        overflow: "hidden",
      }}
    >
      <Box sx={{ width: "100%", height: "100%" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography
            sx={{
              color: "#FFFFFF",
              paddingX: "50px",
              paddingTop: "50px",
              cursor: "pointer",
            }}
          >
            <img src={bug3} style={{ width: "50px", height: "50px" }} alt="" />
          </Typography>
        </Link>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            flexDirection: "column",
            padding: "0px 50px 50px 80px",
            height: "100%",
            gap: 2,
          }}
        >
          <Typography sx={{ color: "#EAEAEA", fontSize: "28px" }}>
            Welcome Back
          </Typography>
          <Typography sx={{ color: "#FFFFFF99" }}>
            Please enter your details
          </Typography>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <label
              style={{
                fontFamily: "Outfit",
                color: "#FFFFFF",
                paddingBottom: "5px",
              }}
            >
              Your Email
            </label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                border: "1.21px solid #FFFFFF",
                background: "transparent",
                borderRadius: "8px",
                marginTop: "5px",
                width: "30vw",
                height: "60px",
                padding: "5px 15px 5px 20px",
                fontFamily: "Outfit",
                outline: "none",
                color: "#FFFFFF",
                fontSize: "20px",
              }}
              placeholder="Your Email ID"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <label
              style={{
                fontFamily: "Outfit",
                color: "#FFFFFF",
                paddingBottom: "5px",
              }}
            >
              Your Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                border: "1.21px solid #FFFFFF",
                background: "transparent",
                borderRadius: "8px",
                marginTop: "5px",
                width: "30vw",
                height: "60px",
                padding: "5px 15px 5px 20px",
                fontFamily: "Outfit",
                outline: "none",
                color: "#FFFFFF",
                fontSize: "20px",
              }}
              placeholder="Your Password"
            />
          </Grid>
          <Typography sx={{ color: "#FFFFFF" }}>
            New here?{" "}
            <Link to="/register" style={{ textDecoration: "none" }}>
              <span style={{ color: "#4254F2", cursor: "pointer" }}>
                Create your Account now.
              </span>
            </Link>{" "}
          </Typography>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              className="custom-button"
              onClick={handleSubmit}
              style={{
                padding: "13px 60px",
                fontSize: "18px",
              }}
            >
              Log in
            </button>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: "70%",
          height: "100%",
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          position: "relative",
          borderRadius: "20px 0px 0px 0px",
        }}
      >
        <Box
          sx={{
            background: "#00000038",
            boxShadow:
              "0px 18px 18.6px 0px #00000040 inset, 15px 2px 20.9px 0px #00000040 inset",
            width: "95%",
            height: "170px",
            position: "absolute",
            bottom: "0",
            right: "0",
            borderRadius: "20px 0px 0px 0px",
            backdropFilter: "blur(8px)",
          }}
        >
          <div className="flex justify-center items-center">
            {" "}
            <Typography
              sx={{
                color: "#FFFFFF",
                fontSize: "20px",
                width: "90%",
                letterSpacing: 1.5,
                paddingTop: "20px",
              }}
            >
              Behind every clean document is a smart scan. Log in to detect,
              clean, and download your PDF safely.
            </Typography>
          </div>
          {/* <div className="flex justify-between m-6">
            {" "}
            <Box>
              <Typography
                sx={{ color: "#FFFFFF", fontSize: "28px", letterSpacing: 1.5 }}
              >
                Amit Jain
              </Typography>
              <Typography
                sx={{ color: "#FFFFFF", fontSize: "16px", letterSpacing: 1.5 }}
              >
                Web developer
              </Typography>
              <Typography
                sx={{ color: "#FFFFFF", fontSize: "16px", letterSpacing: 1.5 }}
              >
                Wooden Street
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box className="flex">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </Box>
              <Box className="flex gap-2">
                <img src={leftArrow} alt="" />
                <img src={rightArrow} alt="" />
              </Box>
            </Box>
          </div> */}
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
