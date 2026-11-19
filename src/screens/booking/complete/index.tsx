import '../booking.css'
import '../booking-theme.css'
import './booking-complete.css'
import { useEffect } from 'react'
import { Link, Navigate, useLocation, useParams, useSearchParams } from 'react-router-dom'
import { bookingItems, bookingNotices, place } from '../data'
import { formatKoreanDate, formatSlot, isKnownSlot, parseKey } from '../schedule'
import { maskPhone } from '../utils'
import { BookingFooter, BookingHeader, CopyButton, Steps } from '../components'
import { RouteIcon } from '../components/icons'

type CompleteState = { booker?: { name: string; phone: string } } | null

// 예약 완료 (/booking/:itemId/complete?date=2026-11-26&time=13:00&no=...)
// ※ 지금은 서버가 없어서 입력 페이지에서 넘겨준 값으로만 보여주는 임시 화면
//   예약자 정보는 주소에 남기지 않고 화면 이동 때만 전달(state) → 같은 탭에선 새로고침해도 유지되지만,
//   주소만 복사해서 새로 열면 예약자 줄은 빠짐
export default function BookingCompleteScreen() {
    const { itemId } = useParams()
    const [searchParams] = useSearchParams()
    const location = useLocation()
    const item = bookingItems.find((it) => it.id === itemId)
    const date = parseKey(searchParams.get('date'))
    const time = searchParams.get('time')
    const reservationNo = searchParams.get('no')
    const booker = (location.state as CompleteState)?.booker

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    if (!item || !date || !time || !isKnownSlot(time)) return <Navigate to="/booking" replace />
    const slot = formatSlot(time)

    return (
        <div className="xb-page">
            <BookingHeader />
            <main className="xb2-done-page">
                <div className="xb2-wrap xb2-done">
                    <Steps current={2} />
                    <div className="xb2-done__head">
                        <h1>{item.instantConfirm ? '예약이 확정됐어요' : '예약 신청이 완료됐어요'}</h1>
                        <p>방문 날짜와 시간을 다시 한번 확인해 주세요. 일정 변경이나 취소는 전화로 문의해 주세요.</p>
                    </div>

                    <section className="xb2-card xb2-done__card" aria-label="예약 내용">
                        <div className="xb2-done__no">
                            <span>예약번호</span>
                            <strong>{reservationNo ?? '-'}</strong>
                        </div>
                        <dl className="xb2-facts xb2-done__rows">
                            <div>
                                <dt>체험</dt>
                                <dd>{item.title}</dd>
                            </div>
                            <div>
                                <dt>날짜</dt>
                                <dd>{formatKoreanDate(date)}</dd>
                            </div>
                            <div>
                                <dt>시간</dt>
                                <dd>
                                    {slot.period} {slot.label}
                                </dd>
                            </div>
                            <div>
                                <dt>인원</dt>
                                <dd>1명</dd>
                            </div>
                            {booker && (
                                <div>
                                    <dt>예약자</dt>
                                    <dd>
                                        {booker.name} · {maskPhone(booker.phone)}
                                    </dd>
                                </div>
                            )}
                        </dl>
                    </section>

                    <section className="xb2-card xb2-done__card" aria-label="방문 안내">
                        <h2 className="xb2-card__title">방문 안내</h2>
                        <dl className="xb2-facts xb2-done__rows">
                            <div>
                                <dt>장소</dt>
                                <dd>
                                    {item.address}
                                    <CopyButton text={item.address} />
                                </dd>
                            </div>
                            {item.parking && (
                                <div>
                                    <dt>주차</dt>
                                    <dd>{item.parking}</dd>
                                </div>
                            )}
                            <div>
                                <dt>문의</dt>
                                <dd>
                                    <a href={`tel:${place.phone.replace(/\D/g, '')}`}>{place.phone}</a>
                                </dd>
                            </div>
                        </dl>
                        {bookingNotices[0] && <p className="xb2-done__note">{bookingNotices[0].body.join('\n')}</p>}
                    </section>

                    <div className="xb2-done__actions">
                        <a className="xb2-btn-secondary" href={`https://map.naver.com/p/search/${encodeURIComponent(item.address)}`} target="_blank" rel="noopener noreferrer">
                            <RouteIcon size={16} />
                            길찾기
                        </a>
                        <Link className="xb2-btn-primary" to="/booking">
                            처음으로
                        </Link>
                    </div>
                </div>
            </main>
            <BookingFooter />
        </div>
    )
}
