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
        description:
            '본 프로젝트에서는 공간적 상상력과 수학적 능력을 활용하여 입체 기하학 및 확률과 같은 개념을 이해하는 데 매우 유용한 도구인 주사위를 제작하게 됩니다.',
        image: '/transform/transform1.webp',
    },
    {
        subject: '미술 & 공예',
        title: 'Zentangle 패턴 미술',
        description:
            '본 프로젝트에서는 공간적 상상력과 스프레이 페인팅 기법을 활용하게 됩니다. 이 프로젝트는 미적 감각과 손재주를 향상시켜주기 때문에 미술 공예 수업에 매우 적합합니다.',
        image: '/transform/transform2.webp',
    },
    {
        subject: '공학',
        title: '디지털 피아노',
        description:
            '본 프로젝트에서는 크리스마스 테마의 디지털 피아노로 축제 분위기의 멜로디를 만들게 됩니다. F1 Ultra를 사용하여 건반과 센서를 연결하는 PCB를 제작하고, 음악과 전자공학을 융합할 것입니다.',
        image: '/transform/transform3.webp',
    },
    {
        subject: '지리학',
        title: '지형 모델',
        description:
            '본 프로젝트에서는 레이저 커팅으로 3D 지형 모형을 제작하여 물리 지리를 탐구합니다. 이 흥미로운 활동은 공간 지각 능력을 향상시켜주므로 지리학 또는 지구과학 수업에 적합합니다.',
        image: '/transform/transform4.webp',
    },
    {
        subject: '미술 & 공예',
        title: 'DIY 이름표',
        description:
            '본 프로젝트에서는 나무판에 부착할 금속 이름표를 디자인하고 개인화합니다. 이 실습 활동은 창의력과 손재주를 길러주므로 미술 공예 수업에 적합합니다.',
        image: '/transform/transform5.webp',
    },
] as CardInfo[]

const Card = ({ subject, title, description, image }: CardInfo) => {
    return (
        <div
            className={cn(
                'flex flex-col rounded-[10px] overflow-hidden md:h-100 bg-education-white',
                'lg:w-[33%] lg:min-w-[33%]',
                'md:w-[49%] md:min-w-[49%]',
                'max-md:w-[98%] max-md:min-w-[98%] max-md:py-3',
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
                setSliderIdx(0)
                if (innerWidth >= 1024) return setSliderCount(3)
                if (innerWidth >= 768) return setSliderCount(4)
                return setSliderCount(5)
            }, 200)
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

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
                        'lg:mt-10 lg:-left-4',
                        'md:mt-10 md:-left-3',
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
