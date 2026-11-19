import { useState, type ReactNode } from 'react'
import { formatPhone } from '@/utils'
import {
    bookingNotices,
    extraFields,
    REQUEST_DIRECT,
    privacyDocs,
    requestOptions,
    type BookingItem,
    type PrivacyId,
} from '../data'
import { formatKoreanDate, formatSlot } from '../schedule'
import { isValidPhone, maskPhone } from '../utils'
import { CheckIcon, ChevronDownIcon } from '../components/icons'

export type Person = { name: string; phone: string }

// ---------------- 공통 조각 ----------------
const Field = ({ id, label, required, children }: { id: string; label: string; required?: boolean; children: ReactNode }) => (
    <div className="xb2-field">
        <label className="xb2-field__label" htmlFor={id}>
            {label}
            {required && <span className="xb2-field__req">필수</span>}
        </label>
        {children}
    </div>
)

const Select = ({
    id,
    value,
    placeholder,
    options,
    onChange,
}: {
    id: string
    value: string
    placeholder: string
    options: string[]
    onChange: (v: string) => void
}) => (
    <div className="xb2-select">
        <select id={id} value={value} className={value ? undefined : 'is-placeholder'} onChange={(e) => onChange(e.target.value)}>
            <option value="" disabled>
                {placeholder}
            </option>
            {options.map((o) => (
                <option key={o} value={o}>
                    {o}
                </option>
            ))}
        </select>
        <ChevronDownIcon size={18} className="xb2-select__icon" />
    </div>
)

const PersonInputs = ({ idPrefix, value, onChange }: { idPrefix: string; value: Person; onChange: (p: Person) => void }) => (
    <div className="xb2-person">
        <Field id={`xb-${idPrefix}-name`} label="이름">
            <input id={`xb-${idPrefix}-name`} className="xb2-input" value={value.name} placeholder="이름" onChange={(e) => onChange({ ...value, name: e.target.value })} />
        </Field>
        <Field id={`xb-${idPrefix}-phone`} label="휴대폰 번호">
            <input
                id={`xb-${idPrefix}-phone`}
                className="xb2-input"
                inputMode="numeric"
                value={formatPhone(value.phone)}
                placeholder="010-0000-0000"
                onChange={(e) => onChange({ ...value, phone: e.target.value.replace(/\D/g, '').slice(0, 11) })}
            />
        </Field>
    </div>
)

// ---------------- 추가 정보 ----------------
export const ExtraFieldsCard = ({
    values,
    onChange,
}: {
    values: Record<string, string>
    onChange: (id: string, value: string) => void
}) => (
    <section className="xb2-card xb2-fcard">
        <h2 className="xb2-card__title">추가 정보</h2>
        <p className="xb2-fcard__sub">체험 준비에 필요한 내용이에요.</p>
        {extraFields.map((f) => (
            <Field key={f.id} id={`xb-field-${f.id}`} label={f.label} required={f.required}>
                {f.type === 'select' ? (
                    <Select id={`xb-field-${f.id}`} value={values[f.id] ?? ''} placeholder={f.placeholder} options={f.options ?? []} onChange={(v) => onChange(f.id, v)} />
                ) : (
                    <textarea id={`xb-field-${f.id}`} className="xb2-textarea" value={values[f.id] ?? ''} placeholder={f.placeholder} onChange={(e) => onChange(f.id, e.target.value)} />
                )}
            </Field>
        ))}
    </section>
)

// ---------------- 예약자 정보 + 요청사항 + 방문자 ----------------
export const BookerCard = ({
    booker,
    onBookerChange,
    request,
    onRequestChange,
    requestText,
    onRequestTextChange,
    visitorDiffers,
    onVisitorDiffersChange,
    visitor,
    onVisitorChange,
}: {
    booker: Person
    onBookerChange: (p: Person) => void
    request: string
    onRequestChange: (v: string) => void
    requestText: string
    onRequestTextChange: (v: string) => void
    visitorDiffers: boolean
    onVisitorDiffersChange: (v: boolean) => void
    visitor: Person
    onVisitorChange: (p: Person) => void
}) => {
    const [editing, setEditing] = useState(!booker.name || !isValidPhone(booker.phone))
    const [draft, setDraft] = useState(booker)
    const draftValid = draft.name.trim() !== '' && isValidPhone(draft.phone)

    const save = () => {
        if (!draftValid) return
        onBookerChange({ name: draft.name.trim(), phone: draft.phone.replace(/\D/g, '') })
        setEditing(false)
    }

    return (
        <section className="xb2-card xb2-fcard">
            <h2 className="xb2-card__title">예약자 정보</h2>

            {editing ? (
                <div className="xb2-booker-edit">
                    <PersonInputs idPrefix="booker" value={draft} onChange={setDraft} />
                    <div className="xb2-booker-edit__actions">
                        {booker.name && (
                            <button type="button" className="xb2-btn-secondary xb2-btn-sm" onClick={() => { setDraft(booker); setEditing(false) }}>
                                취소
                            </button>
                        )}
                        <button type="button" className="xb2-btn-primary xb2-btn-sm" disabled={!draftValid} onClick={save}>
                            저장
                        </button>
                    </div>
                </div>
            ) : (
                <div className="xb2-booker">
                    <div>
                        <p className="xb2-booker__name">{booker.name}</p>
                        <p className="xb2-booker__phone">{maskPhone(booker.phone)}</p>
                    </div>
                    <button type="button" className="xb2-link" onClick={() => { setDraft(booker); setEditing(true) }}>
                        수정
                    </button>
                </div>
            )}

            <Field id="xb-field-request" label="요청사항">
                <Select id="xb-field-request" value={request} placeholder="요청사항을 골라 주세요." options={requestOptions} onChange={onRequestChange} />
                {request === REQUEST_DIRECT && (
                    <textarea
                        className="xb2-textarea xb2-textarea--sub"
                        value={requestText}
                        placeholder="요청사항을 적어 주세요."
                        aria-label="요청사항 직접 입력"
                        onChange={(e) => onRequestTextChange(e.target.value)}
                    />
                )}
            </Field>

            <label className="xb2-check">
                <input type="checkbox" className="xb-sr-only" checked={visitorDiffers} onChange={(e) => onVisitorDiffersChange(e.target.checked)} />
                <span className="xb2-check__box" aria-hidden="true">
                    <CheckIcon size={13} />
                </span>
                방문하실 분이 예약자와 달라요
            </label>
            {visitorDiffers && (
                <div className="xb2-visitor">
                    <PersonInputs idPrefix="visitor" value={visitor} onChange={onVisitorChange} />
                </div>
            )}
        </section>
    )
}

