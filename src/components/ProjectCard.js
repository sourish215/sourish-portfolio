import React from 'react';
import { Typography, Box, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function ProjectCard({ title, description, link, tech }) {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down('md'));
  console.log('title', title)
  return (
    <Box p={md ? 2 : 4} sx={{ position: 'relative', height: md ? 280 : 350, border: '2px solid black', borderRadius: '5px', '&:hover': { backgroundColor: '#71eeb8' } }}>
      <Typography variant={md ? 'h5' : 'h4'} fontWeight='bold' gutterBottom>
        <u>{title}</u>
      </Typography>
      <Typography variant={md ? 'body1' : 'h6'} fontWeight='bold'>
        {description} <Link href={link} target='_blank'
        sx={{ color: 'inherit', '&: hover': {color: 'white'} }}>here</Link>.
      </Typography>
      {tech && 
        <div style={{ position: 'absolute', bottom: 0 }}>
          <Typography variant='h6' pb={4} pr={4} fontWeight='bold' sx={{ fontSize: '1rem' }}>
            {tech}
          </Typography>
        </div>}
    </Box>
  )
}

export default ProjectCard