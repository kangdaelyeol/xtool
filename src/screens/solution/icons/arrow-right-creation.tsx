export const ArrowRightCreation = () => {
    return (
        <svg
            className="animate-arrow-body"
            width="30"
            height="20"
            viewBox="0 0 20 14"
            fill="none"
        >
            <path
                className="path-body animate-drawPath-1"
                d="M1 7 H16"
                stroke="#888"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <path
                className="path-head-top animate-drawPath-2"
                d="M12 3 L17 7"
                stroke="#888"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <path
                className="path-head-bot animate-drawPath-3"
                d="M12 11 L17 7"
                stroke="#888"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
        </svg>
    )
}
