import { useState, type ReactNode } from 'react'
import { copyText } from '../utils'

// 사진 칸: 경로가 있으면 사진, 비어 있으면 같은 크기의 빈 칸 (크기는 className 쪽 CSS 가 정함)
export const ImageBox = ({ src, className }: { src?: string; className: string }) =>
    src ? (
        <img className={className} src={src} alt="" loading="lazy" />
    ) : (
        <div className={className + ' xb-img-empty'} aria-hidden="true" />
    )

// '복사' 텍스트 버튼. 누르면 잠깐 '복사됨' 으로 바뀜
export const CopyButton = ({ text }: { text: string }) => {
    const [copied, setCopied] = useState(false)
    const onClick = async () => {
        if (!(await copyText(text))) return
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
    }
    return (
        <button type="button" className="xb2-copy" onClick={onClick}>
            {copied ? '복사됨' : '복사'}
        </button>
    )
}

// 섹션 제목 (+ 설명, 오른쪽 요소)
export const SectionHead = ({ title, sub, aside }: { title: string; sub?: string; aside?: ReactNode }) => (
    <div className="xb2-sec-head">
        <div>
            <h2 className="xb2-sec-head__title">{title}</h2>
            {sub && <p className="xb2-sec-head__sub">{sub}</p>}
        </div>
        {aside}
    </div>
)

// 예약 단계 ① 날짜·시간 → ② 정보 입력 → ③ 완료
const STEPS = ['날짜·시간 선택', '예약 정보 입력', '예약 완료']
export const Steps = ({ current }: { current: number }) => (
    <ol className="xb2-steps">
        {STEPS.map((label, i) => (
            <li
                key={label}
                className={i === current ? 'is-current' : i < current ? 'is-done' : undefined}
                aria-current={i === current ? 'step' : undefined}
            >
                <span className="xb2-steps__num">{i < current ? '✓' : i + 1}</span>
                <span className="xb2-steps__label">{label}</span>
            </li>
        ))}
    </ol>
)
