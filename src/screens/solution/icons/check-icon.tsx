import type { SvgProps } from './types'

export const CheckIcon = ({ size, color }: SvgProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24">
            <path
                fill="none"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M5, 13.9l5.2, 4.4l10, -12"
            />
        </svg>
    )
}
