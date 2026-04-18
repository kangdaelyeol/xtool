import { useEffect, useRef } from 'react'
import { cn } from '@/utils'

const PartnerIcon = ({ idx }: { idx: number }) => {
    return (
        <div className="h-full flex justify-center items-center shrink-0">
            <img
                src={`/partner/${idx}.webp`}
                className="h-6.25 max-md:h-5 object-contain"
            />
        </div>
    )
}

export const Partner = () => {
    const sliderRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        let transX = 0
        let rafId: number
        const moveSlider = () => {
            transX += 2
            if (
                sliderRef.current &&
                transX >= (sliderRef.current.scrollWidth + 60) / 2
            )
                transX = 0

            if (sliderRef.current) {
                sliderRef.current.style.transform = `translateX(${-transX}px)`
            }
            rafId = requestAnimationFrame(moveSlider)
        }
        rafId = requestAnimationFrame(moveSlider)

        return () => cancelAnimationFrame(rafId)
    }, [])
    const list = [] as number[]
    for (let i = 0; i < 32; i++) {
        list.push(i % 8)
    }

    return (
        <div
            className={cn(
                'flex bg-education-white h-25 max-md:h-20 overflow-hidden',
            )}
        >
            <div
                ref={sliderRef}
                className="w-full h-full flex gap-15 *:select-none *:pointer-events-none"
            >
                {list.map((idx, i) => (
                    <PartnerIcon idx={idx} key={i} />
                ))}
            </div>
        </div>
    )
}
