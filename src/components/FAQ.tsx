import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaPlus, FaTimes } from 'react-icons/fa';

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
            answer: `${t("faqs_5_answer")} <br />
            1 - ${t("faqs_5_answer_option_0")} <br />
            2 - ${t("faqs_5_answer_option_1")} <br />
            3 - ${t("faqs_5_answer_option_2")} <br />
            4 - ${t("faqs_5_answer_option_3")}`
        },
        {
            question: t("faqs_6"),
            answer: t("faqs_6_answer")
        },
        {
            question: t("faqs_7"),
            answer: t("faqs_7_answer")
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
                            <span className="text-main-color transition-all transform duration-300 flex items-center w-[10%]" >
                                {openIndex === index ? (
                                    <FaTimes size={24} />
                                ) : (
                                    <FaPlus size={24} />
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
