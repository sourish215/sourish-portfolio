import React from 'react';
import { Typography, Stack, Box, Link, Grid } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function Resume() {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Stack p={md ? 3 : 6} spacing={4}
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant={md ? 'h4' : 'h3'} fontWeight='bold' align='center' gutterBottom>Resume</Typography>
      <Typography variant={md ? 'h6' : 'h5'} fontWeight='bold'>
        Download my resume <Link href='https://drive.google.com/file/d/1hndRzReGo1XhsYl1DkPgxVqCAwjMWa-B/view?usp=sharing' target='_blank' sx={{ color: 'inherit', '&: hover': {color: '#71eeb8'} }}>here</Link>.
      </Typography>
      <Stack spacing={md ? 2 : 4} justifyContent='center'>
        <Box component={Link} href='/' underline='none' p={md ? 2 : 6} sx={{ width: md ? 300 : 400, height: md ? 150 : 250, border: '2px solid black', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', '&:hover': { backgroundColor: '#71eeb8' } }}>
          <Typography align='center' variant={md ? 'h5' : 'h4'} fontWeight='bold' gutterBottom sx={{ color:'black', }}>
            Education<br /><br />
            <SchoolIcon sx={{ fontSize: md ? '40px' : '90px' }} />
          </Typography>
        </Box>
        <Box component={Link} href='/' underline='none' p={md ? 2 : 6} sx={{ width: md ? 300 : 400, height: md ? 150 : 250, border: '2px solid black', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', '&:hover': { backgroundColor: '#71eeb8' } }}>
          <Typography align='center' variant={md ? 'h5' : 'h4'} fontWeight='bold' gutterBottom sx={{ color:'black', }}>
            Experience<br /><br />
            <WorkOutlineIcon sx={{ fontSize: md ? '40px' : '90px' }} />
          </Typography>
        </Box>
        <Box component={Link} href='/' underline='none' p={md ? 2 : 6} sx={{ width: md ? 300 : 400, height: md ? 150 : 250, border: '2px solid black', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', '&:hover': { backgroundColor: '#71eeb8' } }}>
          <Typography align='center' variant={md ? 'h5' : 'h4'} fontWeight='bold' gutterBottom sx={{ color:'black', }}>
            Skills<br /><br />
            <TipsAndUpdatesOutlinedIcon sx={{ fontSize: md ? '40px' : '90px' }} />
          </Typography>
        </Box>
      </Stack>
    </Stack>
  )
}

export default Resume