// ---------------- 방문 전 확인해 주세요 ----------------
export const NoticeCard = () => (
    <section className="xb2-card xb2-fcard">
        <h2 className="xb2-card__title">방문 전 확인해 주세요</h2>
        <ul className="xb2-fnotice">
            {bookingNotices.map((n) => (
                <li key={n.title}>
                    <h3>{n.title}</h3>
                    {n.body.map((line) => (
                        <p key={line}>{line}</p>
                    ))}
                </li>
            ))}
        </ul>
    </section>
)

// ---------------- 오른쪽: 예약 내용 요약 + 약관 + 신청 버튼 (스크롤을 따라옴) ----------------
export const SummaryAside = ({
    item,
    date,
    time,
    agreed,
    onAgreedChange,
    onOpenPrivacy,
    canSubmit,
    onSubmit,
    onChangeSchedule,
}: {
    item: BookingItem
    date: Date
    time: string
    agreed: Record<PrivacyId, boolean>
    onAgreedChange: (next: Record<PrivacyId, boolean>) => void
    onOpenPrivacy: (id: PrivacyId) => void
    canSubmit: boolean
    onSubmit: () => void
    onChangeSchedule: () => void
}) => {
    const slot = formatSlot(time)
    const allAgreed = privacyDocs.every((d) => agreed[d.id])
    return (
        <aside className="xb2-aside">
            <div className="xb2-card xb2-sum">
                <div className="xb2-card__head">
                    <h2 className="xb2-card__title">예약 내용</h2>
                    <button type="button" className="xb2-link" onClick={onChangeSchedule}>
                        일정 변경
                    </button>
                </div>
                <p className="xb2-sum__item">{item.title}</p>
                <dl className="xb2-facts xb2-sum__rows">
                    <div>
                        <dt>날짜</dt>
                        <dd>{formatKoreanDate(date)}</dd>
                    </div>
                    <div>
                        <dt>시간</dt>
                        <dd>
                            {slot.period} {slot.label}
                        </dd>
                    </div>
                    <div>
                        <dt>인원</dt>
                        <dd>1명</dd>
                    </div>
                </dl>

                {/* 개인정보 동의 (둘 다 필수): 체크하거나, '보기' 모달에서 '동의하고 닫기' */}
                <div className="xb2-sum__terms">
                    <label className="xb2-check xb2-consent-all">
                        <input
                            type="checkbox"
                            className="xb-sr-only"
                            checked={allAgreed}
                            onChange={(e) => onAgreedChange({ collect: e.target.checked, provide: e.target.checked })}
                        />
                        <span className="xb2-check__box" aria-hidden="true">
                            <CheckIcon size={13} />
                        </span>
                        <span>필수 항목 전체 동의</span>
                    </label>
                    <div className="xb2-consents">
                        {privacyDocs.map((doc) => (
                            <div className="xb2-consent" key={doc.id}>
                                <label className="xb2-check xb2-consent__check">
                                    <input
                                        type="checkbox"
                                        className="xb-sr-only"
                                        checked={agreed[doc.id]}
                                        onChange={(e) => onAgreedChange({ ...agreed, [doc.id]: e.target.checked })}
                                    />
                                    <span className="xb2-check__box" aria-hidden="true">
                                        <CheckIcon size={13} />
                                    </span>
                                    <span>
                                        {doc.title} <span className="xb2-field__req">필수</span>
                                    </span>
                                </label>
                                <button type="button" className="xb2-link" aria-label={`${doc.title} 내용 보기`} onClick={() => onOpenPrivacy(doc.id)}>
                                    보기
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <button type="button" className="xb2-btn-primary xb2-sum__submit" disabled={!canSubmit} onClick={onSubmit}>
                    예약 신청하기
                </button>
                {!canSubmit && <p className="xb2-sum__hint">필수 항목 입력과 개인정보 동의를 마치면 신청할 수 있어요.</p>}
            </div>
        </aside>
    )
}
