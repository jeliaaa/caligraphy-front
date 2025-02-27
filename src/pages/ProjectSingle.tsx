import React, { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link,  useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../redux/store";
import { fetchRenovation } from "../redux/thunks/renovationThunk";
import banner from "../assets/banners/Green-Remodeling-in-Process.jpeg";
import Progress from "./Progress";
import { FaArrowUp, FaArrowDown, FaChevronLeft } from "react-icons/fa";

const ProjectSingle = () => {
    const { id } = useParams();
    const [details, setDetails] = useState(false);
    const dispatch = useDispatch<AppDispatch>();

    const { data, status } = useSelector((state: RootState) => state.renovation);
    const isLoading = useMemo(() => status === "loading" || status === "idle", [status]);

    useEffect(() => {
        if (id && id !== "0") {
            dispatch(fetchRenovation(id));
        }
    }, [dispatch, id]);

    return (
        <div
            style={{ backgroundImage: `url(${banner})` }}
            className="w-full relative p-5 min-h-[80dvh] flex flex-col items-center gap-y-4 bg-cover bg-center"
        >
            <div className="flex w-full flex-col md:flex-row items-center md:justify-between">
                <Link to={'/profile'} className="bg-main-color text-white flex gap-x-3 p-5 items-center rounded-md"><FaChevronLeft /> <span className="text-lg m-0">უკან</span></Link>
                <h1 className="text-center font-bold mt-2 bg-white px-10 text-3xl py-5 rounded-md shadow-md">
                    ჩემი პროექტი {id !== "0" && `: ${id}`}
                </h1>
            </div>

            {/* Content Section */}
            {isLoading ? (
                <p className="text-lg text-gray-600">Loading...</p>
            ) : status === "failed" ? (
                <p className="text-lg text-red-600">No such renovation found</p>
            ) : (
                <div className="mt-10 p-5 bg-white rounded-2xl shadow-lg w-full">
                    <h2 className="text-2xl font-bold mb-4">{data?.track}</h2>
                    <div className="flex flex-col gap-4">

                        {/* Progress Section */}
                        <div className="flex flex-col gap-2">
                            <div className="w-full flex flex-col">
                                <p>მისამართი : რაღაცარაღაცა</p>
                                <p>სამუშაოების ზედამხედველი : სამუშაოების ზედამხედველი</p>
                                <p>სერვისი : სერვისი</p>

                            </div>
                            <span className="font-bold">პროგრესი:</span>
                            <div className="w-full flex flex-col gap-2 justify-start items-start">
                                <div className="flex justify-between w-full">
                                    <div className="border-b-2 border-black flex items-center gap-1">
                                        <p className="font-bold text-main-color">{data?.progress}%</p>
                                    </div>
                                    <div className="border-b-2 border-black flex items-center gap-1">
                                        <p className="font-bold text-main-color">100%</p>
                                    </div>
                                </div>
                                <div className="w-full bg-gray-300 rounded-full h-4">
                                    <div
                                        className="bg-main-color h-full rounded-full"
                                        style={{ width: `${data?.progress}%` }}
                                    ></div>
                                </div>

                                {details && <Progress serviceId={data?.service.id} />}

                                <button
                                    className="self-end flex items-center gap-2 text-lg text-main-color"
                                    onClick={() => setDetails(!details)}
                                >
                                    დეტალები {details ? <FaArrowUp /> : <FaArrowDown />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectSingle;