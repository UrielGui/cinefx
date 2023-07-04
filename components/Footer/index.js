import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className='bg-defaultBlue dark:bg-defaultBlack2'>
      <div className='default-container'>
        <div className='flex text-base py-6 flex-col lg:flex-row place-items-center'>
          <div className='flex flex-grow place-items-center'>
            <span className='px-2 text-center mb-2 lg:mb-0'>
              Copyright © {year} <span className='font-bold'>{t('footer.copyright.name')}</span>.{' '}
              {t('footer.copyright.all-rights-reserved')}
            </span>
          </div>
          <div className='flex'>
            <Image priority src='/img/payments-method.png' alt='payments method' width={300} height={28} />
          </div>
        </div>
      </div>
    </footer>
  );
}
