// 방문체험 예약 페이지 데이터
// ※ 지금은 화면 확인용 데이터. 이미지는 아직 없어서 경로를 비워 둠('') → 같은 크기의 빈 칸으로 보임
//   이미지가 준비되면 경로만 채우면 됨 (카페24 이관 시 /web/upload/... 경로)
// ※ 후기는 나중에 자체 시스템(어드민)으로 통합 예정이라 지금은 없음

export type BookingItem = {
    id: string
    title: string
    description: string
    thumbnail: string
    images: string[] // 예약 페이지 상단 사진 (빈 칸 개수만큼 슬라이드)
    closedText: string // 예) '매주 일요일 휴무'
    address: string // 체험 장소 (지점마다 다름)
    parking?: string // 주차 안내 (모르면 비움)
    instantConfirm: boolean // 바로확정 상품
}

// 예약 시 확인해 주세요 (아코디언). body 의 각 항목이 점(•) 하나
export type BookingNotice = {
    title: string
    body: string[]
}




export const place = {
    name: '엑스툴 코리아',
    description: '프리미엄 레이저각인기 전문업체 엑스툴 코리아 입니다.',
    heroImage: '',
    address: '경기도 파주시 회동길 325-20, 1층',
    jibunAddress: '', // 지번 주소를 넣으면 '지번' 버튼이 나타남
    directions: '경기도 파주시 회동길 325-20 1층으로 들어오시면 됩니다.',
    phone: '1877-7971',
    hours: '평일 10:00 – 16:00 (점심 12:00 – 13:00) · 주말·공휴일 휴무', // 사이트 푸터 CS 안내와 같은 내용
    homepage: 'https://xtool.co.kr',
    mapUrl: 'https://map.naver.com/p/search/경기도 파주시 회동길 325-20',
    parking: {
        available: true,
        description: '지하 1층 주차 가능 합니다.',
        fee: '무료',
    },
    intro: `방문체험&교육&구매는 예약으로 진행되고 있습니다.
*체험은 1타임에 1팀씩 진행중이며, 1명으로 예약후
여러명 같이오셔도 괜찮습니다 :)

구매 상담을 원하시면 카카오톡 채널
@엑스툴코리아로 문의 남겨주시면
빠르게 답변 드리도록 하겠습니다!`,
}

// 오시는 길 지도 (구글 지도 iframe, 키 필요 없음)
// - embedUrl: 구글 지도에서 장소 검색 → 공유 → '지도 퍼가기' → 나오는 iframe 코드의 src 값
//   (https://www.google.com/maps/embed?pb=... 형태). 넣으면 그 위치·핀 그대로 보여줌
// - 비워두면 주소(place.address)로 검색한 지도를 보여줌
// 길찾기·지도 앱 버튼은 국내 사용자에 맞춰 네이버 지도(place.mapUrl)로 연결
export const mapConfig = {
    embedUrl:
        'https://www.google.com/maps/embed?pb=!1m5!3m3!1m2!1s0x357c88ca0f7272e3%3A0xb692547a24e188bb!2z6rK96riw64-EIO2MjOyjvOyLnCDtmozrj5nquLggMzI1LTIw!5e0!3m2!1sko!2skr!4v1795072642056!5m2!1sko!2skr',
    zoom: 16, // embedUrl 이 비었을 때(주소 검색 지도)만 쓰임
}
export const mapEmbedUrl =
    mapConfig.embedUrl ||
    `https://maps.google.com/maps?q=${encodeURIComponent(place.address)}&hl=ko&z=${mapConfig.zoom}&output=embed`

