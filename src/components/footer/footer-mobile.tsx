import { cn } from '@/utils'
import { PhoneIcon } from '@/components/icons'

export const FooterMobile = () => {
    return (
        <div className="md:hidden max-md:block pb-5 w-full overflow-hidden flex flex-col *:break-keep *:select-none">
            <div className="mx-auto flex">
                <div className="flex flex-col *:mx-auto border-r border-r-[#eeeeee] py-5 w-[50%]">
                    <div className="text-[13px] font-medium tracking-wider">
                        CS CENTER
                    </div>
                    <div className="text-[20px] flex gap-1 items-center font-semibold mt-1.5 tracking-wide border-[0.5px] border-font-gray-deep rounded-lg px-2">
                        <PhoneIcon />
                        <a href="tel:1877-7971">1877-7971</a>
                    </div>
                    <div className="text-font-gray-deep text-[12px] tracking-wider mt-1">
                        평일 10:00 - 16:00
                    </div>
                    <div className="text-font-gray-deep text-[12px] tracking-wider">
                        점심 12:00 - 13:00
                    </div>
                    <div className="text-font-gray-deep text-[12px] tracking-wider mt-2">
                        주말 및 공휴일 휴무입니다.
                    </div>
                    <div
                        className={cn(
                            ' *:border *:bg-black *:block *:rounded-[10px] *:cursor-pointer *:text-white *:w-37 *:mx-auto *:text-center *:py-2 *:text-[13px] *:font-medium *:font-notokr *:tracking-wider',
                            '*:hover:bg-gray-700',
                        )}
                    >
                        <a
                            href="https://www.xtool.co.kr/board/product/list.html?board_no=6"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="mt-4"
                        >
                            상품 Q&A 바로가기
                        </a>
                        <a
                            href="https://cyankorea.notion.site/2c39c11a34c6805cb411da0e18fa20d1"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="mt-2"
                        >
                            A/S·환불·교환 정책
                        </a>
                    </div>
                </div>
                <div className="flex flex-col pt-5 px-5 items-center w-[50%] *:text-center">
                    <div className="font-semibold text-[14px]">BANK INFO</div>
                    <div className="mt-1 text-[11px] tracking-wider text-font-gray-deep">
                        기업 688-044727-04-014
                        <br />
                        예금주 : 주식회사 시안인터내셔널
                    </div>
                    <div className="font-semibold mt-6 text-[13px]">
                        PURCHASE SAFETY SERVICE
                    </div>
                    <div className="mt-1 text-[11px] tracking-wider text-font-gray-deep">
                        고객님은 안전거래를 위해 현금 등으로 결제시 저희
                        쇼핑몰이 가입한 PG에스크로 구매안전서비스를 이용하실 수
                        있습니다.
                    </div>
                    <div className="mt-3 flex gap-3 *:cursor-pointer *:w-7 *:object-contain">
                        <a
                            href="http://www.ftc.go.kr/"
                            rel="noreferrer noopener"
                            target="_blank"
                        >
                            <img src="/purchase1.png" alt="purchase" />
                        </a>
                        <a
                            href="http://www.taxsave.go.kr/"
                            rel="noreferrer noopener"
                            target="_blank"
                        >
                            <img src="/purchase3.png" alt="purchase" />
                        </a>
                        <a
                            href="https://www.xtool.co.kr/#none"
                            rel="noreferrer noopener"
                            target="_blank"
                        >
                            <img src="/purchase4.png" alt="purchase" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col px-5 pt-6 border-t border-t-border-gray">
                <div
                    className={cn(
                        'flex gap-3 *:text-[14px] *:transition *:cursor-pointer',
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
                <div className="mt-3 text-font-gray-deep leading-5.5 text-[12px] tracking-wide">
                    Company : 주식회사 시안인터내셔널 CEO : 오예은, 황정현
                    <br />
                    Business Registration : [2338112139],[530-36-00723]
                    <br /> Call : 1877-7971
                    <br />
                    Address : 10896 경기 파주시 가람로116번길 107
                    운정한강듀클래스 319호, 제주특별자치도 제주시 신대로 145,
                    6층 1-22호(연동) <br />
                    Personal Information Manager : 오예은(info@cyankorea.kr)
                    <br />
                </div>

                <div className="text-font-gray-deep leading-7 text-[11px] mt-10">
                    Copyright © 2021 엑스툴코리아. All rights reserved.
                </div>
            </div>
        </div>
    )
}
