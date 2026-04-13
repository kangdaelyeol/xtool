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

    const handleContackClick = () => {
        const contactEl = document.querySelector('#contact')
        contactEl?.scrollIntoView()
    }

    return (
        <div
            className={cn(
                'w-full sticky top-0 transition-all duration-250 z-50 bg-[#ffffff] py-[5px] *:select-none',
                'lg:py-[12px] md:py-[12px]',
                scrolled && 'shadow-sm backdrop-blur-sm bg-[#ffffffc3]',
            )}
        >
            <div
                className={cn(
                    'max-w-300 m-auto w-full flex justify-between items-center py-1.5 px-3 transition-all duration-250',
                    'lg:px-10 md:px-10',
                    scrolled && 'lg:py-1 lg:px-8 md:py-1 md:px-8',
                    scrolled && 'px-1.5 py-1',
                )}
            >
                <div className="flex flex-col">
                    <div
                        className={cn(
                            'flex items-center cursor-pointer',
                            'md:gap-1.75 lg:gap-1.75 gap-1',
                        )}
                    >
                        <img
                            src="/xtool-logo-text.png"
                            className="lg:h-3 md:h-3 h-2 pointer-events-none"
                            alt="logo text"
                        />
                        <span
                            className={cn(
                                'font-intertight font-semibold tracking-wider whitespace-nowrap',
                                'lg:text-[17px] md:text-[17px] text-[13px]',
                            )}
                        >
                            Korea
                        </span>
                    </div>
                    <div
                        className={cn(
                            'font-medium tracking-widest text-[#545f68] whitespace-nowrap',
                            'text-[10px] ml-px -mt-0.5',
                            'md:text-[12px] md:-mt-0.75 md:ml-px',
                            'lg:text-[12px] lg:-mt-0.75 lg:ml-px',
                        )}
                    >
                        B2B SOLUTIONS
                    </div>
                </div>

                <div className="flex gap-4 items-center *:cursor-pointer *:font-notokr *:font-[400] *:whitespace-nowrap">
                    <div className="flex gap-1 hover:bg-black/6 rounded-[5px] text-[15px] px-2.5 py-2">
                        <DownloadIcon size={20} color="#000000" />
                        카탈로그
                    </div>
                    <div
                        className="bg-navy hover:bg-navy/90 text-white text-[13px] rounded-[8px] px-3 py-2.5"
                        onClick={handleContackClick}
                    >
                        견적 문의하기
                    </div>
                </div>
            </div>
        </div>
    )
}
