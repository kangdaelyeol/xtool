import { cn } from '@/utils'

export const FooterPc = () => {
    return (
        <div className="pb-20 w-full overflow-hidden md:block max-md:hidden">
            <div className="w-full max-w-300 mx-auto flex justify-center *:break-keep">
                <div className="flex flex-col items-center border-r border-r-[#eeeeee] pt-10 w-[33%] pb-15">
                    <div className="text-[17px] font-medium tracking-wider">
                        CS CENTER
                    </div>
                    <div className="text-[30px] font-semibold mt-1.5 tracking-wide">
                        1877-7971
                    </div>
                    <div className="text-font-gray-deep text-[14px] tracking-wider mt-2">
                        평일 10:00 - 16:00
                    </div>
                    <div className="text-font-gray-deep text-[14px] tracking-wider">
                        점심 12:00 - 13:00
                    </div>
                    <div className="text-font-gray-deep text-[14px] tracking-wider mt-2">
                        주말 및 공휴일 휴무입니다.
                    </div>
                    <div
                        className={cn(
                            '*:border *:bg-black *:block *:select-none *:cursor-pointer *:text-white w-48 *:text-center *:py-3 *:text-[15px] *:font-medium *:font-notokr *:tracking-wider *:rounded-[10px]',
                            '*:hover:bg-gray-700',
                        )}
                    >
                        <a
                            className="mt-4"
                            href="https://www.xtool.co.kr/board/product/list.html?board_no=6"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            상품 Q&A 바로가기
                        </a>
                        <a
                            className="mt-2"
                            href="https://cyankorea.notion.site/2c39c11a34c6805cb411da0e18fa20d1"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            A/S·환불·교환 정책
                        </a>
                    </div>
                </div>
                <div className="flex flex-col px-8 pt-10 w-[33%]">
                    <div
                        className={cn(
                            'flex gap-3 *:text-[15px] *:cursor-pointer *:select-none',
                            '*:hover:text-font-gray-deep',
                        )}
                    >
                        <a
                            href="https://www.xtool.co.kr/member/agreement.html"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            AGREEMENT
                        </a>
                        <a
                            href="https://www.xtool.co.kr/member/privacy.html"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            PRIVACY
                        </a>
                        <a
                            href="https://www.xtool.co.kr/shopinfo/guide.html"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            GUIDE
                        </a>
                    </div>
                    <div className="mt-3 text-font-gray-deep leading-5.5 tracking-wide text-[12px]">
                        Company : 주식회사 시안인터내셔널 <br />
                        CEO : 오예은, 황정현
                        <br />
                        Business Registration : [2338112139],[530-36-00723]
                        <br /> <a href="tel:1877-7971">Call : 1877-7971</a>
                        <br />
                        Address : 10896 경기 파주시 가람로116번길 107
                        운정한강듀클래스 319호, 제주특별자치도 제주시 신대로
                        145, 6층 1-22호(연동) <br />
                        Personal Information Manager : 오예은(info@cyankorea.kr)
                        <br />
                    </div>

                    <div className="text-font-gray-deep leading-7 text-[13px] mt-10">
                        Copyright © 2021 엑스툴코리아. All rights reserved.
                    </div>
                </div>
                <div className="flex flex-col pt-10 w-[33%] px-5">
                    <div className="font-semibold">BANK INFO</div>
                    <div className="mt-1 text-[12px] tracking-wider text-font-gray-deep">
                        기업 688-044727-04-014
                        <br />
                        예금주 : 주식회사 시안인터내셔널
                    </div>
                    <div className="font-semibold mt-5">
                        PURCHASE SAFETY SERVICE
                    </div>
                    <div className="mt-1 text-[12px] tracking-wider text-font-gray-deep">
                        고객님은 안전거래를 위해 현금 등으로 결제시 저희
                        쇼핑몰이 가입한 PG에스크로 구매안전서비스를 이용하실 수
                        있습니다.
                    </div>
                    <div className="mt-4 flex gap-3 *:cursor-pointer">
                        <a href="http://www.ftc.go.kr/" rel="noreferrer noopener" target="_blank">
                            <img src="/purchase1.png" alt="purchase" />
                        </a>
                        <a href="http://www.taxsave.go.kr/" rel="noreferrer noopener" target="_blank">
                            <img src="/purchase3.png" alt="purchase" />
                        </a>
                        <a href="https://www.xtool.co.kr/#none" rel="noreferrer noopener" target="_blank">
                            <img src="/purchase4.png" alt="purchase" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
