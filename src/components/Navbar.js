import { AppBar, Typography, Stack, Link, Divider } from '@mui/material';
import Image from 'next/image'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Navbar = () => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <AppBar elevation={0} position='static' color='transparent'
      sx={{
        padding: md ? '20px' : '15px 20px 15px 20px'
      }}>
        <Stack direction='row'>
          <Typography variant='h4' p={1}
            sx={{ border: '2px solid black', borderRadius: '5px' }}
            align='center'
            gutterBottom
          >
            <Link href="/" underline='none' color='black'>
              sb.
            </Link>
          </Typography>
          
          <Stack direction='row' spacing={6} sx={{  flexGrow: '1',justifyContent: 'flex-end', alignItems: 'center', paddingTop: md ? '10px' : '' }}>
            <Link variant='h6'
              href="/"
              underline='hover'   
              color='black'
              sx={{ 
                fontWeight: 'bold',
                '&:hover' : {
                  color: '#71eeb8',
                }
                }}
            >Home</Link>
            <Link variant='h6'
              href="/projects"
              underline='hover'   
              color='black'
              sx={{ 
                fontWeight: 'bold',
                '&:hover' : {
                  color: '#71eeb8',
                }
                }}
            >Projects</Link>
            <Link variant='h6' href="/resume" underline='hover'   
              color='black'
              sx={{ 
                fontWeight: 'bold',
                '&:hover' : {
                  color: '#71eeb8',
                }
                }}
            >Resume</Link>
            <Link variant='h6' href="/about" underline='hover'  
              color='black'
              sx={{ 
                fontWeight: 'bold',
                '&:hover' : {
                  color: '#71eeb8',
                }
                }}
            >About</Link>
            <Link variant='h6' href="/contact" underline='hover'  
              color='black'
              sx={{ 
                fontWeight: 'bold',
                '&:hover' : {
                  color: '#71eeb8',
                }
                }}
            >Contact</Link>
          </Stack>
        </Stack>
    </AppBar>
  );
}
 
export default Navbar;