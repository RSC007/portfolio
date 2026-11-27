import { lazy, Suspense } from "react";
import {
  Box,
  Button,
  Grid,
  Link,
  Paper,
  Skeleton,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Fade } from "react-awesome-reveal";
import { useFormik } from "formik";
import * as Yup from "yup";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SendIcon from "@mui/icons-material/Send";

import "./style.css";
import { useMessages } from "../useHooks/useMessages";
import { email, phone, location } from "../constants";

// The map (Leaflet, ~150 KB) loads after the form is on screen.
const ContactMap = lazy(() => import("./ContactMap"));

const mapPosition = [21.17024, 72.831062];

const contactItems = [
  { Icon: EmailOutlinedIcon, label: "Email", value: email, href: `mailto:${email}` },
  { Icon: PhoneOutlinedIcon, label: "Phone", value: phone, href: `tel:${phone.replace(/-/g, "")}` },
  { Icon: LocationOnOutlinedIcon, label: "Location", value: location },
];

export default function Contact() {
  const theme = useTheme();
  const { onErroMessage, onSuccessMessage } = useMessages();

  const { getFieldProps, handleSubmit, touched, errors, resetForm, isSubmitting } =
    useFormik({
      initialValues: { name: "", reply_to: "", message: "" },
      validationSchema: Yup.object({
        name: Yup.string().trim().required("Please enter your name"),
        reply_to: Yup.string()
          .email("Enter a valid email")
          .required("Email is required"),
        message: Yup.string().trim().required("Please enter a message"),
      }),
      onSubmit: async (values) => {
        try {
          // EmailJS is only needed on submit, so load it on demand.
          const { default: emailjs } = await import("@emailjs/browser");
          await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            values,
            import.meta.env.VITE_EMAILJS_USER_ID
          );
          onSuccessMessage("Thanks! Your message has been sent.");
          resetForm();
        } catch {
          onErroMessage(`Something went wrong. Please email me directly at ${email}`);
        }
      },
    });

  const fieldError = (name) => Boolean(touched[name] && errors[name]);
  const fieldHelper = (name) => (touched[name] && errors[name]) || " ";

  return (
    <Fade direction="left" triggerOnce duration={600}>
      <Box sx={{ maxWidth: 1100, mx: "auto", py: { xs: 10, md: 8 } }}>
        <Typography component="h1" sx={{ fontSize: 32, fontWeight: 700, letterSpacing: "2px", mb: 1 }}>
          Get in Touch
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 5 }}>
          Have a project, role or question in mind? Send a message and I&apos;ll get back to you.
        </Typography>

        <Grid container spacing={4}>
          {/* Form */}
          <Grid item xs={12} md={7}>
            <Paper
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ p: { xs: 3, sm: 4 }, borderRadius: 3, display: "flex", flexDirection: "column", gap: 1 }}
            >
              <TextField
                {...getFieldProps("name")}
                label="Name"
                autoComplete="name"
                fullWidth
                error={fieldError("name")}
                helperText={fieldHelper("name")}
              />
              <TextField
                {...getFieldProps("reply_to")}
                label="Email"
                type="email"
                autoComplete="email"
                fullWidth
                error={fieldError("reply_to")}
                helperText={fieldHelper("reply_to")}
              />
              <TextField
                {...getFieldProps("message")}
                label="Message"
                fullWidth
                multiline
                minRows={5}
                error={fieldError("message")}
                helperText={fieldHelper("message")}
              />
              <Box>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  endIcon={<SendIcon />}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </Box>
            </Paper>
          </Grid>

          {/* Details + map */}
          <Grid item xs={12} md={5} sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {contactItems.map(({ Icon, label, value, href }) => (
              <Box key={label} sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: 2,
                    display: "grid",
                    placeItems: "center",
                    bgcolor: "action.selected",
                    color: "secondary.main",
                    flexShrink: 0,
                  }}
                >
                  <Icon />
                </Box>
                <Box sx={{ minWidth: 0 }}>
                  <Typography variant="body2" color="text.secondary">
                    {label}
                  </Typography>
                  {href ? (
                    <Link href={href} color="inherit" underline="hover" sx={{ wordBreak: "break-word" }}>
                      {value}
                    </Link>
                  ) : (
                    <Typography>{value}</Typography>
                  )}
                </Box>
              </Box>
            ))}

            <Box sx={{ borderRadius: 3, overflow: "hidden", flexGrow: 1, minHeight: 260 }}>
              <Suspense fallback={<Skeleton variant="rectangular" height="100%" sx={{ minHeight: 260 }} />}>
                <ContactMap position={mapPosition} dark={theme.palette.mode === "dark"} />
              </Suspense>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Fade>
  );
}
