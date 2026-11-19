// 클립보드 복사 (https 가 아니거나 권한이 막힌 환경을 위해 textarea 방식으로 한 번 더 시도)
export const copyText = async (text: string) => {
    try {
        await navigator.clipboard.writeText(text)
        return true
    } catch {
        const el = document.createElement('textarea')
        el.value = text
        el.setAttribute('readonly', '')
        el.style.position = 'fixed'
        el.style.opacity = '0'
        document.body.appendChild(el)
        el.select()
        const ok = document.execCommand('copy')
        el.remove()
        return ok
    }
}

// 휴대폰 번호 확인: 숫자 10~11자리, 01로 시작
export const isValidPhone = (value: string) => /^01\d{8,9}$/.test(value.replace(/\D/g, ''))

// '01012345678' → '010-12**-56**'
export const maskPhone = (value: string) => {
    const n = value.replace(/\D/g, '')
    if (n.length < 10) return value
    const mid = n.slice(3, n.length - 4)
    const last = n.slice(-4)
    return `${n.slice(0, 3)}-${mid.slice(0, 2)}${'*'.repeat(mid.length - 2)}-${last.slice(0, 2)}**`
}
