import BasePage from '@/pages/base-page'
import SolutionScreen from '@/screens/solution'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <BasePage />,
        children: [
            { index: true, element: <SolutionScreen /> },
            { path: '*', element: <div>not found</div> },
        ],
    },
])
