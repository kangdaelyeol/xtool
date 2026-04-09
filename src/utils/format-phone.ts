export const formatPhone = (val: string) => {
    const numRaw = val.replace(/[^0-9]/g, '').slice(0, 11)
    if (numRaw.length <= 3) return numRaw
    if (numRaw.length <= 7) return `${numRaw.slice(0, 3)}-${numRaw.slice(3, 7)}`
    return `${numRaw.slice(0, 3)}-${numRaw.slice(3, 7)}-${numRaw.slice(7)}`
}
