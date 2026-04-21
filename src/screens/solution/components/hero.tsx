import { ArrowRightHero } from '@/screens/solution/icons'
import { cn } from '@/utils'

export const Hero = () => {
    const handleContactClick = () => {
        const contactSectionEl = document.querySelector('#contact')
        contactSectionEl?.scrollIntoView()
    }

    return (
        <div
            className={cn(
                'relative w-full *:select-none bg-[#edf3fc]',
                'lg:h-120',
                'md:h-80 md:overflow-hidden',
                'max-md:h-95 max-md:overflow-hidden',
            )}
        >
            <div
                className={cn(
                    'mx-auto relative z-10 h-full',
                    'lg:max-w-290 lg:px-4',
                    'md:max-w-200 md:px-4',
                    'max-md:max-w-145 max-md:px-6',
                )}
            >
                <img
                    src="/hero/hero-xtool.webp"
                    alt="xtool-image"
                    className={cn(
                        'absolute',
                        'lg:w-240 lg:bottom-10 lg:left-70',
                        'md:w-160 md:bottom-5 md:left-60',
                        'max-md:w-200 max-md:bottom-5 max-md:left-2',
                    )}
                />
                <div className={cn('flex flex-col relative')}>
                    <div
                        className={cn(
                            'font-[700] font-pretendard text-title-black tracking-[-1px]',
                            'lg:text-[40px] lg:mt-17',
                            'md:text-[22px] md:mt-13 md:leading-[160%]',
                            'max-md:text-[25px] max-md:mt-8',
                        )}
                    >
                        기업 및 기관 혁신을 위한
                        <br /> <span className="font-montserrat">
                            xTool
                        </span>{' '}
                        레이저 솔루션
                    </div>
                    <div
                        className={cn(
                            'text-title-black font-[400] font-pretendard tracking-[-0.5px]',
                            'lg:text-[20px] lg:mt-5',
                            'md:text-[16px] md:mt-3',
                            'max-md:text-[15px] max-md:mt-3',
                        )}
                    >
                        기업·기관 맞춤 엑스툴 장비 도입을 지원합니다
                    </div>

                    <div
                        className={cn(
                            'flex text-[17px] items-center justify-center bg-btn-dark text-[#ffffff] rounded-[3px] hover:bg-btn-dark/85 py-2 gap-0.5 cursor-pointer font-pretendard',
                            'lg:mt-10 lg:w-[149px] lg:h-[45px]',
                            'md:mt-6 md:w-[140px] md:h-[40px]',
                            'max-md:text-[15px] max-md:mt-4 max-md:w-[125px] max-md:h-[35px]',
                        )}
                        onClick={handleContactClick}
                    >
                        견적 문의하기
                        <div className="md:-mr-2 max-md:-mr-1 md:ml-2 max-md:ml-1.5">
                            <ArrowRightHero
                                className={'max-md:transform-[scale(0.9)]'}
                                size={15}
                                color="#ffffff"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
