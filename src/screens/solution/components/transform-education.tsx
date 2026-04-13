import { useEffect, useState } from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from '../icons'
import { cn } from '@/utils'

interface CardInfo {
    subject: string
    title: string
    description: string
    image: string
}

interface PaginationProps {
    count: number
    sliderIdx: number
    setSliderIdx: React.Dispatch<React.SetStateAction<number>>
}

const transformConfig = [
    {
        subject: '수학',
        title: '다면체 주사위',
        description: '레이저로 직접 만들며 입체 구조를 이해',
        image: '/transform/transform1.webp',
    },
    {
        subject: '미술 & 공예',
        title: '패턴 디자인 굿즈 제작',
        description: '원하는 디자인을 직접 각인하며 창작 결과물 완성',
        image: '/transform/transform2.webp',
    },
    {
        subject: '공학',
        title: '디지털 피아노 제작',
        description: '레이저 가공과 전자회로를 결합해 직접 제작',
        image: '/transform/transform3.webp',
    },
    {
        subject: '지리학',
        title: '지형 모델 제작',
        description: '레이저로 지형을 직접 만들며 공간 구조를 쉽게 이해',
        image: '/transform/transform4.webp',
    },
    {
        subject: '미술 & 공예',
        title: 'DIY 이름표 제작',
        description: '디자인부터 각인까지 직접 제작하며 나만의 결과물을 완성',
        image: '/transform/transform5.webp',
    },
] as CardInfo[]

const Card = ({ subject, title, description, image }: CardInfo) => {
    return (
        <div
            className={cn(
                'flex flex-col rounded-[10px] overflow-hidden bg-education-white',
                'lg:w-[33%] lg:min-w-[33%]',
                'md:w-[49%] md:min-w-[49%] md:py-5',
                'max-md:w-[98%] max-md:min-w-[98%] max-md:py-5',
            )}
        >
            <div className="w-full h-50 flex justify-center items-center">
                <img
                    src={image}
                    alt="transform-education"
                    className="object-cover w-full h-full pointer-events-none"
                />
            </div>
            <div
                className={cn(
                    'flex flex-col *:font-notokr',
                    'md:pt-7 md:px-6',
                    'max-md:pt-5 max-md:px-5',
                )}
            >
                <div className="font-semibold text-black/80 md:text-[15px] max-md:text-[13px]">
                    {subject}
                </div>
                <div className="font-bold tracking-wide md:text-[20px] md:mt-2 max-md:text-[19px] max-md:mt-1">
                    {title}
                </div>
                <div className="md:text-[13px] max-md:text-[12.5px] mt-1 break-keep font-semibold text-font-gray-deep tracking-wide">
                    {description}
                </div>
            </div>
        </div>
    )
}

const PaginationDot = ({ count, sliderIdx, setSliderIdx }: PaginationProps) => {
    const paginationConfig = [] as boolean[]
    for (let i = 0; i < count; i++) {
        if (i === sliderIdx) paginationConfig.push(true)
        else paginationConfig.push(false)
    }
    return (
        <div className="flex gap-2 pl-7">
            {paginationConfig.map((val, idx) =>
                val ? (
                    <div
                        onClick={() => setSliderIdx(idx)}
                        key={idx}
                        className="flex justify-center cursor-pointer items-center rounded-[50%] bg-black w-2 h-2"
                    />
                ) : (
                    <div
                        onClick={() => setSliderIdx(idx)}
                        key={idx}
                        className="flex justify-center cursor-pointer items-center rounded-[50%] bg-gray-400 w-2 h-2"
                    />
                ),
            )}
        </div>
    )
}

const PaginationButton = ({
    count,
    sliderIdx,
    setSliderIdx,
}: PaginationProps) => {
    const goPrev = () => {
        if (sliderIdx <= 0) return
        setSliderIdx((prev) => prev - 1)
    }

    const goNext = () => {
        if (sliderIdx >= count - 1) return
        setSliderIdx((prev) => prev + 1)
    }

    return (
        <div className="flex gap-5">
            <div
                onClick={goPrev}
                className={cn(
                    'flex justify-center items-center rounded-[50%] cursor-pointer',
                    sliderIdx === 0 ? 'bg-gray-400' : 'bg-black',
                )}
            >
                <ArrowLeftIcon size={30} color="#ffffff" />
            </div>
            <div
                onClick={goNext}
                className={cn(
                    'flex justify-center items-center rounded-[50%] cursor-pointer',
                    sliderIdx === count - 1 ? 'bg-gray-400' : 'bg-black',
                )}
            >
                <ArrowRightIcon size={30} color="#ffffff" />
            </div>
        </div>
    )
}

export const TransformEducation = () => {
    const [sliderIdx, setSliderIdx] = useState(0)
    const [sliderCount, setSliderCount] = useState(3)

    useEffect(() => {
        let timer: number | null = null

        const handleResize = () => {
            if (timer) return
            timer = setTimeout(() => {
                timer = null

                if (innerWidth >= 1024) {
                    if (sliderCount === 3) return
                    setSliderIdx(0)
                    return setSliderCount(3)
                }
                if (innerWidth >= 768) {
                    if (sliderCount === 4) return
                    setSliderIdx(0)
                    return setSliderCount(4)
                }
                if (sliderCount === 5) return
                setSliderIdx(0)
                return setSliderCount(5)
            }, 200)
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
            if (timer) clearTimeout(timer)
        }
    }, [sliderCount])

    const getSliderTransform = () => {
        if (sliderCount === 3)
            return `translateX(calc(-33%*${sliderIdx} + -20px*${sliderIdx}))`
        else if (sliderCount === 4)
            return `translateX(calc(-49%*${sliderIdx} + -20px*${sliderIdx}))`
        else return `translateX(calc(-98%*${sliderIdx} + -20px*${sliderIdx}))`
    }

    const sliderTransform = getSliderTransform()

    return (
        <div
            className={cn(
                'w-full overflow-hidden *:select-none',
                'md:py-20',
                'max-md:py-10',
            )}
        >
            <div
                className={cn(
                    'mx-auto overflow-hidden',
                    'lg:max-w-350 lg:px-5',
                )}
            >
                {/* Title */}
                <div
                    className={cn(
                        'text-center text-black/90 font-semibold font-notokr tracking-wider break-keep',
                        'lg:text-[40px] md:text-[40px] max-md:text-[26px]',
                    )}
                >
                    실습 프로젝트를 통한 교육 혁신
                </div>
                {/* Slider */}
                <div
                    className={cn(
                        'mt-15 w-full flex flex-col relative',
                        'lg:-left-4',
                        'md:px-2',
                        'max-md:px-2 max-md:left-1',
                    )}
                >
                    <div
                        className={cn(
                            'flex gap-5 relative transition duration-300 ease',
                        )}
                        style={{
                            transform: sliderTransform,
                        }}
                    >
                        {transformConfig.map((item) => (
                            <Card key={item.image} {...item} />
                        ))}
                    </div>
                </div>
                {/* Slider controller */}
                <div
                    className={cn(
                        'flex justify-between w-full items-center relative',
                        'lg:mt-5 lg:-left-4',
                        'md:mt-5 md:-left-3',
                        'max-md:mt-3 max-md:-left-3',
                    )}
                >
                    <PaginationDot
                        count={sliderCount}
                        setSliderIdx={setSliderIdx}
                        sliderIdx={sliderIdx}
                    />
                    <PaginationButton
                        count={sliderCount}
                        setSliderIdx={setSliderIdx}
                        sliderIdx={sliderIdx}
                    />
                </div>
            </div>
        </div>
    )
}
