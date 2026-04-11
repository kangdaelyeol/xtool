export const TrustBar = () => {
    return (
        <div className="w-full border-b border-b-border-gray *:select-none">
            <div className="w-full max-w-350 px-20 mx-auto flex justify-between py-10 *:font-notokr *:whitespace-nowrap">
                <div className="flex flex-col items-center basis-0 shrink grow">
                    <div className="text-[34px] text-trust-navy font-bold tracking-wider">
                        300+
                    </div>
                    <div className="text-[14px] mt-1.5 tracking-wider font-semibold text-font-gray-deep">
                        누적 도입 파트너
                    </div>
                </div>
                <div className="flex flex-col items-center basis-0 shrink grow">
                    <div className="text-[34px] text-trust-navy font-bold tracking-wider">
                        KC
                    </div>
                    <div className="text-[14px] mt-1.5 tracking-wider font-semibold text-font-gray-deep">
                        산업·교육 안전 인증
                    </div>
                </div>
                <div className="flex flex-col items-center basis-0 shrink grow">
                    <div className="text-[30px] text-trust-navy font-bold tracking-wider">
                        1:1 담당자 지원
                    </div>
                    <div className="text-[14px] tracking-wider mt-1.5 font-semibold text-font-gray-deep">
                        도입부터 설치까지 <br />
                        전담 담당자가 지원
                    </div>
                </div>
            </div>
        </div>
    )
}
