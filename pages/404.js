import Link from "next/link";
import { Box, Typography, Stack} from '@mui/material';
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  },[router])
  return (
    <Box m={4}>
      <Typography variant="h3" fontWeight='bold' align="center">Ooops...</Typography>
      <Typography variant="h4" align="center">This page cannot be found</Typography>
      <Typography variant="h4" align="center">Go back to <Link href="/"><a style={{ textDecoration: 'none', color: '#71eeb8' }}>home page</a></Link></Typography>
    </Box>
  );
}
 
export default NotFound;