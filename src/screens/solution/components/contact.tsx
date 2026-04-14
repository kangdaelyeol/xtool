import { cn, formatPhone } from '@/utils'
import { useContact } from '@/controller/solution'
import { CheckIcon, CircleIcon } from '../icons'
import { Loading } from './loading'
import { PrivacyTerm } from './privacy-term'

interface InputProps {
    className?: React.HTMLAttributes<HTMLElement>['className']
    required: boolean
    placeholder: string
    type: React.InputHTMLAttributes<HTMLInputElement>['type']
    ref: React.RefObject<HTMLInputElement | null>
    title: string
    onChange?: React.HTMLAttributes<HTMLInputElement>['onChange']
}

interface SelectItemProps {
    label: string
    onClick: () => void
    selected: boolean
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
            <div className="font-semibold md:text-[15px] max-md:text-[13px]">
                {title} {required && <span className="text-red-600">*</span>}
            </div>
            <input
                onChange={onChange}
                type={type}
                ref={ref}
                required={required}
                placeholder={placeholder}
                className={cn(
                    'border border-border-gray rounded-[5px] py-2 px-2 tracking-wider md:placeholder:text-[14px] text-[14px] max-md:placeholder:text-[12px]',
                    'hover:placeholder:text-font-gray hover:border-black',
                    'focus:placeholder:text-font-gray focus:border-black',
                )}
            />
        </div>
    )
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
                    'text-font-gray-deep ml-2 lg:text-[12px] select-none max-md:text-[12px]',
                    selected && 'text-black border-black',
                )}
            >
                {label}
            </div>
        </div>
    )
}

export const Contact = () => {
    const { refs, handlers, state } = useContact()
    const { companyNameRef, userNameRef, phoneRef, emailRef, contentRef } = refs
    const { enterprise, education, publicInstitution, partnership } =
        state.inquiryTypes

    return (
        <div
            className="w-full bg-black scroll-mt-18 *:select-none"
            id="contact"
        >
            <div
                className={cn(
                    'w-full mx-auto pb-25',
                    'lg:max-w-280 lg:px-5',
                    'md:pt-20 max-md:pt-10',
                )}
            >
                <div className="text-center text-white md:text-[40px] font-semibold tracking-wider max-md:text-[20px]">
                    귀사의 비즈니스에 xTool을 더하세요
                </div>
                <div
                    className={cn(
                        'text-center tracking-wide text-gray-400 break-keep',
                        'md:text-[15px] md:mt-5',
                        'max-md:mt-3 max-md:text-[13px] max-md:px-4',
                    )}
                >
                    기관의 예산과 운영 목적, 기업의 생산 공정에 가장 적합한
                    모델을 제안해 드립니다.
                </div>

                <div
                    className={cn(
                        "w-full rounded-[25px] mx-auto bg-[url('/contact.webp')] bg-no-repeat p-4",
                        'lg:bg-size-[120%] lg:bg-position-[10%_20%]',
                        'md:mt-20 md:bg-center md:bg-cover',
                        'max-md:bg-center max-md:bg-cover max-md:mt-10',
                    )}
                >
                    <div
                        className={cn(
                            'bg-white rounded-[15px]',
                            'lg:h-170',
                            'md:w-[50%] md:py-8 md:px-8',
                            'max-md:py-4 max-md:px-3',
                        )}
                    >
                        {/* Row 1 - 기관명, 성함*/}
                        <div
                            className={cn(
                                'flex',
                                'lg:gap-7 lg:flex-row',
                                'md:flex-col md:gap-3',
                                'max-md:flex-col max-md:gap-2',
                            )}
                        >
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
                        <div
                            className={cn(
                                'flex',
                                'lg:gap-7 lg:mt-8 lg:flex-row',
                                'md:flex-col md:gap-3 md:mt-3',
                                'max-md:flex-col max-md:mt-2 max-md:gap-2',
                            )}
                        >
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
                        <div className="md:mt-8 max-md:mt-3">
                            <div className="font-semibold md:text-[15px] max-md:text-[13px]">
                                문의 유형{' '}
                                <span className="text-red-600">*</span>
                            </div>
                            <div className="text-font-gray-deep md:text-[13px] max-md:text-[11px]">
                                다중선택 가능
                            </div>
                            <div className="flex lg:flex-row md:flex-col max-md:flex-col gap-2 md:mt-2 max-md:mt-1">
                                <SelectItem
                                    label="기업 도입 (R&D, 브랜딩, 생산)"
                                    selected={enterprise}
                                    onClick={() =>
                                        handlers.toggleInquiryType('enterprise')
                                    }
                                />

                                <SelectItem
                                    label="교육기관 도입 (학교, 대학교)"
                                    selected={education}
                                    onClick={() =>
                                        handlers.toggleInquiryType('education')
                                    }
                                />
                            </div>
                            <div className="flex lg:flex-row md:flex-col max-md:flex-col gap-2 mt-2">
                                <SelectItem
                                    label="공공기관 / 메이커스페이스 구축"
                                    selected={publicInstitution}
                                    onClick={() =>
                                        handlers.toggleInquiryType(
                                            'publicInstitution',
                                        )
                                    }
                                />
                                <SelectItem
                                    label="기타 비즈니스 파트너십"
                                    selected={partnership}
                                    onClick={() =>
                                        handlers.toggleInquiryType(
                                            'partnership',
                                        )
                                    }
                                />
                            </div>
                        </div>
                        {/* Detail - 상세 내용 */}
                        <div className="md:mt-8 max-md:mt-3">
                            <div className="font-semibold md:text-[15px] max-md:text-[13px]">
                                상세 내용
                            </div>
                            <textarea
                                ref={contentRef}
                                className="border border-border-gray rounded-[10px] md:placeholder:text-[15px] max-md:placeholder:text-[12px] max-h-30 min-h-30 text-[15px] resize-none md:mt-2 max-md:mt-1 p-2 w-full"
                                placeholder="도입 목적, 예상 수량, 필요한 지원 서비스 등을 적어주세요"
                            ></textarea>
                        </div>
                        {/* 개인정보 수집 동의 */}
                        <div className="flex gap-2 mt-2 items-center">
                            <div
                                onClick={handlers.privacyAgreementClick}
                                className="w-5.5 h-5.5 ml-1 rounded-[3px] bg-gray-100 border border-gray-300 cursor-pointer flex justify-center items-center"
                            >
                                {state.privacyAgreement && (
                                    <CheckIcon size={15} color="#444" />
                                )}
                            </div>
                            <div
                                className="font-notokr text-font-gray select-none cursor-pointer max-md:text-[14px] md:text-[13.5px] lg:text-[16px]"
                                onClick={handlers.privacyAgreementClick}
                            >
                                개인정보 수집 및 이용에 동의합니다.
                            </div>
                            <div
                                onClick={handlers.privacyTermClick}
                                className="font-semibold underline underline-offset-4 select-none cursor-pointer hover:text-gray-600 tracking-wide max-md:text-[14px] md:text-[13.5px] lg:text-[16px]"
                            >
                                자세히보기
                            </div>
                        </div>
                        {/* Submit - 제출 */}
                        <div
                            onClick={handlers.submitClick}
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
            {/* Loading Modal */}
            {state.modalActive && (
                <Loading
                    loading={state.loading}
                    hideModal={handlers.hideModal}
                />
            )}
            {/* Privacy term Modal */}
            {state.privacyModal && (
                <PrivacyTerm handleHideClick={handlers.hidePrivacyTermClick} />
            )}
        </div>
    )
}
