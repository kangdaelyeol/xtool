import { cn } from '@/utils'

export const TrustBar = () => {
    return (
        <div className="w-full border-b-[0.5px] border-b-font-gray-deep/30 *:select-none">
            <div
                className={cn(
                    'w-full mx-auto flex justify-between  *:font-notokr *:break-keep',
                    'lg:max-w-300 lg:px-10 lg:py-10',
                    'md:max-w-300 md:px-10 md:py-10',
                    'py-5',
                )}
            >
                <div className="flex flex-col items-center basis-0 shrink grow">
                    <div className="text-center lg:text-[34px] md:text-[34px] text-[18px] text-trust-navy font-bold tracking-wider">
                        300+
                    </div>
                    <div className="text-center lg:text-[14px] md:text-[14px] text-[12px] mt-1.5 tracking-wider font-semibold text-font-gray-deep">
                        누적 도입 파트너
                    </div>
                </div>
                <div className="flex flex-col items-center basis-0 shrink grow">
                    <div className="text-center lg:text-[34px] md:text-[34px] text-[18px] text-trust-navy font-bold tracking-wider">
                        KC
                    </div>
                    <div className="text-center lg:text-[14px] md:text-[14px] text-[12px] mt-1.5 tracking-wider font-semibold text-font-gray-deep">
                        산업·교육 안전 인증
                    </div>
                </div>
                <div className="flex flex-col items-center basis-0 shrink grow">
                    <div className="text-center lg:text-[34px] md:text-[34px] text-[17px] text-trust-navy font-bold tracking-wider">
                        1:1 담당자 지원
                    </div>
                    <div className="text-center lg:text-[14px] md:text-[14px] text-[12px] tracking-wider mt-1.5 font-semibold text-font-gray-deep">
                        도입부터 설치까지 <br />
                        전담 담당자가 지원
                    </div>
                </div>
            </div>
        </div>
    )
}
