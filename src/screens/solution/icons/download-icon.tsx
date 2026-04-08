import type { SvgProps } from "./types"


export const DownloadIcon = ({ size, color }: SvgProps) => {
    return (
        <svg
            stroke={color}
            viewBox="0 0 24 24"
            width={size}
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 3v13" />
            <path d="M7 11l5 5 5-5" />
            <path d="M5 21h14" />
        </svg>
    )
}
