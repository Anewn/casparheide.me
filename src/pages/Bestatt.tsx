import type { NextPage } from 'next';
import Image from 'next/legacy/image';
import picture from '../../public/images/bestatt.webp';
import { ThemeProvider, Container, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';


const PrivatMegleren: NextPage = () => {
const theme = useTheme();
   return (
      <Image
        alt="Bestått"
        src={picture}
        layout="responsive"
        width={1729}
        height={5768}
      />
  )
};

export default PrivatMegleren;
