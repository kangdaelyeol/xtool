import './booking.css'
import './booking-theme.css'
import './booking-main.css'
import {
    BookingFooter,
    BookingHeader,
    BookingListSection,
    ContactSection,
    HeroSection,
    IntroSection,
    LocationSection,
    PhotoSection,
} from './components'

// 방문체험 예약 메인 (/booking)
// 순서: 쇼룸 소개(hero) - 체험 예약 - 쇼룸 안내 - 쇼룸 사진 - 오시는 길 - 문의
export default function BookingScreen() {
    return (
        <div className="xb-page">
            <BookingHeader />
            <main>
                <HeroSection />
                <BookingListSection />
                <IntroSection />
                <PhotoSection />
                <LocationSection />
                <ContactSection />
            </main>
            <BookingFooter />
        </div>
    )
}
