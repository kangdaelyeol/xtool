import { useEffect, useState } from 'react'
import { cn } from '@/utils'

interface ItemProps {
    label: string
    activeSection: string
    id: string
    onClick: () => void
}

const navConfig = [
    { id: 'business', label: '비즈니스와 교육' },
    { id: 'solution', label: '교육 솔루션' },
    { id: 'system', label: '지원 시스템' },
    { id: 'contact', label: '문의하기' },
]

const Item = ({ label, activeSection, id, onClick }: ItemProps) => {
    const selected = activeSection === id
    return (
        <div
            onClick={onClick}
            className={cn(
                'flex flex-col items-center cursor-pointer text-[#ffffffb1] *:font-notokr whitespace-nowrap',
                'text-[12px] md:text-[14px] lg:text-[14px]',
            )}
        >
            <div
                className={cn(
                    'px-2 py-2',
                    'md:px-5 md:py-2.5 lg:px-5 lg:py-2.5',
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
    const [activeSection, setActiveSection] = useState('')

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id)
                })
            },
            { rootMargin: '-80px 0px 0px 0px', threshold: 0.3 },
        )
        navConfig.forEach((item) => {
            const el = document.querySelector('#' + item.id)
            if (el) observer.observe(el)
        })
        return () => {
            observer.disconnect()
        }
    }, [])

    return (
        <div
            className={cn(
                'sticky bg-black/50 w-full backdrop-blur-sm z-40 *:select-none',
                'top-13.75 md:top-[70.5px] lg:top-[70.5px]',
            )}
        >
            <div
                className={cn(
                    'flex mx-auto justify-center',
                    'max-md:gap-5 md:gap-12 lg:gap-14',
                )}
            >
                {navConfig.map((item) => (
                    <Item
                        label={item.label}
                        activeSection={activeSection}
                        id={item.id}
                        key={item.label}
                        onClick={() => {
                            const el = document.querySelector('#' + item.id)
                            el?.scrollIntoView()
                            setActiveSection(item.id)
                        }}
                    />
                ))}
            </div>
        </div>
    )
}
