import React, { useState, useRef, useEffect } from "react";
import { FaRegFileExcel } from "react-icons/fa";

interface Service {
    name: string;
    pricePerSqFt: number;
    image: string;
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
    const [quality, setQuality] = useState<string>("Medium");
    const [size, setSize] = useState<number>(50);
    const timeLimit = 30;
    const [estimatedPrice, setEstimatedPrice] = useState<number>(0);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollBy(0, containerRef.current.scrollHeight);
        }
    }, [step]);


    const calculatePrice = () => {
        const basePrice = size * selectedService.pricePerSqFt;
        let qualityMultiplier = quality === "Premium" ? 1.5 : quality === "Medium" ? 1.2 : 1;
        let timeMultiplier = timeLimit < 15 ? 1.3 : timeLimit < 30 ? 1.1 : 1;
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
                <div className="text-center mt-10">
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
                </div>
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
                        {["3 თვე", "6 თვე", "9 თვე", "12 თვე", "18 თვე + "].map((q, _index) => (
                            <div
                                key={q}
                                className={`p-4 border-2 cursor-pointer bg-grayish ${quality === q ? "border-main-color" : "border-gray-300"}`}
                                onClick={() => setQuality(q)}
                            >
                                <p className="font-semibold text-main-color">{q}</p>
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
                            <FaRegFileExcel color="green" size={50} /> გადმოწერა
                        </span>
                    </div>
                    <Button onClick={() => tryAgain()}>თავიდან დაწყება</Button>
                </div>
            )}
        </div>
    );
};

export default PriceCalculator;
