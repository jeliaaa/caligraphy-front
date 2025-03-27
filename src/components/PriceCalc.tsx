import React, { useState, useRef, useEffect } from "react";
import { animateScroll, Element } from "react-scroll";

interface Service {
    name: string;
    pricePerSqFt: number;
    image: string;
}

interface timeType {
    title: string;
    amountInDays: number
}

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
}

const services: Service[] = [
    { name: "Painting", pricePerSqFt: 1.5, image: "/images/painting.jpg" },
    { name: "Flooring", pricePerSqFt: 3.2, image: "/images/flooring.jpg" },
    { name: "Roofing", pricePerSqFt: 5.0, image: "/images/roofing.jpg" },
    { name: "Plumbing", pricePerSqFt: 4.0, image: "/images/plumbing.jpg" },
    { name: "Electrical Work", pricePerSqFt: 6.0, image: "/images/electrical.jpg" },
];

const timeLimit: timeType[] = [
    { title: "1 თვე", amountInDays: 30 },
    { title: "3 თვე", amountInDays: 90 },
    { title: "6 თვე", amountInDays: 180 },
    { title: "9 თვე", amountInDays: 270 },
    { title: "12+ თვე", amountInDays: 360 }
]

const Button: React.FC<ButtonProps> = ({ onClick, children }) => (
    <button
        onClick={onClick}
        className="p-2 bg-main-color text-white hover:bg-white hover:text-main-color transition m-4"
    >
        {children}
    </button>
);

const PriceCalculator: React.FC = () => {
    const [step, setStep] = useState<number>(0);
    const [selectedService, setSelectedService] = useState<Service>(services[0]);
    const [quality, setQuality] = useState<string>("დაბალი");
    const [size, setSize] = useState<number>(50);
    const [timeLimitState, setTimeLimit] = useState<number>(30);
    const [estimatedPrice, setEstimatedPrice] = useState<number>(0);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        animateScroll.scrollTo(step * 500)
    }, [step]);


    const calculatePrice = () => {
        const basePrice = size * selectedService.pricePerSqFt;
        let qualityMultiplier = quality === "Premium" ? 1.5 : quality === "Medium" ? 1.2 : 1;
        let timeMultiplier = timeLimitState < 45 ? 1.3 : timeLimitState < 120 ? 1.1 : 1;
        setEstimatedPrice(basePrice * qualityMultiplier * timeMultiplier);
    };

    const tryAgain = () => {
        setStep(0);
        window.location.href = 'calculate'
    }
    return (
        <div ref={containerRef} className="w-full flex flex-col items-center p-6 bg-third-color min-h-[80dvh] overflow-y-auto">
            {step >= 0 && (
                <div className="text-center py-10 h-full">
                    <h2 className="text-xl font-bold mb-4 text-white">გსურთ გაიგოთ ჩვენი მომსახურების საფასური?</h2>
                    <Button onClick={() => setStep(1)}>კალკულციის დაწყება</Button>
                </div>
            )}
            {step >= 1 && (
                <Element name="1" className="text-center mt-10">
                    <h2 className="text-xl font-bold mb-4 text-white">რა ტიპის სერვისით ხართ დაინტერესებული?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {services.map((service) => (
                            <div
                                key={service.name}
                                className={`p-4 border-2 cursor-pointer bg-grayish ${selectedService.name === service.name ? "border-main-color" : "border-gray-300"}`}
                                onClick={() => setSelectedService(service)}
                            >
                                <img src='https://picsum.photos/200' alt={service.name} className="w-full h-64 object-cover rounded-md mb-2" />
                                <p className="font-semibold">{service.name}</p>
                            </div>
                        ))}
                    </div>
                    <Button onClick={() => setStep(2)}>შემდეგი</Button>
                </Element>
            )}
            {step >= 2 && (
                <div className="text-center mt-10">
                    <h2 className="text-xl font-bold mb-4 text-white">აირჩიეთ რემონტის საფასო კატეგორია</h2>
                    <div className="flex flex-col gap-y-5">
                        {["დაბალი", "საშუალო", "პრემიუმი"].map((q, _index) => (
                            <div
                                key={q}
                                className={`p-4 border-2 cursor-pointer bg-grayish ${quality === q ? "border-main-color" : "border-gray-300"}`}
                                onClick={() => setQuality(q)}
                            >
                                <p className="font-semibold text-main-color">{q} <span className="ml-4 text-yellow-700">{'$'.repeat(_index + 1)}</span></p>
                            </div>
                        ))}
                    </div>
                    <Button onClick={() => setStep(3)}>შემდეგ</Button>
                </div>
            )}
            {step >= 3 && (
                <div className="text-center mt-10">
                    <h2 className="text-xl font-bold mb-4 text-white">მიუთითეთ ფართის ზომა (კვ.მ)</h2>
                    <input
                        type="number"
                        value={size}
                        onChange={(e) => setSize(Number(e.target.value))}
                        className="p-2 border w-32 text-center text-main-color"
                    />
                    <Button onClick={() => setStep(4)}>შემდეგი</Button>
                </div>
            )}
            {step >= 4 && (
                <div className="text-center mt-10">
                    <h2 className="text-xl px-10 font-bold mb-4 text-white">რამდენი დრო გვაქვს?</h2>
                    <div className="flex flex-col gap-y-5">
                        {timeLimit.map((q, _index) => (
                            <div
                                key={_index}
                                className={`p-4 border-2 cursor-pointer bg-grayish ${timeLimitState === q.amountInDays ? "border-main-color" : "border-gray-300"}`}
                                onClick={() => setTimeLimit(q.amountInDays)}
                            >
                                <p className="font-semibold text-main-color">{q.title}</p>
                            </div>
                        ))}
                    </div>
                    <Button onClick={() => { calculatePrice(); setStep(5); }}>კალკულაცია</Button>
                </div>
            )}
            {step >= 5 && (
                <div className="text-center mt-10">
                    <h2 className="text-xl font-bold mb-4 text-white">საბოლოო ფასი</h2>
                    <p className="text-2xl font-semibold bg-grayish p-5 text-main-color">${estimatedPrice.toFixed(2)}</p>
                    <div className="p-5 flex flex-col items-center">
                        <p className="text-white flex items-center text-2xl">გსურთ ინვოისის ხილვა? </p>
                        <span className="bg-white mt-4 p-4 flex items-center cursor-pointer text-xl hover:text-2xl hover:text-green-500">
                            <svg className="text-green w-[50px] h-[50px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM155.7 250.2L192 302.1l36.3-51.9c7.6-10.9 22.6-13.5 33.4-5.9s13.5 22.6 5.9 33.4L221.3 344l46.4 66.2c7.6 10.9 5 25.8-5.9 33.4s-25.8 5-33.4-5.9L192 385.8l-36.3 51.9c-7.6 10.9-22.6 13.5-33.4 5.9s-13.5-22.6-5.9-33.4L162.7 344l-46.4-66.2c-7.6-10.9-5-25.8 5.9-33.4s25.8-5 33.4 5.9z"/></svg> გადმოწერა
                        </span>
                    </div>
                    <Button onClick={() => tryAgain()}>თავიდან დაწყება</Button>
                </div>
            )}
        </div>
    );
};

export default PriceCalculator;
