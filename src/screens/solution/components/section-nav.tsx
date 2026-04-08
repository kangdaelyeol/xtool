import { cn } from '@/utils'
import { useEffect, useRef, useState } from 'react'

interface ItemProps {
    label: string
    selectedIdx: number
    idx: number
    onClick: () => void
}

const navConfig = ['비즈니스와 교육', '교육 솔루션', '지원 시스템', '문의하기']

const Item = ({ label, selectedIdx, idx, onClick }: ItemProps) => {
    const selected = selectedIdx === idx
    return (
        <div
            onClick={onClick}
            className={cn(
                'flex flex-col items-center cursor-pointer text-[#ffffffb1] text-[14px] *:font-notokr',
            )}
        >
            <div
                className={cn(
                    'px-5 py-2',
                    selected && 'text-[#ffffff] font-semibold',
                )}
            >
                {label}
            </div>

            <div
                className={cn(
                    'w-0 h-1 bg-black rounded-full',
                    selected && 'w-full',
                )}
            ></div>
        </div>
    )
}

export const SectionNav = () => {
    const scrollBarRef = useRef<HTMLDivElement | null>(null)
    const [selectedIdx, setSelectedIdx] = useState(-1)

    useEffect(() => {
        const onScroll = () => {
            console.log(scrollBarRef.current)
        }
        window.addEventListener('scroll', onScroll)

        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [])
    return (
        <div
            ref={scrollBarRef}
            className="sticky top-[70.5px] bg-black/50 w-full backdrop-blur-sm"
        >
            <div className="flex mx-auto justify-center gap-10">
                {navConfig.map((label, idx) => (
                    <Item
                        label={label}
                        selectedIdx={selectedIdx}
                        idx={idx}
                        key={label}
                        onClick={() => setSelectedIdx(idx)}
                    />
                ))}
            </div>
        </div>
    )
}
