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
            question: 'რა ღირს შავი კარკასის რემონტი?',
            answer: 'არ ვიცი - დეველოპერი.',
        },
        {
            question: 'რა ღირს თეთრი კარკასის რემონტი?',
            answer: 'არ ვიცი - დეველოპერი',
        },
        {
            question: 'რა დროში ასრულებთ სარემონტო სამუშაოებს?',
            answer: 'არ ვიცი - დეველოპერი',
        },
        {
            question: 'როგორ უნდა გადავიხადო რემონტის თანხა?',
            answer: 'თანხის გადახდა შესაძლებელია თქვენზე მორგებული გრაფიკით.',
        },
        {
            question: 'როგორ შეგითანხმოთ ჩემი სივრცის დიზაინ პროექტი?',
            answer: `დიზაინის შეთანხმება შესაძლებელია ინდივიდუალურად, არის რამდენიმე ვარიანტი: <br />
            1 - თქვენ გვაწვდით თვენს მიერ მოწონებულ, შერჩეულ ფოტო მასალას(რეფერენს ფაილებს)რასაც მოვარგებთ თქვენს ბინას <br />
            2 - თქვენ უკვე გაქვთ გამზადებული დიზაინ პროექტი <br />
            3 - თქვენ მოგწონთ ჩვენს მიერ უკვე გაკეთებული დიზაინი <br />
            4 - თქვენ გვიკვეთავთ და ჩვენ გიმზადებთ დიზაინ პროექტს`
        },
        {
            question: 'რატომ უნდა ავირჩიო თქვენი სერვისი? ',
            answer: 'აქ ყველა სერვისს ერთობლივად მიიღებ, დაზოგავ თანხას და ჩაიბარებ  ვადაში შესრულებულ პროექტს. ასევე ჩვენი საქმიანობა მოიცავს რემონტისთვის მოსამზადებელ სამუშაოებს(ტიხრების დემონტაჟი, ძველი საფარის მოხსნა და ა.შ.), რემონტის შემდეგ დარჩენილი ნაგვის გატანას'
        },
        {
            question: 'რა გარანტიები გაქვთ სამუშაოებთან დაკავშირებით?',
            answer: 'ჩვენი ხელშეკრულება ითვალისწინებს სამუშაოს შემსრულებლის ფინანსურ პასუხისმგებლობას.',
        },
        {
            question: 'რა სირთულის სამუშაოებს მოიცავს თქვენი სერვისი?',
            answer: 'ჩვენი სარემონტო სერვისი მოიცავს ნებისმიერი სირთულის სამუშაოს: დაწყებული მცირე განახლებებიდან, დასრულებული სივრცის სრული ტრანსფორმაციით.',
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
