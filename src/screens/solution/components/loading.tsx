import { cn } from '@/utils'

export const Loading = ({
    loading,
    hideModal,
}: {
    hideModal: () => void
    loading: boolean
}) => {
    const handleCheckClick = () => {
        hideModal()
    }
    return (
        <div className="fixed inset-0 z-50 bg-black/55 flex items-center justify-center px-6">
            <div className="bg-white rounded-2xl py-10 px-9 flex flex-col items-center w-full max-w-85 animate-fade-in">
                <div className="flex justify-center gap-2.5">
                    <img
                        src="/xtool-logo-text.png"
                        alt="xTool"
                        className="w-35"
                    />
                </div>
                <div className="text-[11px] text-center mt-2 font-semibold font-notokr tracking-wider text-font-gray">
                    <span className="font-montserrat">B2B SOLUTIONS</span>
                </div>
                <div className="mt-3 w-11 h-11 relative mx-auto">
                    <div
                        className={cn(
                            'absolute top-0 left-0 transition duration-300 w-full h-full border-3 border-gray-200 border-t-[#00c853] rounded-full animate-spin',
                            !loading ? 'opacity-0' : 'opacity-100',
                        )}
                    />
                    {/* complete svg */}
                    {!loading && (
                        <svg
                            width="44"
                            height="44"
                            viewBox="0 0 56 56"
                            className={cn('absolute inset-0 top-0 left-0')}
                        >
                            <circle
                                cx="28"
                                cy="28"
                                r="25"
                                fill="none"
                                stroke="#00c853"
                                strokeWidth="3"
                                strokeDasharray="157"
                                strokeDashoffset="0"
                                className="animate-circle-draw"
                            />
                            <polyline
                                points="17 28 25 36 39 20"
                                fill="none"
                                stroke="#00c853"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeDasharray="36"
                                strokeDashoffset="0"
                                className="animate-check-draw"
                            />
                        </svg>
                    )}
                </div>
                <div className="flex flex-col items-center mt-3 h-13 w-full relative">
                    <div
                        className={cn(
                            'absolute inset-0 transition duration-300 flex flex-col items-center',
                            !loading && 'animate-fade-out-text',
                        )}
                    >
                        <p className="text-[16px] font-semibold">
                            상담 신청 중...
                        </p>
                        <p className="text-[13px] text-gray-400 mt-1">
                            잠시만 기다려주세요
                        </p>
                    </div>
                    <div
                        className={cn(
                            'inset-0 transition duration-300 flex-col items-center',
                            !loading ? 'animate-fade-in-text' : 'hidden',
                        )}
                    >
                        <p className="text-[16px] font-semibold">
                            상담 신청이 완료되었습니다.
                        </p>
                        <p className="text-[11px] text-gray-400">
                            빠른 시일 내에 연락 드리겠습니다.
                        </p>
                        <div
                            onClick={handleCheckClick}
                            className={cn(
                                'cursor-pointer text-[13px] font-notokr text-white bg-black w-full text-center py-2 mt-2 rounded-[10px]',
                                'hover:bg-black/80',
                            )}
                        >
                            확인
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
