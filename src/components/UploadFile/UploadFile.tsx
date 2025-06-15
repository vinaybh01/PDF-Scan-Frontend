import { Box, Grid, Typography, Button, CircularProgress } from "@mui/material";
import React, { useState, useRef } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DownloadIcon from "@mui/icons-material/Download";
import star from "../Home/assets/Mask group.png";
import { useNavigate } from "react-router-dom";

function UploadFile() {
  const [loading, setLoading] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [sanitizedFileUrl, setSanitizedFileUrl] = useState<string | null>(null);
  const [scanMessage, setScanMessage] = React.useState<string | null>(null);
  const inputFileRef = useRef<HTMLInputElement | null>(null);
  const isLoggedIn = localStorage.getItem("token") !== null;
  const navigate = useNavigate();

  const handleUploadClick = () => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const selected = files[0];

    if (selected.size > 10 * 1024 * 1024) {
      alert("File size exceeds 10MB limit.");
      return;
    }

    if (selected.type !== "application/pdf") {
      alert("Please upload a PDF file.");
      return;
    }

    if (selected && selected.type === "application/pdf") {
      setFile(selected);
      setScanned(false);
      setSanitizedFileUrl(null);
    } else {
      alert("Please select a valid PDF file.");
    }
  };

  const handleScan = async (): Promise<void> => {
    if (!file) {
      alert("Please upload a PDF file first.");
      return;
    }

    setLoading(true);
    setScanned(false);
    setSanitizedFileUrl(null);
    setScanMessage(null); // reset message before scanning

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("http://localhost:7000/sanitize", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Failed to scan file");
      }

      const contentType = response.headers.get("Content-Type") || "";

      if (contentType.includes("application/pdf")) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        setSanitizedFileUrl(url);
        setScanned(true);
        setScanMessage(null); // no message needed, file ready to download
      } else {
        // Backend sent plain text message (e.g., clean or suspicious)
        const text = await response.text();
        setScanMessage(text);
        setScanned(true); // consider scan done but no sanitized file
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
        setScanMessage("Something went wrong: " + error.message);
      } else {
        setScanMessage("Something went wrong while scanning the file.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!sanitizedFileUrl) return;

    const a = document.createElement("a");
    a.href = sanitizedFileUrl;
    a.download = "sanitized.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();

    window.URL.revokeObjectURL(sanitizedFileUrl);
  };

  return (
    <Grid
      sx={{ backgroundColor: "#07090D", overflow: "hidden", color: "#FFFFFF" }}
    >
      {/* Slide 1 07090D */}
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
                background:
                  "linear-gradient(89.79deg, rgba(66, 84, 242, 0.88) 38.34%, rgba(204, 0, 255, 0.88) 99.82%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                letterSpacing: 1.5,
                fontWeight: 600,
              }}
            >
              Scan Your PDFs. Stay Protected.
            </Typography>
            <img
              src={star}
              alt=""
              style={{ width: "45px", height: "45px", paddingBottom: "10px" }}
            />
          </div>
          <Typography
            sx={{
              width: "60%",
              textAlign: "center",
              color: "#B8B8B8",
              fontSize: "18px",
            }}
          >
            Welcome to our secure PDF malware detection platform. Here, you can
            upload your PDF files with confidence — our system scans them for
            hidden threats, malicious scripts, and harmful code. We prioritize
            your file safety and never store your documents permanently. Just
            upload, scan, and download a clean version — fast and safe.
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mt: 4,
              fontSize: "34px",
              background:
                "linear-gradient(89.79deg, rgba(66, 84, 242, 0.88) 38.34%, rgba(204, 0, 255, 0.88) 99.82%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            How to Scan Your PDF.
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#ccc", mt: 2, textAlign: "center", fontSize: "18px" }}
          >
            1. Click on the “Upload” button and select your PDF file.
            <br />
            2. Wait for the scan to complete (this may take a few seconds).
            <br />
            3. If malware is found, the file will be sanitized.
            <br />
            4. Download the cleaned PDF.
            <br />
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#ccc", mt: 3, fontSize: "18px" }}
          >
            We do not store your files. All uploaded PDFs are scanned securely
            and automatically deleted after the process.
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#aaa", fontStyle: "italic", mt: 2, fontSize: "16px" }}
          >
            *Currently, only .pdf files are supported.*
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#ff5555", mt: 3, fontSize: "18px" }}
          >
            If your file contains malware, it will be sanitized using advanced
            techniques before being available for download.
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: "#aaa", mt: 2, fontSize: "16px" }}
          >
            *Note: You must be signed in to scan files.*
          </Typography>

          {/* Upload + Scan Buttons */}
          <Box sx={{ mt: 5 }}>
            {/* Hidden file input */}
            <input
              ref={inputFileRef}
              type="file"
              accept="application/pdf"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />

            {/* Upload Button */}
            <Button
              variant="contained"
              className="custom-button"
              startIcon={<CloudUploadIcon />}
              sx={{ backgroundColor: "#4254F2", fontSize: "20px" }}
              onClick={handleUploadClick}
            >
              {file ? "Upload Again" : "Upload PDF"}
            </Button>

            {/* Scan Button */}
            {!loading && !scanned && (
              <Button
                variant="outlined"
                className="custom-button"
                onClick={handleScan}
                sx={{
                  color: "#fff",
                  borderColor: "#4254F2",
                  ml: 5,
                  fontSize: "22px",
                }}
              >
                Scan Now
              </Button>
            )}

            {/* Loading Spinner */}
            {loading && (
              <Box mt={3} ml={3} display="flex" alignItems="center">
                <CircularProgress sx={{ color: "#4254F2" }} />
                <Typography variant="body2" ml={2} sx={{ fontSize: "20px" }}>
                  Scanning your PDF...
                </Typography>
              </Box>
            )}

            {/* Download Button */}
            {scanned && !loading && sanitizedFileUrl && (
              <Button
                variant="contained"
                startIcon={<DownloadIcon />}
                onClick={handleDownload}
                sx={{
                  ml: 5,
                  backgroundColor: "#4CAF50",
                  fontSize: "20px",
                }}
              >
                Download Clean PDF
              </Button>
            )}
          </Box>
          {file && !loading && !sanitizedFileUrl &&(
            <Typography
              sx={{
                mt: 4,
                fontSize: "20px",
                textAlign: "center",
                color: "#4CAF50",
              }}
            >
              "{file.name}" Uploaded ({(file.size / 1024 / 1024).toFixed(2)} MB)
            </Typography>
          )}
          {/* Show message only if it exists */}
          {scanMessage && file && (
            <Typography
              sx={{
                mt: 4,
                fontSize: "20px",
                textAlign: "center",
                color: scanMessage.toLowerCase().includes("error")
                  ? "red"
                  : "#4CAF50",
              }}
            >
              {scanMessage}
            </Typography>
          )}

          {file && !loading && sanitizedFileUrl && (
            <Typography
              sx={{
                mt: 4,
                fontSize: "22px",
                textAlign: "center",
                color: "#4CAF50",
              }}
            >
              Scan complete. Your PDF is now safe and malware-free.
            </Typography>
          )}
        </Box>
      </Box>

      {/* Slide 2 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "90vw",
            height: "auto",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: "column",
            gap: 2,
            margin: "20px",
            padding: "40px",
            backgroundColor: "#000000",
          }}
        >
          <Typography sx={{ fontSize: "30px", letterSpacing: 5 }}>
            Think Your File Is Safe? Think Again.
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
}

export default UploadFile;
