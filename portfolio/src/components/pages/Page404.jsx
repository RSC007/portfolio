import { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

export default function Page404() {
  useEffect(() => {
    document.title = "Page not found | Rushikesh Chitte";
  }, []);

  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 3,
        gap: 2,
      }}
    >
      <Typography
        sx={{ fontSize: { xs: 96, sm: 140 }, fontWeight: 800, lineHeight: 1, color: "secondary.main" }}
      >
        404
      </Typography>
      <Typography component="h1" variant="h5" fontWeight={700}>
        Looks like you&apos;re lost
      </Typography>
      <Typography color="text.secondary">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </Typography>
      <Button variant="contained" size="large" component={RouterLink} to="/app/home" sx={{ mt: 2 }}>
        Go to Home
      </Button>
    </Box>
  );
}