export const bookingItems: BookingItem[] = [
    {
        id: 'laser-paju',
        title: '레이저 각인기 방문 체험(파주)',
        description:
            '샘플 재료를 가지고 오시면 무료로 엑스툴 레이저각인기를 테스트하실 수 있습니다. 주소: 경기도 파주시 회동길 325-20 1층(자음과모음) *체험은 1타임에 1팀씩 진행 중이며, 1명으로 예약 후 여러 명 같이 오셔도 괜찮습니다 :)',
        thumbnail: '',
        images: ['', ''],
        closedText: '매주 일요일 휴무',
        address: place.address,
        parking: '지하 1층 주차 가능 · 주차료 무료',
        instantConfirm: true,
    },
    {
        id: 'laser-ulsan',
        title: '레이저 각인기 방문 체험(울산)',
        description:
            '레이저 각인기 울산 지역 입니다. 주소: 울산시 북구 산하중앙2로 244 2층 *체험은 1타임에 1팀씩 진행 중이며, 1명으로 예약 후 여러 명 같이 오셔도 괜찮습니다 :)',
        thumbnail: '',
        images: ['', ''],
        closedText: '매주 일요일 휴무',
        address: '울산시 북구 산하중앙2로 244 2층',
        instantConfirm: true,
    },
    {
        id: 'dtf-o1-paju',
        title: 'DTF & O1 UV 프린터 방문체험 예약(파주)',
        description:
            '*DTF & O1 방문 체험 예약 안내* DTF 프린터와 O1 UV 프린터로 완성한 나만의 굿즈 직접 만나보세요. 여유롭게 체험하실 수 있도록, 미리 예약해주세요! 주소: 경기도 파주시 회동길 325-20 1층',
        thumbnail: '',
        images: ['', ''],
        closedText: '매주 일요일 휴무',
        address: place.address,
        parking: '지하 1층 주차 가능 · 주차료 무료',
        instantConfirm: true,
    },
    {
        id: 'metalfab-cheonan',
        title: '용접기 방문체험 예약(천안)',
        description:
            '용접,커팅,클리닝까지 한대로 끝내는 레이저 용접기 ! 혁신적인 All-in-One 솔루션 엑스툴 메탈팹 방문체험으로 체험 해보시고 결정하세요 :) 주소: 천안시 서북구 입장면 신두리 246-3 알마공방',
        thumbnail: '',
        images: ['', ''],
        closedText: '매주 일요일 휴무',
        address: '천안시 서북구 입장면 신두리 246-3 알마공방',
        instantConfirm: true,
    },
]

// 예약 시 확인해 주세요 - 지금은 모든 상품 공통 (주차정보는 place.parking 에서 만듦)
export const bookingNotices: BookingNotice[] = [
    {
        title: '꼭 확인해 주세요!',
        body: [
            `체험은 1:1로 진행되고 선착순으로 예약이 진행됩니다.

테스트 원하는 재질이 있으실 경우에는 직접 가지고 오셔서
체험해 주시면 감사하겠습니다.`,
        ],
    },
    {
        title: '주차정보',
        body: [`주차비 ${place.parking.fee}`, place.parking.description],
    },
]

export const placePhotos = {
    main: '',
    grid: [
        '',
        '',
        '',
        '',
        '',
        '',
    ],
}

// ---------------- 예약 정보 입력 페이지 (/booking/:itemId/confirm) ----------------
// ※ 선택지·약관·판매자 정보는 임시 값 → 실제 내용으로 교체 필요

export type FormField = {
    id: string
    label: string
    required: boolean
    type: 'select' | 'textarea'
    placeholder: string
    options?: string[]
}

// 추가 정보 (지금은 모든 체험 공통)
export const extraFields: FormField[] = [
    {
        id: 'machine',
        label: '각인기 종류 & DTF & 용접기',
        required: true,
        type: 'select',
        placeholder: '해당하는 항목을 선택해주세요.',
        options: [
            'xTool M2',
            'xTool F2',
            'xTool F2 Ultra',
            'xTool F2 Ultra UV',
            'xTool P3',
            'xTool O1',
            'xTool DTF',
            'xTool MetalFab (용접기)',
            '아직 정하지 못했어요',
        ],
    },
    {
        id: 'material',
        label: '재료(ex.티셔츠,가죽,스테인리스,아크릴 ...)',
        required: true,
        type: 'textarea',
        placeholder: '내용을 입력해주세요.',
    },
    {
        id: 'sample',
        label: '샘플 유무(샘플을 가져오시면 보다 정확한 테스트가 가능합니다.)',
        required: true,
        type: 'select',
        placeholder: '해당하는 항목을 선택해주세요.',
        options: ['샘플을 가져갈게요', '샘플 없이 방문할게요'],
    },
    {
        id: 'late',
        label: '예약시간 10분 지나면 상담이 지연될 수 있습니다.',
        required: true,
        type: 'select',
        placeholder: '해당하는 항목을 선택해주세요.',
        options: ['확인했습니다'],
    },
]

