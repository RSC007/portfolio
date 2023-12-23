import { Box, Typography } from "@mui/material";
import { Fade } from "react-reveal";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";
// import "./style.css";

export default function Contact() {
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
            }}
          >
            Get in Touch
          </Typography>
          <Box>
            <Map center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[51.505, -0.091]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </Map>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
}
