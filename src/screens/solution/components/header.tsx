import { useEffect, useState } from 'react'
import { cn } from '@/utils'
import { DownloadIcon } from '@/screens/solution/icons'

export const Header = () => {
    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
        const onScroll = () => {
            // setState는 같은 값을 넣으면 리렌더를 하지 않는다. 따라서 if문으로 필터링 하는 것과 성능적으로 비교했을 때 거의 차이가 없다.
            // 물론 setState 호출로 인해 그 안(React 내부)에서 비교연산을 하기 때문에 미세한 오버헤드 차이는 있다. 하지만 스크롤 이벤트 수준에서 체감할 정도는 아니다.
            setScrolled(scrollY > 50)
        }
        window.addEventListener('scroll', onScroll)
        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [])

    return (
        <div
            className={cn(
                'w-full sticky top-0 transition-all duration-250 z-50 bg-[#ffffff]',
                scrolled && 'shadow-sm backdrop-blur-sm bg-[#ffffffc3]',
            )}
        >
            <div
                className={cn(
                    'max-w-300 m-auto w-full flex justify-between items-center py-1.5 px-10 transition-all duration-250',
                    scrolled && 'py-1 px-8',
                )}
            >
                <div className="flex flex-col">
                    <div className="flex items-center gap-1.75">
                        <img
                            src="/xtool-logo-text.png"
                            className="h-3"
                            alt="logo text"
                        />
                        <span className="font-intertight font-semibold text-[17px] tracking-wider whitespace-nowrap">
                            Korea
                        </span>
                    </div>
                    <div className="text-[12px] -mt-0.75 font-intertight tracking-widest text-[#545f68] whitespace-nowrap">
                        B2B SOLUTIONS
                    </div>
                </div>
                <div className="flex gap-10 *:font-notokr *:cursor-pointer *:py-5 *:relative *:text-[15px] *:text-center *:whitespace-nowrap">
                    <div className="group">
                        솔루션
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#000000] transition-all duration-250 group-hover:w-full" />
                    </div>
                    <div className="group">
                        제품 라인업
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#000000] transition-all duration-250 group-hover:w-full" />
                    </div>
                    <div className="group">
                        도입 프로세스
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#000000] transition-all duration-250 group-hover:w-full" />
                    </div>
                    <div className="group">
                        인증 및 안전
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#000000] transition-all duration-250 group-hover:w-full" />
                    </div>
                </div>
                <div className="flex gap-4 items-center *:cursor-pointer *:font-notokr *:font-[400] *:whitespace-nowrap">
                    <div className="flex gap-1 hover:bg-black/6 rounded-[5px] text-[15px] px-2.5 py-2">
                        <DownloadIcon size={20} color="#000000" />
                        카탈로그
                    </div>
                    <div className="bg-navy hover:bg-navy/90 text-white text-[13px] rounded-[8px] px-3 py-2.5">
                        견적 문의하기
                    </div>
                </div>
            </div>
        </div>
    )
}
