import { useEffect, useMemo, useState, type PropsWithChildren } from 'react'
import { ResizeContext } from '.'

// React Fast Refresh는 파일 단위로 동작한다.
// 파일에서 컴포넌트만 export를 하는지 판단해서 HMR(Hot module refresh)을 적용한다.
// Hot Module Refresh - 코드 수정시 전체를 리로드(새로고침)하지 않고, 페이지 현재 상태에서 변경사항만 바로 반영하는 기능(hot reload), 반대는 full reload.
// 컴포넌트와 일반 메서드를 한 파일에서 같이 Export하면 eslint 경고가 발생하므로, Provider(컴포넌트)와 컨텍스트 선언 부분을 분리함.

export const ResizeContextProvider = ({ children }: PropsWithChildren) => {
    const [sliderIdx, setSliderIdx] = useState(0)
    const [sliderCount, setSliderCount] = useState(3)

    useEffect(() => {
        let timer: number | null = null

        const handleResize = () => {
            if (timer) return
            timer = setTimeout(() => {
                timer = null

                setSliderCount((prev) => {
                    const next =
                        innerWidth >= 1024 ? 3 : innerWidth >= 768 ? 4 : 5
                    if (prev !== next) setSliderIdx(0)
                    return next
                })
            }, 200)
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
            if (timer) clearTimeout(timer)
        }
    }, [])

    const transformEducationHandlers = useMemo(
        () => ({
            goPrev: () => {
                if (sliderIdx <= 0) return
                setSliderIdx((prev) => prev - 1)
            },

            goNext: () => {
                if (sliderIdx >= sliderCount - 1) return
                setSliderIdx((prev) => prev + 1)
            },
            goToIdx: (idx: number) => setSliderIdx(idx),
        }),
        [sliderCount, sliderIdx],
    )

    const transformEducationStyle = useMemo(() => {
        const percent = sliderCount === 3 ? 33 : sliderCount === 4 ? 49 : 98

        const sliderTransform = `translateX(calc(-${percent}%*${sliderIdx} + -20px*${sliderIdx}))`
        const paginationLeftBtn = sliderIdx === 0 ? 'bg-gray-400' : 'bg-black'
        const paginationRightBtn =
            sliderIdx === sliderCount - 1 ? 'bg-gray-400' : 'bg-black'
        const dotActiveList = [] as boolean[]
        for (let i = 0; i < sliderCount; i++) {
            if (i === sliderIdx) dotActiveList.push(true)
            else dotActiveList.push(false)
        }
        return {
            sliderTransform,
            paginationLeftBtn,
            paginationRightBtn,
            dotActiveList,
        }
    }, [sliderIdx, sliderCount])

    return (
        <ResizeContext.Provider
            value={{ transformEducationHandlers, transformEducationStyle }}
        >
            {children}
        </ResizeContext.Provider>
    )
}
