import { cn } from '@/utils'

export const Footer = () => {
    return (
        <div className="min-[1500px]:h-106.5 md:max-[1500px]:h-80 relative overflow-hidden">
            <div className="absolute inset-0 flex justify-center items-center max-md:hidden">
                <img
                    src="/footer/footer-pc.webp"
                    alt="footer-image"
                    className="object-cover w-full h-full lg:max-[1200px]:object-[calc(-650px+40vw)_0px] md:max-lg:object-[calc(-1000px+70vw)_0px] -z-10"
                />
            </div>
            <div className="hidden h-100 w-full max-md:flex">
                <img
                    className="hidden max-md:block h-full w-full object-cover max-[440px]:object-[-80px_0px] min-[630px]:object-[0px_-70px]"
                    src="/footer/footer-mobile.webp"
                    alt="footer-image"
                />
            </div>

            <div className="lg:max-[1500px]:max-w-240 min-[1500px]:max-w-320 md:max-lg:max-w-230 mx-auto px-10 max-md:absolute max-md:z-10 max-md:top-7">
                <div className="flex flex-col *:text-white *:tracking-[-0.6px]">
                    <div
                        className={cn(
                            'min-[1500px]:mt-19 min-[1500px]:text-[20px] lg:max-[1500px]:text-[16px] lg:max-[1500px]:mt-10',
                            'md:max-lg:text-[20px] md:max-lg:mt-10',
                            'max-md:text-[15px]',
                        )}
                    >
                        CS CENTER
                    </div>
                    <div
                        className={cn(
                            'font-medium',
                            'min-[1500px]:mt-3 min-[1500px]:text-[40px] lg:max-[1500px]:text-[36px] lg:max-[1500px]:mt-3',
                            'md:max-lg:text-[30px] md:max-lg:mt-2',
                            'max-md:text-[28px] max-md:mt-2',
                        )}
                    >
                        1877-7971
                    </div>
                    <div
                        className={cn(
                            'min-[1500px]:mt-4 min-[1500px]:text-[20px] lg:max-[1500px]:text-[16px] lg:max-[1500px]:mt-3',
                            'md:max-lg:text-[16px] md:max-lg:mt-2',
                            'max-md:text-[15px] max-md:mt-2',
                        )}
                    >
                        평일 10:00 - 16:00 | 점심 12:00 - 13:00
                    </div>
                    <div
                        className={cn(
                            'min-[1500px]:mt-1 min-[1500px]:text-[20px] lg:max-[1500px]:text-[16px] lg:max-[1500px]:mt-1',
                            'md:max-lg:text-[16px] md:max-lg:mt-1',
                            'max-md:text-[15px] max-md:mt-0.5',
                        )}
                    >
                        주말 및 공휴일 휴무
                    </div>
                    <div
                        className={cn(
                            'min-[1500px]:mt-5 min-[1500px]:text-[20px] lg:max-[1500px]:text-[16px] lg:max-[1500px]:mt-3',
                            'md:max-lg:text-[16px] md:max-lg:mt-3',
                            'max-md:text-[15px] max-md:mt-3',
                        )}
                    >
                        이메일 문의 : info@cyankorea.kr
                    </div>
                    <div
                        className={cn(
                            'min-[1500px]:mt-1 min-[1500px]:text-[20px] lg:max-[1500px]:text-[16px] lg:max-[1500px]:mt-1',
                            'md:max-lg:text-[16px] md:max-lg:mt-1',
                            'max-md:text-[15px] max-md:mt-0.5',
                        )}
                    >
                        경기 파주시 가람로116번길 107 운정한강듀클래스 319호
                    </div>
                </div>
            </div>
        </div>
    )
}
