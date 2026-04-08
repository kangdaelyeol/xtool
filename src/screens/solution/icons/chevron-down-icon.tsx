import type { SvgProps } from './types'

export const ChevronDownIcon = ({ size, color }: SvgProps) => {
    return (
        <svg
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill="none"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M6 9l6 6 6-6" />
        </svg>
    )
}
