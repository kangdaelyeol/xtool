import { useEffect, useRef, useState } from 'react'

const GAS_URL =
    'https://script.google.com/macros/s/AKfycbyuK6s8pmGAmJvd9azL1qlY9Y0F70YOGXcDGU4P0hmYfwx1bk1xzZIH9lNiMwlcyNmKfg/exec'

interface InquiryTypes {
    enterprise: boolean
    education: boolean
    publicInstitution: boolean
    partnership: boolean
}

interface UseContactValues {
    refs: {
        companyNameRef: React.RefObject<HTMLInputElement | null>
        userNameRef: React.RefObject<HTMLInputElement | null>
        phoneRef: React.RefObject<HTMLInputElement | null>
        emailRef: React.RefObject<HTMLInputElement | null>
        contentRef: React.RefObject<HTMLTextAreaElement | null>
    }
    handlers: {
        toggleInquiryType: (key: keyof InquiryTypes) => void
        submitClick: () => Promise<void>
        hideModal: () => void
    }
    state: {
        inquiryTypes: InquiryTypes
        loading: boolean
        modalActive: boolean
    }
}

export const useContact = (): UseContactValues => {
    const companyNameRef = useRef<HTMLInputElement>(null)
    const userNameRef = useRef<HTMLInputElement>(null)
    const phoneRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const contentRef = useRef<HTMLTextAreaElement>(null)
    const [ip, setIp] = useState('')
    const [loading, setLoading] = useState(false)
    const [modalActive, setModalActive] = useState(false)
    const [inquiryTypes, setInquiryTypes] = useState({
        enterprise: false,
        education: false,
        publicInstitution: false,
        partnership: false,
    })

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    useEffect(() => {
        ;(async () => {
            const ip = await fetch('https://api.ip.pe.kr/')
                .then((res) => res.text())
                .catch(() => '')
            setIp(ip)
        })()
        setTimeout(() => {
            fetch(GAS_URL, {
                method: 'GET',
                mode: 'no-cors',
                cache: 'no-cache',
            })
        }, 1000)
    }, [])

    useEffect(() => {
        if (modalActive) document.body.style.overflow = 'hidden'
        else document.body.style.overflow = ''
        return () => {
            document.body.style.overflow = ''
        }
    }, [modalActive])

    const handlers = {
        hideModal: () => {
            setModalActive(false)
        },
        toggleInquiryType: (key: keyof InquiryTypes) => {
            setInquiryTypes((prev) => ({ ...prev, [key]: !prev[key] }))
        },
        submitClick: async () => {
            if (loading) return
            setLoading(true)
            setModalActive(true)
            const companyName = companyNameRef.current?.value.trim()
            const username = userNameRef.current?.value.trim()
            const phone = phoneRef.current?.value.trim()
            const email = emailRef.current?.value.trim()
            const content = contentRef.current?.value.trim()

            if (!companyName || !username || !phone || !email) {
                alert('필수 사항을 입력해주세요.')
                setModalActive(false)
                return setLoading(false)
            }
            if (Object.values(inquiryTypes).every((v) => v === false)) {
                alert('문의 유형을 선택해주세요.')
                setModalActive(false)
                return setLoading(false)
            }

            if (phone.replace(/[^0-9]/g, '').length !== 11) {
                alert('연락처를 확인해주세요.')
                setModalActive(false)
                return setLoading(false)
            }
            if (!/^[^\s@]+@[^\s@]+.[^\s@]$/g.test(email)) {
                alert('이메일 주소를 확인해주세요.')
                setModalActive(false)
                return setLoading(false)
            }

            const inquiryArr = []
            if (inquiryTypes.enterprise)
                inquiryArr.push('기업 도입 (R&D, 브랜딩, 생산)')
            if (inquiryTypes.education)
                inquiryArr.push('교육기관 도입 (학교, 대학교)')
            if (inquiryTypes.publicInstitution)
                inquiryArr.push('공공기관 / 메이커스페이스 구축')
            if (inquiryTypes.partnership)
                inquiryArr.push('기타 비즈니스 파트너십')

            const body = new URLSearchParams({
                companyName,
                username,
                phone,
                email,
                content: content || '',
                inquiry: inquiryArr.join(', '),
                ip,
            })

            try {
                const res = await fetch(GAS_URL, {
                    method: 'POST',
                    body,
                })
                if (!res.ok) {
                    alert(
                        '네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
                    )
                    console.log(res)
                    setModalActive(false)
                }
                setLoading(false)
            } catch (e) {
                console.log(e)
                alert(
                    '네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
                )
                setLoading(false)
                setModalActive(false)
            }
        },
    }

    return {
        refs: { contentRef, companyNameRef, userNameRef, phoneRef, emailRef },
        handlers,
        state: { inquiryTypes, loading, modalActive },
    }
}
