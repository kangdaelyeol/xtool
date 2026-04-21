import type { SvgProps } from './types'

export const ArrowRightHero = ({ size, color, className }: SvgProps) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 8 14"
            className={className}
        >
            <path
                d="M0.530273 0.530331L6.53027 6.53033L0.530273 12.5303"
                stroke={color}
                strokeWidth="1.5"
            />
        </svg>
    )
}
