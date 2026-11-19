import { place, type BookingItem } from '../../data'

// 체험 안내 탭 (시안이 아직 없어서 기본 정보만)
export const InfoPanel = ({ item }: { item: BookingItem }) => (
    <section className="xb2-panel" aria-label="체험 안내">
        <div className="xb2-wrap">
            <div className="xb2-card xb2-info">
                <h2 className="xb2-card__title">체험 안내</h2>
                <p className="xb2-info__text">{item.description}</p>
                <dl className="xb2-facts xb2-info__facts">
                    <div>
                        <dt>휴무</dt>
                        <dd>{item.closedText}</dd>
                    </div>
                    <div>
                        <dt>문의</dt>
                        <dd>{place.phone}</dd>
                    </div>
                </dl>
            </div>
        </div>
    </section>
)
