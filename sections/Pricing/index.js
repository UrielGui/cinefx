import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import PriceList from './priceList';

export default function Pricing() {
  const inputRefChecked = useRef(null);
  const [inputChecked, setInputChecked] = useState(null);
  const { t } = useTranslation();
  return (
    <section
      id='pricing'
      className='py-8 text-base bg-lightBG dark:bg-defaultBlack text-defaultBlack dark:text-inherit'
    >
      <div className='default-container'>
        <div className='text-center flex flex-col items-center py-8'>
          <h1 className='text-4xl'>{t('pricing.title')}</h1>
          <p className='mt-3'>{t('pricing.description')}</p>
          <div className='flex mt-20'>
            <span className='font-semibold'>{t('pricing.option-1')}</span>
            <div className='relative inline-block w-28 align-middle select-none mx-4 mr-4 -top-2'>
              <input
                type='checkbox'
                name='toggle'
                id='toggle'
                ref={inputRefChecked}
                onChange={() => setInputChecked(inputRefChecked.current?.checked)}
                className='toggle-checkbox absolute block w-10 h-10 rounded-full bg-white border-4 appearance-none cursor-pointer'
              />
              <label
                htmlFor='toggle'
                className='toggle-label block overflow-hidden h-10 rounded-full bg-defaultCyan cursor-pointer'
              />
            </div>
            <span className='font-semibold'>{t('pricing.option-2')}</span>
          </div>
          <PriceList inputChecked={inputChecked} />
        </div>
      </div>
    </section>
  );
}
