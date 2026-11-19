// 예약 페이지 아이콘 (인라인 SVG, 색은 currentColor 를 따름)
type IconProps = { size?: number; className?: string }

const svgProps = (size: number, className?: string) => ({
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className,
    'aria-hidden': true,
})

export const StarIcon = ({ size = 14, className }: IconProps) => (
    <svg {...svgProps(size, className)} fill="currentColor">
        <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z" />
    </svg>
)

export const PinFillIcon = ({ size = 18, className }: IconProps) => (
    <svg {...svgProps(size, className)} fill="currentColor">
        <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
    </svg>
)

export const PinLineIcon = ({ size = 14, className }: IconProps) => (
    <svg {...svgProps(size, className)} fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 21s-6.5-7.2-6.5-12a6.5 6.5 0 0 1 13 0c0 4.8-6.5 12-6.5 12z" />
        <circle cx="12" cy="9" r="2.3" />
    </svg>
)

export const HomeIcon = ({ size = 14, className }: IconProps) => (
    <svg {...svgProps(size, className)} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
        <path d="M3.5 10.5L12 4l8.5 6.5V20h-5.5v-5.5h-6V20H3.5z" />
    </svg>
)

export const PhoneLineIcon = ({ size = 14, className }: IconProps) => (
    <svg {...svgProps(size, className)} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
        <path d="M6.6 3.5l2.6 3.6-1.6 2.1a12 12 0 0 0 7.2 7.2l2.1-1.6 3.6 2.6-1.3 3a2 2 0 0 1-2.1 1.1C10.4 20.6 3.4 13.6 2.5 6.9a2 2 0 0 1 1.1-2.1z" />
    </svg>
)

export const PhoneFillIcon = ({ size = 18, className }: IconProps) => (
    <svg {...svgProps(size, className)} fill="currentColor">
        <path d="M6.6 3.5l2.6 3.6-1.6 2.1a12 12 0 0 0 7.2 7.2l2.1-1.6 3.6 2.6-1.3 3a2 2 0 0 1-2.1 1.1C10.4 20.6 3.4 13.6 2.5 6.9a2 2 0 0 1 1.1-2.1z" />
    </svg>
)

export const CheckIcon = ({ size = 16, className }: IconProps) => (
    <svg {...svgProps(size, className)} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 12.5l5 5 10-11" />
    </svg>
)

export const HelpIcon = ({ size = 14, className }: IconProps) => (
    <svg {...svgProps(size, className)} fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="9" />
        <path d="M9.6 9.4a2.5 2.5 0 0 1 4.8.9c0 1.7-2.4 2-2.4 3.6" strokeLinecap="round" />
        <circle cx="12" cy="16.9" r=".6" fill="currentColor" />
    </svg>
)

export const InfoIcon = ({ size = 14, className }: IconProps) => (
    <svg {...svgProps(size, className)} fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 11v5.5" strokeLinecap="round" />
        <circle cx="12" cy="7.8" r=".7" fill="currentColor" />
    </svg>
)

export const PencilIcon = ({ size = 14, className }: IconProps) => (
    <svg {...svgProps(size, className)} fill="currentColor">
        <path d="M15.6 4.1l4.3 4.3L9 19.3 4 20l.7-5zM3 21.5h18v1.5H3z" />
    </svg>
)

export const ChevronDownIcon = ({ size = 20, className }: IconProps) => (
    <svg {...svgProps(size, className)} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 9l7 7 7-7" />
    </svg>
)

export const ChevronRightIcon = ({ size = 14, className }: IconProps) => (
    <svg {...svgProps(size, className)} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 5l7 7-7 7" />
    </svg>
)

export const SmileIcon = ({ size = 22, className }: IconProps) => (
    <svg {...svgProps(size, className)} fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9.5" />
        <path d="M8 14.5a4.5 4.5 0 0 0 8 0" strokeLinecap="round" />
        <circle cx="9" cy="10" r=".9" fill="currentColor" />
        <circle cx="15" cy="10" r=".9" fill="currentColor" />
    </svg>
)

