interface Props {
    size: number
    color: React.SVGAttributes<SVGSVGElement>['color']
}

export const ChevronIcon = ({ size, color }: Props) => {
    return (
        <svg
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill="none"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M6 9l6 6 6-6" />
        </svg>
    )
}
