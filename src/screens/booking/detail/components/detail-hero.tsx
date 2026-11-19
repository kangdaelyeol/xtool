import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { bookingItems, place, type BookingItem } from '../../data'
import { ImageBox } from '../../components/common'
import {
    CheckIcon,
    ChevronDownIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    ClockFillIcon,
    PhoneLineIcon,
} from '../../components/icons'

// 상단: 왼쪽 사진 슬라이드 / 오른쪽 체험 정보
export const DetailHero = ({ item }: { item: BookingItem }) => (
    <section className="xb2-hero">
        <div className="xb2-wrap xb2-hero__grid">
            <Carousel images={item.images} />
            <div className="xb2-hero__info">
                <h1 className="xb2-hero__title">{item.title}</h1>
                <Description text={item.description} />
                <dl className="xb2-facts">
                    <div>
                        <dt>
                            <ClockFillIcon size={15} />
                            휴무
                        </dt>
                        <dd>{item.closedText}</dd>
                    </div>
                    <div>
                        <dt>
                            <PhoneLineIcon size={15} />
                            문의
                        </dt>
                        <dd>{place.phone}</dd>
                    </div>
                </dl>
                <OtherItems current={item} />
            </div>
        </div>
    </section>
)

// 사진 슬라이드: 가로 스크롤(스와이프) + 좌우 버튼 + 오른쪽 아래 '1 / 2'
const Carousel = ({ images }: { images: string[] }) => {
    const trackRef = useRef<HTMLDivElement>(null)
    const [index, setIndex] = useState(0)

    const onScroll = () => {
        const el = trackRef.current
        if (el) setIndex(Math.round(el.scrollLeft / el.clientWidth))
    }
    const go = (i: number) => {
        const el = trackRef.current
        if (el) el.scrollTo({ left: i * el.clientWidth, behavior: 'smooth' })
    }

    return (
        <div className="xb2-carousel">
            <div className="xb2-carousel__track" ref={trackRef} onScroll={onScroll}>
                {images.map((src, i) => (
                    <ImageBox key={i} className="xb2-carousel__slide" src={src} />
                ))}
            </div>
            {images.length > 1 && (
                <>
                    <button type="button" className="xb2-carousel__arrow is-prev" disabled={index === 0} onClick={() => go(index - 1)} aria-label="이전 사진">
                        <ChevronLeftIcon size={18} />
                    </button>
                    <button type="button" className="xb2-carousel__arrow is-next" disabled={index === images.length - 1} onClick={() => go(index + 1)} aria-label="다음 사진">
                        <ChevronRightIcon size={18} />
                    </button>
                    <span className="xb2-carousel__count">
                        {index + 1} / {images.length}
                    </span>
                </>
            )}
        </div>
    )
}

// 설명: 3줄까지, 넘치면 '더보기'
const Description = ({ text }: { text: string }) => {
    const ref = useRef<HTMLParagraphElement>(null)
    const [expanded, setExpanded] = useState(false)
    const [overflowing, setOverflowing] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (el) setOverflowing(el.scrollHeight > el.clientHeight + 1)
    }, [text])

    return (
        <div className="xb2-desc">
            <p ref={ref} className={'xb2-desc__text' + (expanded ? ' is-open' : '')}>
                {text}
            </p>
            {overflowing && !expanded && (
                <button type="button" className="xb2-link" onClick={() => setExpanded(true)}>
                    더보기
                </button>
            )}
        </div>
    )
}

// 다른 체험 둘러보기 (목록 펼치기)
const OtherItems = ({ current }: { current: BookingItem }) => {
    const [open, setOpen] = useState(false)
    const boxRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!open) return
        const close = (e: MouseEvent) => {
            if (!boxRef.current?.contains(e.target as Node)) setOpen(false)
        }
        document.addEventListener('mousedown', close)
        return () => document.removeEventListener('mousedown', close)
    }, [open])

    return (
        <div className="xb2-others" ref={boxRef}>
            <button type="button" className={'xb2-others__btn' + (open ? ' is-open' : '')} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
                다른 체험 둘러보기
                <ChevronDownIcon size={18} />
            </button>
            {open && (
                <ul className="xb2-others__menu">
                    {bookingItems.map((it) => (
                        <li key={it.id}>
                            <Link to={`/booking/${it.id}`} className={it.id === current.id ? 'is-current' : undefined} onClick={() => setOpen(false)}>
                                {it.title}
                                {it.id === current.id && <CheckIcon size={14} />}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
