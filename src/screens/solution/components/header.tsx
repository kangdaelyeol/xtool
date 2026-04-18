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
                <div className="flex items-center">
                    <img
                        src="/xtool-logo-text.png"
                        className="lg:h-3 md:h-3 max-md:h-2.5 pointer-events-none object-contain"
                        alt="logo text"
                    />
                    <div
                        className={cn(
                            'font-medium tracking-widest text-[#545f68] whitespace-nowrap',
                            'text-[16px] ml-2',
                            'max-md:text-[14px]',
                        )}
                    >
                        B2B SOLUTION
                    </div>
                </div>

                <div className="flex gap-4 items-center *:cursor-pointer *:font-notokr *:font-[400] *:whitespace-nowrap">
                    {/* div -> button 접근성 최적화
                        button을 div로 구현하려면 role='button' tabIndex onKeyDown 등을 추가로 구현해야 한다.
                        실무적으로도 SEO크롤러나 접근성 검사도구에서 감점 요인이 될 수 있음.
                     */}
                    <button className="flex gap-1 hover:bg-black/6 rounded-[5px] text-[15px] px-2.5 py-2">
                        기업 소개서
                        <DownloadIcon size={18} color="#000000" />
                    </button>
                </div>
            </div>
        </div>
    )
}
