import { cn } from '@/utils'
import { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '../icons'

const listItemConfig = [
    {
        title: '기업 및 산업체',
        description:
            'R&D 시제품 제작, 사내 브랜딩 굿즈 생산 및 산업용 정밀 부품 마킹 솔루션',
        image: '/list1.webp',
    },
    {
        title: '학교 및 교육기관',
        description:
            '미래형 메이커 교실 구축 및 STEAM 교육을 위한 안전하고 쉬운 교구재 패키지',
        image: '/list2.webp',
    },
    {
        title: '관공서 및 공공기관',
        description:
            '지역 메이커 스페이스 구축 및 공공 프로젝트 지원을 위한 검증된 장비 인프라',
        image: '/list3.webp',
    },
    {
        title: '도서관 및 박물관',
        description:
            '체험형 문화 콘텐츠 제작 및 시민 참여형 디지털 창작 프로그램 운영 지원',
        image: '/list4.webp',
    },
]

interface ListItemProps {
    idx: number
    selectedIdx: number
    title: string
    description: string
    onClick: () => void
}

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
                'flex justify-between items-center cursor-pointer rounded-[10px] px-5 py-5',
                !selected && 'bg-white',
            )}
            onClick={onClick}
        >
            <div className="flex-flex-col">
                <div className="font-semibold text-[17px]">{title}</div>
                {selected && (
                    <div className="break-keep mt-2 font-medium text-font-gray-deep text-[13px] pr-30 leading-6">
                        {description}
                    </div>
                )}
            </div>
            {selected ? (
                <ChevronUpIcon size={25} color={'#000000'} />
            ) : (
                <ChevronDownIcon size={25} color={'#000000'} />
            )}
        </div>
    )
}

export const Section2 = () => {
    const [selectedIdx, setSelectedIdx] = useState(0)

    return (
        <div
            className="w-full bg-bg-ivory pt-19 pb-25 scroll-mt-28 border-t border-t-gray-200"
            id="solution"
        >
            <div className="w-full max-w-350 mx-auto *:font-notokr">
                <div className="text-center text-[40px] font-semibold tracking-wider">
                    최적화된 산업 및 교육 솔루션
                </div>
                <div className="text-center mt-2 text-font-gray-deep text-[16px] tracking-wider">
                    xTool의 레이저 솔루션은 비즈니스 환경과 교육 현장 모두에서
                    그 가치를 증명하고 있습니다.
                </div>
                <div className="flex mt-10 mx-auto w-285 h-148 rounded-[15px] overflow-hidden">
                    <div className="w-140">
                        <img
                            src={listItemConfig[selectedIdx].image}
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="flex flex-col gap-3 flex-1 bg-[#eff0f1] px-8 pt-8">
                        {listItemConfig.map(({ title, description }, idx) => (
                            <ListItem
                                title={title}
                                description={description}
                                key={title}
                                idx={idx}
                                selectedIdx={selectedIdx}
                                onClick={() => setSelectedIdx(idx)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
