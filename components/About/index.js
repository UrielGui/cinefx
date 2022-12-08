import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  return (
    <section id='about' className='py-12'>
      <div className='default-container'>
        <div className='w-full md:w-11/12 flex items-center md:items-start flex-col'>
          <h1 className='text-3xl'>{t('about.title')}</h1>
          <p className='mt-6'>{t('about.description-1')}</p>
          <p className='mt-6'>{t('about.description-2')}</p>
          <p className='mt-6'>{t('about.description-3')}</p>
        </div>
        <div className='w-full flex justify-center flex-col md:flex-row mt-12 md:mt-10 md:space-x-28 space-y-12 md:space-y-0 place-items-center text-center'>
          <div className='w-ful md:w-3/12 flex flex-col items-center'>
            <Image
              src='/img/step-by-step/step-1.png'
              alt={t('about.step-by-step-img-alt-1')}
              width={200}
              height={100}
            />
            <p className='mt-2'>{t('about.step-by-step-1')}</p>
          </div>
          <div className='w-full md:w-3/12 flex flex-col items-center'>
            <Image
              src='/img/step-by-step/step-2.png'
              alt={t('about.step-by-step-img-alt-2')}
              width={200}
              height={100}
            />
            <p className='mt-2'>{t('about.step-by-step-2')}</p>
          </div>
          <div className='w-ful md:w-3/12 flex flex-col items-center'>
            <Image
              src='/img/step-by-step/step-3.png'
              alt={t('about.step-by-step-img-alt-3')}
              width={200}
              height={100}
            />
            <p className='mt-2'>{t('about.step-by-step-3')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
