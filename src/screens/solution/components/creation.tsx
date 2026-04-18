import { cn } from '@/utils'
import { useEffect, useRef, useState } from 'react'

interface creationState {
    label: string
    src: string
    description: string
}

interface CreationProps {
    videoIdx: number
    setVideoIdx: React.Dispatch<React.SetStateAction<number>>
}

const creationConfig = [
    {
        label: '쉽게 시작하는 작업 환경',
        src: '/creation/creation-video-1.mp4',
        description:
            '초보자도 빠르게 적응할 수 있는 직관적인 소프트웨어와 다양한 기능으로 확장 가능한 작업 환경을 제공합니다.',
    },
    {
        label: 'PC, 태블릿 사용가능',
        src: '/creation/creation-video-2.mov',
        description: 'PC, 탬플릿 기기에서도 사용 가능 합니다.',
    },
    {
        label: 'AI 디자인 자동 생성',
        src: '/creation/creation-video-3.mp4',
        description:
            '아이디어를 입력하면 AI가 디자인을 자동으로 생성합니다. 빠르게 시안을 만들고 작업까지 연결하세요.',
    },
    {
        label: '클라우드 파일 관리',
        src: '/creation/creation-video-4.mov',
        description:
            '작업 파일을 클라우드에 저장하고 다시 불러올 수 있습니다. 장소에 관계없이 동일한 작업 환경을 유지할 수 있습니다.',
    },
] as creationState[]

const CreationNav = ({ videoIdx, setVideoIdx }: CreationProps) => {
    return (
        <div className="md:mx-auto mt-5 flex md:justify-center max-md:overflow-y-scroll max-md:px-3">
            <div
                className={cn(
                    'flex gap-2 rounded-[200px] p-1 bg-gray-200 *:rounded-[200px] *:font-normal *:whitespace-nowrap *:text-center *:font-notokr *:cursor-pointer *:select-none tracking-[-0.6px]',
                    'lg:*:text-[20px] lg:*:px-6 lg:*:py-4',
                    'md:*:text-[16px] md:*:px-5 md:*:py-3',
                    'max-md:*:text-[16px] max-md:*:px-5 max-md:*:py-2.5',
                )}
            >
                {creationConfig.map((item, idx) => (
                    <div
                        className={cn(
                            videoIdx === idx && 'text-white bg-black',
                        )}
                        key={item.label}
                        onClick={() => setVideoIdx(idx)}
                    >
                        {item.label}
                    </div>
                ))}
            </div>
        </div>
    )
}

const CreationVideo = ({ videoIdx }: { videoIdx: number }) => {
    // Video재생 최적화
    // 4개 비디오를 동시에 재생하면서 1개의 비디오를 보여주는 것은 나머지 3개의 재생을 위해 불필요한 컴퓨팅 자원을 소모하게 만드므로, 이는 비효율적임.
    // 따라서 보여지는 비디오에 대해서만 재생을 하며, 나머지는 pause처리.
    const videoRefList = useRef<HTMLVideoElement[] | null[]>([])

    useEffect(() => {
        videoRefList.current?.forEach((video, idx) => {
            if (!video) return
            if (videoIdx === idx) video.play()
            else video.pause()
        })
    }, [videoIdx])

    return (
        <div className="*:w-full *:absolute *:justify-center *:flex">
            {creationConfig.map((item, idx) => (
                <div
                    key={item.label}
                    className={cn(
                        videoIdx === idx ? 'z-10' : 'z-0',
                        'lg:top-2 md:top-2 max-md:top-[calc(2%)]',
                    )}
                >
                    <video
                        ref={(el) => {
                            videoRefList.current[idx] = el
                        }}
                        src={item.src}
                        autoPlay
                        playsInline
                        loop
                        muted
                        className="lg:w-[42%] md:w-[52%] max-md:w-[80%]"
                    />
                </div>
            ))}
        </div>
    )
}

export const Creation = () => {
    const [videoIdx, setVideoIdx] = useState(0)
    useEffect(() => {
        ;[
            '/creation/creation-768.webp',
            '/creation/creation-1024.webp',
            '/creation/creation-1920.png',
            '/creation/creation-2560.webp',
        ].forEach((src) => {
            const img = new Image()
            img.src = src
        })

        creationConfig.forEach((item) => {
            const video = document.createElement('video')
            video.preload = 'auto'
            video.src = item.src
            video.load()
        })
    }, [])
    return (
        <div className="w-full md:py-25 max-md:py-15 *:select-none">
            <div className="w-full max-w-350 mx-auto">
                <div
                    className={cn(
                        'font-notokr font-bold text-center break-keep tracking-[-1.2px]',
                        'lg:text-[40px]',
                        'md:text-[40px]',
                        'max-md:text-[20px]',
                    )}
                >
                    누구나 쉽게 시작하는 xTool 소프트웨어 (XCS)
                </div>
                <CreationNav videoIdx={videoIdx} setVideoIdx={setVideoIdx} />
                <div
                    className={cn(
                        'text-center mx-auto mt-7 font-semibold text-font-gray-deep font-[400] break-keep tracking-[-0.6px]',
                        'lg:w-full lg:text-[20px]',
                        'md:w-full md:text-[20px]',
                        'max-md:h-17 max-md:px-4 max-md:text-[14px]',
                    )}
                >
                    {creationConfig[videoIdx].description}
                </div>
            </div>
            <div className="w-full lg:h-[calc(35vw)] md:h-110 max-md:h-[calc(70vw)] relative md:mt-10">
                <CreationVideo videoIdx={videoIdx} />
                <div className="absolute top-0 left-0 w-full hidden lg:block z-20">
                    <img
                        src="/creation/creation-1920.png"
                        className="w-full object-contain pointer-events-none"
                    />
                </div>
                <div className="absolute top-0 left-0 hidden md:max-lg:block z-20">
                    <img
                        src="/creation/creation-1024.webp"
                        className="w-full object-contain pointer-events-none"
                    />
                </div>
                <div className="absolute top-0 left-0 w-full hidden max-md:block z-20">
                    <img
                        src="/creation/creation-768.webp"
                        className="w-full object-contain pointer-events-none"
                    />
                </div>
            </div>
            <div className="hidden max-md:block w-full h-[calc(35vw)] bg-[url(/creation/creation-bottom-768.webp)] bg-size-[auto_35vw] bg-center bg-no-repeat" />
        </div>
    )
}
