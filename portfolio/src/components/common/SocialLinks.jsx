import { Box, IconButton, Tooltip } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

import { socialLinks } from "../constants";

const icons = {
  LinkedIn: LinkedInIcon,
  Twitter: TwitterIcon,
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
};

export default function SocialLinks({ size = "medium", sx }) {
  return (
    <Box sx={{ display: "flex", gap: 1, ...sx }}>
      {socialLinks.map(({ name, url }) => {
        const SocialIcon = icons[name];
        return (
          <Tooltip key={name} title={name}>
            <IconButton
              component="a"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              size={size}
              sx={{
                color: "text.secondary",
                transition: "transform .2s, color .2s",
                "&:hover": { color: "secondary.main", transform: "translateY(-3px)" },
              }}
            >
              <SocialIcon fontSize="inherit" />
            </IconButton>
          </Tooltip>
        );
      })}
    </Box>
  );
}
