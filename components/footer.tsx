import { Facebook, Instagram, Youtube, FooterLogo } from '@components/svg';
import Layout from '@layouts/sectionLayout';
import { useLocale } from '@libs/client/useLocale';
import Link from 'next/link';

export default function Footer() {
  const { text } = useLocale();
  return (
    <footer className='w-screen bg-[#24b6bc] pt-14 pb-8 md:pt-10 md:pb-14'>
      <div className='mx-auto flex max-w-[1400px] md:flex-col md:items-center'>
        <div className='w-1/3 md:flex md:w-full md:justify-center'>
          <FooterLogo />
        </div>

        <div className='-mt-1.5 w-1/3 md:mt-0 md:flex md:w-full md:justify-center'>
          <div className='text-white md:mt-3.5 md:text-center md:text-[0.688rem]'>
            {text.footer['1']}
            <br />
            +82-51-714-3119 / +82-51-440-3353
            <br />
            okfyouthcamp@vncom.kr
          </div>

          <div className='mt-10 text-sm text-white md:hidden'>
            {text.footer['2']}
          </div>
        </div>

        <div className='flex w-1/3 flex-col items-end justify-between md:w-full md:items-center'>
          <div className='flex items-center space-x-8 md:hidden'>
            {/* <Instagram /> */}
            <Facebook color='white' />
            <Youtube color='white' />
          </div>

          <div className='mt-8 flex items-center space-x-4 md:mt-5 md:space-x-2.5 md:text-[0.8rem]'>
            <Link href='/service-policy'>
              <a>
                <div className='text-white'>{text.footer['3']}</div>
              </a>
            </Link>

            <div className='text-sm text-[#9e9e9e]'>|</div>
            <Link href='/email-policy'>
              <a>
                <div className='text-white'>{text.footer['4']}</div>
              </a>
            </Link>

            <div className='text-sm text-[#9e9e9e]'>|</div>
            <Link href='/privacy-policy'>
              <a>
                <div className='text-white'>{text.footer['5']}</div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
