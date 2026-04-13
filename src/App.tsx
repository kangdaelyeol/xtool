import { RouterProvider } from 'react-router-dom'
import { router } from '@/router'
import { ResizeContextProvider } from './contexts/resize-context'

function App() {
    return (
        <ResizeContextProvider>
            <RouterProvider router={router} />
        </ResizeContextProvider>
    )
}

export default App
