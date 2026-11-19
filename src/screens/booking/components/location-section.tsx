import { useState } from 'react'
import { mapEmbedUrl, place } from '../data'
import { CopyButton } from './common'
import { MapIcon, RouteIcon } from './icons'

// 오시는 길: 왼쪽 구글 지도(iframe) / 오른쪽 주소·찾아오는 방법·주차 + 버튼
export const LocationSection = () => {
    const [showJibun, setShowJibun] = useState(false)

    return (
        <section className="xb2-sec" id="xb-location">
            <div className="xb2-wrap xb2-loc">
                <div className="xb2-loc__map">
                    <iframe
                        className="xb2-loc__frame"
                        src={mapEmbedUrl}
                        title={`${place.name} 위치 지도`}
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                </div>

                <div className="xb2-loc__info">
                    <h2 className="xb2-sec-head__title">오시는 길</h2>
                    <dl className="xb2-loc__list">
                        <div>
                            <dt>주소</dt>
                            <dd>
                                <span>
                                    {place.address}
                                    <CopyButton text={place.address} />
                                    {place.jibunAddress && (
                                        <button type="button" className="xb2-copy" aria-expanded={showJibun} onClick={() => setShowJibun((v) => !v)}>
                                            지번
                                        </button>
                                    )}
                                </span>
                                {showJibun && place.jibunAddress && <span className="xb2-loc__jibun">{place.jibunAddress}</span>}
                            </dd>
                        </div>
                        <div>
                            <dt>찾아오는 방법</dt>
                            <dd>{place.directions}</dd>
                        </div>
                        {place.parking.available && (
                            <div>
                                <dt>주차</dt>
                                <dd>
                                    {place.parking.description} (주차료 {place.parking.fee})
                                </dd>
                            </div>
                        )}
                    </dl>
                    <div className="xb2-loc__btns">
                        <a className="xb2-btn-primary" href={place.mapUrl} target="_blank" rel="noopener noreferrer">
                            <RouteIcon size={16} />
                            길찾기
                        </a>
                        <a className="xb2-btn-secondary" href={place.mapUrl} target="_blank" rel="noopener noreferrer">
                            <MapIcon size={16} />
                            지도 앱에서 보기
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
