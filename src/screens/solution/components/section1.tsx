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
        image: '/sample.webp',
    },
    {
        title: '산업·교육용 인증 소재',
        description:
            '국가 표준 및 산업 안전 기준을 충족하는 고품질 소재로 기업 생산 라인과 교실에서 안심하고 사용 가능합니다.',
        image: '/sample.webp',
    },
]

interface CardProps {
    title: string
    description: string
    image: string
}

const Card = ({ title, description, image }: CardProps) => {
    return (
        <div className="w-md h-122 bg-education-white rounded-[20px] flex flex-col overflow-hidden">
            <div className="h-70 flex justify-center items-center">
                <img src={image} className="object-cover h-full w-full" />
            </div>
            <div className="flex flex-col gap-2.5 pl-7 pr-15 mt-8">
                <div className="font-semibold text-[20px]">{title}</div>
                <div className="text-font-gray text-[13.5px] leading-6 font-medium break-keep">
                    {description}
                </div>
            </div>
        </div>
    )
}

export const Section1 = () => {
    return (
        <div className="w-full">
            <div className="w-full max-w-350 mx-auto *:font-notokr">
                <div className="text-center mt-10 text-[40px] font-semibold tracking-wider">
                    비즈니스와 교육의 경계를 허무는 기술
                </div>
                <div className="text-center mt-2 text-font-gray-deep text-[16px] tracking-wider">
                    xTool은 기업의 생산성 향상과 교육 현장의 창의적 변화를 위해
                    최첨단 디지털 제조 솔루션을 제공합니다.
                </div>
                <div className="flex justify-between mt-10">
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
