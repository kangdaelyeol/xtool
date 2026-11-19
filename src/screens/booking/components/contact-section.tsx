import { place } from '../data'
import { PhoneFillIcon } from './icons'

// 문의: 검정 카드 (운영 시간 + 전화 걸기)
export const ContactSection = () => (
    <section className="xb2-sec xb2-sec--soft" id="xb-contact">
        <div className="xb2-wrap">
            <div className="xb2-contact">
                <div>
                    <h2 className="xb2-contact__title">궁금한 점이 있으신가요?</h2>
                    <p className="xb2-contact__time">{place.hours}</p>
                </div>
                <div className="xb2-contact__call">
                    <strong>{place.phone}</strong>
                    <a className="xb2-contact__btn" href={`tel:${place.phone.replace(/\D/g, '')}`}>
                        <PhoneFillIcon size={16} />
                        전화 걸기
                    </a>
                </div>
            </div>
        </div>
    </section>
)
