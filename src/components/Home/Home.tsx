import { Box, Grid, Typography } from "@mui/material";
import phoneImage from "./assets/Mockup.png";
import BlueImage from "./assets/Rectangle 1314.png";
import dottedImage from "./assets/Rectangle 1316.png";
import image1 from "./assets/Frame 51.png";
import image2 from "./assets/Frame 52.png";
import image3 from "./assets/Frame 53.png";
import image4 from "./assets/Frame 54 (3).png";
import firstDot from "./assets/Rectangle 1326.png";
import blueDot from "./assets/Ellipse 12.png";
import starImage from "./assets/Mask group.png";
import boxImage from "./assets/Rectangle 1406 (1).png";
import joblisitingImage from "./assets/Mask group (3).png";
import resumeBuildingImage from "./assets/Mask group (1).png";
import roadMapImage from "./assets/Mask group (2).png";
import resumeBuildingImage2 from "./assets/2-slide/Mask group (4).png";
import roadMapImage2 from "./assets/2-slide/Mask group (1).png";
import joblisitingImage2 from "./assets/2-slide/Mask group (3).png";
import careerGuidanceImage from "./assets/2-slide/Mask group (2).png";
import backgroundGrilImage from "./assets/2-slide/image 12.png";
import backgroundBlackImage from "./assets/image 21.png";
import resumeImage from "./assets/resumeimage.png";
import phoneImage2 from "./assets/iPhone X Side View Mockup.png";
import scanner from "./assets/scanner.png";
import miniphoneImage from "./assets/iPhone 17.png";
import star from "./assets/star (2) 1.png";
import downloadImage from "./assets/download 2.png";
import bug1 from "../login/laptop_1118534.png";
import { useNavigate } from "react-router-dom";


const images = [image1, image2, image3, image4];

