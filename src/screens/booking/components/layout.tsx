// 헤더·푸터는 나중에 따로 넣을 예정이라 자리(레이아웃)만 잡아 둠
export const BookingHeader = () => (
    <header className="xb-header">
        <div className="xb-header__inner">
            <div className="xb-header__left">{/* 왼쪽: 뒤로가기 · 업체명 자리 */}</div>
            <div className="xb-header__right">{/* 오른쪽: 프로필 등 자리 */}</div>
        </div>
    </header>
)

export const BookingFooter = () => (
    <footer className="xb-footer">{/* 사이트 공통 푸터 자리 */}</footer>
)
