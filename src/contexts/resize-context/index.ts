import { createContext, useContext } from 'react'

interface ResizeContextValue {
    transformEducationHandlers: {
        goPrev: () => void
        goNext: () => void
        goToIdx: (idx: number) => void
    }
    transformEducationStyle: {
        sliderTransform: string
        paginationLeftBtn: string
        paginationRightBtn: string
        dotActiveList: boolean[]
    }
}

export const ResizeContext = createContext({} as ResizeContextValue)

export const useResizeContext = () => useContext(ResizeContext)

// provider를 export하여도 해당 부분은 barrel역할만 하므로, Fast Refresh 대상에 포함되지 않음.
// 즉, 원본 파일과는 분리되어 있기 때문에 HMR 대상은 provider가 선언된 파일 부분에 해당한다. 따라서 해당 export가 가능하다.
export * from './resize-context-provider'
