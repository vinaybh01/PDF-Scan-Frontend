import { Box, Grid, Typography } from "@mui/material";
import { useState } from "react";

function About() {
  const [activeSection, setActiveSection] = useState("");

  const handleClick = (id: any) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  const sections = [
    { id: "user-license", title: "User License" },
    { id: "disclaimer", title: "Disclaimer" },
    { id: "limitations", title: "Limitations" },
    // { id: "governing-law", title: "Governing Law" },
  ];

  return (
    <Grid
      sx={{
        backgroundColor: "#07090D",
        overflow: "hidden",
        color: "#FFFFFF",
        width: "100vw",
        height: "auto",
      }}
    >
      {/* Slide 1 */}
      <Box
        sx={{
          width: "100vw",
          height: "auto",
          paddingTop: "20vh",
          paddingBottom: "30px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="flex">
            <Typography
              sx={{
                fontSize: "38px",
                letterSpacing: 1.5,
                fontWeight: 600,
              }}
            >
              Privacy <span style={{ color: "#4254F2" }}>Policy</span>
            </Typography>
          </div>
          <Typography
            sx={{
              width: "80%",
              textAlign: "center",
              color: "#B8B8B8",
              letterSpacing: 2,
            }}
          >
            At PDF Scanner, we are committed to protecting your privacy and
            securing any personal information you share with us. This Privacy
            Policy explains how we collect, use, and safeguard your data when
            you interact with our platform. Please read it carefully to
            understand how we handle your information.
          </Typography>
        </Box>
      </Box>
      {/* Slide 2 */}
      <Box
        sx={{
          display: "flex",
          height: "calc(100vh - 40vh)",
          overflowY: "auto",
        }}
      >
        <Box
          sx={{
            background: "#0F101396",
            display: "flex",
            alignItems: "left",
            justifyContent: "center",
            flexDirection: "column",
            gap: 2,
            margin: "0px 30px",
            padding: "20px 30px",
            borderRadius: "25px",
            minWidth: "15vw",
            maxHeight: "30vh",
            position: "fixed",
            top: "45vh",
          }}
        >
          {sections.map((section) => (
            <Typography
              key={section.id}
              onClick={() => handleClick(section.id)}
              sx={{
                color: activeSection === section.id ? "#4254F2" : "#EAEAEA61",
                fontWeight: activeSection === section.id ? "bold" : "normal",
                cursor: "pointer",
              }}
            >
              {section.title}
            </Typography>
          ))}
        </Box>
        <Box
          sx={{
            marginLeft: "300px",
            width: "70%",
          }}
        >
          {sections.map((section) => (
            <Box id={section.id} key={section.id}>
              <Typography
                sx={{
                  color: "#FFFFFFE3",
                  fontSize: "22px",
                  paddingBottom: "10px",
                  textAlign: "justify",
                  fontWeight: "500",
                }}
              >
                {section.title}
              </Typography>
              <Typography sx={{ color: "#B5B5B5", textAlign: "justify" }}>
                Our user license allows you to access and use the PDF malware
                detection platform for personal, academic, and non-commercial
                purposes.
                <br />
                Users are granted a limited, non-transferable license to upload
                PDF files strictly for the purpose of malware scanning. Misuse
                or abuse of the platform, including uploading malicious or
                unauthorized files, is strictly prohibited.
              </Typography>
              <hr style={{ margin: "30px 0 30px 0" }} />
            </Box>
          ))}
        </Box>
      </Box>
      {/* <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "20px",
          padding: "20px",
          gap: 5,
        }}
      >
        <button
          style={{
            backgroundColor: "black",
            border: "2px solid #4254F2",
            padding: "10px 30px",
            borderRadius: "10px",
            fontWeight: "500",
          }}
        >
          Decline
        </button>
        <button
          className="custom-button"
          style={{
            backgroundColor: "#4254F2",
            padding: "10px 30px",
            borderRadius: "10px",
            fontWeight: "500",
          }}
        >
          Accept
        </button>
      </Box> */}
    </Grid>
  );
}

export default About;
