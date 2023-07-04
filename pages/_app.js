import '../styles/globals.css'; // use to develop
// import '../public/css/main.css'; // use to production
import '../i18n';
import { ThemeProvider } from 'next-themes';
import CustomFont from '@next/font/local';

const openSans = CustomFont({
  src: '../public/fonts/OpenSans-Regular.ttf',
  variable: '--font-openSans',
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <main className={`${openSans.variable}`}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default MyApp;
