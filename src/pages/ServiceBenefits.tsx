import React from "react";
import image1 from "../assets/photos/bathroom-kitchen-remodel-plano-texas-dfw-improved0009.jpg"
import image2 from "../assets/photos/home_remodeling_myths.jpg"
import image3 from "../assets/photos/images.jpg"
import image4 from "../assets/photos/karkasi.jpeg"


const ServiceBenefits: React.FC = () => {
    return (
        <div className="max-w-6xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mb-8 text-main-color">რატომ უნდა აირჩიოთ ჩვენი სერვისი?</h2>

            <div className="grid md:grid-cols-2 gap-10">
                {/* Section 1 */}
                <div className="flex flex-col items-center text-center">
                    <img
                        src={image1}
                        alt="ყველა სერვისი ერთ სივრცეში"
                        className="w-full h-64 object-cover rounded-lg shadow-md"
                    />
                    <h3 className="text-xl font-semibold mt-4">ყველა სერვისი ერთ სივრცეში</h3>
                    <p className="mt-2 text-gray-600">
                        ჩვენ გთავაზობთ ყველა საჭირო სერვისს ერთ სივრცეში: პროექტირებით დაწყებული, სრული რემონტით დამთავრებული.
                    </p>
                </div>

                {/* Section 2 */}
                <div className="flex flex-col items-center text-center">
                    <img
                        src={image2}
                        alt="ხელმისაწვდომი ფასები"
                        className="w-full h-64 object-cover rounded-lg shadow-md"
                    />
                    <h3 className="text-xl font-semibold mt-4">ხელმისაწვდომი ფასები</h3>
                    <p className="mt-2 text-gray-600">
                        ერთიანი სერვისით სარგებლობისას, შენ ზოგავ თანხას, ვიდრე ცალკეულ კომპანიასთან დაკავშირებისას.
                    </p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10 mt-10">
                {/* Section 3 */}
                <div className="flex flex-col items-center text-center">
                    <img
                        src={image3}
                        alt="სამუშაოს ვადაში შესრულება"
                        className="w-full h-64 object-cover rounded-lg shadow-md"
                    />
                    <h3 className="text-xl font-semibold mt-4">სამუშაოს ვადაში შესრულება</h3>
                    <p className="mt-2 text-gray-600">
                        თითოეულ სამუშაოს ასრულებს ერთიანი გუნდი, რაც მნიშვნელოვნად ამცირებს დროის ხარჯს.
                    </p>
                </div>

                {/* Additional Benefits */}
                <div className="flex flex-col items-center text-center">
                    <img
                        src={image4}
                        alt="დამატებითი სარგებელი"
                        className="w-full h-64 object-cover rounded-lg shadow-md"
                    />
                    <h3 className="text-xl font-semibold mt-4">დამატებითი სარგებელი</h3>
                    <p className="mt-2 text-gray-600">
                        ჩვენ ვასრულებთ მოსამზადებელ სამუშაოებს და უზრუნველყოფთ ნაგვის გატანას, ბინა საცხოვრებლად გამზადებული იქნება.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ServiceBenefits;