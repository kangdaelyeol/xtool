const listStyle = 'flex flex-col gap-1 *:text-[14px] mt-1 list-disc pl-7'
const titleStyle = 'mt-4 font-semibold'
const dividerStyle = 'h-px bg-black w-full my-3 shrink-0'

export const PrivacyTerm = ({
    handleHideClick,
}: {
    handleHideClick: () => void
}) => {
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black/60 z-100">
            <div className="relative max-w-100 bg-white *:font-notokr rounded-[20px]">
                <div
                    onClick={handleHideClick}
                    className="absolute top-5 right-4 w-5.5 h-5.5 rounded-[100px] bg-orange-600 cursor-pointer hover:bg-orange-400"
                />
                <div className=" h-[60vh] p-5 overflow-scroll">
                    <div className="text-[20px] font-semibold">
                        개인정보 수집 및 제공
                    </div>
                    <div className={titleStyle}>
                        1. 개인정보의 수집ㆍ이용 목적
                    </div>
                    <ul className={listStyle}>
                        <li>제품 구매 상담 예약 및 상담 진행 </li>
                        <li>비정상적 접근 및 중복 신청 방지</li>
                        <li>상담 시스템 운영 안정성 확보</li>
                    </ul>
                    <div className={titleStyle}>
                        2. 수집하려는 개인정보의 항목
                    </div>
                    <ul className={listStyle}>
                        <li>성함</li>
                        <li>전화번호 </li>
                        <li>접속 IP주소</li>
                    </ul>
                    <div className={titleStyle}>
                        3. 개인정보의 보유 및 이용 기간
                    </div>
                    <ul className={listStyle}>
                        <li>2027년 6월 30일까지</li>
                    </ul>
                    <div className={titleStyle}>
                        4. 동의를 거부할 권리가 있다는 사실 및 동의 거부에 따른
                        불이익이 있는 경우에는 그 불이익의 내용
                    </div>
                    <ul className={listStyle}>
                        <li>
                            개인정보 수집 및 제공에 대해 동의할 권리가 있으며,
                            거부하시면 상담 서비스가 제한됩니다. 이 점
                            참고하시어, 작성 부탁드립니다.
                        </li>
                    </ul>
                    <div className={dividerStyle} />
                    <div className="text-[20px] font-semibold">
                        개인정보 제공 동의 시 필수 고지사항
                    </div>
                    <div className={titleStyle}>1. 개인정보를 제공받는 자</div>
                    <div className={listStyle}>
                        <li>
                            엑스툴 대한민국 공식 파트너 (주)시안 인터내셔널{' '}
                        </li>
                    </div>
                    <div className={titleStyle}>
                        2. 개인정보의 수집ㆍ이용 목적
                    </div>
                    <ul className={listStyle}>
                        <li>제품 구매 상담 예약 및 상담 진행 </li>
                        <li>비정상적 접근 및 중복 신청 방지</li>
                        <li>상담 시스템 운영 안정성 확보</li>
                    </ul>
                    <div className={titleStyle}>
                        3. 수집하려는 개인정보의 항목
                    </div>
                    <ul className={listStyle}>
                        <li>성함</li>
                        <li>전화번호 </li>
                        <li>접속 IP주소</li>
                    </ul>
                    <div className={titleStyle}>
                        4. 개인정보의 보유 및 이용 기간
                    </div>
                    <ul className={listStyle}>
                        <li>2027년 6월 30일까지</li>
                    </ul>
                    <div className={titleStyle}>
                        5. 동의를 거부할 권리가 있다는 사실 및 동의 거부에 따른
                        불이익이 있는 경우에는 그 불이익의 내용
                    </div>
                    <ul className={listStyle}>
                        <li>
                            개인정보 수집 및 제공에 대해 동의할 권리가 있으며,
                            거부하시면 상담 서비스가 제한됩니다. 이 점
                            참고하시어, 작성 부탁드립니다.
                        </li>
                    </ul>
                    <div className={dividerStyle} />
                    <div className="text-[20px] font-semibold">
                        개인정보 동의 IP 수집 추가 내용
                    </div>
                    <div className="text-[13px] mt-1">
                        중복 신청이나 악의적인 허위 상담 등록을 방지하기 위해
                        상담신청 고객님의 IP 주소를 수집하게 되었습니다. <br />
                        고객님의 소중한 상담 기회를 보호하고 안전한 서비스를
                        제공하기 위한 조치이오니 양해 부탁드립니다.
                    </div>
                </div>
            </div>
        </div>
    )
}
