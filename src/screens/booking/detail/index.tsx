import '../booking.css'
import '../booking-theme.css'
import './booking-detail.css'
import { useEffect, useRef, useState } from 'react'
import { Navigate, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { bookingItems, type BookingItem } from '../data'
import {
    formatKoreanDate,
    formatSlot,
    getDayStatus,
    isBookable,
    isKnownSlot,
    isSlotOpen,
    parseKey,
    startOfDay,
    toKey,
} from '../schedule'
import { BookingFooter, BookingHeader } from '../components'
import {
    BookingPanel,
    DetailHero,
    DetailTabs,
    InfoPanel,
    type DetailTab,
    type ViewMonth,
} from './components'

const HEADER_HEIGHT = 50

// 예약하기 (/booking/:itemId) - 예약 목록의 각 체험을 누르면 오는 페이지
export default function BookingDetailScreen() {
    const { itemId } = useParams()
    const item = bookingItems.find((it) => it.id === itemId)

    // 다른 체험으로 바뀌면 맨 위로
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [itemId])

    if (!item) return <Navigate to="/booking" replace />
    // key: 체험이 바뀌면 선택한 날짜·시간 등을 처음 상태로
    return <BookingDetail key={item.id} item={item} />
}

const BookingDetail = ({ item }: { item: BookingItem }) => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const [today] = useState(() => startOfDay(new Date()))
    // 입력 페이지에서 '이전'으로 돌아오면 주소의 date·time 으로 선택 상태 복원 (예약 가능한 값일 때만)
    const [initial] = useState(() => {
        const date = parseKey(searchParams.get('date'))
        const time = searchParams.get('time')
        if (!date || !isBookable(getDayStatus(date, today))) return { date: today, time: null }
        return { date, time: time && isKnownSlot(time) && isSlotOpen(time) ? time : null }
    })
    const [tab, setTab] = useState<DetailTab>('book')
    const [viewMonth, setViewMonth] = useState<ViewMonth>({
        year: initial.date.getFullYear(),
        month: initial.date.getMonth(),
    })
    const [selectedDate, setSelectedDate] = useState(initial.date)
    const [selectedTime, setSelectedTime] = useState<string | null>(initial.time)
    const tabsAnchorRef = useRef<HTMLDivElement>(null)

    const goConfirm = () => {
        if (!selectedTime) return
        navigate(`/booking/${item.id}/confirm?date=${toKey(selectedDate)}&time=${selectedTime}`)
    }

    // 탭을 바꿀 때 이미 아래로 내려와 있으면 탭 위치로 올려서 새 내용이 처음부터 보이게
    const changeTab = (next: DetailTab) => {
        setTab(next)
        const anchor = tabsAnchorRef.current
        if (!anchor) return
        const top = anchor.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT
        if (window.scrollY > top) window.scrollTo({ top })
    }

    const selectDate = (d: Date) => {
        setSelectedDate(d)
        setSelectedTime(null)
    }

    const slot = selectedTime ? formatSlot(selectedTime) : null

    return (
        <div className="xb-page xb-page--book">
            <BookingHeader />
            {/* main 끝까지 탭은 위에, 예약 버튼 줄은 아래에 붙어 있다가 푸터가 나오면 푸터 위에 멈춤 */}
            <main className="xb2-main">
                <DetailHero item={item} />
                <div ref={tabsAnchorRef} />
                <DetailTabs tab={tab} onChange={changeTab} />

                {tab === 'book' && (
                    <>
                        <BookingPanel
                            today={today}
                            viewMonth={viewMonth}
                            onViewMonthChange={setViewMonth}
                            selectedDate={selectedDate}
                            onSelectDate={selectDate}
                            selectedTime={selectedTime}
                            onSelectTime={setSelectedTime}
                        />
                        {/* 고른 일정 요약 + 다음 단계 */}
                        <div className="xb2-bar">
                            <div className="xb2-wrap xb2-bar__inner">
                                <div className="xb2-bar__summary">
                                    <span className="xb2-bar__label">선택한 일정</span>
                                    {slot ? (
                                        <strong>
                                            {formatKoreanDate(selectedDate)} {slot.period} {slot.label}
                                        </strong>
                                    ) : (
                                        <span className="xb2-bar__hint">날짜와 시간을 골라 주세요</span>
                                    )}
                                </div>
                                <button type="button" className="xb2-btn-primary" disabled={!selectedTime} onClick={goConfirm}>
                                    다음 단계
                                </button>
                            </div>
                        </div>
                    </>
                )}
                {tab === 'info' && <InfoPanel item={item} />}
            </main>
            <BookingFooter />
        </div>
    )
}