export const ExpandIcon = ({ size = 16, className }: IconProps) => (
    <svg {...svgProps(size, className)} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 4h6v6M20 4l-7 7M10 20H4v-6M4 20l7-7" />
    </svg>
)

export const RouteIcon = ({ size = 15, className }: IconProps) => (
    <svg {...svgProps(size, className)} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 19v-5a4 4 0 0 1 4-4h10M15 6l4 4-4 4" />
    </svg>
)

export const MapIcon = ({ size = 16, className }: IconProps) => (
    <svg {...svgProps(size, className)} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
        <path d="M3.5 6.5l5.5-2 6 2 5.5-2v13l-5.5 2-6-2-5.5 2z" />
        <path d="M9 4.5v13M15 6.5v13" />
    </svg>
)

export const CheckboxIcon = ({ checked, size = 18, className }: IconProps & { checked: boolean }) => (
    <svg {...svgProps(size, className)} fill="none">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke={checked ? '#0ca98a' : '#c4c4c4'} fill={checked ? '#0ca98a' : 'none'} strokeWidth="1.6" />
        <path d="M7.5 12.3l3 3 6-6.6" stroke={checked ? '#fff' : '#c4c4c4'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

export const ChevronLeftIcon = ({ size = 18, className }: IconProps) => (
    <svg {...svgProps(size, className)} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 5l-7 7 7 7" />
    </svg>
)

export const ClockFillIcon = ({ size = 15, className }: IconProps) => (
    <svg {...svgProps(size, className)} fill="currentColor">
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 10.6l3.3 2-.9 1.5-4.2-2.6V6.5H13z" />
    </svg>
)

export const MemoFillIcon = ({ size = 15, className }: IconProps) => (
    <svg {...svgProps(size, className)} fill="currentColor">
        <path d="M4 3h16a1 1 0 0 1 1 1v12l-6 5H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm3 5v1.6h10V8zm0 4v1.6h7V12z" />
    </svg>
)

export const CalendarFillIcon = ({ size = 18, className }: IconProps) => (
    <svg {...svgProps(size, className)} fill="currentColor">
        <path d="M7 2h2v2h6V2h2v2h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3zM5 9v10h14V9zm2 2h2.5v2H7zm3.75 0h2.5v2h-2.5zm3.75 0H17v2h-2.5zM7 14.5h2.5v2H7zm3.75 0h2.5v2h-2.5zm3.75 0H17v2h-2.5z" />
    </svg>
)

export const CheckSquareIcon = ({ size = 15, className }: IconProps) => (
    <svg {...svgProps(size, className)} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
        <path d="M8 12.3l2.8 2.8L16.3 9" />
    </svg>
)

export const CheckCircleIcon = ({ size = 20, className }: IconProps) => (
    <svg {...svgProps(size, className)} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12.3l2.8 2.8L16.3 9.5" />
    </svg>
)

export const BellPlusIcon = ({ size = 17, className }: IconProps) => (
    <svg {...svgProps(size, className)} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 14.5V10a6 6 0 0 0-12 0v4.5L4.5 17h15zM10 20a2.2 2.2 0 0 0 4 0" />
        <path d="M19 3v4M17 5h4" />
    </svg>
)

export const CaretDownIcon = ({ size = 10, className }: IconProps) => (
    <svg {...svgProps(size, className)} fill="currentColor">
        <path d="M5 8h14l-7 9z" />
    </svg>
)

export const ParkingIcon = ({ size = 18, className }: IconProps) => (
    <svg {...svgProps(size, className)} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
        <path d="M9.5 17V7.5h3.2a2.8 2.8 0 0 1 0 5.6H9.5" />
    </svg>
)

export const CloseIcon = ({ size = 20, className }: IconProps) => (
    <svg {...svgProps(size, className)} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M6 6l12 12M18 6L6 18" />
    </svg>
)
