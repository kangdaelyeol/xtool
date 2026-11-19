import { useEffect, useRef } from 'react'
import type { PrivacyDoc, PrivacyId } from '../data'
import { CloseIcon } from '../components/icons'

// 개인정보 동의 모달 (수집·이용 / 제3자 제공 중 연 항목 하나를 보여줌)
// - 닫기: ✕ 버튼, 바깥(어두운 배경) 클릭, Esc 키
// - 열려 있는 동안 뒤 페이지 스크롤 막음, 닫으면 원래 버튼으로 포커스 복귀
export const PrivacyModal = ({
    doc,
    onClose,
    onAgree,
}: {
    doc: PrivacyDoc | null
    onClose: () => void
    onAgree: (id: PrivacyId) => void
}) => {
    const open = doc !== null
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

    if (!doc) return null

    return (
        <div
            className="xb2-modal"
            onMouseDown={(e) => {
                if (e.target === e.currentTarget) onClose()
            }}
        >
            <div className="xb2-modal__box" role="dialog" aria-modal="true" aria-labelledby="xb2-privacy-title">
                <div className="xb2-modal__head">
                    <h2 id="xb2-privacy-title">{doc.title}</h2>
                    <button ref={closeRef} type="button" className="xb2-modal__close" aria-label="닫기" onClick={onClose}>
                        <CloseIcon size={20} />
                    </button>
                </div>
                <div className="xb2-modal__body">
                    <section className="xb2-privacy">
                        {doc.items.map((it) => (
                            <div className="xb2-privacy__item" key={it.title}>
                                <h3>{it.title}</h3>
                                <ul>
                                    {it.list.map((li) => (
                                        <li key={li}>{li}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </section>
                    {doc.note && (
                        <section className="xb2-privacy">
                            <h3 className="xb2-privacy__heading">{doc.note.heading}</h3>
                            <p className="xb2-privacy__text">{doc.note.text}</p>
                        </section>
                    )}
                </div>
                <div className="xb2-modal__foot">
                    <button type="button" className="xb2-btn-secondary" onClick={onClose}>
                        닫기
                    </button>
                    <button type="button" className="xb2-btn-primary" onClick={() => onAgree(doc.id)}>
                        동의하고 닫기
                    </button>
                </div>
            </div>
        </div>
    )
}
