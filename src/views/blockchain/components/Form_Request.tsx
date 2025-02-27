import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import moment from "moment";
import { useState } from "react";

export default function FormRequestTrial({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    PhoneNumber: "",
    CompanyName: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("Submitting...");
    try {
      // const form = {
      //   Name: formData.Name,
      //   Email: formData.Email,
      //   PhoneNumber: formData.PhoneNumber,
      //   CompanyName: formData.CompanyName,
      //   Date: '123',
      // };
      const formDataString = new URLSearchParams(formData as any).toString();
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxgHnjAI_nXCuDkb-1O7ntTuG8COAnOJCcwQ1om6q-6T9PKFqpzUNX_8PK1s9ws32B-/exec",
        {
          redirect: "follow",
          method: "POST",
          body: formDataString,
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
        }
      );

      if (response.ok) {
        setMessage("Data submitted successfully!");
        setFormData({
          Name: "",
          Email: "",
          PhoneNumber: "",
          CompanyName: "",
        });
      } else {
        console.log("Failed to submit");

        throw new Error("Failed to submit");
      }
    } catch (error) {
      setMessage("An error occurred while submitting the form.");
      console.error(error);
      console.log(error);
    }

    setTimeout(() => {
      setMessage(null);
      onClose();
    }, 1500);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        position: "absolute",
        backgroundColor: "rgba(24, 23, 23, 0.8)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          boxShadow: "0px 4px 4px 0px #00000040",
          py: "50px",
          px: "80px",
          borderRadius: "21px",
          position:'relative',
          width:{
            xs:'90vw',
            md:'60vw',
            lg:'30vw'
          },
          "& #imgClose": {
            height: "30px",
            width: "30px",
            position: "absolute",
            top: '-10px',
            right: '-10px',
            cursor:'pointer',
            zIndex: 20,
          },
        }}
      >
        <Typography
          sx={{
            font: "Poppins",
            fontSize: {
              xs: "22px",
              md: "24px",
              lg: "28px",
            },
            fontWeight: 800,
            textAlign: {
              xs: "center",
              md: "left",
              lg: "left",
            },
            color: "#343434",
            letterSpacing: 2,
            textShadow: "2px 2px 4pxrgba(0, 0, 0, 0.2)",
            whiteSpace: "pre-line",
            lineHeight: 1,
          }}
        >
          {"Request Free Trial".toUpperCase()}
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            mt: "50px",
           width:'100%',
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                name="Name"
                fullWidth
                required
                value={formData.Name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                name="Email"
                type="email"
                fullWidth
                required
                value={formData.Email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="PhoneNumber"
                name="PhoneNumber"
                fullWidth
                required
                value={formData.PhoneNumber}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="CompanyName"
                name="CompanyName"
                fullWidth
                required
                value={formData.CompanyName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{
                  font: "Poppins",
                  fontSize: "14px",
                  fontWeight: 600,
                  fontStyle: "italic",
                  textAlign: "center",
                  color: "#0267FD",
                  letterSpacing: 2,
                  textShadow: "2px 2px 4pxrgba(0, 0, 0, 0.2)",
                  whiteSpace: "pre-line",
                  lineHeight: 1,
                }}
              >
                {message}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#0267FD",
                  py: 1,
                }}
              >
                Submit
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography
                onClick={() => {
                  window.open("https://betterhr.io/privacy-policy/", "_blank");
                }}
                sx={{
                  cursor: "pointer",
                  font: "Poppins",
                  fontSize: "12px",
                  fontWeight: 500,
                  fontStyle: "italic",
                  textAlign: "center",
                  color: "black",
                  letterSpacing: 2,
                  textShadow: "2px 2px 4pxrgba(0, 0, 0, 0.2)",
                  whiteSpace: "pre-line",
                  lineHeight: 1,
                }}
              >
                {`By clicking "Submit", I agree to Fansipan Labs's\nTerms of Service and Privacy Policy.`}
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <img
          onClick={onClose}
          id={`imgClose`}
          src={`/assets/icons/ic_close.png`}
        />
      </Box>
    </Box>
  );
}
