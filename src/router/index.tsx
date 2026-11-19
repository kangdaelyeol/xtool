import BasePage from '@/pages/base-page'
import BookingScreen from '@/screens/booking'
import BookingCompleteScreen from '@/screens/booking/complete'
import BookingConfirmScreen from '@/screens/booking/confirm'
import BookingDetailScreen from '@/screens/booking/detail'
import SolutionScreen from '@/screens/solution'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
    // 방문체험 예약: 헤더·푸터를 페이지 안에서 따로 잡으므로 BasePage(공통 푸터) 밖에 둠
    { path: '/booking', element: <BookingScreen /> },
    { path: '/booking/:itemId', element: <BookingDetailScreen /> },
    { path: '/booking/:itemId/confirm', element: <BookingConfirmScreen /> },
    { path: '/booking/:itemId/complete', element: <BookingCompleteScreen /> },
    {
        path: '/',
        element: <BasePage />,
        children: [
            { index: true, element: <SolutionScreen /> },
            { path: '*', element: <div>not found</div> },
        ],
    },
])
