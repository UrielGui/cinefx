import { useTranslation } from 'react-i18next';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';
import Link from 'next/link';

export default function PriceList({ inputChecked }) {
  const { t } = useTranslation();
  const defaultCheckedIcon = { color: '#0CDFD2', marginRight: '5px', fontSize: '1.2em' };
  const mainCheckedIcon = { color: '#0C7CE3', marginRight: '5px', fontSize: '1.2em' };
  const defaultCancelIcon = { color: '#DF0B7D', marginRight: '5px', fontSize: '1.1em' };

  const monthly = {
    price1: t('pricing.plans.monthly.price-1'),
    price2: t('pricing.plans.monthly.price-2'),
    price3: t('pricing.plans.monthly.price-3'),
  };

  const annually = {
    price1: t('pricing.plans.annually.price-1'),
    price2: t('pricing.plans.annually.price-2'),
    price3: t('pricing.plans.annually.price-3'),
  };

  return (
    <div className='w-full flex justify-between mt-8 lg:mt-20 lg:flex-row flex-col place-items-center'>
      <div className='w-72 sm:w-96 flex flex-col border-defaultGreen border-4 rounded-2xl'>
        <div className='py-6 bg-gradient-to-b from-defaultGreen to-transparent rounded-t-lg'>
          <h1 className='text-3xl font-semibold'>{t('pricing.plans.title-1')}</h1>
          <h2 className='text-3xl font-semibold mt-4'>
            {inputChecked ? `${annually.price1}/yr` : `${monthly.price1}/mo`}
          </h2>
        </div>
        <ul className='space-y-4 py-6 pl-8'>
          <li className='flex align-items: center;'>
            <AiOutlineCheckCircle style={defaultCheckedIcon} />{' '}
            <span className='relative -top-0.5 text-base'>{t('pricing.plans.custom-features.table-1.feature-1')}</span>
          </li>
          <li className='flex align-items: center;'>
            <ImCancelCircle style={defaultCancelIcon} />{' '}
            <span className='relative -top-0.5 text-base ml-1'>{t('pricing.plans.default-features.feature-1')}</span>
          </li>
          <li className='flex align-items: center;'>
            <ImCancelCircle style={defaultCancelIcon} />{' '}
            <span className='relative -top-0.5 text-base ml-1'>{t('pricing.plans.default-features.feature-2')}</span>
          </li>
          <li className='flex align-items: center;'>
            <AiOutlineCheckCircle style={defaultCheckedIcon} />{' '}
            <span className='relative -top-0.5 text-base ml-1'>{t('pricing.plans.default-features.feature-3')}</span>
          </li>
          <li className='flex'>
            <AiOutlineCheckCircle style={defaultCheckedIcon} />{' '}
            <span className='relative -top-0.5 text-base ml-1'>{t('pricing.plans.default-features.feature-4')}</span>
          </li>
          <li className='flex'>
            <AiOutlineCheckCircle style={defaultCheckedIcon} />{' '}
            <span className='relative -top-0.5 text-base ml-1'>{t('pricing.plans.default-features.feature-5')}</span>
          </li>
          <li className='flex'>
            <AiOutlineCheckCircle style={defaultCheckedIcon} />{' '}
            <span className='relative -top-0.5 text-base ml-1'>{t('pricing.plans.default-features.feature-6')}</span>
          </li>
          <li className='flex'>
            <AiOutlineCheckCircle style={defaultCheckedIcon} />{' '}
            <span className='relative -top-0.5 text-base ml-1'>
              {t('pricing.plans.custom-features.table-1.feature-2')}
            </span>
          </li>
        </ul>
        <Link href={inputChecked ? '#' : '#'}>
          <button type='button' className='bg-defaultGreen w-4/5 rounded-md py-3 px-5 mb-6'>
            {t('pricing.plans.button')}
          </button>
        </Link>
      </div>
      <div className='w-72 sm:w-96 border-defaultBlue lg:mx-6 border-4 my-14 lg:mt-0 rounded-2xl relative lg:-top-8'>
        <div className='py-6 bg-gradient-to-b from-defaultBlue to-transparent rounded-t-lg'>
          <span className='absolute -top-4 w-[150px] left-0 right-0 ml-auto mr-auto bg-defaultPurple py-px px-4 rounded-md'>
            {t('pricing.plans.recommended')}
          </span>
          <h1 className='text-3xl font-semibold'>{t('pricing.plans.title-2')}</h1>
          <h2 className='text-3xl font-semibold mt-4'>
            {inputChecked ? `${annually.price2}/yr` : `${monthly.price2}/mo`}
          </h2>
        </div>
        <ul className='space-y-4 py-6 pl-8'>
          <li className='flex align-items: center;'>
            <AiOutlineCheckCircle style={mainCheckedIcon} />{' '}
            <span className='relative -top-0.5 text-base ml-1'>
              {t('pricing.plans.custom-features.table-2.feature-1')}
            </span>
          </li>
          <li className='flex align-items: center;'>
            <AiOutlineCheckCircle style={mainCheckedIcon} />{' '}
            <span className='relative -top-0.5 text-base ml-1'>{t('pricing.plans.default-features.feature-1')}</span>
          </li>
          <li className='flex align-items: center;'>
            <ImCancelCircle style={defaultCancelIcon} />{' '}
            <span className='relative -top-0.5 text-base ml-1'>{t('pricing.plans.default-features.feature-2')}</span>
          </li>
          <li className='flex align-items: center;'>
            <AiOutlineCheckCircle style={mainCheckedIcon} />{' '}
            <span className='relative -top-0.5 text-base ml-1'>{t('pricing.plans.default-features.feature-3')}</span>
          </li>
          <li className='flex'>
            <AiOutlineCheckCircle style={mainCheckedIcon} />{' '}
            <span className='relative -top-0.5 text-base ml-1'>{t('pricing.plans.default-features.feature-4')}</span>
          </li>
          <li className='flex'>
            <AiOutlineCheckCircle style={mainCheckedIcon} />{' '}
            <span className='relative -top-0.5 text-base ml-1'>{t('pricing.plans.default-features.feature-5')}</span>
          </li>
          <li className='flex'>
            <AiOutlineCheckCircle style={mainCheckedIcon} />{' '}
            <span className='relative -top-0.5 text-base ml-1'>{t('pricing.plans.default-features.feature-6')}</span>
          </li>
          <li className='flex'>
            <AiOutlineCheckCircle style={mainCheckedIcon} />{' '}
            <span className='relative -top-0.5 text-base ml-1'>
              {t('pricing.plans.custom-features.table-2.feature-2')}
            </span>
          </li>
        </ul>
        <Link href={inputChecked ? '#' : '#'}>
          <button type='button' className='bg-defaultBlue w-4/5 rounded-md py-3 px-5 mb-6 font-semibold'>
            {t('pricing.plans.button')}
          </button>
        </Link>
      </div>
      <div className='w-72 sm:w-96 flex flex-col border-defaultGreen border-4 rounded-2xl'>
        <div className='py-6 bg-gradient-to-b from-defaultGreen to-transparent rounded-t-lg'>
          <h1 className='text-3xl font-semibold'>{t('pricing.plans.title-3')}</h1>
          <h2 className='text-3xl font-semibold mt-4'>
            {inputChecked ? `${annually.price3}/yr` : `${monthly.price3}/mo`}
          </h2>
        </div>
        <ul className='space-y-4 py-6 pl-8'>
          <li className='flex align-items: center;'>
            <AiOutlineCheckCircle style={defaultCheckedIcon} />{' '}
            <span className='relative -top-0.5 text-base'>
              <span className='relative -top-0.5 text-base'>
                {t('pricing.plans.custom-features.table-3.feature-1')}
              </span>
            </span>
          </li>
          <li className='flex align-items: center;'>
            <AiOutlineCheckCircle style={defaultCheckedIcon} />{' '}
            <span className='relative -top-0.5 text-base ml-1'>{t('pricing.plans.default-features.feature-1')}</span>
          </li>
          <li className='flex align-items: center;'>
            <AiOutlineCheckCircle style={defaultCheckedIcon} />{' '}
            <span className='relative -top-0.5 text-base ml-1'>{t('pricing.plans.default-features.feature-2')}</span>
          </li>
          <li className='flex align-items: center;'>
            <AiOutlineCheckCircle style={defaultCheckedIcon} />{' '}
            <span className='relative -top-0.5 text-base ml-1'>{t('pricing.plans.default-features.feature-3')}</span>
          </li>
          <li className='flex'>
            <AiOutlineCheckCircle style={defaultCheckedIcon} />{' '}
            <span className='relative -top-0.5 text-base ml-1'>{t('pricing.plans.default-features.feature-4')}</span>
          </li>
          <li className='flex'>
            <AiOutlineCheckCircle style={defaultCheckedIcon} />{' '}
            <span className='relative -top-0.5 text-base ml-1'>{t('pricing.plans.default-features.feature-5')}</span>
          </li>
          <li className='flex'>
            <AiOutlineCheckCircle style={defaultCheckedIcon} />{' '}
            <span className='relative -top-0.5 text-base ml-1'>{t('pricing.plans.default-features.feature-6')}</span>
          </li>
          <li className='flex'>
            <AiOutlineCheckCircle style={defaultCheckedIcon} />{' '}
            <span className='relative -top-0.5 text-base ml-1'>
              {t('pricing.plans.custom-features.table-3.feature-2')}
            </span>
          </li>
        </ul>
        <Link href={inputChecked ? '#' : '#'}>
          <button type='button' className='bg-defaultGreen w-4/5 rounded-md py-3 px-5 mb-6'>
            {t('pricing.plans.button')}
          </button>
        </Link>
      </div>
    </div>
  );
}
