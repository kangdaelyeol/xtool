import { cn } from '@/utils'

const cardConfig = [
    {
        title: '디지털 제조 및 산업 도구',
        description:
            '정밀한 레이저 커팅 및 각인 기술로 기업의 시제품 제작 기간을 단축하고 교육 현장의 창의성을 극대화합니다.',
        image: '/sample.webp',
    },
    {
        title: '직관적인 인터페이스',
        description:
            '직관적인 인터페이스로 설계되어 별도의 복잡한 설정 없이 누구나 쉽게 사용할 수 있습니다. 처음 사용하는 환경에서도 빠르게 적응하고 바로 작업이 가능합니다.',
        image: '/so1.webp',
    },
    {
        title: '산업·교육용 인증 소재',
        description:
            '국가 표준 및 산업 안전 기준을 충족하는 고품질 소재로 기업 생산 라인과 교실에서 안심하고 사용 가능합니다.',
        image: '/so2.webp',
    },
]

interface CardProps {
    title: string
    description: string
    image: string
}

const Card = ({ title, description, image }: CardProps) => {
    return (
        <div
            className={cn(
                'bg-education-white rounded-[20px] flex flex-col overflow-hidden',
                'lg:w-[32%] lg:h-125',
                'md:w-[32%] md:h-110',
                'max-md:w-[95%] max-md:mx-auto max-md:mt-10',
            )}
        >
            <div className="h-90 lg:h-70 md:h-60 flex justify-center items-center">
                <img src={image} className="object-cover h-full w-full" />
            </div>
            <div
                className={cn(
                    'flex flex-col *:break-keep',
                    'lg:mt-8 lg:gap-2.5 lg:pl-7 lg:pr-15',
                    'md:mt-4 md:gap-1.5 md:pl-3 md:pr-5',
                    'max-md:mt-3 max-md:gap-1 max-md:pl-4 max-md:pb-5 max-md:pr-5',
                )}
            >
                <div className="font-semibold lg:text-[20px] md:text-[15px] max-md:text-[17px]">
                    {title}
                </div>
                <div
                    className={cn(
                        'text-font-gray font-medium break-keep tracking-wider',
                        'lg:text-[13.5px] lg:leading-6',
                        'md:text-[12px] md:leading-5',
                        'max-md:text-[12px] leading-5',
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
                'w-full pb-25 pt-10 *:select-none',
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
                        'text-center font-semibold tracking-wider break-keep',
                        'lg:mt-10 lg:text-[40px]',
                        'md:mt-10 md:text-[34px]',
                        'max-md:text-[20px]',
                    )}
                >
                    비즈니스와 교육의 경계를 허무는 기술
                </div>
                <div
                    className={cn(
                        'text-center mt-2 text-font-gray-deep tracking-wider break-keep',
                        'lg:text-[17px] md:text-[17px]',
                        'max-md:text-[12px] max-md:px-5',
                    )}
                >
                    xTool은 기업의 생산성 향상과 교육 현장의 창의적 변화를 위해
                    최첨단 디지털 제조 솔루션을 제공합니다.
                </div>
                <div
                    className={cn(
                        'flex justify-between mx-auto w-full',
                        'lg:flex-row md:flex-row flex-col lg:mt-10 md:mt-10',
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
