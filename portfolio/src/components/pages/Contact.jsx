import { Box, Button, TextField, Typography } from "@mui/material";
import { Map, TileLayer, Marker } from "react-leaflet";
import emailjs from "@emailjs/browser";
import { Fade } from "react-reveal";
import { useFormik } from "formik";
import * as Yup from "yup";

import "./style.css";
import { useMessages } from "../useHooks/useMessages";

const location = [21.17024, 72.831062];

export default function Contact() {
  const { onErroMessage, onSuccessMessage } = useMessages();
  const { getFieldProps, values, handleSubmit, touched, errors, resetForm } =
    useFormik({
      initialValues: {
        name: "",
        reply_to: "",
        message: "",
      },
      validationSchema: Yup.object({
        name: Yup.string().label("Full Name").required(),
        reply_to: Yup.string()
          .email("Enter valid email")
          .required("Email is required"),
        message: Yup.string().required("Please enter the message"),
      }),
      onSubmit: (values) => {
        console.log("values", values);
        emailjs
          .send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            values,
            import.meta.env.VITE_EMAILJS_USER_ID
          )
          .then(
            (result) => {
              // On Success
              onSuccessMessage("Email Send Successfully");
              onReset();
            },
            (error) => {
              //  On Failed
              onErroMessage("Something went wrong !");
            }
          );
        console.log("values", values);
      },
    });

  const onReset = () => resetForm();

  console.log("process.env.REACT_APP_EMAILJS_SERVICE_ID", import.meta.env);
  return (
    <Fade left>
      <Box
        sx={{
          width: "90%",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "#f8f8f8",
          paddingY: "56px",
        }}
      >
        <Box sx={{ width: "90%" }}>
          <Typography
            sx={{
              fontSize: "28px",
              fontWeight: 700,
              letterSpacing: "2px",
              marginBottom: 5,
            }}
          >
            Get in Touch
          </Typography>
          <Box>
            <Map
              className="markercluster-map"
              center={location}
              zoom={4}
              maxZoom={18}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={location}></Marker>
            </Map>
          </Box>

          {/* Form */}
          <Box display="flex" flexDirection="column" gap={4} marginTop={5}>
            <TextField
              {...getFieldProps("name")}
              fullWidth
              placeholder="Name"
              error={touched?.name && errors?.name}
              helperText={touched?.name && errors?.name}
            />
            <TextField
              {...getFieldProps("reply_to")}
              fullWidth
              type="email"
              placeholder="Email"
              error={touched?.reply_to && errors?.reply_to}
              helperText={touched?.reply_to && errors?.reply_to}
            />
            <TextField
              {...getFieldProps("message")}
              fullWidth
              multiline
              rows={4}
              placeholder="Message"
              error={touched?.message && errors?.message}
              helperText={touched?.message && errors?.message}
            />

            <Box>
              <Button
                variant="contained"
                marginLeft="auto"
                sx={{
                  textTransform: "none",
                }}
                onClick={handleSubmit}
              >
                Send Message
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
}
