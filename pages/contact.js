import React from "react";
import Head from "next/head";
import { Typography, Stack, IconButton, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function Contact() {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <Stack p={md ? 2 : 6} spacing={4}>
        <Typography
          variant={md ? "h4" : "h3"}
          fontWeight="bold"
          align="center"
          gutterBottom
        >
          Get in touch
        </Typography>
        <Typography
          variant="h5"
          align="center"
          fontWeight="bold"
          sx={{ padding: md ? "0" : "0px 96px" }}
        >
          Feel free to reach out!
        </Typography>
        <Stack direction="row" justifyContent="center" spacing={4}>
          <IconButton
            component={Link}
            href="https://github.com/sourish215"
            target="_blank"
          >
            <GitHubIcon
              color="secondary"
              sx={{ fontSize: md ? "40px" : "70px" }}
            />
          </IconButton>
          <IconButton
            component={Link}
            href="https://www.linkedin.com/in/sourish-bhattacharyya-699486135/"
            target="_blank"
          >
            <LinkedInIcon
              color="secondary"
              sx={{ fontSize: md ? "40px" : "70px" }}
            />
          </IconButton>
          <IconButton
            component={Link}
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sourish215@gmail.com"
            target="_blank"
          >
            <EmailIcon
              color="secondary"
              sx={{ fontSize: md ? "40px" : "70px" }}
            />
          </IconButton>
          <IconButton component={Link} href="tel:+918335075549">
            <PhoneIphoneIcon
              color="secondary"
              sx={{ fontSize: md ? "40px" : "70px" }}
            />
          </IconButton>
        </Stack>
      </Stack>
    </>
  );
}

export default Contact;
