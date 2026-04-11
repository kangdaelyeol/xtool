import { cn } from '@/utils'

export const Education = () => {
    return (
        <div
            className={cn(
                'flex justify-center bg-education-white bg-no-repeat bg-center',
                'h-100 bg-[url(/education/education-logos-mobile.webp)] bg-size-[auto_calc(45%+60vw)]',
                'md:h-47 md:bg-[url(/education/education.webp)] md:bg-size-[1100px_auto]',
                'lg:h-47 lg:bg-[url(/education/education.webp)] lg:bg-size-[1400px_auto]',
            )}
        />
    )
}
