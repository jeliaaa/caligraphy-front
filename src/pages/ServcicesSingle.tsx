import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Element, scroller } from "react-scroll"; // Import Element and scroller from react-scroll
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "redux/store";
import { fetchServiceSingle } from "../redux/thunks/serviceThunk";
import karkasi from "../assets/photos/karkasi.jpeg";

const ServcicesSingle = () => {
    const { id } = useParams();
    const dispatch = useDispatch<AppDispatch>();
    const data = useSelector((state: RootState) => state.services.singleData);
    const status = useSelector((state: RootState) => state.services.singleStatus);
    const isLoading = status === "loading" || status === "idle";

    useEffect(() => {
        if (id) {
            // Scroll to the section if the id exists in the URL
            scroller.scrollTo(id, {
                smooth: true,
                offset: -50, // Optional: adjust offset for better alignment
                duration: 500, // Optional: smooth scroll duration
            });
        }
    }, [id]);

    if (isLoading) {
        console.log("Loading...");
    }

    return (
        <div className="w-full bg-grayish">
            {/* First Section */}
            <Element name="0">
                <div className="flex gap-y-10 md:flex-row flex-col-reverse items-center justify-between">
                    <div className="w-full md:w-1/2">
                        <img
                            src={karkasi}
                            alt="Before remodeling"
                            className="w-full h-full object-cover shadow-lg"
                        />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col justify-center px-10">
                        <h2 className="text-4xl font-semibold text-main-color mb-4">სრული რემონტი</h2>
                        <p className="text-xl text-main-color mb-6">
                            ობიექტის საექსპერტო დასკვნა. <br />
                            შემოწმდება: კედლის და კუთხეების სისწორე, მოჭიმული იატაკის დაგების ხარისხი და სისწორე, სავენტილაციო და საკანალიზაციო არხები, შემოსასვლელი კარის და ვიტრაჟების მონტაჟის ხარისხი. <br />
                            <ul>
                                <li>ფიქსირებული ფასი- 1მ2 3$</li>
                                <li>აზომვითი სამუშაოები და 2D  პროექტირება:
                                    საცხოვრებელი ფართის გეგმარება, ელექტრო , სანტექნიკური, სავენტილაციო წერტილების და ავეჯის განლაგების გეგმა,
                                    ფიქსირებული ფასი- 1მ2 10$</li>
                                <li>3D პროექტირება:
                                    შეთანხმებული 2D პროექტის ვიზუალიზაცია.
                                    ფიქსირებული ფასი- 1მ2 20$</li>
                            </ul>
                            <br />
                            <span className="underline">სარემონტო სამუშაოები შავი კარკასიდან თეთრი კარკასის კონდიაცმდე:</span> <br />
                            კედლების ამოშენება, ელექტრო სავენტილაციო და სანტექნიკური წერტილების მოწყობა, კონდინცირების არხის გაყვანა, მოჭიმული იატაკის მოწყობა, სანკვანძის ჰიდროიზოლაცია, კედლების ბათქაში.
                            ფიქსირებული ფასი- 1მ2 100$
                        </p>
                    </div>
                </div>
            </Element>

            {/* Second Section */}
            <Element name="1">
                <div className="flex mt-5 gap-y-10 md:mt-0 md:flex-row flex-col items-center justify-between">
                    <div className="w-full md:w-1/2 flex flex-col justify-center px-10">
                        <h2 className="text-4xl font-semibold text-gray-800 mb-4">სარემონტო სამუშაოები თეთრი კარკასიდან მწვანე კარკასის კონდიციამდე</h2>
                        <p className="text-xl text-gray-700 mb-6">
                            კედლების მომზადება შესაღებად, აბაზანის კერამიკული ფილებით მოწყობა, კედლების შეღებვა, ლამინირებული იატაკის მოწყობა, დასაჭიმი ჭერის მონტაჟი, აბაზანაში უნიტაზის, საშხაპე კაბინის, ხელსაბანის და აქსესუარების მონტაჟი, ელექტრო ფურნიტურის  მონტაჟი.
                            ფასი- 1მ2 370$ დან
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img
                            src={karkasi}
                            alt="After remodeling"
                            className="w-full h-full object-cover shadow-lg"
                        />
                    </div>
                </div>
            </Element>

            {/* Pricing Section */}
            <Element name="2">
                <div className="flex gap-y-10 md:flex-row flex-col-reverse items-center justify-between">
                    <div className="w-full md:w-1/2">
                        <img
                            src={karkasi}
                            alt="Before remodeling"
                            className="w-full h-full object-cover shadow-lg"
                        />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col justify-center px-10">
                        <h2 className="text-4xl font-semibold text-main-color mb-4">
                            სამუშაოები მწვანე კარკასიდან სრულ კონდიციამდე
                        </h2>
                        <p className="text-xl text-main-color mb-6">
                            ბინის ავეჯით და ტექნიკით მოწყობა.
                            ფასი 1მ2 180$ დან
                            ფასები მითითებულია  სამუშაო ფართის მიხედვით
                            სარემონტო სამუშაოების სრული პაკეტი დასრულებულია.

                        </p>
                    </div>
                </div>
            </Element>
            <div className="w-full h-[100px]" />
        </div>
    );
};

export default ServcicesSingle;
