import { App } from 'cv';
import type { NextPage } from 'next';
import Image from 'next/legacy/image';
import { useDispatch, useSelector } from 'react-redux';
import { profile } from '../../assets/data/index';
import { enUs, nbNo } from '../../assets/lang';
import image from '../../public/images/caspar-CV.webp';
import { categories } from '../categories';
import {
  selectLocale,
  selectTheme,
  toggleTheme,
  updateLocale,
} from '../slices';
import { darkTheme, lightTheme } from '../theme';

const Home: NextPage = () => {
  const locale = useSelector(selectLocale);
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  return (
    <App
      linkedIn="https://www.linkedin.com/in/caspar-ramstad-heide-46262252/"
      instagram="https://instagram.com/casparheide?igshid=MzRlODBiNWFlZA=="
      email="casparheide@gmail.com"
      image={<Image src={image} alt="Caspar Ramstad Heide" />}
      profile={profile}
      categories={categories}
      messages={{ no: nbNo, en: enUs }}
      themes={{ light: lightTheme, dark: darkTheme }}
      theme={theme}
      toggleTheme={() => dispatch(toggleTheme())}
      locale={locale}
      updateLocale={(locale: string) => dispatch(updateLocale(locale))}
    />
  );
};

export default Home;
