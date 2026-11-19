import { Link } from 'react-router-dom'
import { bookingItems } from '../data'
import { ImageBox, SectionHead } from './common'
import { ChevronRightIcon } from './icons'

// 체험 예약: 2열 카드 (사진 위 · 정보 아래). 누르면 /booking/:id 예약하기 페이지
export const BookingListSection = () => (
    <section className="xb2-sec xb2-sec--soft" id="xb-booking">
        <div className="xb2-wrap">
            <SectionHead title="체험 예약" sub="원하는 체험을 고르면 날짜와 시간을 선택할 수 있어요." />
            <ul className="xb2-items">
                {bookingItems.map((item) => (
                    <li key={item.id}>
                        <Link className="xb2-card xb2-item" to={`/booking/${item.id}`}>
                            <ImageBox className="xb2-item__img" src={item.thumbnail} />
                            <div className="xb2-item__body">
                                <h3 className="xb2-item__title">{item.title}</h3>
                                <p className="xb2-item__desc">{item.description}</p>
                                <div className="xb2-item__foot">
                                    <span className="xb2-item__cta">
                                        예약하기
                                        <ChevronRightIcon size={14} />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </section>
)
