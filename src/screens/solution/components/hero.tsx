import { ChevronDownIcon } from '@/screens/solution/icons'
import { cn } from '@/utils'

export const Hero = () => {
    const handleContactClick = () => {
        const contactSectionEl = document.querySelector('#contact')
        contactSectionEl?.scrollIntoView()
    }

    return (
        <div
            className={cn(
                'relative w-full *:select-none h-150 bg-[#edf3fc]',
                'lg:h-125',
                'md:h-80',
            )}
        >
            <div
                className={cn(
                    'w-full h-full top-0 left-0 bg-no-repeat bg-[url(/hero/education-mobile.webp)] bg-size-[100%_auto] bg-[#edf3fc] bg-position-[0px_0px]',
                    'lg:max-w-300 lg:mx-auto lg:bg-size-[auto_500px] lg:bg-position-[-700px_0px] lg:bg-[url(/hero/education-intro.webp)]',
                    'md:bg-size-[auto_320px] md:bg-position-[calc(35%-133px)_0px] md:bg-[url(/hero/education-intro.webp)]',
                )}
            />
            <div
                className={cn(
                    'mx-auto relative z-10 pt-[calc(15%-50px)] top-[-530px] left-[calc(4.9%+4px)]',
                    'lg:w-full lg:pt-0 min-[1200px]:left-[calc(50%-585px)] lg:max-[1199px]:left-[17px] lg:top-[-380px]',
                    'md:w-full md:pt-0 md:top-[-245px] md:max-lg:left-[calc(35%-250px)]',
                )}
            >
                <div
                    className={cn(
                        'flex flex-col gap-3',
                        'lg:gap-7',
                        'md:gap-4',
                    )}
                >
                    <div
                        className={cn(
                            'font-[700] font-notokr text-[6vw]',
                            'lg:text-[30px]',
                            'md:text-[22px]',
                        )}
                    >
                        기업의 혁신과 기관의 교육을 위한 <br /> xTool 레이저
                        솔루션
                    </div>
                    <div
                        className={cn(
                            'text-[#0000009b] text-[3.5vw]',
                            'lg:text-[17px] lg:leading-[28px] lg:w-[400px]',
                            'md:text-[14.5px] md:leading-[24px] md:w-[400px]',
                        )}
                    >
                        대한민국 300+ 기업 및 기관이 선택한 압도적 기술력.
                        <br />
                        비즈니스 프로토타이핑부터 차세대 메이커 교육까지, <br />
                        전문가 팀이 도입의 모든 과정을 함께합니다.
                    </div>
                    <div
                        className={cn(
                            'flex flex-col mr-auto gap-3 font-notokr *:cursor-pointer mt-[10px]',
                            'lg:flex-row lg:gap-5 lg:mt-[20px]',
                            'md:flex-row md:gap-3 md:mt-[5px]',
                        )}
                    >
                        <div
                            className={cn(
                                'flex text-[12px] items-center bg-btn-dark text-[#ffffff] rounded-full hover:bg-btn-dark/85 px-5 py-3 gap-2',
                                'lg:text-[15px] lg:px-8 lg:py-3.5 lg:gap-3',
                                'md:text-[12px] md:px-5 md:py-2 md:gap-1',
                            )}
                            onClick={handleContactClick}
                        >
                            비즈니스 견적 상담
                            <ChevronDownIcon size={17} color="#ffffff" />
                        </div>
                        <div
                            className={cn(
                                'text-font-gray text-[12px] rounded-full border border-font-gray] hover:bg-font-gray hover:text-[#ffffff] transition px-5 py-3 text-center',
                                'lg:text-[15px] lg:px-8 lg:py-3.5',
                                'md:text-[13px] md:px-5 md:py-3',
                            )}
                        >
                            카탈로그 받기
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
