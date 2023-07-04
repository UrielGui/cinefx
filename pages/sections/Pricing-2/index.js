import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { useTheme } from 'next-themes';
import { useThemeModeImage } from '../../../hooks/useThemeMode';

export default function Pricing2() {
  const { t } = useTranslation();
  const { resolvedTheme } = useTheme();
  const defaultCheckedIcon = { color: '#0C7CE3', marginRight: '5px', fontSize: '1.2em' };
  let resultThemeMode = useThemeModeImage(
    '/img/management-panel_light_mode.png',
    '/img/management-panel_dark_mode.png'
  );
  return (
    <section
      id='pricing-2'
      className='py-10 text-base bg-lightBG2 dark:bg-defaultBlack2 text-defaultBlack dark:text-inherit '
    >
      <div className='default-container'>
        <div className='text-center flex flex-col items-center py-6'>
          <h1 className='text-4xl'>{t('pricing-2.title')}</h1>
          <p className='mt-3'>{t('pricing-2.description')} </p>
        </div>
        <div className='min-w-full mt-8'>
          <div className='flex text-base md:flex-row flex-col flex-col-reverse'>
            <div className='flex flex-grow flex-col md:place-items-start place-items-center font-semibold'>
              <h2>{t('pricing-2.description-2')}</h2>
              <ul className='md:space-y-2 mt-6'>
                <li className='flex align-items: center;'>
                  <AiOutlineCheckCircle style={defaultCheckedIcon} />{' '}
                  <span className='relative -top-0.5 text-base ml-1'>{t('pricing-2.features.feature-1')}</span>
                </li>
                <li className='flex align-items: center;'>
                  <AiOutlineCheckCircle style={defaultCheckedIcon} />{' '}
                  <span className='relative -top-0.5 text-base ml-1'>{t('pricing-2.features.feature-2')}</span>
                </li>
                <li className='flex align-items: center;'>
                  <AiOutlineCheckCircle style={defaultCheckedIcon} />{' '}
                  <span className='relative -top-0.5 text-base ml-1'>{t('pricing-2.features.feature-3')}</span>
                </li>
                <li className='flex'>
                  <AiOutlineCheckCircle style={defaultCheckedIcon} />{' '}
                  <span className='relative -top-0.5 text-base ml-1'>{t('pricing-2.features.feature-4')}</span>
                </li>
                <li className='flex'>
                  <AiOutlineCheckCircle style={defaultCheckedIcon} />{' '}
                  <span className='relative -top-0.5 text-base ml-1'>{t('pricing-2.features.feature-5')}</span>
                </li>
                <li className='flex'>
                  <AiOutlineCheckCircle style={defaultCheckedIcon} />{' '}
                  <span className='relative -top-0.5 text-base ml-1'>{t('pricing-2.features.feature-6')}</span>
                </li>
              </ul>
              <Link href='#'>
                <button type='button' className='bg-defaultBlue w-64 mt-6 rounded-md py-3 px-5 mb-6'>
                  {t('pricing.plans.button')}
                </button>
              </Link>
            </div>
            <div className='mb-8 md:mb-0 place-self-center'>
              <Image
                priority
                className='rounded-xl shadow-lg shadow-blue-900/40'
                src={
                  resultThemeMode !== undefined && resultThemeMode !== null
                    ? resultThemeMode[resolvedTheme]
                    : '/img/management-panel_dark_mode.png'
                }
                alt='dashboard'
                width={500}
                height={345}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
