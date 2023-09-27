import type { NextPage } from 'next';
import Image from 'next/legacy/image';
import picture from '../../public/images/privatmegleren.webp';
import { ThemeProvider, Container, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';


const PrivatMegleren: NextPage = () => {
const theme = useTheme();
   return (
    <Image
      alt="privatmegleren"
      src={picture}
      layout="responsive"
      width={1729}
      height={3493}
    />
  )
};

export default PrivatMegleren;
