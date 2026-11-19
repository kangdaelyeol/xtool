import '../booking.css'
import '../booking-theme.css'
import './booking-confirm.css'
import { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import {
    bookingItems,
    extraFields,
    privacyDocs,
    REQUEST_DIRECT,
    sampleBooker,
    type BookingItem,
    type PrivacyId,
} from '../data'
import {
    getDayStatus,
    isBookable,
    isKnownSlot,
    isSlotOpen,
    parseKey,
    startOfDay,
    toKey,
} from '../schedule'
import { isValidPhone } from '../utils'
import { BookingFooter, BookingHeader, Steps } from '../components'
import { ChevronLeftIcon } from '../components/icons'
import {
    BookerCard,
    ExtraFieldsCard,
    NoticeCard,
    SummaryAside,
    type Person,
} from './components'
import { PrivacyModal } from './privacy-modal'

// 예약 정보 입력 (/booking/:itemId/confirm?date=2026-11-26&time=11:00)
// 날짜·시간이 없거나 예약할 수 없는 값이면 예약하기 페이지로 돌려보냄
export default function BookingConfirmScreen() {
    const { itemId } = useParams()
    const [searchParams] = useSearchParams()
    const item = bookingItems.find((it) => it.id === itemId)
    const date = parseKey(searchParams.get('date'))
    const time = searchParams.get('time')

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    if (!item) return <Navigate to="/booking" replace />
    const valid =
        date && time && isBookable(getDayStatus(date, startOfDay(new Date()))) && isKnownSlot(time) && isSlotOpen(time)
    if (!valid) return <Navigate to={`/booking/${item.id}`} replace />

    return <BookingConfirm item={item} date={date} time={time} />
}

const BookingConfirm = ({ item, date, time }: { item: BookingItem; date: Date; time: string }) => {
    const navigate = useNavigate()
    const [values, setValues] = useState<Record<string, string>>({})
    const [booker, setBooker] = useState<Person>(sampleBooker)
    const [request, setRequest] = useState('')
    const [requestText, setRequestText] = useState('')
    const [visitorDiffers, setVisitorDiffers] = useState(false)
    const [visitor, setVisitor] = useState<Person>({ name: '', phone: '' })
    const [agreed, setAgreed] = useState<Record<PrivacyId, boolean>>({ collect: false, provide: false })
    const [privacyOpen, setPrivacyOpen] = useState<PrivacyId | null>(null)

    const requiredFilled = extraFields.every((f) => !f.required || (values[f.id] ?? '').trim() !== '')
    const allAgreed = privacyDocs.every((d) => agreed[d.id])
    const canSubmit = requiredFilled && booker.name !== '' && isValidPhone(booker.phone) && allAgreed

    // 날짜·시간 다시 고르기: 고른 값을 그대로 들고 예약하기 페이지로
    const goBack = () => navigate(`/booking/${item.id}?date=${toKey(date)}&time=${time}`)

    const submit = () => {
        if (!canSubmit) return
        const payload = {
            itemId: item.id,
            date: toKey(date),
            time,
            fields: values,
            booker,
            privacyAgreed: agreed,
            request: request === REQUEST_DIRECT ? requestText : request,
            visitor: visitorDiffers ? visitor : null,
        }
        // TODO: 예약 저장(서버 연동). 지금은 콘솔에 찍고 임시 예약번호로 완료 화면 이동
        console.info('[예약 요청 - 테스트]', payload)
        const reservationNo = `${toKey(date).replace(/-/g, '')}-${Math.floor(1000 + Math.random() * 9000)}`
        // 예약자 정보는 주소에 남기지 않도록 state 로만 넘김
        navigate(`/booking/${item.id}/complete?date=${toKey(date)}&time=${time}&no=${reservationNo}`, {
            state: { booker },
        })
    }

    return (
        <div className="xb-page">
            <BookingHeader />
            <main className="xb2-form-page">
                <div className="xb2-wrap">
                    <div className="xb2-flow-top">
                        <button type="button" className="xb2-back" onClick={goBack}>
                            <ChevronLeftIcon size={16} />
                            날짜·시간 다시 고르기
                        </button>
                        <Steps current={1} />
                    </div>
                    <h1 className="xb2-flow-title">예약 정보 입력</h1>

                    <div className="xb2-form-grid">
                        <div className="xb2-form-main">
                            <ExtraFieldsCard values={values} onChange={(id, v) => setValues((prev) => ({ ...prev, [id]: v }))} />
                            <BookerCard
                                booker={booker}
                                onBookerChange={setBooker}
                                request={request}
                                onRequestChange={setRequest}
                                requestText={requestText}
                                onRequestTextChange={setRequestText}
                                visitorDiffers={visitorDiffers}
                                onVisitorDiffersChange={setVisitorDiffers}
                                visitor={visitor}
                                onVisitorChange={setVisitor}
                            />
                            <NoticeCard />
                        </div>
                        <SummaryAside
                            item={item}
                            date={date}
                            time={time}
                            agreed={agreed}
                            onAgreedChange={setAgreed}
                            onOpenPrivacy={setPrivacyOpen}
                            canSubmit={canSubmit}
                            onSubmit={submit}
                            onChangeSchedule={goBack}
                        />
                    </div>
                </div>

                {/* 모바일 전용: 화면 아래에 붙는 신청 버튼 (PC 는 오른쪽 요약 카드의 버튼 사용) */}
                <div className="xb2-mbar">
                    <div className="xb2-wrap xb2-mbar__inner">
                        <button type="button" className="xb2-btn-primary" disabled={!canSubmit} onClick={submit}>
                            예약 신청하기
                        </button>
                    </div>
                </div>
            </main>
            <BookingFooter />
            <PrivacyModal
                doc={privacyDocs.find((d) => d.id === privacyOpen) ?? null}
                onClose={() => setPrivacyOpen(null)}
                onAgree={(id) => {
                    setAgreed((prev) => ({ ...prev, [id]: true }))
                    setPrivacyOpen(null)
                }}
            />
        </div>
    )
}
