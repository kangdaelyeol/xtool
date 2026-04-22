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

const inputStyle = 'flex-1 font-pretendard text-title-black'

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
            <div className="font-semibold md:text-[18px] max-md:text-[18px] tracking-[-0.5px] text-black-title">
                {title} {required && <span className="text-red-600">*</span>}
            </div>
            <input
                onChange={onChange}
                type={type}
                ref={ref}
                required={required}
                placeholder={placeholder}
                className={cn(
                    'border border-border-gray rounded-[8px] py-2 px-2 tracking-[-0.5px] md:placeholder:text-[16px] text-[16px] max-md:placeholder:text-[14px]',
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
                'flex flex-1 items-center border border-border-gray p-3 rounded-[8px] cursor-pointer',
                'hover:border-black',
                selected && 'bg-[#eeeeee] border-black',
            )}
        >
            {selected ? (
                <CheckIcon color="#000000" size={12} />
            ) : (
                <CircleIcon color="#777777" size={12} />
            )}
            <div
                className={cn(
                    'text-font-gray-deep md:ml-2 max-md:ml-1 lg:text-[16px] select-none max-md:text-[14px] font-pretendard tracking-[-0.5px]',
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
            className="w-full bg-black *:select-none py-25 max-md:py-15 md:scroll-mt-18 max-md:scroll-mt-8"
            id="contact"
        >
            <div className={cn('w-full mx-auto', 'lg:max-w-280 md:px-5')}>
                <div className="text-center text-white md:text-[40px] font-bold tracking-[-1.2px] max-md:text-[25px]">
                    귀사의 비즈니스에{' '}
                    <span className="font-montserrat">xTool</span>을 더해보세요
                </div>
                <div
                    className={cn(
                        'text-center tracking-[-0.6px] text-[#d9d9d9] break-keep font-pretendard',
                        'md:text-[20px] md:mt-3',
                        'max-md:mt-2 max-md:text-[12.5px]',
                    )}
                >
                    기관의 예산과 운영 목적, 기업의 생산 환경에 맞춰 최적의
                    모델을 제안드립니다.
                </div>

                <div
                    className={cn(
                        'w-full rounded-[15px] mx-auto',
                        'md:mt-10',
                        'max-md:mt-10 max-md:px-6',
                    )}
                >
                    <div
                        className={cn(
                            'bg-white rounded-[16px] bg-white w-full max-w-200 mx-auto',
                            'md:py-8 md:px-8',
                            'max-md:p-4',
                        )}
                    >
                        {/* Row 1 - 기관명, 성함*/}
                        <div
                            className={cn(
                                'flex',
                                'lg:gap-3 lg:flex-row',
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
                                className={inputStyle}
                            />
                            <Input
                                ref={userNameRef}
                                type="text"
                                required
                                placeholder="직함 및 성함"
                                title="담당자 성함/직함"
                                className={inputStyle}
                            />
                        </div>
                        {/* Row 2 - 연락처, 이메일*/}
                        <div
                            className={cn(
                                'flex',
                                'lg:gap-3 lg:mt-6 lg:flex-row',
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
                                className={inputStyle}
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
                                className={inputStyle}
                            />
                        </div>
                        {/* Inquiry type - 문의 유형*/}
                        <div className="md:mt-8 max-md:mt-3">
                            <div className="font-semibold md:text-[18px] max-md:text-[18px] font-pretendard tracking-[-0.5px]">
                                문의 유형{' '}
                                <span className="text-red-600">*</span>
                            </div>
                            <div className="text-font-gray-deep md:text-[14px] max-md:text-[14px] font-pretendard tracking-[-0.4px]">
                                중복 선택 가능
                            </div>
                            <div className="flex lg:flex-row md:flex-col max-md:flex-col gap-3 md:mt-2 max-md:mt-1">
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
                            <div className="flex lg:flex-row md:flex-col max-md:flex-col gap-3 mt-2">
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
                            <div className="font-semibold md:text-[18px] max-md:text-[18px] tracking-[-0.5px] font-pretendard">
                                상세 내용
                            </div>
                            <textarea
                                ref={contentRef}
                                className={cn(
                                    'border border-border-gray p-3 w-full max-h-30 min-h-30 resize-none rounded-[8px] ',
                                    'md:text-[16px] mt-2 md:placeholder:text-[16px] tracking-[-0.5px] placeholder:font-pretendard',
                                    'max-md:text-[14px] max-md:placeholder:text-[14px] max-md:placeholder:break-keep',
                                )}
                                placeholder="도입 목적, 예상 수량, 필요하신 지원 내용 등을 자유롭게 작성해 주세요"
                            ></textarea>
                        </div>
                        {/* 개인정보 수집 동의 */}
                        <div className="flex gap-2 mt-2 py-3 items-center">
                            <div
                                onClick={handlers.privacyAgreementClick}
                                className="w-5.5 h-5.5 ml-1 rounded-[3px] bg-gray-100 border border-gray-300 cursor-pointer flex justify-center items-center"
                            >
                                {state.privacyAgreement && (
                                    <CheckIcon size={15} color="#444" />
                                )}
                            </div>
                            <div
                                className="font-pretendard text-font-gray font-[300] select-none cursor-pointer max-md:text-[14px] md:text-[16px] lg:text-[16px] tracking-[-0.5px]"
                                onClick={handlers.privacyAgreementClick}
                            >
                                개인정보 수집 및 이용에 동의합니다.
                            </div>
                            <div
                                onClick={handlers.privacyTermClick}
                                className="underline underline-offset-4 select-none cursor-pointer hover:text-gray-600 max-md:text-[14px] md:text-[16px] font-pretendard tracking-[-0.5px]"
                            >
                                자세히보기
                            </div>
                        </div>
                        {/* Submit - 제출 */}
                        <div
                            onClick={handlers.submitClick}
                            className={cn(
                                'mt-3 select-none w-fullv font-[700] cursor-pointer bg-black text-white text-center font-pretendard rounded-[8px] py-3.5 text-[20px] tracking-[-0.6px]',
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
