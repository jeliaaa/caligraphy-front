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
import { useEffect, useState } from "react";
import { axiosV2 } from "../utils/axios";
import { SafeAdvantage } from "types/apiTypes/types";
import clsx from "clsx";

const ServiceBenefits = () => {
    const { t } = useTranslation()
    const [advantages, setAdvantages] = useState<SafeAdvantage[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axiosV2.get("/advantage/view").then((res) => {
            setAdvantages(res.data)
        }).catch((err) => {
            console.log(err);  
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    console.log(advantages)
    return (
        <div className="w-full bg-grayish py-5">
            <div className="h-[100px] flex items-center text-main-color justify-center">
                <h1 className="uppercase m-0 mb-4 text-3xl text-center">{t("advantages_title")}</h1>
            </div>
            <div className="flex flex-col gap-5">
                {loading ? skeleton : advantages.map((advantage: SafeAdvantage, i) => (
                    <div key={i} className={clsx(
                        "flex gap-y-10 flex-col-reverse items-center justify-between",
                        i % 2 != 0 ? "md:flex-row-reverse" : "md:flex-row"
                    )}>
                        <div className="w-full md:w-1/2">
                            <img src={`${process.env.REACT_APP_URL}/${advantage.image}`} alt={advantage.title} className="w-full h-full object-cover shadow-lg" />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col justify-center px-10">
                            <div className="md:bg-main-color md:rounded-full md:z-10 text-main-color md:text-grayish border-4 border-main-color py-5 px-5 md:px-20 mb-10 md:text-2xl text-center">{advantage.title}</div>
                            <div dangerouslySetInnerHTML={{ __html: advantage?.description }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}


const skeleton = new Array(5).fill(null).map((_, i) => (
    <div key={i} className={clsx(
        "flex flex-col-reverse gap-5 animate-pulse",
        i % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
    )}>
        <div className="w-full md:w-1/2 h-[600px] bg-gray-300 rounded-lg" />
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-5 px-10">
            <div className="h-14 w-2/3 bg-main-color self-center rounded-full" />
            <div className="h-4 w-full bg-gray-300 rounded" />
            <div className="h-4 w-3/4 bg-gray-300 rounded" />
            <div className="h-4 w-5/6 bg-gray-300 rounded" />
        </div>
    </div>
))
export default ServiceBenefits;