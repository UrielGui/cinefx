import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import Link2 from 'next/link';

export default function DesktopMenu({ resultThemeMode, resolvedTheme }) {
  const { t } = useTranslation();
  return (
    <div className='hidden xl:flex text-lg place-items-center pr-16' media='(prefers-color-scheme: light)'>
      <div className='py-6 bg-defaultBlue dark:bg-defaultBlack3 px-16'>
        <Image
          className='relative top-0.5'
          src={
            resultThemeMode !== undefined && resultThemeMode !== null
              ? resultThemeMode[resolvedTheme]
              : '/img/dark-logo.png'
          }
          alt={t('head.title')}
          width='180'
          height='36'
        />
      </div>
      <div className='flex flex-grow'>
        <nav className='flex text-defaultBlack dark:text-inherit w-full mt-1 pl-4'>
          <ul className='flex px-4 flex-grow place-items-center'>
            <li className='px-6 cursor-pointer hover:opacity-80'>
              <Link to='about' smooth={true}>
                {t('header.nav.option-1')}
              </Link>
            </li>
            <li className='px-6 cursor-pointer hover:opacity-80'>
              <Link to='pricing' smooth={true}>
                {t('header.nav.option-2')}
              </Link>
            </li>
            <li className='px-6 cursor-pointer hover:opacity-80'>
              {' '}
              <Link to='faq' smooth={true}>
                {t('header.nav.option-3')}
              </Link>
            </li>
          </ul>
          <div className='flex'>
            <ul className='flex flex-grow place-items-center'>
              <li className='px-6 cursor-pointer hover:opacity-80'>
                {' '}
                <Link to='pricing-2' smooth={true}>
                  {t('header.nav.option-4')}
                </Link>
              </li>
              <li className='px-2 cursor-pointer'>
                <Link2 href='#'>
                  <button type='button' className='bg-defaultBlue rounded-md py-1 px-5 hover:opacity-80'>
                    {t('header.nav.option-5')}
                  </button>
                </Link2>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
