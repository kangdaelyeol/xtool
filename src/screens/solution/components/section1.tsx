import { cn } from '@/utils'

interface CardProps {
    title: string
    description: string
    image: string
}

const cardConfig = [
    {
        title: '디지털 제조 및 산업 도구',
        description:
            '정밀한 레이저 커팅 및 각인 기술로 기업의 시제품 제작 기간을 단축하고 교육 현장의 창의성을 극대화합니다.',
        image: '/tech/tech-1.webp',
    },
    {
        title: '직관적인 인터페이스',
        description:
            '직관적인 인터페이스로 설계되어 별도의 복잡한 설정 없이 누구나 쉽게 빠르게 적응하여 사용할 수 있습니다.',
        image: '/tech/tech-2.webp',
    },
    {
        title: '산업·교육용 인증 소재',
        description:
            '국가 표준 및 산업 안전 기준을 충족하는 고품질 소재로 기업 생산 라인과 교실에서 안심하고 사용 가능합니다.',
        image: '/tech/tech-3.webp',
    },
]

const Card = ({ title, description, image }: CardProps) => {
    return (
        <div
            className={cn(
                'bg-education-white rounded-[10px] flex flex-col overflow-hidden md:pb-5',
                'lg:w-[32%]',
                'md:w-[32%]',
                'max-md:w-[95%] max-md:mx-auto max-md:mt-5',
            )}
        >
            <div className="max-md:h-90 lg:h-70 md:h-60 flex justify-center items-center">
                <img
                    src={image}
                    className="object-cover h-full w-full pointer-events-none"
                />
            </div>
            <div
                className={cn(
                    'flex flex-col *:break-keep',
                    'lg:mt-5 lg:gap-2 lg:px-7',
                    'md:mt-5 md:gap-1.5 md:px-5',
                    'max-md:mt-3 max-md:gap-1 max-md:pl-4 max-md:pb-5 max-md:pr-5',
                )}
            >
                <div className="font-semibold font-pretendard text-title-black lg:text-[24px] md:text-[19px] max-md:text-[20px] tracking-[-0.72px]">
                    {title}
                </div>
                <div
                    className={cn(
                        'text-font-gray break-keep tracking-[-0.54px] font-pretendard',
                        'lg:text-[17px] lg:leading-[180%]',
                        'md:text-[15px] md:leading-6',
                        'max-md:text-[14px] leading-5',
                    )}
                >
                    {description}
                </div>
            </div>
        </div>
    )
}

export const Section1 = () => {
    return (
        <div
            className={cn(
                'w-full md:py-25 max-md:py-15 *:select-none',
                'lg:scroll-mt-28 md:scroll-mt-28 max-md:scroll-mt-20',
            )}
            id="business"
        >
            <div
                className={cn(
                    'w-full mx-auto *:font-notokr',
                    'lg:px-3.75 lg:min-w-250 lg:max-w-300',
                    'md:px-2',
                )}
            >
                <div
                    className={cn(
                        'text-center font-semibold break-keep tracking-[-1.2px] text-title-black',
                        'lg:text-[40px]',
                        'md:text-[34px]',
                        'max-md:text-[25px]',
                    )}
                >
                    비즈니스와 교육의 경계를 허무는 기술
                </div>
                <div
                    className={cn(
                        'text-center mt-3.5 text-font-gray-deep break-keep tracking-[-0.6px]',
                        'lg:text-[20px] md:text-[18px]',
                        'max-md:text-[14px] max-md:px-5',
                    )}
                >
                    엑스툴은 기업의 생산성 향상과 교육 현장의 창의적 변화를 위해
                    최첨단 디지털 제조 솔루션을 제공합니다.
                </div>
                <div
                    className={cn(
                        'flex flex-col justify-between mx-auto w-full',
                        'md:mt-10 md:flex-row',
                        'lg:flex-row lg:mt-10 ',
                    )}
                >
                    {cardConfig.map(({ title, description, image }) => (
                        <Card
                            title={title}
                            description={description}
                            key={title}
                            image={image}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
