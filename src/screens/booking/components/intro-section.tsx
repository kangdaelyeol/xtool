import { place } from '../data'

// 쇼룸 안내: 왼쪽 제목 / 오른쪽 본문 (줄바꿈은 데이터 그대로)
export const IntroSection = () => (
    <section className="xb2-sec" id="xb-intro">
        <div className="xb2-wrap xb2-intro">
            <div>
                <h2 className="xb2-sec-head__title">쇼룸 안내</h2>
                <p className="xb2-sec-head__sub">방문 전에 확인해 주세요.</p>
            </div>
            <p className="xb2-intro__text">{place.intro}</p>
        </div>
    </section>
)