export const REQUEST_DIRECT = '직접 입력'
export const requestOptions = ['요청사항 없음', '주차할 예정이에요', '동반인과 함께 방문해요', REQUEST_DIRECT]

// 테스트용 예약자 (로그인 연동 전까지 임시. 실제 개인정보 아님)
export const sampleBooker = { name: '홍길동', phone: '01012345678' }

export const sellerInfo = [
    { label: '상호', value: place.name },
    { label: '대표자', value: '' }, // TODO 입력
    { label: '사업자등록번호', value: '' }, // TODO 입력
    { label: '주소', value: place.address },
    { label: '연락처', value: place.phone },
]

// 개인정보 수집·이용 및 제공 동의 (입력 페이지에서 모달로 보여줌) - 받은 양식 문구 그대로
export type PrivacySection = {
    heading: string
    items?: { title: string; list: string[] }[]
    text?: string
}

const PRIVACY_PURPOSE = ['제품 구매 상담 예약 및 상담 진행', '비정상적 접근 및 중복 신청 방지', '상담 시스템 운영 안정성 확보']
const PRIVACY_ITEMS = ['성함', '전화번호', '접속 IP주소']
const PRIVACY_REFUSAL =
    '개인정보 수집 및 제공에 대해 동의할 권리가 있으며, 거부하시면 상담 서비스가 제한됩니다. 이 점 참고하시어, 작성 부탁드립니다.'
const PRIVACY_REFUSAL_TITLE = '4. 동의를 거부할 권리가 있다는 사실 및 동의 거부에 따른 불이익이 있는 경우에는 그 불이익의 내용'

export const privacyConsent: { title: string; sections: PrivacySection[] } = {
    title: '개인정보 수집 및 제공 동의',
    sections: [
        {
            heading: '개인정보 수집 및 제공',
            items: [
                { title: '1. 개인정보의 수집ㆍ이용 목적', list: PRIVACY_PURPOSE },
                { title: '2. 수집하려는 개인정보의 항목', list: PRIVACY_ITEMS },
                { title: '3. 개인정보의 보유 및 이용 기간', list: ['2028년 6월 30일까지'] },
                { title: PRIVACY_REFUSAL_TITLE, list: [PRIVACY_REFUSAL] },
            ],
        },
        {
            heading: '개인정보 제공 동의 시 필수 고지사항',
            items: [
                { title: '1. 개인정보를 제공받는 자', list: ['엑스툴 대한민국 공식 파트너 (주)시안 인터내셔널'] },
                { title: '2. 개인정보를 제공받는 자의 개인정보 이용 목적', list: PRIVACY_PURPOSE },
                { title: '2. 수집하려는 개인정보의 항목', list: PRIVACY_ITEMS },
                { title: '3. 개인정보의 보유 및 이용 기간', list: ['2027년 6월 30일까지'] },
                { title: PRIVACY_REFUSAL_TITLE, list: [PRIVACY_REFUSAL] },
            ],
        },
        {
            heading: '개인정보 동의 IP 수집 추가 내용',
            text: '중복 신청이나 악의적인 허위 상담 등록을 방지하기 위해 상담신청 고객님의 IP 주소를 수집하게 되었습니다. 고객님의 소중한 상담 기회를 보호하고 안전한 서비스를 제공하기 위한 조치이오니 양해 부탁드립니다.',
        },
    ],
}
