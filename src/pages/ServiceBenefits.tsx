// import React from "react";
// import image1 from "../assets/photos/bathroom-kitchen-remodel-plano-texas-dfw-improved0009.jpg"
// import image2 from "../assets/photos/home_remodeling_myths.jpg"
// import image3 from "../assets/photos/images.jpg"
// import image4 from "../assets/photos/karkasi.jpeg"


// const ServiceBenefits: React.FC = () => {
//     return (
//         <div className="max-w-6xl mx-auto p-6">
//             <div className="text-3xl font-bold text-center mb-8 text-main-color">რატომ უნდა აირჩიოთ ჩვენი სერვისი?</div>

//             <div className="grid md:grid-cols-2 gap-10">
//                 {/* Section 1 */}
//                 <div className="flex flex-col items-center text-center">
//                     <img
//                         src={image1}
//                         alt="ყველა სერვისი ერთ სივრცეში"
//                         className="w-full h-64 object-cover rounded-lg shadow-md"
//                     />
//                     <h3 className="text-xl font-semibold mt-4">ყველა სერვისი ერთ სივრცეში</h3>
//                     <p className="mt-2 text-gray-600">
//                         თქვენ არ დაგჭირდებათ სხვადასხვა კომპანიასთან ან სპეციალისტთან დაკავშირება, ჩვენი გუნდი ყველა საჭირო სერვისს მოგაწვდით: პროექტირებით დაწყებული, სრული რემონტით დამთავრებული, რემონტის მსვლელობის ეტაპობრივი მონიტორინგი (ფოტო, ვიდეო ანგარიში) საშუალებაა მშვიდად, დისტანციურად, ადევნოთ თვალყური რემონტის მიმდინარეობას
//                     </p>
//                 </div>

//                 {/* Section 2 */}
//                 <div className="flex flex-col items-center text-center">
//                     <img
//                         src={image2}
//                         alt="ხელმისაწვდომი ფასები"
//                         className="w-full h-64 object-cover rounded-lg shadow-md"
//                     />
//                     <h3 className="text-xl font-semibold mt-4">ხელმისაწვდომი ფასები</h3>
//                     <p className="mt-2 text-gray-600">
//                         ერთიანი სერვისით სარგებლობისას, შენ ზოგავ თანხას, ვიდრე ცალკეულ კომპანიასა თუ სპეციალისტთან დაკავშირებისას.
//                     </p>
//                 </div>
//             </div>

//             <div className="grid md:grid-cols-2 gap-10 mt-10">
//                 {/* Section 3 */}
//                 <div className="flex flex-col items-center text-center">
//                     <img
//                         src={image3}
//                         alt="სამუშაოს ვადაში შესრულება"
//                         className="w-full h-64 object-cover rounded-lg shadow-md"
//                     />
//                     <h3 className="text-xl font-semibold mt-4">სამუშაოს ვადაში შესრულება</h3>
//                     <p className="mt-2 text-gray-600">
//                         თითოეულ სამუშაოს ასრულებს სპეციალისტებით დაკომპლექტებული ერთიანი გუნდი, ამას კი ბევრად ნაკლები დრო სჭირდება, ვიდრე თითოეული სერვისის ცალ-ცალკე შეკვეთას.
//                     </p>
//                 </div>

//                 {/* Additional Benefits */}
//                 <div className="flex flex-col items-center text-center">
//                     <img
//                         src={image4}
//                         alt="დამატებითი სარგებელი"
//                         className="w-full h-64 object-cover rounded-lg shadow-md"
//                     />
//                     <h3 className="text-xl font-semibold mt-4">დამატებითი სარგებელი</h3>
//                     <p className="mt-2 text-gray-600">
//                         ●	საჭიროების შემთხვევაში სამუშაოებში შედის ტიხრების დემონტაჟი, ძველი საფარის მოხსნა და სხვა სახის მოსამზადებელი სამუშაოები. <br /> 
//                         ●	ჩვენი სერვისი ასევე მოიცავს რემონტის შემდეგ დარჩენილი ნაგვის გატანას. სამუშაოების ბოლოს, ბინა საცხოვრებლად გამზადებული იქნება. <br />
//                         ●	რემონტის დაგეგმვისას ვითვალისწინებთ მფლობელის ყველა სურვილს და ოჯახის წევრების საჭიროებებს. მომხმარებელი იღებს ზედმიწევნით შესრულებულ პროექტს. <br />
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ServiceBenefits;
import { useTranslation } from "react-i18next";
import image1 from "../assets/photos/bathroom-kitchen-remodel-plano-texas-dfw-improved0009.jpg";
import image2 from "../assets/photos/home_remodeling_myths.jpg";
import image3 from "../assets/photos/images3.jpg";
import image4 from "../assets/photos/karkasi.jpeg";

