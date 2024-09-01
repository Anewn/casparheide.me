import type { NextPage } from 'next';
import Image from 'next/image';
import { Box } from '@mui/material';
import akira from '../../public/images/illustrasjoner/akira.webp';
import box from '../../public/images/illustrasjoner/box.webp';
import city_phantoms_book_cover from '../../public/images/illustrasjoner/city_phantoms_book_cover.webp';
import cleaning_product_poser_design_1 from '../../public/images/illustrasjoner/cleaning_product_poser_design_1.webp';
import cleaning_product_poser_design_2 from '../../public/images/illustrasjoner/cleaning_product_poser_design_2.webp';
import cleaning_product_poser_design_3 from '../../public/images/illustrasjoner/cleaning_product_poser_design_3.webp';
import cloud_storage1 from '../../public/images/illustrasjoner/cloud_storage1.webp';
import cloud_storage2 from '../../public/images/illustrasjoner/cloud_storage2.webp';
import fallen_on_good_times_book_cover from '../../public/images/illustrasjoner/fallen_on_good_times_book_cover.webp';
import fallen_on_good_times_ideas from '../../public/images/illustrasjoner/fallen_on_good_times_ideas.webp';
import graphic_novel_page_1 from '../../public/images/illustrasjoner/graphic_novel_page_1.webp';
import graphic_novel_page_2 from '../../public/images/illustrasjoner/graphic_novel_page_2.webp';
import health_risk_sitting_too_long1 from '../../public/images/illustrasjoner/health_risk_sitting_too_long1.webp';
import health_risk_sitting_too_long2 from '../../public/images/illustrasjoner/health_risk_sitting_too_long2.webp';
import jaws_poster from '../../public/images/illustrasjoner/jaws_poster.webp';
import one_flew_over_the_cuckoos_nest_book_cover from '../../public/images/illustrasjoner/one_flew_over_the_cuckoos_nest_book_cover.webp';
import personal_work from '../../public/images/illustrasjoner/personal_work.webp';
import psychopath from '../../public/images/illustrasjoner/psychopath.webp';
import what_a_carve_up_book_cover from '../../public/images/illustrasjoner/what_a_carve_up_book_cover.webp';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { styled } from '@mui/system';  
import { Header } from 'cv';
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
import React, { useState, useEffect } from 'react';

const illustrasjoner = [
  { src: graphic_novel_page_1, alt: 'Graphic Novel Page 1' },
  { src: graphic_novel_page_2, alt: 'Graphic Novel Page 2' },
  { src: akira, alt: 'Akira' },
  { src: health_risk_sitting_too_long1, alt: 'Health Risk: Sitting Too Long 1' },
  { src: health_risk_sitting_too_long2, alt: 'Health Risk: Sitting Too Long 2' },
  { src: personal_work, alt: 'Personal Work' },
  { src: psychopath, alt: 'Psychopath' },
  { src: box, alt: 'Box' },
  { src: cloud_storage1, alt: 'Cloud Storage 1' },
  { src: cloud_storage2, alt: 'Cloud Storage 2' },
  { src: cleaning_product_poser_design_1, alt: 'Cleaning Product Poser Design 1' },
  { src: cleaning_product_poser_design_2, alt: 'Cleaning Product Poser Design 2' },
  { src: cleaning_product_poser_design_3, alt: 'Cleaning Product Poser Design 3' },
  { src: jaws_poster, alt: 'Jaws Poster' },
  { src: fallen_on_good_times_book_cover, alt: 'Fallen on Good Times Book Cover' },
  { src: fallen_on_good_times_ideas, alt: 'Fallen on Good Times Ideas' },
  { src: one_flew_over_the_cuckoos_nest_book_cover, alt: 'One Flew Over the Cuckoo\'s Nest Book Cover' },
  { src: city_phantoms_book_cover, alt: 'City Phantoms Book Cover' },
  { src: what_a_carve_up_book_cover, alt: 'What a Carve Up Book Cover' },
];
const Illustrasjoner: NextPage = () => {
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });
  const locale = useSelector(selectLocale);
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  const currentTheme = theme === 'light' ? lightTheme : darkTheme;
  const messages = { en: enUs, no: nbNo };

  useEffect(() => {
    const updateDimensions = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const isMobile = windowDimensions.width <= 600;
  const imageWidth = Math.min(windowDimensions.width * 0.9, 1200); // 90% of screen width, max 1200px
  const imageHeight = isMobile ? windowDimensions.height * 0.8 : windowDimensions.height * 0.9; // 80% of screen height for mobile, 90% for larger screens

  const mobileGap = 5; // Gap for mobile view
  const webGap = 80; // Gap for web view

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <IntlProvider
        locale={locale}
        messages={messages[locale as keyof typeof messages]}
      >
        <Box sx={{ position: 'sticky', top: 0, zIndex: 1000 }}>
          <Header
            headerLinks={[
              '/privatmegleren',
              '/differ-pragma',
              '/diggit',
              '/bestatt',
              '/illustrasjoner',
            ]}
            locale={locale}
            theme={theme}
            subsite={true}
            updateLocale={(locale: string) => dispatch(updateLocale(locale))}
            toggleTheme={() => dispatch(toggleTheme())}
          />
        </Box>
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            py: {
              xs: '20px',
              sm: '30px',
              md: '40px',
            },
            px: {
              xs: '20px',
              sm: '30px',
              md: '40px',
            }
          }}
        >
          {illustrasjoner.map((illus, index) => (
            <Box
              key={index}
              sx={{
                height: {
                  xs: `calc(100vh - 64px)`, // Adjust 64px if your header height is different
                  sm: `${imageHeight}px`,
                },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingBottom: isMobile ? `${mobileGap}px` : `${webGap}px`,
                '&:last-child': {
                  paddingBottom: 0,
                },
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  maxWidth: `${imageWidth}px`,
                }}
              >
                <Image
                  alt={illus.alt}
                  src={illus.src}
                  layout="fill"
                  objectFit="contain"
                  priority={index === 0}
                />
              </Box>
            </Box>
          ))}
        </Box>
      </IntlProvider>
    </ThemeProvider>
  );
};

export default Illustrasjoner;