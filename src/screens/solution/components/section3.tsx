import type { JSX } from 'react'
import { BusinessIcon, PresentationIcon, TruckIcon, WrenchIcon } from '../icons'

type Icon = 'business' | 'truck' | 'wrench' | 'presentation'

interface Props {
    icon: Icon
    title: string
    description: string
}

interface ItemIconProps {
    icon: Icon
}

interface GridItem {
    icon: Icon
    title: string
    description: string
}

const gridItemConfig = [
    [
        {
            icon: 'business',
            title: '기업 전용 혜택',
            description:
                '대량 구매 할인, 기업 전용 유지보수 계약 및 R&D 증빙 서류 지원',
        },
        {
            icon: 'truck',
            title: '신속한 공급망',
            description:
                '국내 재고 보유를 통한 빠른 납기 및 긴급 소모품 당일 발송 시스템',
        },
    ],
    [
        {
            icon: 'wrench',
            title: '전문 기술 지원',
            description:
                '전문 엔지니어의 현장 설치, 초기 세팅 및 정기 점검 서비스 제공',
        },
        {
            icon: 'presentation',
            title: '교육 및 도입 지원',
            description: '방문 교육을 통해 현장에서 즉시 활용할 수 있도록 지원',
        },
    ],
] as GridItem[][]

const ItemIcon = ({ icon }: ItemIconProps): JSX.Element => {
    switch (icon) {
        case 'business':
            return <BusinessIcon size={30} color={'#000000'} />
        case 'truck':
            return <TruckIcon size={30} color={'#000000'} />
        case 'wrench':
            return <WrenchIcon size={30} color={'#000000'} />
        case 'presentation':
            return <PresentationIcon size={30} color={'#000000'} />
    }
}

const Item = ({ icon, title, description }: Props) => {
    return (
        <div className="flex flex-col gap-3 bg-education-white w-60 p-5 rounded-[10px]">
            <ItemIcon icon={icon} />
            <div className="font-semibold">{title}</div>
            <div className="text-[13.5px] text-font-gray tracking-wide break-keep">
                {description}
            </div>
        </div>
    )
}

export const Section3 = () => {
    return (
        <div
            className="w-full pt-20 pb-25 scroll-mt-28  border-t border-t-gray-200"
            id="system"
        >
            <div className="w-full max-w-350 mx-auto flex">
                <div className="w-170 relative">
                    <div className="w-115 h-80 flex justify-center items-center overflow-hidden rounded-[30px] absolute top-40 left-35 shadow-2xl">
                        <img
                            src="/so1.webp"
                            alt="support-img"
                            className="object-cover"
                        />
                    </div>
                    <div className="w-60 h-40 rounded-[20px] bg-[#03d36c] flex flex-col pl-8 pt-8 absolute top-85 left-100 shadow-2xl">
                        <img
                            src="/x-logo.png"
                            alt="xtool-logo"
                            className="w-9"
                        />
                        <div className="text-white font-semibold text-[30px] italic mt-2">
                            PRO
                        </div>
                        <div className="text-white tracking-wider text-[13px]">
                            PROFESSIONAL SUPPORT
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex flex-col gap-3">
                    <div className="mr-auto px-4 py-1 bg-[#e4e9ee] text-[#002b5b] text-[13px] tracking-wider font-semibold rounded-lg border border-[#002a5b56]">
                        비즈니스 & 교육 전방위 지원
                    </div>
                    <div className="text-[35px] font-semibold mt-4">
                        성공적인 도입과 운영을 위한
                        <br /> 전문적인 지원 시스템
                    </div>
                    <div className="mt-3 text-[17px] text-font-gray-deep tracking-wider">
                        기업의 비즈니스 가치 창출과 교육기관의 학습 효과
                        극대화를 위해 <br /> xTool 전담 팀이 함께합니다.
                    </div>
                    <div className="flex flex-col gap-5 mt-5 *:font-notokr">
                        {gridItemConfig.map((list, idx) => (
                            <div className="flex gap-5" key={idx}>
                                {list.map(({ title, description, icon }) => (
                                    <Item
                                        title={title}
                                        description={description}
                                        icon={icon}
                                        key={title}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
