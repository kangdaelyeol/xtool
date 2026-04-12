import { useRef, useState } from 'react'

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
    }
    state: { inquiryTypes: InquiryTypes; loading: boolean }
}

export const useContact = (): UseContactValues => {
    const companyNameRef = useRef<HTMLInputElement>(null)
    const userNameRef = useRef<HTMLInputElement>(null)
    const phoneRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const contentRef = useRef<HTMLTextAreaElement>(null)
    const [loading, setLoading] = useState(false)
    const [inquiryTypes, setInquiryTypes] = useState({
        enterprise: false,
        education: false,
        publicInstitution: false,
        partnership: false,
    })

    const handlers = {
        toggleInquiryType: (key: keyof InquiryTypes) => {
            setInquiryTypes((prev) => ({ ...prev, [key]: !prev[key] }))
        },
        submitClick: async () => {
            if (loading) return
            setLoading(true)
            const companyName = companyNameRef.current?.value.trim()
            const username = userNameRef.current?.value.trim()
            const phone = phoneRef.current?.value.trim()
            const email = emailRef.current?.value.trim()
            const content = contentRef.current?.value.trim()

            console.log(companyName, username, phone, email, content)
            setLoading(false)
        },
    }

    return {
        refs: { contentRef, companyNameRef, userNameRef, phoneRef, emailRef },
        handlers,
        state: { inquiryTypes, loading },
    }
}
