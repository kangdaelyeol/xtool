import { place } from '../data'
import { CopyButton, ImageBox } from './common'
import { HomeIcon, PhoneLineIcon, PinLineIcon } from './icons'

// 상단: 왼쪽 쇼룸 소개·정보·버튼 / 오른쪽 대표 사진
export const HeroSection = () => (
    <section className="xb2-sec xb2-mhero" aria-label="쇼룸 소개">
        <div className="xb2-wrap xb2-mhero__grid">
            <div className="xb2-mhero__text">
                <h1 className="xb2-mhero__title">{place.name}</h1>
                <p className="xb2-mhero__desc">{place.description}</p>

                <dl className="xb2-facts xb2-mhero__facts">
                    <div>
                        <dt>
                            <PinLineIcon size={15} />
                            주소
                        </dt>
                        <dd>
                            {place.address}
                            <CopyButton text={place.address} />
                        </dd>
                    </div>
                    <div>
                        <dt>
                            <PhoneLineIcon size={15} />
                            문의
                        </dt>
                        <dd>
                            <a href={`tel:${place.phone.replace(/\D/g, '')}`}>{place.phone}</a>
                            <CopyButton text={place.phone} />
                        </dd>
                    </div>
                    <div>
                        <dt>
                            <HomeIcon size={15} />
                            홈페이지
                        </dt>
                        <dd>
                            <a href={place.homepage} target="_blank" rel="noopener noreferrer">
                                {place.homepage.replace(/^https?:\/\//, '')}
                            </a>
                        </dd>
                    </div>
                </dl>

                <div className="xb2-mhero__actions">
                    <a className="xb2-btn-primary" href="#xb-booking">
                        체험 예약하기
                    </a>
                    <a className="xb2-btn-secondary" href="#xb-location">
                        오시는 길
                    </a>
                </div>
            </div>
            <ImageBox className="xb2-mhero__img" src={place.heroImage} />
        </div>
    </section>
)
