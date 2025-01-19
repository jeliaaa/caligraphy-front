import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { AppDispatch, RootState } from "redux/store";
import { fetchServiceSingle } from "../redux/thunks/serviceThunk";
import karkasi from "../assets/photos/karkasi.jpeg"


const ServcicesSingle = () => {
    const { id } = useParams();
    const dispatch = useDispatch<AppDispatch>();
    const data = useSelector((state: RootState) => state.services.singleData);
    const status = useSelector((state: RootState) => state.services.singleStatus);
    const isLoading = useMemo(() => status === 'loading' || status === 'idle', [status]);

    useEffect(() => {
        id && dispatch(fetchServiceSingle(id))
    }, [dispatch, id])
    return (
        <div className="w-full bg-grayish">
            <div className="h-[100px] flex items-center text-main-color justify-center">
                <h1 className="uppercase m-0 text-3xl">{data?.name}</h1>
            </div>
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
                        Transform Your Space
                    </h2>
                    <p className="text-xl text-main-color mb-6">
                        Our remodeling services are tailored to meet your needs, ensuring that your space is transformed into a more functional and beautiful environment. From kitchen upgrades to full home renovations, we bring your vision to life.
                    </p>

                </div>
            </div>

            {/* Second Section - Photo on the right, Text on the left */}
            <div className="flex mt-5 gap-y-10 md:mt-0 md:flex-row flex-col items-center justify-between">
                <div className="w-full md:w-1/2 flex flex-col justify-center px-10">
                    <h2 className="text-4xl font-semibold text-gray-800 mb-4">
                        Expert Craftsmanship
                    </h2>
                    <p className="text-xl text-gray-700 mb-6">
                        Our expert team uses the highest quality materials and modern design techniques to ensure your remodeling project is completed to perfection. We’re committed to delivering exceptional results with attention to every detail.
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

            {/* Pricing Section */}
            <div className="text-center py-10 bg-main-color">
                <h2 className="text-3xl font-semibold text-grayish">Pricing</h2>
                <p className="mt-2 text-xl text-grayish">Starting from $5,000 depending on the project scope.</p>
                <button
                    className="mt-6 px-6 py-3 bg-secondary-color text-white text-lg font-semibold hover:bg-secondary-color border-2 hover:border-white border-main-color transition duration-200"
                    onClick={() => alert('Get Started!')}
                >
                    Get Started
                </button>
            </div>
            <div className="w-full h-[100px]"/>
        </div>
    )
}

export default ServcicesSingle