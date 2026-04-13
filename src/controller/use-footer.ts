export const useFooter = () => {
    const handlers = {
        qnaClick: () => {
            window.open(
                'https://www.xtool.co.kr/board/product/list.html?board_no=6',
                '_blank',
            )
        },
        asClick: () => {
            window.open(
                'https://cyankorea.notion.site/2c39c11a34c6805cb411da0e18fa20d1',
                '_blank',
            )
        },
        agreementClick: () => {
            window.open(
                'https://www.xtool.co.kr/member/agreement.html',
                '_blank',
            )
        },
        privacyClick: () => {
            window.open('https://www.xtool.co.kr/member/privacy.html', '_blank')
        },
        guideClick: () => {
            window.open('https://www.xtool.co.kr/shopinfo/guide.html', '_blank')
        },
    }
    return { handlers }
}
