import { CssBaseline, ThemeProvider } from '@mui/material';
import { Header } from 'cv';
import Image, { StaticImageData } from 'next/image';
import { IntlProvider } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { enUs, nbNo } from '../../assets/lang';
import {
  selectLocale,
  selectTheme,
  toggleTheme,
  updateLocale,
} from '../slices';
import { darkTheme, lightTheme } from '../theme';

interface PortfolioProps {
  picture: StaticImageData;
  alt: string;
}

const Portfolio = ({ picture, alt }: PortfolioProps) => {
  const locale = useSelector(selectLocale);
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  const currentTheme = theme === 'light' ? lightTheme : darkTheme;
  const messages = { en: enUs, no: nbNo };

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <IntlProvider
        locale={locale}
        messages={messages[locale as keyof typeof messages]}
      >
        <Header
          headerLinks={[
            '/privatmegleren',
            '/differ-pragma',
            '/diggit',
            '/bestatt',
          ]}
          locale={locale}
          theme={theme}
          subsite={true}
          updateLocale={(locale: string) => dispatch(updateLocale(locale))}
          toggleTheme={() => dispatch(toggleTheme())}
        />
        <Image
          alt={alt}
          src={picture}
          layout="responsive"
          width={1729}
          height={5768}
        />
      </IntlProvider>
    </ThemeProvider>
  );
};

export default Portfolio;
