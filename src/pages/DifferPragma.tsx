import type { NextPage } from 'next';
import Image from 'next/legacy/image';
import picture from '../../public/images/differpragma.webp';
import { ThemeProvider, Container, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';


const PrivatMegleren: NextPage = () => {
const theme = useTheme();
   return (
    <Image
      alt="differpragma"
      src={picture}
      layout="responsive"
      width={1729}
      height={3317}
    />
  )
};

export default PrivatMegleren;
