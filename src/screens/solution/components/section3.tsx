import { useEffect, useState, type JSX } from 'react'
import { BusinessIcon, PresentationIcon, TruckIcon, WrenchIcon } from '../icons'
import { cn } from '@/utils'

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
    const [iconSize, setIconSize] = useState(30)
    useEffect(() => {
        const handleResize = () => {
            if (innerWidth >= 1024) return setIconSize(30)
            if (innerWidth >= 768) return setIconSize(20)
            return setIconSize(25)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    switch (icon) {
        case 'business':
            return <BusinessIcon size={iconSize} color={'#000000'} />
        case 'truck':
            return <TruckIcon size={iconSize} color={'#000000'} />
        case 'wrench':
            return <WrenchIcon size={iconSize} color={'#000000'} />
        case 'presentation':
            return <PresentationIcon size={iconSize} color={'#000000'} />
    }
}

const Item = ({ icon, title, description }: Props) => {
    return (
        <>
            <div
                className={cn(
                    'flex flex-col bg-education-white p-5 rounded-[10px]',
                    'lg:gap-3 lg:w-60',
                    'md:gap-1',
                    'max-md:hidden',
                )}
            >
                <ItemIcon icon={icon} />
                <div className="font-semibold lg:text-[16px] md:text-[14px]">
                    {title}
                </div>
                <div className="lg:text-[13.5px] md:text-[12px] text-font-gray tracking-wide break-keep">
                    {description}
                </div>
            </div>
            <div
                className={cn(
                    'bg-education-white p-5 rounded-[10px]',
                    'hidden max-md:flex flex-col',
                )}
            >
                <div className="flex gap-2 items-center">
                    <ItemIcon icon={icon} />
                    <div className="font-semibold text-[14px]">{title}</div>
                </div>
                <div className="text-[11px] mt-1 text-font-gray tracking-wide break-keep">
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
                'w-full md:pt-20 pb-25 border-t border-t-gray-200 *:select-none *:break-keep',
                'lg:scroll-mt-28',
                'md:scroll-mt-28',
                'max-md:scroll-mt-22 max-md:pt-13',
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
                        'max-md:absolute max-md:w-[95%] max-md:top-30 max-md:h-[calc(70vw)] max-md:left-3',
                    )}
                >
                    <div
                        className={cn(
                            'flex justify-center items-center overflow-hidden rounded-[30px] absolute shadow-2xl',
                            'min-[1200px]:w-140 min-[1200px]:h-100 min-[1200px]:top-40 min-[1200px]:left-0',
                            'lg:max-[1200px]:w-110 lg:max-[1200px]:h-80 lg:max-[1200px]:top-40 lg:max-[1200px]:left-0',
                            'md:max-lg:w-[90%] md:max-lg:h-110 md:max-lg:top-30',
                            'max-md:h-full max-md:w-full',
                        )}
                    >
                        <img
                            src="/so1.webp"
                            alt="support-img"
                            className="object-cover w-full h-full pointer-events-none"
                        />
                    </div>
                    <div
                        className={cn(
                            'rounded-[20px] bg-[#03d36c] flex flex-col absolute shadow-2xl',
                            'min-[1200px]:w-70 min-[1200px]:h-45 min-[1200px]:left-80 min-[1200px]:top-100',
                            'lg:max-[1200px]:w-60 lg:max-[1200px]:h-42 lg:max-[1200px]:left-60 lg:max-[1200px]:top-90',
                            'md:max-lg:top-110 md:max-lg:left-63 md:max-lg:w-60 md:max-lg:h-40',
                            'md:pl-8 md:pt-8',
                            'max-md:w-40 max-md:-bottom-10 max-md:right-0 max-md:pl-3 max-md:pt-4 max-md:h-23',
                        )}
                    >
                        <img
                            src="/x-logo.png"
                            alt="xtool-logo"
                            className="w-9 max-md:w-5 pointer-events-none"
                        />
                        <div
                            className={cn(
                                'text-white font-semibold text-[30px] italic md:mt-2',
                                'max-md:text-[20px] max-md:mt-1',
                            )}
                        >
                            PRO
                        </div>
                        <div className="text-white md:tracking-wider md:text-[13px] max-md:tracking-wide max-md:text-[10px]">
                            PROFESSIONAL SUPPORT
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
                            'mr-auto bg-[#e4e9ee] text-[#002b5b] tracking-wider font-semibold rounded-lg border border-[#002a5b56]',
                            'md:px-4 md:py-1 md:text-[13px]',
                            'max-md:px-3 max-md:py-1 max-md:text-[12px]',
                        )}
                    >
                        비즈니스 & 교육 전방위 지원
                    </div>
                    <div
                        className={cn(
                            'font-semibold',
                            'lg:text-[35px] lg:mt-4',
                            'md:text-[28px] md:mt-1',
                            'max-md:hidden',
                        )}
                    >
                        성공적인 도입과 운영을 위한
                        <br /> 전문적인 지원 시스템
                    </div>
                    <div className="hidden max-md:block font-semibold text-[18px] mt-0.5">
                        성공적인 도입과 운영을 위한 전문적인 지원 시스템
                    </div>
                    <div
                        className={cn(
                            'text-font-gray-deep tracking-wider',
                            'lg:text-[17px] lg:mt-3',
                            'md:text-[14px] md:mt-1',
                            'max-md:hidden',
                        )}
                    >
                        기업의 비즈니스 가치 창출과 교육기관의 학습 효과
                        극대화를 위해 <br /> xTool 전담 팀이 함께합니다.
                    </div>
                    <div
                        className={cn(
                            'text-font-gray-deep tracking-wider text-[11px] -mt-1',
                            'hidden max-md:block',
                        )}
                    >
                        기업의 비즈니스 가치 창출과 교육기관의 학습 효과
                        극대화를 위해 xTool 전담 팀이 함께합니다.
                    </div>
                    <div
                        className={cn(
                            'flex flex-col *:font-notokr',
                            'lg:mt-5 lg:gap-5',
                            'md:mt-1 md:gap-2',
                            'max-md:mt-[calc(50px+72vw)] max-md:gap-2',
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
