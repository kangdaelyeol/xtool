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
                'relative w-full *:select-none bg-[#edf3fc]',
                'lg:h-125',
                'md:h-80 md:overflow-hidden',
                'max-md:h-150 max-md:overflow-hidden',
            )}
        >
            <div
                className={cn(
                    'absolute inset-0 bg-no-repeat bg-[url(/hero/education-mobile.webp)] bg-size-[100%_auto] bg-[#edf3fc] bg-position-[0px_0px]',
                    'lg:max-w-300 lg:mx-auto lg:bg-size-[auto_500px] lg:bg-position-[-700px_0px] lg:bg-[url(/hero/education-intro.webp)]',
                    'md:bg-size-[auto_320px] md:bg-position-[calc(35%-133px)_0px] md:bg-[url(/hero/education-intro.webp)]',
                    'max-md:bg-position-[0px_-20px]',
                )}
            />
            <div
                className={cn(
                    'mx-auto relative z-10',
                    'lg:w-full lg:pt-0 min-[1200px]:left-[calc(50%-585px)] lg:max-[1200px]:left-[17px] lg:top-[120px]',
                    'md:w-full md:pt-0 md:top-[80px] md:max-lg:left-[calc(35%-250px)]',
                    'max-md:top-[80px] max-md:pt-[calc(15%-70px)] max-md:left-[calc(4.9%+4px)]',
                )}
            >
                <div
                    className={cn(
                        'flex flex-col gap-3 relative',
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
                        기업·기관 맞춤 레이저 엑스툴 장비 도입을 지원합니다
                    </div>
                    <div
                        className={cn(
                            'flex flex-row mr-auto font-notokr *:cursor-pointer',
                            'lg:gap-5 lg:mt-[120px]',
                            'md:gap-3 md:mt-[50px]',
                            'max-md:gap-3 max-md:mt-[10px] max-md:flex-col',
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
                            상담 바로가기
                            <ChevronDownIcon size={17} color="#ffffff" />
                        </div>
                        <div
                            className={cn(
                                'text-font-gray text-[12px] rounded-full border border-font-gray hover:bg-font-gray hover:text-[#ffffff] transition px-5 py-3 text-center',
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
