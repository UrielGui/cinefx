import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className='bg-defaultBlack2'>
      <div className='default-container'>
        <div className='flex text-base py-4 flex-col lg:flex-row place-items-center'>
          <div className='flex flex-grow place-items-center'>
            <span className='px-2'>
              Copyright © 2022 <span className='font-bold'>{t('footer.copyright.name')}</span>.{' '}
              {t('footer.copyright.all-rights-reserved')}
            </span>
          </div>
          <div className='flex'>
            <Image src='/img/payments-method.png' alt='payments method' width={300} height={100} />
          </div>
        </div>
      </div>
    </footer>
  );
}
