import type { SvgProps } from './types'

export const ChevronUpIcon = ({ size, color }: SvgProps) => {
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
            <path d="M18 15l-6-6-6 6" />
        </svg>
    )
}
