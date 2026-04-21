import { cn } from '@/utils'
import { useResizeContext } from '@/contexts'
import { ArrowLeftIcon, ArrowRightIcon } from '../icons'

interface CardInfo {
    subject: string
    title: string
    description: string
    image: string
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
                'flex flex-col rounded-[5px] overflow-hidden bg-education-white pb-5',
                'lg:w-[33%] lg:min-w-[33%]',
                'md:w-[49%] md:min-w-[49%]',
                'max-md:w-[98%] max-md:min-w-[98%]',
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
                    'flex flex-col *:font-pretendard',
                    'md:pt-5 md:px-5',
                    'max-md:pt-5 max-md:pl-4',
                )}
            >
                <div className="text-black/80 md:text-[15px] max-md:text-[13px]">
                    {subject}
                </div>
                <div className="font-bold lg:text-[20px] md:text-[22px] md:mt-2 max-md:text-[19px] max-md:mt-1">
                    {title}
                </div>
                <div className="lg:text-[14px] md:text-[14px] max-md:text-[12.5px] mt-1 break-keep text-font-gray-deep ">
                    {description}
                </div>
            </div>
        </div>
    )
}

const PaginationDot = () => {
    const {
        transformEducationStyle: { dotActiveList },
        transformEducationHandlers: { goToIdx },
    } = useResizeContext()
    return (
        <div className="flex gap-2">
            {dotActiveList.map((val, idx) =>
                val ? (
                    <div
                        onClick={() => goToIdx(idx)}
                        key={idx}
                        className="flex justify-center cursor-pointer items-center rounded-[50%] bg-black w-2 h-2"
                    />
                ) : (
                    <div
                        onClick={() => goToIdx(idx)}
                        key={idx}
                        className="flex justify-center cursor-pointer items-center rounded-[50%] bg-gray-400 w-2 h-2"
                    />
                ),
            )}
        </div>
    )
}

const PaginationButton = () => {
    const {
        transformEducationHandlers: { goNext, goPrev },
        transformEducationStyle: { paginationLeftBtn, paginationRightBtn },
    } = useResizeContext()

    return (
        <div className="flex gap-5 md:-mr-6 max-md:mr-1.5">
            <div
                onClick={goPrev}
                className={cn(
                    'flex justify-center items-center rounded-[50%] cursor-pointer',
                    paginationLeftBtn,
                )}
            >
                <ArrowLeftIcon size={30} color="#ffffff" />
            </div>
            <div
                onClick={goNext}
                className={cn(
                    'flex justify-center items-center rounded-[50%] cursor-pointer',
                    paginationRightBtn,
                )}
            >
                <ArrowRightIcon size={30} color="#ffffff" />
            </div>
        </div>
    )
}

export const TransformEducation = () => {
    const {
        transformEducationStyle: { sliderTransform },
    } = useResizeContext()

    return (
        <div
            className={cn(
                'w-full overflow-hidden *:select-none md:py-25 max-md:py-15 max-md:px-4',
            )}
        >
            <div
                className={cn(
                    'mx-auto overflow-hidden',
                    'lg:max-w-300 lg:px-5',
                )}
            >
                {/* Title */}
                <div
                    className={cn(
                        'text-center text-black/90 font-bold break-keep tracking-[-1.2px] font-pretendard',
                        'lg:text-[40px] md:text-[40px] max-md:text-[26px]',
                    )}
                >
                    실습 프로젝트를 통한 교육 혁신
                </div>
                {/* Slider */}
                <div
                    className={cn(
                        'mt-10 w-full flex flex-col relative',
                        'lg:-left-4',
                        'md:max-lg:px-5',
                        'max-md:px-2 max-md:left-1',
                    )}
                >
                    <div
                        className={cn(
                            'flex gap-5 relative transition duration-300 ease',
                        )}
                        style={{
                            transform: sliderTransform || '',
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
                        'lg:mt-5 lg:-left-3.5',
                        'md:mt-5 md:max-lg:-left-2 md:max-lg:px-8',
                        'max-md:mt-3 max-md:px-2 max-md:left-1',
                    )}
                >
                    <PaginationDot />
                    <PaginationButton />
                </div>
            </div>
        </div>
    )
}
