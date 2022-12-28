import React from "react";
import Head from "next/head";
import {
  Typography,
  Stack,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function Experience() {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down("md"));

  const work = [
    "Developing trading platforms",
    "Designing pixel-perfect responsive web applications using ReactJs, Redux, and Material UI",
    "Devising front-end logic in JavaScript",
    "Improving application performance",
    "Delivering the best user experience",
    "Interfacing with REST APIs",
    "Coordinating with the backend team",
  ];

  const experiences = [
    {
      organization: "ZapScale",
      title: "Software Engineer",
      work: ["Working on front-end with VueJs and Tailwind"],
    },
    {
      organization: "Tradelab Technologies",
      title: "Frontend Developer Intern",
      work: [
        "Developing trading platforms",
        "Designing pixel-perfect responsive web applications using ReactJs, Redux, and Material UI",
        "Devising front-end logic in JavaScript",
        "Improving application performance",
        "Delivering the best user experience",
        "Interfacing with REST APIs",
        "Coordinating with the backend team",
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Experience</title>
      </Head>
      <Typography
        variant={md ? "h4" : "h3"}
        fontWeight="bold"
        align="center"
        gutterBottom
      >
        Experience
      </Typography>
      <Stack
        p={md ? 3 : 6}
        spacing={4}
        justifyContent="center"
        alignItems="center"
      >
        {experiences.map((exp, index) => {
          return (
            <Box
              key={index}
              component={Stack}
              p={md ? 2 : 3}
              sx={{
                width: md ? 300 : 400,
                // height: md ? 150 : 250,
                border: "2px solid black",
                borderRadius: "5px",
                "&:hover": { backgroundColor: "#71eeb8" },
              }}
            >
              <Typography variant="h5" align="center" fontWeight="bold">
                {exp.title} at {exp.organization}
              </Typography>
              <Typography variant="body1" align="left" fontWeight="bold">
                As a {exp.title}, my work entails
              </Typography>
              <List>
                {exp.work.map((item, index) => {
                  return (
                    <ListItem key={item}>
                      <ListItemIcon sx={{ minWidth: "24px" }}>
                        <FiberManualRecordIcon
                          color="secondary"
                          sx={{ fontSize: "10px" }}
                        />
                      </ListItemIcon>
                      <ListItemText>
                        <Typography
                          variant="body1"
                          align="left"
                          fontWeight="bold"
                        >
                          {item}
                        </Typography>
                      </ListItemText>
                    </ListItem>
                  );
                })}
              </List>
            </Box>
          );
        })}
      </Stack>
    </>
  );
}

export default Experience;
