import { useEffect, useRef } from 'react'
import { privacyConsent } from '../data'
import { CloseIcon } from '../components/icons'

// 개인정보 수집·이용 및 제공 동의 모달
// - 닫기: ✕ 버튼, 바깥(어두운 배경) 클릭, Esc 키
// - 열려 있는 동안 뒤 페이지 스크롤 막음, 닫으면 원래 버튼으로 포커스 복귀
export const PrivacyModal = ({
    open,
    onClose,
    onAgree,
}: {
    open: boolean
    onClose: () => void
    onAgree: () => void
}) => {
    const closeRef = useRef<HTMLButtonElement>(null)
    const onCloseRef = useRef(onClose)
    useEffect(() => {
        onCloseRef.current = onClose
    })

    useEffect(() => {
        if (!open) return
        const prevFocus = document.activeElement as HTMLElement | null
        const prevOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        closeRef.current?.focus()
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onCloseRef.current()
        }
        document.addEventListener('keydown', onKey)
        return () => {
            document.removeEventListener('keydown', onKey)
            document.body.style.overflow = prevOverflow
            prevFocus?.focus()
        }
    }, [open])

    if (!open) return null

    return (
        <div
            className="xb2-modal"
            onMouseDown={(e) => {
                if (e.target === e.currentTarget) onClose()
            }}
        >
            <div className="xb2-modal__box" role="dialog" aria-modal="true" aria-labelledby="xb2-privacy-title">
                <div className="xb2-modal__head">
                    <h2 id="xb2-privacy-title">{privacyConsent.title}</h2>
                    <button ref={closeRef} type="button" className="xb2-modal__close" aria-label="닫기" onClick={onClose}>
                        <CloseIcon size={20} />
                    </button>
                </div>
                <div className="xb2-modal__body">
                    {privacyConsent.sections.map((sec) => (
                        <section className="xb2-privacy" key={sec.heading}>
                            <h3 className="xb2-privacy__heading">{sec.heading}</h3>
                            {sec.items?.map((it, i) => (
                                <div className="xb2-privacy__item" key={it.title + i}>
                                    <h4>{it.title}</h4>
                                    <ul>
                                        {it.list.map((li) => (
                                            <li key={li}>{li}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                            {sec.text && <p className="xb2-privacy__text">{sec.text}</p>}
                        </section>
                    ))}
                </div>
                <div className="xb2-modal__foot">
                    <button type="button" className="xb2-btn-secondary" onClick={onClose}>
                        닫기
                    </button>
                    <button type="button" className="xb2-btn-primary" onClick={onAgree}>
                        동의하고 닫기
                    </button>
                </div>
            </div>
        </div>
    )
}
