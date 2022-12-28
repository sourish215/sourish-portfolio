import React from "react";
import Head from "next/head";
import { Typography, Stack, Button, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";

function About() {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Stack p={md ? 2 : 6} spacing={4}>
        <Typography
          variant={md ? "h4" : "h3"}
          fontWeight="bold"
          align="center"
          gutterBottom
        >
          Hello!
        </Typography>
        <div
          style={{ width: md ? "100%" : "90%", padding: md ? "0" : "0px 64px" }}
        >
          <div
            style={{
              float: md ? "none" : "right",
              marginLeft: md ? "0" : "50px",
              marginBottom: md ? "32px" : "50px",
              display: md ? "flex" : "inline",
              justifyContent: md ? "center" : "initial",
            }}
          >
            <Image
              src="/profile.jpg"
              alt="profile"
              width={253}
              height={253}
              style={{
                borderRadius: "10px",
              }}
            />
          </div>
          <Typography
            paragraph
            variant={md ? "h6" : "body1"}
            fontWeight="bold"
            gutterBottom
            sx={{ fontSize: "1.3rem" }}
          >
            I&apos;m Sourish Bhattacharyya, a graduate from the M. Sc. Computer
            Science program at St. Xavier&apos;s College, Kolkata.
          </Typography>
          <Typography
            paragraph
            variant={md ? "h6" : "body1"}
            fontWeight="bold"
            gutterBottom
            sx={{ fontSize: "1.3rem" }}
          >
            I&apos;m working as a software engineer at{" "}
            <Link
              href="https://zapscale.com/"
              target="_blank"
              sx={{ color: "inherit", "&: hover": { color: "#71eeb8" } }}
            >
              ZapScale
            </Link>
            .
          </Typography>
          <Typography
            paragraph
            variant={md ? "h6" : "body1"}
            fontWeight="bold"
            gutterBottom
            sx={{ fontSize: "1.3rem" }}
          ></Typography>
          <Typography
            paragraph
            variant={md ? "h6" : "body1"}
            fontWeight="bold"
            gutterBottom
            sx={{ fontSize: "1.3rem" }}
          >
            I aspire to utilize my skills and interest in software development
            and contribute to developing purposeful applications.
          </Typography>
          <br />
          <Typography
            paragraph
            p={1}
            variant={md ? "h6" : "body1"}
            fontWeight="bold"
            gutterBottom
            sx={{ fontSize: "1.3rem", backgroundColor: "#71eeb8" }}
          >
            I am also a part-time portrait artist. You can find my artist
            website{" "}
            <Link
              href="https://artbysourish.vercel.app/"
              target="_blank"
              sx={{ color: "inherit", "&: hover": { color: "white" } }}
            >
              here
            </Link>
            .
          </Typography>
        </div>
      </Stack>
    </>
  );
}

export default About;
