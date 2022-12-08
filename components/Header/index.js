import DesktopMenu from './Menu/desktop';
import MobileMenu from './Menu/mobile';

export default function Header() {
  return (
    <header className='bg-defaultBlack2 shadow-[0_-3px_39px_19px_rgba(0,0,0,0.28)]'>
      <DesktopMenu />
      <MobileMenu />
    </header>
  );
}
