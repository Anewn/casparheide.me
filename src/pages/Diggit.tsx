import type { NextPage } from 'next';
import Image from 'next/legacy/image';
import picture from '../../public/images/diggit.webp';
import { ThemeProvider, Container, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';


const PrivatMegleren: NextPage = () => {
const theme = useTheme();
   return (
    <Image
      alt="diggit"
      src={picture}
      layout="responsive"
      width={1729}
      height={3715}
    />
  )
};

export default PrivatMegleren;
