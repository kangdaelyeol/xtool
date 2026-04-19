import { type JSX } from 'react'
import { cn } from '@/utils'
import { useResizeContext } from '@/contexts'
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
            description: '대량 구매 할인, 기업 전용 유지보수 계약 및 서류 지원',
        },
        {
            icon: 'truck',
            title: '신속한 공급망',
            description:
                '국내 재고 보유를 통한 빠른 납기 및 긴급 소모품 발송 시스템',
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
    const { iconSize } = useResizeContext()
    switch (icon) {
        case 'business':
            return <BusinessIcon size={iconSize} color={'#121212'} />
        case 'truck':
            return <TruckIcon size={iconSize} color={'#121212'} />
        case 'wrench':
            return <WrenchIcon size={iconSize} color={'#121212'} />
        case 'presentation':
            return <PresentationIcon size={iconSize} color={'#121212'} />
    }
}

const Item = ({ icon, title, description }: Props) => {
    return (
        <>
            <div
                className={cn(
                    'flex flex-col bg-education-white p-5 rounded-[10px]',
                    'lg:gap-2 min-[1120px]:w-70',
                    'lg:max-[1120px]:w-60',
                    'md:gap-1',
                    'max-md:hidden',
                )}
            >
                <ItemIcon icon={icon} />
                <div className="font-semibold lg:text-[24px] md:text-[22px] tracking-[-0.7px] text-black-title">
                    {title}
                </div>
                <div className="min-[1120px]:text-[18px] lg:max-[1120px]:text-[16px] md:text-[17px] text-font-gray font-[300] tracking-[-0.6px] break-keep">
                    {description}
                </div>
            </div>
            <div
                className={cn(
                    'bg-education-white p-4 rounded-[10px]',
                    'hidden max-md:flex flex-col',
                )}
            >
                <div className="flex gap-2 items-center">
                    <ItemIcon icon={icon} />
                    <div className="font-semibold text-[18px] tracking-[-1.2px]">
                        {title}
                    </div>
                </div>
                <div className="text-[14px] mt-1 text-font-gray tracking-[-0.6px] break-keep">
                    {description}
                </div>
            </div>
        </>
    )
}

