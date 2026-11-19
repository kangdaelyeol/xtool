import { bookingNotices } from '../../data'
import { Steps } from '../../components/common'
import {
    buildMonthGrid,
    formatKoreanDate,
    formatSlot,
    getDayStatus,
    isBookable,
    isSelectable,
    isSlotOpen,
    testSchedule,
    toKey,
    WEEKDAY_LABELS,
    type DayStatus,
} from '../../schedule'
import { ChevronLeftIcon, ChevronRightIcon } from '../../components/icons'

export type ViewMonth = { year: number; month: number } // month: 0~11

type Props = {
    today: Date
    viewMonth: ViewMonth
    onViewMonthChange: (v: ViewMonth) => void
    selectedDate: Date
    onSelectDate: (d: Date) => void
    selectedTime: string | null
    onSelectTime: (t: string) => void
}

const DAY_TAG: Partial<Record<DayStatus, string>> = { today: '오늘', soldout: '마감', holiday: '휴무' }

// 예약하기 탭: 단계 표시 + [달력 | 시간] 2단 카드 + 방문 전 안내
export const BookingPanel = (props: Props) => (
    <section className="xb2-book" aria-label="예약하기">
        <div className="xb2-wrap">
            <Steps current={0} />
            <div className="xb2-book__grid">
                <Calendar {...props} />
                <Times {...props} />
            </div>
            <NoticeCards />
        </div>
    </section>
)

const Calendar = ({ today, viewMonth, onViewMonthChange, selectedDate, onSelectDate }: Props) => {
    const { year, month } = viewMonth
    const cells = buildMonthGrid(year, month)
    const offset = (year - today.getFullYear()) * 12 + (month - today.getMonth())
    const canPrev = offset > 0
    const canNext = offset < testSchedule.monthsAhead - 1
    const move = (diff: number) => {
        const d = new Date(year, month + diff, 1)
        onViewMonthChange({ year: d.getFullYear(), month: d.getMonth() })
    }

    return (
        <div className="xb2-card xb2-cal">
            <div className="xb2-card__head">
                <h2 className="xb2-card__title">날짜 선택</h2>
                <div className="xb2-cal__nav">
                    <button type="button" disabled={!canPrev} onClick={() => move(-1)} aria-label="이전 달">
                        <ChevronLeftIcon size={18} />
                    </button>
                    <strong>
                        {year}년 {month + 1}월
                    </strong>
                    <button type="button" disabled={!canNext} onClick={() => move(1)} aria-label="다음 달">
                        <ChevronRightIcon size={18} />
                    </button>
                </div>
            </div>

            <div className="xb2-cal__grid">
                {WEEKDAY_LABELS.map((w, i) => (
                    <span key={w} className={'xb2-cal__weekday' + (i === 0 ? ' is-sun' : '')}>
                        {w}
                    </span>
                ))}
                {cells.map((date, i) => {
                    if (!date) return <span key={`blank-${i}`} />
                    const status = getDayStatus(date, today)
                    const selected = toKey(date) === toKey(selectedDate)
                    const tag = DAY_TAG[status]
                    return (
                        <button
                            key={toKey(date)}
                            type="button"
                            className={`xb2-day is-${status}` + (selected ? ' is-selected' : '')}
                            disabled={!isSelectable(status)}
                            aria-pressed={selected}
                            aria-label={`${date.getMonth() + 1}월 ${date.getDate()}일${tag ? ` ${tag}` : ''}`}
                            onClick={() => onSelectDate(date)}
                        >
                            <span className="xb2-day__num">{date.getDate()}</span>
                            <span className="xb2-day__tag">{tag}</span>
                        </button>
                    )
                })}
            </div>

            <ul className="xb2-legend" aria-hidden="true">
                <li><i className="is-selected" />선택</li>
                <li><i className="is-today" />오늘</li>
                <li><i className="is-off" />마감·휴무</li>
            </ul>
        </div>
    )
}

const Times = ({ today, selectedDate, selectedTime, onSelectTime }: Props) => {
    const status = getDayStatus(selectedDate, today)
    const groups = [
        { label: '오전', times: testSchedule.slots.am },
        { label: '오후', times: testSchedule.slots.pm },
    ]

    return (
        <div className="xb2-card xb2-times">
            <div className="xb2-card__head">
                <h2 className="xb2-card__title">시간 선택</h2>
                <span className="xb2-times__date">{formatKoreanDate(selectedDate)}</span>
            </div>

            {isBookable(status) ? (
                <div className="xb2-times__groups">
                    {groups.map((g) => (
                        <div key={g.label}>
                            <p className="xb2-times__label">{g.label}</p>
                            <div className="xb2-times__grid">
                                {g.times.map((t) => {
                                    const open = isSlotOpen(t)
                                    const { label } = formatSlot(t)
                                    return (
                                        <button
                                            key={t}
                                            type="button"
                                            className={'xb2-chip' + (selectedTime === t ? ' is-selected' : '')}
                                            disabled={!open}
                                            aria-pressed={selectedTime === t}
                                            aria-label={open ? `${g.label} ${label}` : `${g.label} ${label} 마감`}
                                            onClick={() => onSelectTime(t)}
                                        >
                                            {label}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="xb2-empty">
                    <strong>{status === 'today' ? '오늘은 예약할 수 없어요' : '예약할 수 없는 날짜예요'}</strong>
                    <span>달력에서 다른 날짜를 골라 주세요.</span>
                </div>
            )}

        </div>
    )
}

// 방문 전 확인해 주세요: 안내 카드 2장 (항상 펼쳐 둠)
const NoticeCards = () => (
    <div className="xb2-notice">
        <h2 className="xb2-notice__title">방문 전 확인해 주세요</h2>
        <div className="xb2-notice__grid">
            {bookingNotices.map((n) => (
                <div className="xb2-card xb2-notice__card" key={n.title}>
                    <h3>{n.title}</h3>
                    {n.body.map((line) => (
                        <p key={line}>{line}</p>
                    ))}
                </div>
            ))}
        </div>
    </div>
)
