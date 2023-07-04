import '../styles/globals.css';
// import '../public/css/main.css';
import '../i18n';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