export const Section3 = () => {
    return (
        <div
            className={cn(
                'w-full border-t border-t-gray-200 *:select-none *:break-keep py-25 max-md:py-10',
                'lg:scroll-mt-28',
                'md:scroll-mt-28',
                'max-md:scroll-mt-22',
            )}
            id="system"
        >
            <div
                className={cn(
                    'w-full mx-auto flex md:justify-center relative',
                    'lg:max-w-350 lg:px-5',
                    'md:px-5',
                )}
            >
                <div
                    className={cn(
                        'w-full',
                        'lg:max-w-170 lg:relative',
                        'md:max-w-130 md:relative',
                        'max-md:hidden',
                    )}
                >
                    <div
                        className={cn(
                            'flex justify-center items-center overflow-hidden rounded-[10px] absolute shadow-2xl',
                            'min-[1200px]:w-125 min-[1200px]:h-132 min-[1200px]:top-10 min-[1200px]:left-3',
                            'lg:max-[1200px]:w-110 lg:max-[1200px]:h-123 lg:max-[1200px]:top-10 lg:max-[1200px]:left-3',
                            'md:max-lg:w-[90%] md:max-lg:h-110 md:max-lg:top-30',
                        )}
                    >
                        <img
                            src="/support/support-x.webp"
                            alt="support-img"
                            className="object-cover w-full h-full pointer-events-none"
                        />
                    </div>
                    <div
                        className={cn(
                            'rounded-[10px] bg-[#00CE65] flex flex-col absolute shadow-2xl',
                            'min-[1200px]:w-[254px] min-[1200px]:h-[184px] min-[1200px]:left-75 min-[1200px]:top-110',
                            'lg:max-[1200px]:w-[230px] lg:max-[1200px]:h-46 lg:max-[1200px]:left-60 lg:max-[1200px]:top-90',
                            'md:max-lg:top-110 md:max-lg:right-7 md:max-lg:w-60 md:max-lg:h-46',
                            'md:pl-5 md:pt-5',
                        )}
                    >
                        <img
                            src="/x-logo.png"
                            alt="xtool-logo"
                            className="w-10 pointer-events-none"
                        />
                        <div
                            className={cn(
                                'text-white font-semibold text-[40px] text-end pr-5 md:mt-6 tracking-[-1.2px]',
                                'max-md:text-[20px] max-md:mt-1',
                            )}
                        >
                            PRO
                        </div>
                        <div className="text-white md:text-[28px] font-semibold -mt-1 tracking-[-0.6px] max-md:text-[10px] text-end pr-5">
                            전문 지원 시스템
                        </div>
                    </div>
                </div>
                <div
                    className={cn(
                        'flex flex-col',
                        'md:gap-3',
                        'max-md:gap-2 max-md:px-5 max-md:w-full',
                    )}
                >
                    <div
                        className={cn(
                            'font-semibold text-title-black tracking-[-1.2px] ',
                            'lg:text-[40px] lg:mt-4 lg:leading-[64px]',
                            'md:text-[33px] md:mt-1',
                            'max-md:hidden',
                        )}
                    >
                        도입부터 운영까지 책임지는
                        <br /> PRO 전문 지원 시스템
                    </div>

                    <div
                        className={cn(
                            'text-font-gray-deep tracking-[-0.6px] mt-1',
                            'min-[1290px]:text-[20px]',
                            'lg:max-[1290px]:text-[17px]',
                            'md:max-lg:text-[20px]',
                            'max-md:hidden',
                        )}
                    >
                        기업의 비즈니스 성과와 교육 효과를 높이기 위해 xTool
                        전담팀이 함께합니다.
                    </div>
                    {/* responsive - max-md */}
                    <div
                        className={cn(
                            'font-semibold text-[20px] text-center text-title-black tracking-[-1.2px] hidden max-md:block',
                        )}
                    >
                        도입부터 운영까지 책임지는 PRO 전문 지원 시스템
                    </div>
                    <div
                        className={cn(
                            'text-font-gray-deep tracking-[-0.6px] text-[14px] text-center mt-1',
                            'hidden max-md:block',
                        )}
                    >
                        기업의 비즈니스 가치 창출과 교육기관의 학습 효과
                        극대화를 위해 xTool 전담 팀이 함께합니다.
                    </div>
                    <div className={cn('hidden max-md:block relative mt-4')}>
                        <img
                            src="/support/support-x.webp"
                            alt="support-img"
                            className="object-cover w-full h-full pointer-events-none"
                        />
                        <div
                            className={cn(
                                'hidden max-md:block absolute w-40 -bottom-10 -right-3 pl-3 pt-4 pb-2 bg-[#00CE65] rounded-[10px]',
                            )}
                        >
                            <img
                                src="/x-logo.png"
                                alt="xtool-logo"
                                className="w-7 pointer-events-none"
                            />
                            <div
                                className={cn(
                                    'text-white font-semibold text-[25px] text-end pr-5 mt-2 tracking-[-1.2px]',
                                )}
                            >
                                PRO
                            </div>
                            <div className="text-white font-semibold -mt-1 tracking-[-0.6px] text-[17px] text-end pr-5">
                                전문 지원 시스템
                            </div>
                        </div>
                    </div>
                    <div
                        className={cn(
                            'flex flex-col *:font-notokr',
                            'lg:mt-5 lg:gap-5',
                            'md:mt-1 md:gap-2',
                            'max-md:gap-2 max-md:mt-10',
                        )}
                    >
                        {gridItemConfig.map((list, idx) => (
                            <div
                                className="flex lg:gap-5 md:gap-2 md:max-lg:flex-col max-md:flex-col max-md:gap-3"
                                key={idx}
                            >
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
