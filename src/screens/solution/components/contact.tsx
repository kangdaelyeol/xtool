import { cn, formatPhone } from '@/utils'
import { useRef, useState } from 'react'
import { CheckIcon, CircleIcon } from '../icons'

interface InputProps {
    className?: React.HTMLAttributes<HTMLElement>['className']
    required: boolean
    placeholder: string
    type: React.InputHTMLAttributes<HTMLInputElement>['type']
    ref: React.RefObject<HTMLInputElement | null>
    title: string
    onChange?: React.HTMLAttributes<HTMLInputElement>['onChange']
}

const Input = ({
    className,
    required,
    placeholder,
    type,
    ref,
    title,
    onChange,
}: InputProps) => {
    return (
        <div className={cn('flex flex-col gap-1', className)}>
            <div className="font-semibold text-[15px]">
                {title} {required && <span className="text-red-600">*</span>}
            </div>
            <input
                onChange={onChange}
                type={type}
                ref={ref}
                required={required}
                placeholder={placeholder}
                className={cn(
                    'border border-border-gray rounded-[5px] py-2 px-2 tracking-wider placeholder:text-[14px] text-[14px]',
                    'hover:placeholder:text-font-gray hover:border-black',
                    'focus:placeholder:text-font-gray focus:border-black',
                )}
            />
        </div>
    )
}

interface SelectItemProps {
    label: string
    onClick: () => void
    selected: boolean
}

const SelectItem = ({ label, onClick, selected }: SelectItemProps) => {
    return (
        <div
            onClick={onClick}
            className={cn(
                'flex flex-1 items-center border border-border-gray p-3 rounded-[10px] cursor-pointer',
                'hover:border-black',
                selected && 'bg-[#eeeeee] border-black',
            )}
        >
            {selected ? (
                <CheckIcon color="#000000" size={10} />
            ) : (
                <CircleIcon color="#777777" size={10} />
            )}
            <div
                className={cn(
                    'text-font-gray-deep ml-2 text-[14px] select-none',
                    selected && 'text-black border-black',
                )}
            >
                {label}
            </div>
        </div>
    )
}

export const Contact = () => {
    const companyNameRef = useRef<HTMLInputElement>(null)
    const userNameRef = useRef<HTMLInputElement>(null)
    const phoneRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const [enterprise, setEnterprise] = useState(false)
    const [education, setEducation] = useState(false)
    const [publicInstitution, setPublicInstitution] = useState(false)
    const [partnership, setPartnership] = useState(false)
    return (
        <div
            className="w-full bg-black scroll-mt-18 *:select-none"
            id="contact"
        >
            <div className="w-full max-w-350 mx-auto pt-20 pb-25">
                <div className="text-center text-white text-[40px] font-semibold tracking-wider">
                    귀사의 비즈니스에 xTool을 더하세요
                </div>
                <div className="text-center mt-5 tracking-wide text-[15px] text-gray-400">
                    기관의 예산과 운영 목적, 기업의 생산 공정에 가장 적합한
                    모델을 제안해 드립니다.
                </div>

                <div className="mt-20 w-280 rounded-[25px] mx-auto bg-[url('/contact.webp')] bg-size-[120%] bg-position-[10%_20%] p-4">
                    <div className="h-170 w-[50%] bg-white rounded-[15px] pt-8 px-8">
                        {/* Row 1 - 기관명, 성함*/}
                        <div className="flex gap-7">
                            <Input
                                ref={companyNameRef}
                                type="text"
                                required
                                placeholder="기관명 또는 회사명"
                                title="기관/기업명"
                                className="flex-1"
                            />
                            <Input
                                ref={userNameRef}
                                type="text"
                                required
                                placeholder="직함 및 성함"
                                title="담당자 성함/직함"
                                className="flex-1"
                            />
                        </div>
                        {/* Row 2 - 연락처, 이메일*/}
                        <div className="flex gap-7 mt-8">
                            <Input
                                ref={phoneRef}
                                type="tel"
                                required
                                placeholder="010-0000-0000"
                                title="연락처"
                                className="flex-1"
                                onChange={(e) => {
                                    e.currentTarget.value = formatPhone(
                                        e.currentTarget.value,
                                    )
                                }}
                            />
                            <Input
                                ref={emailRef}
                                type="email"
                                required
                                placeholder="example@email.com"
                                title="이메일 주소"
                                className="flex-1"
                            />
                        </div>
                        {/* Inquiry type - 문의 유형*/}
                        <div className="mt-8">
                            <div className="font-semibold text-[15px]">
                                문의 유형{' '}
                                <span className="text-red-600">*</span>
                            </div>
                            <div className="text-font-gray-deep text-[13px]">
                                다중선택 가능
                            </div>
                            <div className="flex gap-2 mt-3">
                                <SelectItem
                                    label="기업 도입 (R&D, 브랜딩, 생산)"
                                    selected={enterprise}
                                    onClick={() => setEnterprise((v) => !v)}
                                />

                                <SelectItem
                                    label="교육기관 도입 (학교, 대학교)"
                                    selected={education}
                                    onClick={() => setEducation((v) => !v)}
                                />
                            </div>
                            <div className="flex gap-2 mt-3">
                                <SelectItem
                                    label="공공기관 / 메이커스페이스 구축"
                                    selected={publicInstitution}
                                    onClick={() =>
                                        setPublicInstitution((v) => !v)
                                    }
                                />
                                <SelectItem
                                    label="기타 비즈니스 파트너십"
                                    selected={partnership}
                                    onClick={() => setPartnership((v) => !v)}
                                />
                            </div>
                        </div>
                        {/* Detail - 상세 내용 */}
                        <div className="mt-8">
                            <div className="font-semibold text-[15px]">
                                상세 내용
                            </div>
                            <textarea
                                className="border border-border-gray rounded-[10px] placeholder:text-[15px] max-h-30 min-h-30 text-[15px] resize-none mt-2 p-2 w-full"
                                placeholder="도입 목적, 예상 수량, 필요한 지원 서비스 등을 적어주세요"
                            ></textarea>
                        </div>
                        {/* Submit - 제출 */}
                        <div
                            className={cn(
                                'mt-3 select-none w-full cursor-pointer bg-black text-white text-center font-notokr rounded-[9px] py-3.5',
                                'hover:bg-gray-800',
                            )}
                        >
                            비즈니스 상담 요청하기
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
