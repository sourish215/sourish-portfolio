import React from 'react';
import Head from 'next/head';
import { Typography, Stack, Box, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function Education() {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down('md'));

  const education = [
    {
      degree: "M. Sc. in Computer Science ",
      cgpa: 7.67,
      duration: "June 2020 - June 2022",
      institution: "St. Xavier’s College (Autonomous), Kolkata"
    },
    {
      degree: "B. Sc. in Computer Science ",
      cgpa: 7.23,
      duration: "June 2016 - June 2019",
      institution: "St. Xavier’s College (Autonomous), Kolkata"
    }
  ]

  return (
    <>
       <Head>
        <title>Education</title>
      </Head>
      <Stack p={md ? 3 : 6} spacing={4}
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant={md ? 'h4' : 'h3'} fontWeight='bold' align='center' gutterBottom>Education</Typography>
          <Box component={Stack} p={md ? 2 : 3}
            sx={{
              width: md ? 300 : 400,
              // height: md ? 150 : 250,
              border: '2px solid black',
              borderRadius: '5px',
              '&:hover': { backgroundColor: '#71eeb8' }
            }}
          >
            <List>
              {education.map((item, index) => {
                return (
                  <ListItem key={item}>
                    <ListItemText>
                      <Typography variant='h5' align='left' fontWeight='bold' sx={{ textDecoration: 'underline' }}>{item.degree}</Typography>
                      <Typography variant='body1' align='left' fontWeight='bold'>CGPA: {item.cgpa}</Typography>
                      <Typography variant='body1' align='left' fontWeight='bold'>{item.duration}</Typography>
                      <Typography variant='body1' align='left' fontWeight='bold'>{item.institution}</Typography>
                    </ListItemText>
                  </ListItem>
                )
              })}
            </List>
        </Box>
      </Stack>
    </>
  )
}

export default Education