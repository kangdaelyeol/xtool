import { cn } from '@/utils'

export const TrustBar = () => {
    return (
        <div className="w-full bg-bg-ivory *:select-none">
            <div
                className={cn(
                    'w-full mx-auto flex justify-between *:font-notokr *:break-keep md:pb-25 max-md:pb-15',
                    'lg:max-w-300 lg:px-10',
                    'md:max-w-300 md:px-10',
                )}
            >
                <div className="flex flex-col items-center basis-0 shrink grow">
                    <div className="text-center lg:text-[40px] md:text-[40px] max-md:text-[25px] text-trust-green font-bold tracking-[-1.2px]">
                        300+
                    </div>
                    <div className="text-center lg:text-[20px] md:text-[20px] text-[12px] mt-1.5 tracking-[-0.6px] font-medium text-font-gray-deep">
                        누적 도입 파트너
                    </div>
                </div>
                <div className="flex flex-col items-center basis-0 shrink grow">
                    <div className="text-center lg:text-[40px] md:text-[40px] max-md:text-[25px] text-trust-green font-bold tracking-[-1.2px]">
                        KC 인증
                    </div>
                    <div className="text-center lg:text-[20px] md:text-[20px] text-[12px] mt-1.5 tracking-[-0.6px] font-medium text-font-gray-deep">
                        산업·교육 안전 인증
                    </div>
                </div>
                <div className="flex flex-col items-center basis-0 shrink grow">
                    <div className="text-center lg:text-[40px] md:text-[40px] max-md:text-[25px] text-trust-green font-bold tracking-[-1.2px]">
                        1:1 담당자
                    </div>
                    <div className="text-center lg:text-[20px] md:text-[20px] text-[12px] tracking-[-0.6px] mt-1.5 font-medium text-font-gray-deep">
                        도입 및 설치 전담 지원
                    </div>
                </div>
            </div>
        </div>
    )
}
