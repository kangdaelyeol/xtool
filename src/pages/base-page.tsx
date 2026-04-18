import { Outlet } from 'react-router-dom'
import { Footer } from '@/components'

export default function BasePage() {
    return (
        <>
            <Outlet />
            <Footer />
        </>
    )
}
