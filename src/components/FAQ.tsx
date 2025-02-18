import { useState } from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';

const FaqAccordion = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        if (openIndex !== index) {
            setOpenIndex(index);
        } else {
            setOpenIndex(null);
        }
    };

    const faqData = [
        {
            question: 'Are you selling real or virtual plots of land with trees?',
            answer: 'We sell plots of land with trees in the real world. <br />The trees we sell are tokenized, that is, the rights to make a profit on them are converted into tokens and entered into the blockchain.',
        },
        {
            question: 'What protection and guarantees are there for users?',
            answer: 'We provide protection through transparent blockchain technology and user agreements ensuring your investment rights.',
        },
        {
            question: 'Tell us at the level of a simple user, what is NftForest?',
            answer: 'NftForest allows you to invest in real-world plots of land through a decentralized tokenized platform.',
        },
        {
            question: 'How can you confirm that the site belongs to you?',
            answer: 'The site ownership is verified through a transparent decentralized system, linking users to the blockchain.',
        },
        {
            question: 'Why did you choose Paulownia?',
            answer: 'Paulownia is one of the fastest-growing tree species, making it an ideal choice for long-term investment with high yields and low environmental impact.',
        },
        {
            question: 'The user\'s profit is derived from where?',
            answer: 'The user\'s profit comes from the sale of timber, which is tokenized and tracked through the blockchain, ensuring transparency and real-time profit distribution.',
        },
        {
            question: 'The W3E profit is derived from where?',
            answer: 'W3E profit is generated through the appreciation of the value of tokenized assets, primarily from land and timber sales.',
        },
        {
            question: 'Why are tokenized assets better than the rest of crypto and traditional investments?',
            answer: 'Tokenized assets offer more transparency, security, and liquidity compared to traditional investments, and they are fully backed by tangible real-world assets.',
        },
        {
            question: 'Why did you choose such a difficult business?',
            answer: 'We chose this difficult business because it aligns with our mission to promote sustainability and build an investment ecosystem that is both profitable and environmentally responsible.',
        },
        {
            question: 'Who is responsible for selling timber?',
            answer: 'Timber is sold through our certified partners, ensuring compliance with environmental regulations and providing the highest quality products to buyers.',
        },
        {
            question: 'Is it worth becoming a user in Nftforest if you don’t understand blockchain technologies at all?',
            answer: 'Yes, Nftforest is designed to be user-friendly, with easy-to-understand interfaces and support, making it accessible to both blockchain novices and experts.',
        }
    ];

    return (
        <section className="w-full h-full py-12 px-1 md:px-20">
            <h2 className="text-3xl font-bold text-center capitalize text-main-color mb-6">
                asnwers to the frequently asked questions
            </h2>
            <div className="max-w-full mx-auto space-y-4">
                {faqData.map((faq, index) => (
                    <div
                        key={index}
                        className={`border-t-2 ${openIndex === index ? 'border-secondary-color' : 'border-main-color'}`}
                        onClick={() => toggleAccordion(index)} // Toggle on click
                    >
                        <div className="flex justify-between items-center py-4 px-6 cursor-pointer">
                            <h3 className="text-gray-500 text-lg font-semibold w-[90%]" >
                                {faq.question}
                            </h3>
                            <span className="text-secondary-color transition-all transform duration-300 flex items-center w-[10%]" >
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
                                    className="text-gray-500 ml-2"
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
