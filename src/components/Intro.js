import React from 'react'
import Typed from "react-typed";
import { Typography, Button, Stack, Link, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function Intro() {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Stack p={md ? 2 : 6}>
      <Typography variant='h5' fontWeight='normal' gutterBottom>
        Hi there! I&apos;m 
      </Typography>
      <Typography variant={md ? 'h3' : 'h1'} fontWeight='bold' gutterBottom>
        <Typed strings={["Sourish"]} typeSpeed={100} />
      </Typography>
      <Typography variant={md ? 'h4' : 'h3'} fontWeight='medium' gutterBottom>
        I&apos;m a Frontend Developer from Kolkata, India.
      </Typography>
      <Typography variant={md ? 'h6' : 'h5'} fontWeight='normal' gutterBottom>
        I&apos;m currently working as a frontend developer intern for a startup in Bangalore, India.<br />
        I aspire to utilize my skills and interest in software development to contribute to developing purposeful applications.<br /><br />
      </Typography>
      <Typography variant='subtitle' fontWeight='bold'>
        This website was created using <u>NextJs</u> and <u>Material UI</u>.
      </Typography><br />
      <Button variant="contained"
        disableRipple
        disableElevation
        component={Link}
        href='/contact'
        sx={{
          backgroundColor: 'black',
          textTransform: 'none',
          fontWeight: 900,
          width: md ? '50%' : '20%',
          color: '#ffde59',
          '&:hover': {
            backgroundColor: 'black',
            color: '#71eeb8'
          },
          '&:active': {
            color: '#71eeb8'
          }
        }}
      >
        Get in touch
      </Button>
    </Stack>
  )
}

export default Intro