import { useLocale } from '@libs/client/useLocale';
import { cls, clsFilter } from '@libs/client/utils';
import Link from 'next/link';

interface IProps {
  courseType: string;
  courseCategory: string;
}

export default function Navigator({ courseType, courseCategory }: IProps) {
  const { locale, text } = useLocale();
  return (
    <div className='border-b border-[#e8e8e8]'>
      <div className='flex items-center justify-center md:mx-auto md:max-w-[330px] md:space-x-8'>
        {/* 기초 과정 */}
        <Link href={`/course/list/${courseType}/required/1`}>
          <a>
            <div
              className={cls(
                courseCategory === 'required'
                  ? 'border-[#2fb6bc]'
                  : 'border-transparent text-[#9e9e9e]',
                clsFilter(
                  locale,
                  'w-48 text-[1.375rem]',
                  'w-60 text-center text-xl leading-tight',
                  'w-80 text-center text-xl leading-tight'
                ),
                'flex h-16 items-center justify-center border-b-4 font-bold md:h-14 md:w-auto md:border-b-2 md:text-base'
              )}
            >
              {text.preCourseHeader['4']}
            </div>
          </a>
        </Link>
        {/* 기초 과정 */}

        {/* 심화 과정 */}
        <Link href={`/course/list/${courseType}/elective/1`}>
          <a>
            <div
              className={cls(
                courseCategory === 'elective'
                  ? 'border-[#2fb6bc]'
                  : 'border-transparent text-[#9e9e9e]',
                clsFilter(
                  locale,
                  'w-48 text-[1.375rem]',
                  'w-60 text-center text-xl leading-tight',
                  'w-80 text-center text-xl leading-tight'
                ),
                'flex h-16 items-center justify-center border-b-4 font-bold md:h-14 md:w-auto md:border-b-2 md:text-base'
              )}
            >
              {text.preCourseHeader['5']}
            </div>
          </a>
        </Link>
        {/* 심화 과정 */}
      </div>
    </div>
  );
}