const ServiceBenefits = () => {
    const { t } = useTranslation()
    return (
        <div className="w-full bg-grayish py-5">
            <div className="h-[100px] flex items-center text-main-color justify-center">
                <h1 className="uppercase m-0 mb-4 text-3xl text-center">{t("advantages_title")}</h1>
            </div>

            {/* First Section */}
            <div className="flex gap-y-10 md:flex-row flex-col-reverse items-center justify-between">
                <div className="w-full md:w-1/2">
                    <img src={image1} alt={t("all_services_in_one_place")} className="w-full h-full object-cover shadow-lg" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center px-10">
                    <div className="md:bg-main-color md:rounded-full md:z-10 text-main-color md:text-grayish border-4 border-main-color py-5 px-5 md:px-20 mb-10 md:text-2xl text-center">{t("all_services_in_one_place")}</div>
                    <p className="text-xl text-main-color mb-6">
                        {t("all_services_in_one_place_description")}
                    </p>
                </div>
            </div>

            {/* Second Section */}
            <div className="flex mt-5 gap-y-10 md:mt-0 md:flex-row flex-col items-center justify-between">
                <div className="w-full md:w-1/2 flex flex-col justify-center px-10">
                    <div className="md:bg-main-color md:rounded-full md:z-10 text-main-color md:text-grayish border-4 border-main-color py-5 px-5 md:px-20 mb-10 md:text-2xl text-center">{t("affordable_prices")}</div>

                    <p className="text-xl text-main-color mb-6">
                        {t("affordable_prices_description")}
                    </p>
                </div>
                <div className="w-full md:w-1/2">
                    <img src={image2} alt={t("affordable_prices")} className="w-full h-full object-cover shadow-lg" />
                </div>
            </div>

            {/* Third Section */}
            <div className="flex mt-5 gap-y-10 md:mt-0 md:flex-row flex-col-reverse items-center justify-between">
                <div className="w-full md:w-1/2">
                    <img src={image3} alt={t("fast_and_efficient_work")} className="w-full h-full object-cover shadow-lg" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center px-10">
                    <div className="md:bg-main-color md:rounded-full md:z-10 text-main-color md:text-grayish border-4 border-main-color py-5 px-5 md:px-20 mb-10 md:text-2xl text-center">{t("fast_and_efficient_work")}</div>

                    <p className="text-xl text-main-color mb-6">
                        {t("fast_and_efficient_work_description")}
                    </p>
                </div>
            </div>

            {/* Fourth Section */}
            <div className="flex mt-5 gap-y-10 md:mt-0 md:flex-row flex-col items-center justify-between">
                <div className="w-full md:w-1/2 flex flex-col justify-center px-10">
                    <div className="md:bg-main-color md:rounded-full md:z-10 text-main-color md:text-grayish border-4 border-main-color py-5 px-5 md:px-20 mb-10 md:text-2xl text-center">{t("addictional_benefits")}</div>

                    <p className="text-xl text-main-color mb-6">
                        ●	{t("addictional_benefits_0")} <br />
                        ●	{t("addictional_benefits_1")} <br />
                        ●	{t("addictional_benefits_2")} <br />
                    </p>
                </div>
                <div className="w-full md:w-1/2">
                    <img src={image4} alt="დამატებითი სარგებელი" className="w-full h-full object-cover shadow-lg" />
                </div>
            </div>
        </div>
    )
}
export default ServiceBenefits;