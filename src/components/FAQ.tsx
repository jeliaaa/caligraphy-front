import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const FaqAccordion = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const { t } = useTranslation();
    const toggleAccordion = (index: number) => {
        if (openIndex !== index) {
            setOpenIndex(index);
        } else {
            setOpenIndex(null);
        }
    };

    const faqData = [
        {
            question: t("faqs_1"),
            answer: t("faqs_1_answer"),
        },
        {
            question: t("faqs_2"),
            answer: t("faqs_2_answer"),
        },
        {
            question: t("faqs_3"),
            answer: t("faqs_3_answer"),
        },
        {
            question: t("faqs_4"),
            answer: t("faqs_4_answer"),
        },
        {
            question: t("faqs_5"),
            answer: t("faqs_5_answer")
        },
        {
            question: t("faqs_6"),
            answer: t("faqs_6_answer")
        },
    ];

    return (
        <section className="w-full h-full py-12 px-1 md:px-20">
            <h2 className="text-3xl font-bold text-center text-main-color mb-6">
                {t('faqs')}
            </h2>
            <div className="max-w-full mx-auto space-y-4">
                {faqData.map((faq, index) => (
                    <div
                        key={index}
                        className={`border-t-2 ${openIndex === index ? 'border-secondary-color' : 'border-main-color'}`}
                        onClick={() => toggleAccordion(index)} // Toggle on click
                    >
                        <div className="flex justify-between items-center py-4 px-6 cursor-pointer">
                            <h3 className="text-main-color text-lg font-semibold w-[90%]" >
                                {faq.question}
                            </h3>
                            <span className="transition-all transform duration-300 flex items-center w-[10%]" >
                                {openIndex === index ? (
                                    <svg width={24} height={24} className='fill-main-color ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                                    </svg>
                                ) : (
                                    <svg width={24} height={24} className='fill-main-color ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/>
                                    </svg>
                                )}
                            </span>
                        </div>
                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index
                                ? 'max-h-[500px] opacity-100 py-4'
                                : 'max-h-0 opacity-0 py-0'
                                }`}
                        >
                            <div className="flex items-center px-6">
                                <span className="w-2 h-2 bg-secondary-color rounded-full"></span>
                                <p
                                    className="text-main-color ml-2"
                                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                                />
                            </div>
                        </div>
                        {/* Add bottom line only for the last FAQ item */}
                        {index === faqData.length - 1 && <div className="border-b-2 border-main-color"></div>}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FaqAccordion;
