import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../redux/store";
import { fetchRenovation } from "../redux/thunks/renovationThunk";
import banner from "../assets/banners/Green-Remodeling-in-Process.jpeg"
import { FaArrowDown } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { useTranslation } from "react-i18next";

const Track = () => {
    const { id } = useParams();
    const [inputVal, setInputVal] = useState(id !== "0" ? id : ""); // Set initial value conditionally
    const navigate = useNavigate();
    const { t } = useTranslation()
    const dispatch = useDispatch<AppDispatch>();
    const { singleData: data, status } = useSelector((state: RootState) => state.renovation)
    const isLoading = useMemo(() => status === 'loading' || status === 'idle', [status]);
    useEffect(() => {
        dispatch(fetchRenovation(id))
    }, [dispatch, id])
    // Sample renovation data
    // const renovationDetails = {
    //     manager: "ჯონი ჯანდიერი",
    //     stage: "ფითხით დამუშავება და შეღებვა",
    //     progress: 60, // Percentage completion for the progress bar
    //     location: "123 ქუჩა, ბათუმი.",
    //     photos: [
    //         "https://picsum.photos/800/600?random=1",
    //         "https://picsum.photos/800/600?random=2",
    //         "https://picsum.photos/800/600?random=3",
    //     ],
    //     invoiceUrl: "https://example.com/invoice.pdf",
    // };

    const onSearchClick = () => {
        if (inputVal?.trim() !== "") {
            navigate(`/track/${inputVal}`);
            dispatch(fetchRenovation(inputVal))
        } else {
            navigate(`/track/0`);
        }
    };



    const keyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onSearchClick();
        }
    };
    const { isAuthenticated } = useAuth()

    return (
        <div
            style={{ backgroundImage: `url(${banner})` }}
            className="w-full p-5 min-h-[80dvh] flex flex-col items-center gap-y-4 relative bg-cover bg-center"
        >
            {/* Overlay for background opacity */}
            <div className="absolute inset-0 bg-black/30"></div>
            <h1 className="text-center font-bold mt-2 text-white z-10 inline-block px-10 text-4xl py-5">
                {t("myProject")} {id !== "0" && `: ${id}`}
            </h1>
            <div className="flex justify-center items-center z-10 h-[50px] w-[70%]">
                <input
                    type="text"
                    className="border-4 rounded-l-md bg-grayish text-main-color placeholder-main-color border-grayish h-full w-[80%] outline-none pl-3 focus:border-b-main-color border-r-0"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    onKeyDown={(e) => keyDown(e)}
                    placeholder={t("enterProjectId")}
                />
                <button
                    className="bg-main-color text-grayish font-bold h-full w-[20%] rounded-r-md"
                    onClick={() => onSearchClick()}
                >
                    {t("search")}
                </button>
            </div>

            {isLoading ? <span className="text-white">{t("loading")}</span> : status === 'failed' ? t("") : <>
                <div className="w-full mt-10 p-5 bg-white rounded-2xl">
                    <h2 className="text-2xl font-bold mb-4">aaa</h2>
                    <div className="flex flex-col gap-4">
                        {/* <div className="flex justify-between items-center">
                            <span className="font-bold">მმართველი:</span>
                            <span>{data?.supervisor.firstname} {data?.supervisor.lastname}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-bold">სერვისი:</span>
                            <span>{data?.service.name}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-bold">მისამართი:</span>
                            <span>{data?.address}</span>
                        </div> */}
                        <div className="flex flex-col gap-2">
                            <span className="font-bold">{t("progress")}:</span>
                            <div className="w-full flex flex-col gap-2 justify-start items-start">
                                <div className="flex justify-between w-full">
                                    <div className="h-full border-b-2 rounded-sm border-black gap-1 flex">
                                        <p className="font-bold text-main-color">{data?.progress}%</p>
                                    </div>
                                    <div className="h-full border-b-2 rounded-sm border-black self-end gap-1 flex">
                                        <p className="font-bold text-main-color">100%</p>
                                    </div>
                                </div>
                                <div
                                    className={'w-full bg-grayish rounded-full py-0.5'}>
                                    <div
                                        className="bg-main-color h-[20px] w-2/4 rounded-full"
                                        style={{
                                            width: `${data?.progress}%`
                                        }}
                                    ></div>
                                </div>
                                {/* {details &&
                                    <Progress serviceId={data?.service.id} />
                                } */}
                                {isAuthenticated && <Link to={'/profile'} className="self-end flex gap-2 text-lg text-main-color">
                                    {t("details")}
                                    <FaArrowDown />
                                </Link>}
                                {!isAuthenticated && <p className="text-red-700">დეტალების სანახავად <Link to={'/login'} className="underline">შედით სისტემაში.</Link></p>}
                            </div>
                        </div>
                        {/* <div className="flex justify-center mt-10">
                            <a
                                href={renovationDetails.invoiceUrl}
                                download
                                className="bg-green-500 text-white px-4 py-2 rounded font-bold"
                            >
                                ინვოისის ჩამოტვირთვა
                            </a>
                        </div> */}
                    </div>
                </div>
            </>}
        </div >
    );
};

export default Track;
