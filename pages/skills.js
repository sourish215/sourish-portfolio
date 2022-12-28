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

function Skills() {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down("md"));

  const techSkills = [
    "Vue",
    "Nuxt",
    "NestJs",
    "ReactJs",
    "Redux",
    "TypeScript",
    "JavaScript",
    "HTML",
    " CSS",
    "Materialize UI",
    "Tailwind",
    "Git",
  ];
  return (
    <>
      <Head>
        <title>Skills</title>
      </Head>
      <Typography
        variant={md ? "h4" : "h3"}
        fontWeight="bold"
        align="center"
        gutterBottom
      >
        Skills
      </Typography>
      <Stack
        p={md ? 3 : 6}
        spacing={4}
        justifyContent="center"
        alignItems="center"
      >
        <Box
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
            Technical
          </Typography>
          <List>
            {techSkills.map((skill, index) => {
              return (
                <ListItem key={skill}>
                  <ListItemIcon sx={{ minWidth: "24px" }}>
                    <FiberManualRecordIcon
                      color="secondary"
                      sx={{ fontSize: "10px" }}
                    />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant="body1" align="left" fontWeight="bold">
                      {skill}
                    </Typography>
                  </ListItemText>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Stack>
    </>
  );
}

export default Skills;
