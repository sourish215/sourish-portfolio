import React from 'react';
import { Typography, Stack, Button, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from 'next/image'

function About() {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Stack p={md ? 2 : 6} spacing={4}>
      <Typography variant={md ? 'h4' : 'h3'} fontWeight='bold' align='center' gutterBottom>
        Hello!
      </Typography>
      <div style={{ width: md ? '100%' : '90%', padding: md ? '0' : '0px 64px' }}>
        <div
          style={{
            float: md ? 'none' : 'right',
            marginLeft: md ? '0' : '50px',
            marginBottom: md ? '32px' : '50px',
            display: md ? 'flex' : '',
            justifyContent: md ? 'center' : ''
          }}
        >
          <Image src='/profile.jpg' alt='profile'
            width={253} height={253}
            style={{
              borderRadius: '10px'
            }}
          />
        </div>
        <Typography paragraph variant={md ? 'h6' : 'body1'} fontWeight='bold' gutterBottom sx={{ fontSize: '1.3rem' }}>
          I&apos;m Sourish, a recent graduate from the M. Sc. Computer Science program at St. Xavier&apos;s College, Kolkata.
        </Typography>
        <Typography paragraph variant={md ? 'h6' : 'body1'} fontWeight='bold' gutterBottom sx={{ fontSize: '1.3rem' }}>
          I&apos;m currently looking for opportunities in frontend development.
        </Typography>
        <Typography paragraph variant={md ? 'h6' : 'body1'} fontWeight='bold' gutterBottom sx={{ fontSize: '1.3rem' }}>
          As an intern, I have learnt about React hooks, state management using Redux, lifecycle, agile methodologies, responsive design using Material UI, etc. I am learning NextJs, MongoDB, ExpressJs, and NodeJs in my free time.
        </Typography>
        <Typography paragraph variant={md ? 'h6' : 'body1'} fontWeight='bold' gutterBottom sx={{ fontSize: '1.3rem' }}>
          I am looking for opportunities to utilize my skills and interest in software development and contribute to the development of purposeful applications.
        </Typography><br />
        <Typography paragraph variant={md ? 'h6' : 'body1'} fontWeight='bold' gutterBottom sx={{ fontSize: '1.3rem' }}>
          I am also a part-time portrait artist. You can find my artist website <Link href='https://artbysourish.vercel.app/' target='_blank' sx={{ color: 'inherit', '&: hover': {color: '#71eeb8'} }}>here</Link>.
        </Typography>
      </div>
    </Stack>
  )
}

export default About