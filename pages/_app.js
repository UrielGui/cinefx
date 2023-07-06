import '../public/css/main.css';
import '../i18n';
import { ThemeProvider } from 'next-themes';
import CustomFont from '@next/font/local';

const openSans = CustomFont({
  src: '../public/fonts/OpenSans-Regular.ttf',
  variable: '--font-openSans',
});

function CineFx({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <main className={`${openSans.variable}`}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default CineFx;
