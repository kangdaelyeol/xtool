import { useEffect, useState } from 'react'
import { cn } from '@/utils'
import { ChevronDownIcon, ChevronUpIcon } from '../icons'

interface ListItemProps {
    idx: number
    selectedIdx: number
    title: string
    description: string
    onClick: () => void
}

const listItemConfig = [
    {
        title: '기업 및 산업체',
        description:
            'R&D 시제품 제작, 사내 브랜딩 굿즈 생산 및 산업용 정밀 부품 마킹 솔루션',
        image: '/solution/solution-1.webp',
    },
    {
        title: '학교 및 교육기관',
        description:
            '미래형 메이커 교실 구축 및 STEAM 교육을 위한 안전하고 쉬운 교구재 패키지',
        image: '/solution/solution-2.webp',
    },
    {
        title: '관공서 및 공공기관',
        description:
            '지역 메이커 스페이스 구축 및 공공 프로젝트 지원을 위한 검증된 장비 인프라',
        image: '/solution/solution-3.webp',
    },
    {
        title: '도서관 및 박물관',
        description:
            '체험형 문화 콘텐츠 제작 및 시민 참여형 디지털 창작 프로그램 운영 지원',
        image: '/solution/solution-4.webp',
    },
]

const ListItem = ({
    idx,
    selectedIdx,
    title,
    description,
    onClick,
}: ListItemProps) => {
    const selected = idx === selectedIdx

    return (
        <div
            className={cn(
                'flex justify-between items-center cursor-pointer rounded-[10px] bg-bg-ivory',
                'lg:px-5 lg:py-5',
                'md:px-5 md:py-5',
                'max-md:py-3 max-md:px-3',
            )}
            onClick={onClick}
        >
            <div className="flex flex-col">
                <div className="font-semibold text-[20px] tracking-[-0.78px]">
                    {title}
                </div>
                {selected && (
                    <div
                        className={cn(
                            'break-keep mt-2 text-font-gray-deep tracking-[-0.5px]',
                            'lg:text-[15px] lg:pr-5 lg:leading-6',
                            'md:text-[13px] md:pr-3 md:leading-6',
                            'max-md:text-[13px] max-md:pr-2 max-md:leading-5',
                        )}
                    >
                        {description}
                    </div>
                )}
            </div>
            <div className="w-4.25">
                {selected ? (
                    <ChevronUpIcon size={25} color={'#000000'} />
                ) : (
                    <ChevronDownIcon size={25} color={'#000000'} />
                )}
            </div>
        </div>
    )
}

export const Section2 = () => {
    const [selectedIdx, setSelectedIdx] = useState(0)

    useEffect(() => {
        // Image preload
        listItemConfig.forEach((item) => {
            const image = new Image()
            image.src = item.image
        })
    }, [])

    return (
        <div
            className={cn(
                'w-full bg-bg-ivory *:select-none md:pt-25 md:pb-15 max-md:pt-10 max-md:pb-15',
                'lg:scroll-mt-28',
                'md:scroll-mt-28',
                'max-md:scroll-mt-20 max-md:px-4',
            )}
            id="solution"
        >
            <div
                className={cn(
                    'w-full mx-auto *:font-pretendard',
                    'lg:max-w-350',
                )}
            >
                <div
                    className={cn(
                        'text-center font-bold break-keep tracking-[-1.2px]',
                        'lg:text-[40px] md:text-[40px] text-[26px]',
                    )}
                >
                    최적화된 비즈니스 & 교육 솔루션
                </div>
                <div
                    className={cn(
                        'text-center mt-2 text-font-gray-deep break-keep tracking-[-0.6px]',
                        'lg:text-[20px] md:text-[20px]',
                        'max-md:text-[14px] max-md:px-4',
                    )}
                >
                    엑스툴의 레이저 솔루션은 비즈니스 환경과 교육 현장에서
                    가치를 증명하고 있습니다.
                </div>
                <div className="mt-10 lg:px-5 md:px-5 px-1.5">
                    <div
                        className={cn(
                            'flex rounded-[15px] overflow-hidden ',
                            'lg:w-full max-w-280 mx-auto lg:flex-row',
                            'md:flex-col md:max-lg:h-auto',
                            'max-md:flex-col max-md:h-auto',
                        )}
                    >
                        <div
                            className={cn(
                                'relative',
                                'lg:w-180',
                                'md:max-lg:w-full md:max-lg:h-150',
                                'max-md:h-70',
                            )}
                        >
                            {listItemConfig.map((item, idx) => (
                                <img
                                    src={item.image}
                                    key={item.image}
                                    className={cn(
                                        'object-cover w-full h-full absolute pointer-events-none',
                                        idx === selectedIdx && 'z-10',
                                    )}
                                />
                            ))}
                        </div>
                        <div
                            className={cn(
                                'flex flex-col gap-3 flex-1 bg-white',
                                'lg:px-8 lg:pt-8',
                                'md:px-8 md:pt-8 md:pb-10',
                                'max-md:px-4 max-md:pt-3 max-md:pb-7',
                            )}
                        >
                            {listItemConfig.map(
                                ({ title, description }, idx) => (
                                    <ListItem
                                        title={title}
                                        description={description}
                                        key={title}
                                        idx={idx}
                                        selectedIdx={selectedIdx}
                                        onClick={() => setSelectedIdx(idx)}
                                    />
                                ),
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
