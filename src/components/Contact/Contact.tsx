import { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import UpWards from "./Mask group.png";
import DownWards from "./Mask group (1).png";
import { gettingStarted, account, pricingAndLicense } from "./Data";

interface Question {
  question: string;
  answer: string;
}

function Contact() {
  const [visibleAnswers, setVisibleAnswers] = useState<
    Record<string, boolean[]>
  >({
    gettingStarted: gettingStarted.map(() => false),
    account: account.map(() => false),
    pricingAndLicense: pricingAndLicense.map(() => false),
  });

  const handleToggleAnswer = (category: string, index: number) => {
    setVisibleAnswers((prev) => ({
      ...prev,
      [category]: prev[category].map((visible, i) =>
        i === index ? !visible : visible
      ),
    }));
  };

  const renderQuestions = (category: string, questions: Question[]) =>
    questions.map((q, index) => (
      <Box
        key={index}
        sx={{
          backgroundColor: "#17171791",
          padding: "20px",
          margin: "20px",
          width: "80%",
          borderRadius: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            id="question"
            sx={{
              fontWeight: "500",
              fontSize: "17px",
              paddingY: "5px",
              color: visibleAnswers[category][index] ? "#4254F2" : "#BCBCBC",
            }}
          >
            {q.question}
          </Typography>
          {visibleAnswers[category][index] && (
            <Typography
              id="answer"
              sx={{ color: "#B5B5B5", fontSize: "15px", width: "90%" }}
            >
              {q.answer}
            </Typography>
          )}
        </Box>
        <Box>
          <img
            src={visibleAnswers[category][index] ? UpWards : DownWards}
            style={{ cursor: "pointer" }}
            alt="toggle"
            onClick={() => handleToggleAnswer(category, index)}
          />
        </Box>
      </Box>
    ));

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
      {/* Header */}
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
            gap: 1,
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
              Frequently Asked{" "}
              <span style={{ color: "#4254F2" }}>Questions</span>
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
            Can’t find what you're looking for here? Feel free to reach out{" "}
            <span style={{ color: "#4254F2" }}>Xyz2025@gmail.com</span>
          </Typography>
        </Box>
      </Box>
      {/* Questions */}
      <Box sx={{ marginY: "20px" }}>
        <Typography
          style={{
            textAlign: "left",
            fontSize: "22px",
            margin: "0px 0px 0px 130px",
          }}
        >
          Getting Started
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {renderQuestions("gettingStarted", gettingStarted)}
        </Box>
      </Box>
      <Box sx={{ marginY: "20px" }}>
        <Typography
          style={{
            textAlign: "left",
            fontSize: "22px",
            margin: "0px 0px 0px 130px",
          }}
        >
          Account
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {renderQuestions("account", account)}
        </Box>
      </Box>
      {/* <Box sx={{ marginY: "20px" }}>
        <Typography
          style={{
            textAlign: "left",
            fontSize: "22px",
            margin: "0px 0px 0px 130px",
          }}
        >
          Pricing and License
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {renderQuestions("pricingAndLicense", pricingAndLicense)}
        </Box>
      </Box> */}
    </Grid>
  );
}

export default Contact;
