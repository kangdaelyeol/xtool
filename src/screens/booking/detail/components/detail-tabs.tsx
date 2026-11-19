export type DetailTab = 'book' | 'info'

// 예약하기 / 체험 안내 - 밑줄 탭 (스크롤하면 헤더 밑에 붙음 - CSS sticky)
export const DetailTabs = ({
    tab,
    onChange,
}: {
    tab: DetailTab
    onChange: (tab: DetailTab) => void
}) => {
    const tabs: { key: DetailTab; label: string }[] = [
        { key: 'book', label: '예약하기' },
        { key: 'info', label: '체험 안내' },
    ]
    return (
        <div className="xb2-tabs">
            <div className="xb2-wrap xb2-tabs__inner" role="tablist">
                {tabs.map((t) => (
                    <button
                        key={t.key}
                        type="button"
                        role="tab"
                        aria-selected={tab === t.key}
                        className={'xb2-tabs__btn' + (tab === t.key ? ' is-active' : '')}
                        onClick={() => onChange(t.key)}
                    >
                        {t.label}
                    </button>
                ))}
            </div>
        </div>
    )
}
