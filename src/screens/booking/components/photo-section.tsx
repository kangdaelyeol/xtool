import { placePhotos } from '../data'
import { ImageBox, SectionHead } from './common'

// 쇼룸 사진: 왼쪽 큰 사진 1장 + 오른쪽 4장
export const PhotoSection = () => (
    <section className="xb2-sec xb2-sec--soft" id="xb-photos">
        <div className="xb2-wrap">
            <SectionHead title="쇼룸 사진" />
            <div className="xb2-bento">
                <ImageBox className="xb2-bento__main" src={placePhotos.main} />
                {placePhotos.grid.slice(0, 4).map((src, i) => (
                    <ImageBox key={i} className="xb2-bento__item" src={src} />
                ))}
            </div>
        </div>
    </section>
)
