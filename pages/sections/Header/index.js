import DesktopMenu from './Menu/desktop';
import MobileMenu from './Menu/mobile';
import { useTheme } from 'next-themes';
import { useThemeModeItems } from '../../../hooks/useThemeMode';

export default function Header() {
  const { resolvedTheme } = useTheme();

  let resultThemeMode = useThemeModeItems('/img/light-logo.png', '/img/dark-logo.png');

  return (
    <header className='bg-lightBG dark:bg-defaultBlack2 shadow-[0_-3px_39px_19px_rgba(0,0,0,0.28)]'>
      <DesktopMenu resultThemeMode={resultThemeMode} resolvedTheme={resolvedTheme} />
      <MobileMenu resultThemeMode={resultThemeMode} resolvedTheme={resolvedTheme} />
    </header>
  );
}
