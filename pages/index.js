import { useThemeMode } from '../hooks/useThemeMode';
import Head from 'next/head';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import Header from './sections/Header';
import HeroSection from './sections/HeroSection';
import Description from './sections/Description';
import About from './sections/About';
import Pricing from './sections/Pricing';
import Pricing2 from './sections/Pricing-2';
import Faq from './sections/Faq';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function Home() {
  const { t } = useTranslation();
  useThemeMode();
  return (
    <>
      <Head>
        <title>{t('head.title')}</title>
        <meta name='description' content={t('head.description')} />
        <link rel='icon' href='img/favicon.ico' />
      </Head>
      <Header />
      <Image
        src='/img/blue-light-background.png'
        alt={t('about-img-alt-1')}
        className='absolute w-[28%] h-[200vh] top-[860px] max-w-md max-h-[120rem] z-40'
        width={200}
        height={100}
      />
      <Image
        src='/img/pink-light-background.png'
        alt={t('about.step-by-step-img-alt-1')}
        className='absolute w-[28%] h-[200vh] top-[860px] left-auto right-[0%] max-w-md max-h-[120rem] z-40'
        width={200}
        height={100}
        priority
      />
      <HeroSection />
      <Description />
      <About />
      <Pricing />
      <Pricing2 />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}
