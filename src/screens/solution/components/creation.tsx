import { cn } from '@/utils'
import { useEffect, useState } from 'react'

interface creationState {
    label: string
    src: string
    description: string
}
const creationConfig = [
    {
        label: '낮은 진입 장벽, 높은 성공 가능성',
        src: '/creation/creation-video-1.mp4',
        description:
            '간단하게 시작하고, 끝없이 탐구해 보세요. 직관적인 디자인으로 초보자도 쉽게 시작할 수 있으며, 무한한 창의적 가능성을 통해 숙련된 사용자는 모든 프로젝트에서 한계를 뛰어넘을 수 있습니다.',
    },
    {
        label: '모든 기기에서 사용 가능',
        src: '/creation/creation-video-2.mov',
        description:
            '편집부터 후처리까지, PC, iPad 또는 모바일 기기를 사용하든 관계없이 xTool Creative Space(XCS)를 통해 원활하고 효율적인 워크플로우를 경험해 보세요.',
    },
    {
        label: 'AI Make',
        src: '/creation/creation-video-3.mp4',
        description:
            '디자인 아이디어는 있는데 시간이 부족하신가요? 입력만 하시면 AImake가 멋진 시안을 만들어 드립니다. 세계 최초의 AI 생성기가 레이저 커팅, 조각, 인쇄 등 다양한 용도에 맞는 70가지 이상의 스타일을 제공합니다.',
    },
    {
        label: '클라우드 기반 스토리지',
        src: '/creation/creation-video-4.mov',
        description:
            '파일에 쉽게 접근하고 싶으신가요? 모든 수업 자료는 클라우드에 안전하게 저장되어 있어 언제 어디서든 로그인하여 자료에 접근할 수 있습니다.',
    },
] as creationState[]

interface CreationProps {
    videoIdx: number
    setVideoIdx: React.Dispatch<React.SetStateAction<number>>
}

const CreationNav = ({ videoIdx, setVideoIdx }: CreationProps) => {
    return (
        <div className="md:mx-auto mt-5 flex md:justify-center max-md:overflow-y-scroll">
            <div
                className={cn(
                    'flex gap-2 rounded-[200px] p-1 bg-gray-200 *:rounded-[200px] *:font-semibold *:whitespace-nowrap *:text-center *:font-notokr *:cursor-pointer *:select-none',
                    'lg:*:text-[15px] lg:*:px-6 lg:*:py-4',
                    'md:*:text-[15px] md:*:px-5 md:*:py-3',
                    'max-md:*:text-[15px] max-md:*:px-5 max-md:*:py-3',
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
                        src={item.src}
                        autoPlay
                        playsInline
                        loop
                        muted
                        className="lg:w-[42%] md:w-[52%] max-md:w-[79%]"
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
        <div className="w-full max-md:mt-20 lg:py-20 md:py-5 *:select-none">
            <div className="w-full max-w-350 mx-auto">
                <div
                    className={cn(
                        'font-notokr font-bold text-center break-keep',
                        'lg:text-[35px]',
                        'md:text-[3vw]',
                        'max-md:text-[23px]',
                    )}
                >
                    기계와 최첨단 소프트웨어의 결합으로 생명력을 불어넣는 창작물
                    탄생
                </div>
                <CreationNav videoIdx={videoIdx} setVideoIdx={setVideoIdx} />
                <div
                    className={cn(
                        'text-center mx-auto mt-7 text-[14px] font-semibold text-font-gray break-keep',
                        'lg:w-150',
                        'md:w-150',
                        'max-md:h-25 max-md:px-3',
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
                        className="w-full object-contain"
                    />
                </div>
                <div className="absolute top-0 left-0 w-full hidden md:max-lg:block z-20">
                    <img
                        src="/creation/creation-1024.webp"
                        className="w-full object-contain"
                    />
                </div>
                <div className="absolute top-0 left-0 w-full hidden max-md:block z-20">
                    <img
                        src="/creation/creation-768.webp"
                        className="w-full object-contain"
                    />
                </div>
            </div>
            <div className="hidden max-md:block w-full h-[calc(35vw)] bg-[url(/creation/creation-bottom-768.webp)] bg-size-[auto_35vw] bg-center bg-no-repeat" />
        </div>
    )
}
