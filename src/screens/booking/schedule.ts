// 예약 일정 (테스트용: 받은 사진 그대로). 나중에 어드민에서 설정한 값으로 교체 예정
// - 일요일 휴무, 오늘은 예약 불가, 아래 날짜는 마감, 시간은 모든 날짜 공통으로 일부 마감
export const testSchedule = {
    holidayWeekdays: [0], // 0 = 일요일
    soldOutDates: [
        '2026-11-20',
        '2026-11-21',
        '2026-11-23',
        '2026-11-24',
        '2026-11-28',
        '2026-12-05',
    ],
    sameDayBooking: false, // 오늘 예약 가능 여부
    monthsAhead: 2, // 이번 달 포함 앞으로 몇 달까지 넘겨볼 수 있는지
    slots: {
        am: ['10:00', '10:30', '11:00', '11:30'],
        pm: ['12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00'],
    },
    soldOutSlots: ['10:30', '11:30', '12:00', '12:30', '13:30', '14:00', '14:30', '15:30'],
}

export type DayStatus = 'past' | 'today' | 'open' | 'soldout' | 'holiday'

export const WEEKDAY_LABELS = ['일', '월', '화', '수', '목', '금', '토']

const pad = (n: number) => String(n).padStart(2, '0')
export const toKey = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
export const startOfDay = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate())

export const getDayStatus = (date: Date, today: Date): DayStatus => {
    const key = toKey(date)
    const todayKey = toKey(today)
    if (key === todayKey) return 'today'
    if (date < today) return 'past'
    if (testSchedule.holidayWeekdays.includes(date.getDay())) return 'holiday'
    if (testSchedule.soldOutDates.includes(key)) return 'soldout'
    return 'open'
}

// 날짜를 고를 수 있는지 (오늘은 고를 수는 있지만 예약은 안 됨 → 안내 문구)
export const isSelectable = (status: DayStatus) => status === 'open' || status === 'today'
export const isBookable = (status: DayStatus) =>
    status === 'open' || (status === 'today' && testSchedule.sameDayBooking)

// 한 달 달력: 앞쪽은 빈 칸(null), 마지막 주는 다음 달 날짜로 채움
export const buildMonthGrid = (year: number, month: number) => {
    const first = new Date(year, month, 1)
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const cells: (Date | null)[] = Array.from({ length: first.getDay() }, () => null)
    for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d))
    let next = 1
    while (cells.length % 7 !== 0) cells.push(new Date(year, month + 1, next++))
    return cells
}

// '11. 19(목)'
export const formatDateLabel = (d: Date) => `${d.getMonth() + 1}. ${d.getDate()}(${WEEKDAY_LABELS[d.getDay()]})`

// '13:00' → { period: '오후', label: '1:00' }
export const formatSlot = (time: string) => {
    const [h, m] = time.split(':').map(Number)
    const period = h < 12 ? '오전' : '오후'
    const hour = h > 12 ? h - 12 : h
    return { period, label: `${hour}:${pad(m)}` }
}

export const isSlotOpen = (time: string) => !testSchedule.soldOutSlots.includes(time)

// '2026-11-26' → Date (형식이 틀리면 null)
export const parseKey = (key: string | null) => {
    const m = key?.match(/^(\d{4})-(\d{2})-(\d{2})$/)
    if (!m) return null
    const d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]))
    return toKey(d) === key ? d : null
}

// '11. 26. (목)'
export const formatFullDate = (d: Date) => `${d.getMonth() + 1}. ${d.getDate()}. (${WEEKDAY_LABELS[d.getDay()]})`

export const isKnownSlot = (time: string | null) =>
    !!time && [...testSchedule.slots.am, ...testSchedule.slots.pm].includes(time)

// '11월 26일 (목)'
export const formatKoreanDate = (d: Date) => `${d.getMonth() + 1}월 ${d.getDate()}일 (${WEEKDAY_LABELS[d.getDay()]})`
