import SEO from '@components/seo';
import Layout from '@layouts/sectionLayout';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PreOnlieBgImg from '@public/course/pre-online-bg.png';
import OnlieBgImg from '@public/course/online-bg.png';
import { useLocale } from '@libs/client/useLocale';
import { cls, clsFilter } from '@libs/client/utils';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useUser } from '@libs/client/useUser';

const Course: NextPage = () => {
  const { locale, text } = useLocale();
  const { profile } = useUser({ isPrivate: true });

  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <>
      <SEO title='연수실' />
      <div className='w-screen pt-44 pb-24 md:pt-32'>
        <div className='mx-auto w-full max-w-[1180px] md:max-w-[330px]'>
          {/* <Layout padding='pt-44 pb-24'> */}
          <div
            className={cls(
              clsFilter(
                locale,
                'font-nexonBold',
                'font-notoSans',
                'font-notoSans'
              ),
              'flex justify-center text-4xl font-bold md:text-3xl'
            )}
          >
            {text.course['1']}
          </div>
          <div
            className={cls(
              clsFilter(
                locale,
                'font-nexonBold',
                'font-notoSans',
                'font-notoSans'
              ),
              'mt-4 flex justify-center font-bold md:mt-2'
            )}
          >
            {text.course['2']}
          </div>

          <div className='mt-16 grid grid-cols-2 gap-x-5 md:mt-10 md:grid-cols-1 md:gap-x-0 md:gap-y-5'>
            {/* 사전 온라인연수 */}
            <div
              data-aos='fade-up'
              data-aos-duration='1500'
              className='group relative flex h-[26rem] flex-col items-center justify-center space-y-6 rounded-lg md:h-60 md:space-y-4'
            >
              <div className='absolute top-0 left-0 -z-[1] h-full w-full transition-all group-hover:grayscale-[50%]'>
                <Image
                  src={PreOnlieBgImg}
                  alt='Pre Online Course Background Image'
                  layout='fill'
                  objectFit='cover'
                  placeholder='blur'
                  quality={100}
                  className='rounded-lg'
                />
              </div>

              <div className='text-[1.625rem] font-bold text-white md:text-2xl'>
                {text.course['3']}
              </div>

              {profile?.pre_training || profile?.is_superuser ? (
                <Link href='/course/list/pre-online/required/1'>
                  <a>
                    <div className='invisible flex h-[3.75rem] w-44 translate-y-4 cursor-pointer items-center justify-center rounded-lg border border-white bg-[rgba(0,0,0,0.5)] text-xl font-bold text-white opacity-0 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 md:h-14 md:w-36 md:text-lg'>
                      {text.course['4']}
                    </div>
                  </a>
                </Link>
              ) : (
                <div
                  onClick={() => alert('수강 대상이 아닙니다.')}
                  className='invisible flex h-[3.75rem] w-44 translate-y-4 cursor-pointer items-center justify-center rounded-lg border border-white bg-[rgba(0,0,0,0.5)] text-xl font-bold text-white opacity-0 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 md:h-14 md:w-36 md:text-lg'
                >
                  {text.course['4']}
                </div>
              )}
            </div>
            {/* 사전 온라인연수 */}

            {/* 온라인연수 */}
            <div
              data-aos='fade-up'
              data-aos-duration='1500'
              className='group relative flex h-[26rem] flex-col items-center justify-center space-y-6 md:h-60 md:space-y-4'
            >
              <div className='absolute top-0 left-0 -z-[1] h-full w-full transition-all group-hover:grayscale-[50%]'>
                <Image
                  src={OnlieBgImg}
                  alt='Online Course Background Image'
                  layout='fill'
                  objectFit='cover'
                  placeholder='blur'
                  quality={100}
                  className='rounded-lg'
                />
              </div>
              <div className='text-[1.625rem] font-bold text-white'>
                {text.course['5']}
              </div>
              {!profile?.pre_training || profile?.is_superuser ? (
                <Link href='/course/list/online/required/1'>
                  <a>
                    <div className='invisible flex h-[3.75rem] w-44 translate-y-4 cursor-pointer items-center justify-center rounded-lg border border-white bg-[rgba(0,0,0,0.5)] text-xl font-bold text-white opacity-0 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 md:h-14 md:w-36 md:text-lg'>
                      {text.course['6']}
                    </div>
                  </a>
                </Link>
              ) : (
                <div
                  onClick={() => alert('수강 대상이 아닙니다.')}
                  className='invisible flex h-[3.75rem] w-44 translate-y-4 cursor-pointer items-center justify-center rounded-lg border border-white bg-[rgba(0,0,0,0.5)] text-xl font-bold text-white opacity-0 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 md:h-14 md:w-36 md:text-lg'
                >
                  {text.course['6']}
                </div>
              )}
            </div>
            {/* 온라인연수 */}
          </div>
          {/* </Layout> */}
        </div>
      </div>
    </>
  );
};

export default Course;
