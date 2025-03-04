import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Element, scroller } from "react-scroll"; // Import Element and scroller from react-scroll
import karkasi from "../assets/photos/karkasi.jpeg";
import { useTranslation } from "react-i18next";

const ServcicesSingle = () => {
    const { id } = useParams();

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
    const { t } = useTranslation()

    return (
        <div className="w-full bg-grayish">
            <div className="h-[100px] flex mt-5 items-center text-main-color justify-center">
                <h1 className="uppercase m-0 mb-4 text-3xl text-center">რატომ უნდა აირჩიოთ ჩვენი სერვისი?</h1>
            </div>
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
                    <div className="w-full md:w-1/2 flex flex-col justify-center px-10 py-5">
                        <div className="md:bg-main-color md:rounded-full md:z-10 text-main-color md:text-grayish border-4 border-main-color py-5 px-5 md:px-20 mb-10 md:text-2xl text-center">{t('service1')}</div>

                        <p className="text-xl text-main-color mb-6">
                            {t('service1Desc')}
                            {/* ობიექტის საექსპერტო დასკვნა. <br />
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
                            <span className="underline">სარემონტო სამუშაოები შავი კარკასიდან თეთრი კარკასის კონდიაცმდე:</span> <br /> */}
                            {/* კედლების ამოშენება, ელექტრო სავენტილაციო და სანტექნიკური წერტილების მოწყობა, კონდინცირების არხის გაყვანა, მოჭიმული იატაკის მოწყობა, სანკვანძის ჰიდროიზოლაცია, კედლების ბათქაში.
                            ფიქსირებული ფასი- 1მ2 100$ */}
                        </p>
                    </div>
                </div>
            </Element>

            {/* Second Section */}
            <Element name="1">
                <div className="flex mt-5 gap-y-10 md:mt-0 md:flex-row flex-col items-center justify-between">
                    <div className="w-full md:w-1/2 flex flex-col justify-center px-10">
                        <div className="md:bg-main-color md:rounded-full md:z-10 text-main-color md:text-grayish border-4 border-main-color py-5 px-5 md:px-20 mb-10 md:text-2xl text-center">{t('service2')}</div>


                        <p className="text-xl text-main-color mb-6">
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
                    <div className="md:bg-main-color md:rounded-full md:z-10 text-main-color md:text-grayish border-4 border-main-color py-5 px-5 md:px-20 mb-10 md:text-2xl text-center">{t('service3')}</div>
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