function Home() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const isLoggedIn = !!token;
  return (
    <Grid sx={{ overflow: "hidden" }}>
      {/* Slide 1 */}
      <Box
        sx={{
          width: "100vw",
          height: "auto",
          paddingTop: "15vh",
          paddingBottom: "30px",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              flex: 1,
              padding: "50px 0px 0px 130px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: "50px",
                paddingY: "15px",
                paddingRight: "10%",
                fontWeight: "700",
                letterSpacing: "2px",
                lineHeight: "1.5",
              }}
            >
              Your PDF Might Be a Trap!{" "}
              <span
                style={{
                  background:
                    "linear-gradient(89.79deg, rgba(66, 84, 242, 0.88) 38.34%, rgba(204, 0, 255, 0.88) 99.82%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Scan Before It’s Too Late.
              </span>
            </Typography>
            <Typography
              sx={{
                color: "#6C6C6C",
                fontSize: "17px",
                paddingBottom: "20px",
                paddingRight: "20%",
              }}
            >
              Our system scans PDF files for malware using advanced sanitization
              tools. Upload, scan, and get instant results to ensure your
              documents are safe.
            </Typography>
            <Box>
              {isLoggedIn ? (
                <button
                  className="custom-button"
                  style={{ padding: "15px 30px" }}
                  onClick={() => navigate("/uploadFile")}
                >
                  Get Started Today
                </button>
              ) : (
                <button
                  className="custom-button"
                  style={{ padding: "15px 30px" }}
                  onClick={() => navigate("/login")}
                >
                  Get Started Today
                </button>
              )}
            </Box>

            {/* <Box
              sx={{
                display: "flex",
                border: "2px dashed rgba(66, 84, 242, 0.5)",
                margin: "30px 40px 20px 0px",
                justifyContent: "center",
                alignItems: "center",
                gap: 4,
                padding: "10px",
                borderRadius: "18px",
                position: "relative",
              }}
            >
              <Box sx={{ display: "flex" }}>
                {images?.map((image) => (
                  <img src={image} alt="" />
                ))}
              </Box>
              <Box>
                {" "}
                <img src={blueDot} alt="" />
              </Box>
              <Typography sx={{ color: "#4254F2" }}>
                400 People already joined
              </Typography>
              <img
                src={starImage}
                style={{ position: "absolute", top: "-34px", right: "-34px" }}
                alt=""
              />
            </Box> */}
          </Box>
          <Box sx={{ flex: 1, overflow: "hidden" }}>
            <Box sx={{ padding: "40px 0px 0px 70px", position: "relative" }}>
              {/* <Box
                sx={{
                  boxShadow: "0px 4px 74.2px 0px rgba(66, 84, 242, 0.36)",
                  width: "50vw",
                  height: "70vh",
                  backgroundColor: " #4254F2",
                  borderRadius: "100px 0px 0px 20px", // Adjusted border radius for top right skew
                  transform: "skew(-15deg)", // Skew transformation to create the slate-like effect
                  transformOrigin: "bottom left",
                }}
              ></Box> */}
              <Box sx={{ position: "relative", width: "40vw", height: "70vh" }}>
                {" "}
                <img
                  src={dottedImage}
                  alt=""
                  style={{ width: "58vw", height: "68vh", overflow: "hidden" }}
                />
                <Box sx={{ position: "absolute", top: "-20px", left: "-20px" }}>
                  <img
                    src={BlueImage}
                    alt=""
                    style={{
                      width: "65vw",
                      height: "75vh",
                      overflow: "hidden",
                    }}
                  />
                </Box>
              </Box>
              <img
                src={phoneImage}
                style={{
                  position: "absolute",
                  width: "50vw",
                  height: "70vh",
                  top: "20px",
                  left: "20px",
                  overflow: "hidden",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      {/* Slide 3 */}
      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(20px)",
            width: "90%",
            borderRadius: "25px",
            padding: "30px",
            marginTop: "50px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Typography sx={{ color: "#FFFFFF", fontSize: "28px" }}>
              Download <span style={{ color: "#4254F2" }}>Talentocraft!</span>
            </Typography>
            <Typography color={"#D9D9D9"} sx={{ Opacity: "0.7" }}>
              Explore the features and benefits of Talentocraft, your gateway to
              career success. Whether it's crafting ATS-friendly resume
            </Typography>
            <Box
              sx={{
                backgroundColor: "#0F10139C",
                boxShadow: "7px 10px 84.2px -24px #00000040",
                display: "flex",
                width: "60%",
                justifyContent: "space-around",
                alignItems: "center",
                padding: "10px",
                borderRadius: "15px",
              }}
            >
              <Typography
                sx={{ color: "#FFFFFF", width: "150px", textAlign: "center" }}
              >
                Scan QR to download Talento-craft app
              </Typography>
              <div>
                <Box
                  sx={{ border: "2px dashed #FFFFFF8F", borderRadius: "7px" }}
                >
                  <img src={scanner} alt="" />
                </Box>
              </div>
            </Box>
            <Box className="flex" style={{ gap: 50 }}>
              <Box
                sx={{
                  display: "flex",
                  border: "1px dashed #4254F2AB",
                  borderRadius: "12px",
                  flexDirection: "column",
                  padding: "20px",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                }}
              >
                <div className="flex justify-around w-full items-center gap-2">
                  <div>
                    <img src={star} alt="" style={{ width: "30px" }} />
                  </div>
                  <Typography sx={{ color: "#FFFFFFB0", fontSize: "26px" }}>
                    4.4
                  </Typography>
                </div>
                <Typography sx={{ color: "#FFFFFFB0", fontSize: "12px" }}>
                  8K reviews
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  border: "1px dashed #4254F2AB",
                  borderRadius: "12px",
                  flexDirection: "column",
                  padding: "20px",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                }}
              >
                <div className="flex justify-around w-full items-center gap-2">
                  <div>
                    <img src={downloadImage} alt="" style={{ width: "30px" }} />
                  </div>
                  <Typography sx={{ color: "#FFFFFFB0", fontSize: "26px" }}>
                    5k+
                  </Typography>
                </div>
                <Typography sx={{ color: "#FFFFFFB0", fontSize: "12px" }}>
                  App downloads{" "}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box>
            <img src={miniphoneImage} alt="" />
          </Box>
        </Box>
      </Box> */}
      {/* Slide 4 */}
      {/* <Box>
        <Box sx={{ width: "100vw", height: "auto" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "50px",
              padding: "30px",
              borderRadius: "20px",
            }}
          >
            <button
              style={{
                color: "white",
                padding: "15px 30px",
                border: "1.26px solid transparent",
                borderImageSource:
                  "linear-gradient(0deg, #4254F2 0%, rgba(0, 10, 102, 0) 93.75%)",
                borderImageSlice: 1,
                borderRadius: "20px",
                fontSize: "22px",
                fontWeight: "500",
                outline: "none",
                cursor: "pointer",
              }}
            >
              Subscription Plans
            </button>
          </Box>
          <Box></Box>
        </Box>
        <Box
          sx={{
            width: "100vw",
            height: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "60px",
            gap: 10,
          }}
        >
          <Box
            sx={{
              backgroundColor: "#111111E8",
              padding: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: 2,
              borderRadius: "18px",
            }}
          >
            <Typography
              sx={{ color: "white", fontSize: "28px", fontWeight: "500" }}
            >
              3 Resume
            </Typography>
            <hr
              style={{
                border: "none",
                height: "2px",
                background:
                  "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #4254F2 52.5%, rgba(0, 0, 0, 0) 100%)",
                width: "10vw",
                margin: 0,
              }}
            />
            <Typography
              sx={{ color: "#D9D9D9", fontSize: "24px", letterSpacing: "2px" }}
            >
              Unlimited Templates & Job Listings
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  color: "#D9D9D9",
                  fontSize: "24px",
                  letterSpacing: "2px",
                }}
              >
                ₹ 99 /-
              </Typography>
              <button
                className="custom-button"
                style={{ padding: "15px 20px" }}
              >
                Subscribe Now
              </button>
            </div>
          </Box>{" "}
          <Box
            sx={{
              backgroundColor: "#111111E8",
              padding: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              borderRadius: "18px",
              gap: 2,
            }}
          >
            <Typography
              sx={{ color: "white", fontSize: "28px", fontWeight: "500" }}
            >
              5 Resume
            </Typography>
            <hr
              style={{
                border: "none",
                height: "2px",
                background:
                  "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #4254F2 52.5%, rgba(0, 0, 0, 0) 100%)",
                width: "10vw",
                margin: 0,
              }}
            />
            <Typography
              sx={{ color: "#D9D9D9", fontSize: "24px", letterSpacing: "2px" }}
            >
              Unlimited Templates & Job Listings
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  color: "#D9D9D9",
                  fontSize: "24px",
                  letterSpacing: "2px",
                }}
              >
                ₹ 129 /-
              </Typography>
              <button
                className="custom-button"
                style={{ padding: "15px 20px" }}
              >
                Subscribe Now
              </button>
            </div>
          </Box>{" "}
        </Box>
      </Box> */}
      {/* Slide 5 */}
      {/* <Box
        sx={{
          width: "100vw",
          height: "auto",
          backgroundImage: `url(${backgroundBlackImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px",
          marginBottom: "100px",
        }}
      >
        <Box sx={{ paddingRight: "150px", flex: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontSize: "26px",
                color: "white",
                fontWeight: "600",
                letterSpacing: "2px",
                paddingY: "20px",
              }}
            >
              Discover <span style={{ color: "#4254F2" }}>Talentocraft</span>
            </Typography>
            <Typography
              sx={{
                color: "#D9D9D9",
                letterSpacing: "1.5px",
                paddingBottom: "20px",
              }}
            >
              Explore the features and benefits of Talentocraft, your gateway to
              career success. Whether it's crafting ATS-friendly resumes,
              mastering programming concepts, or finding the perfect job,
              Talentocraft has you covered.
            </Typography>
          </Box>
          <Box>
            <div style={{}}>
              <button
                style={{
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px 40px",
                  gap: 4,
                  fontSize: "18px",
                  marginTop: "20px",
                }}
                className="custom-button"
              >
                Watch Now <img src={resumeImage} alt="" />{" "}
              </button>{" "}
            </div>
          </Box>
        </Box>
        <Box sx={{ flex: 1 }}>
          <img
            src={phoneImage2}
            style={{ width: "80%", height: "80%" }}
            alt=""
          />
        </Box>
      </Box> */}
    </Grid>
  );
}

export default Home;
