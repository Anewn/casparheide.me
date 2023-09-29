import type { NextPage } from 'next';
import Image from 'next/legacy/image';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from 'cv';
import picture from '../../public/images/privatmegleren.webp';
import {
  selectLocale,
  selectTheme,
  toggleTheme,
  updateLocale,
} from '../slices';
import { IntlProvider } from 'react-intl';
import { enUs, nbNo } from '../../assets/lang';
import { darkTheme, lightTheme } from '../theme';
import { ThemeProvider, CssBaseline } from '@mui/material'

const PrivatMegleren: NextPage = () => {
  const locale = useSelector(selectLocale);
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  const currentTheme = theme === 'light' ? lightTheme : darkTheme;
  const messages = { en: enUs, no: nbNo };
  
   return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <IntlProvider locale={locale} messages={messages[locale as keyof typeof messages]}>
        <Header
          headerLinks={['/privatmegleren', '/differpragma', '/diggit', '/bestatt']}
          locale={locale} 
          theme={theme}
          subsite={true}
          updateLocale={(locale: string) => dispatch(updateLocale(locale))}
          toggleTheme={() => dispatch(toggleTheme())}
        />
        <Image
          alt="privatmegleren"
          src={picture}
          layout="responsive"
          width={1729}
          height={3493}
        />
      </IntlProvider>
    </ThemeProvider>
  )
};

export default PrivatMegleren;
