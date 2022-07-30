import React from 'react';
import { Typography, Stack, Box, Link, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function Projects() {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Stack p={md ? 3 : 6} spacing={4}
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant={md ? 'h4' : 'h3'} fontWeight='bold' align='center' gutterBottom>Personal Projects</Typography>
      <Grid container direction='row' spacing={md ? 0 : 4} rowSpacing={md ? 2 : 0}>
        <Grid item xs={12} md={6}>
          <Box p={md ? 2 : 4} sx={{ height: md ? 250 : 350, border: '2px solid black', borderRadius: '5px', '&:hover': { backgroundColor: '#71eeb8' } }}>
            <Typography variant={md ? 'h5' : 'h4'} fontWeight='bold' gutterBottom>
              <u>This site</u>
            </Typography>
            <Typography variant={md ? 'body1' : 'h6'} fontWeight='bold'>
              This personal website was designed using NextJs with Material UI. You can find the GitHub link <Link href='https://github.com/sourish215/sourish-portfolio' target='_blank' sx={{ color: 'inherit', '&: hover': {color: 'white'} }}>here</Link>.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box p={md ? 2 : 4} sx={{ height: md ? 250 : 350, border: '2px solid black', borderRadius: '5px', '&:hover': { backgroundColor: '#71eeb8' } }}>
            <Typography variant={md ? 'h5' : 'h4'} fontWeight='bold' gutterBottom>
              <u>Reading List</u>
            </Typography>
            <Typography variant={md ? 'body1' : 'h6'} fontWeight='bold'>
              A MERN application to store your reading list. It is hosted on Heroku and you can check it out <Link href='https://my-readinglist-app.herokuapp.com/' target='_blank' sx={{ color: 'inherit', '&: hover': {color: 'white'} }}>here</Link>.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box p={md ? 2 : 4} sx={{ height: md ? 250 : 350, border: '2px solid black', borderRadius: '5px', '&:hover': { backgroundColor: '#71eeb8' } }}>
            <Typography variant={md ? 'h5' : 'h4'} fontWeight='bold' gutterBottom>
              <u>Degrees of Seperation</u>
            </Typography>
            <Typography variant={md ? 'body1' : 'h6'} fontWeight='bold'>
              A simple application to find all possible relations between two people. It is hosted on Vercel and you can check it out <Link href='https://degrees-of-seperation-app.vercel.app/' target='_blank' sx={{ color: 'inherit', '&: hover': {color: 'white'} }}>here</Link>.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box p={md ? 2 : 4} sx={{ height: md ? 250 : 350, border: '2px solid black', borderRadius: '5px', '&:hover': { backgroundColor: '#71eeb8' } }}>
            <Typography variant={md ? 'h5' : 'h4'} fontWeight='bold' gutterBottom>
              <u>Art by Sourish</u>
            </Typography>
            <Typography variant={md ? 'body1' : 'h6'} fontWeight='bold'>
              My artist portfolio website. It is hosted on Vercel and you can check it out <Link href='https://artbysourish.vercel.app/' target='_blank' sx={{ color: 'inherit', '&: hover': {color: 'white'} }}>here</Link>.
            </Typography>
          </Box>
        </Grid>
      </Grid>  
    </Stack>
  )
}

export default Projects