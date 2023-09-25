import type { NextPage } from 'next';
import Image from 'next/legacy/image';
import picture from '../../public/images/heleDiffer.png';
import { ThemeProvider, Container, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';


const PrivatMegleren: NextPage = () => {
const theme = useTheme();
   return (
    <div style={{ textAlign: 'center',fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif', color: 'black'}}>
      <h1 style={{ color: 'black', fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif', fontSize: '3.5rem', marginBottom: '10px' }}>Differ Pragma</h1>
      <p style={{color: 'black' }}></p>
      <Image
        alt="DifferPragma"
        src={picture}
        layout="responsive"
        width={1729}
        height={2516.37}
      />
    </div>
  )
};

export default PrivatMegleren;
