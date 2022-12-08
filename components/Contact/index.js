import { useTranslation } from 'react-i18next';
import Link from 'next/link';

export default function Contact() {
  const { t } = useTranslation();
  return (
    <section id='contact' className='py-10 text-base'>
      <div className='default-container'>
        <div className='text-center flex flex-col items-center py-6'>
          <h1 className='text-base'>{t('contact.title')}</h1>
          <Link href='#'>
            <button type='button' className='bg-defaultGreen rounded-md py-3 px-12 mt-4'>
              (308) 796-5460
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
