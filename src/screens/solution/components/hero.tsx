import { ChevronIcon } from '@/screens/solution/icons'

export const Hero = () => {
    return (
        <div className="h-125 relative w-full">
            <img
                src="/education-intro.webp"
                className="object-cover h-125 absolute top-0 left-0"
            />
            <div className="w-[1130px] mx-auto relative z-10 top-[130px]">
                <div className="flex flex-col left-8 gap-7 ">
                    <div className="text-[30px] font-[700] font-notokr">
                        기업의 혁신과 기관의 교육을 위한 <br /> xTool 레이저
                        솔루션
                    </div>
                    <div className="w-[400px] text-[#0000009b] text-[17px] leading-[28px]">
                        대한민국 300+ 기업 및 기관이 선택한 압도적 기술력.{' '}
                        <br />
                        비즈니스 프로토타이핑부터 차세대 메이커 교육까지, <br />
                        전문가 팀이 도입의 모든 과정을 함께합니다.
                    </div>
                    <div className="flex font-notokr *:cursor-pointer gap-5 mt-[20px]">
                        <div className="flex gap-3 items-center bg-btn-dark text-[#ffffff] text-[15px] px-8 py-3.5 rounded-full hover:bg-btn-dark/85">
                            비즈니스 견적 상담
                            <ChevronIcon size={17} color="#ffffff" />
                        </div>
                        <div className="text-[15px] text-font-gray px-8 py-3.5 rounded-full border border-font-gray] hover:bg-font-gray hover:text-[#ffffff] transition">
                            카탈로그 받기
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
