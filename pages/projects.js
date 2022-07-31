import React from 'react';
import Head from 'next/head';
import { Typography, Stack, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ProjectCard from '../src/components/ProjectCard';

function Projects() {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down('md'));

  const projects = [
    {
      title: 'This site',
      description: 'This personal website was designed using NextJs with Material UI. You can find the GitHub link',
      link: 'https://github.com/sourish215/sourish-portfolio',
      tech: ''
    },
    {
      title: 'Reading List',
      description: 'A MERN application to store your reading list. It is hosted on Heroku and you can check it out',
      link: 'https://my-readinglist-app.herokuapp.com/',
      tech: 'Tech: MongoDB, ExpressJs, ReactJs, NodeJs, Material UI'
    },
    {
      title: 'News App',
      description: 'A simple news application to search articles on The New York Times. It is hosted on Vercel and you can check it out',
      link: 'https://news-app-pied-beta.vercel.app/',
      tech: 'Tech: ReactJs, Material UI'
    },
    {
      title: 'Degrees of Seperation',
      description: 'A simple application to find all possible relations between two people. It is hosted on Vercel and you can check it out',
      link: 'https://degrees-of-seperation-app.vercel.app/',
      tech: 'Tech: ReactJs, Material UI'
    },
    {
      title: 'Art by Sourish',
      description: 'My artist portfolio website. It is hosted on Vercel and you can check it out',
      link: 'https://artbysourish.vercel.app/',
      tech: 'Tech: NextJs, Material UI'
    },
  ];

  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <Stack p={md ? 3 : 6} spacing={4}
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant={md ? 'h4' : 'h3'} fontWeight='bold' align='center' gutterBottom>Personal Projects</Typography>
        <Grid container direction='row' spacing={md ? 0 : 4} rowSpacing={md ? 2 : 0}>
          {projects.map((project, index) => {
              return (
                <Grid item xs={12} md={6} key={project.link}>
                  <ProjectCard title={project.title} description={project.description} link={project.link} tech={project.tech} />
                </Grid>
              )
          })}
        </Grid>  
      </Stack>
    </>
  )
}

export default Projects