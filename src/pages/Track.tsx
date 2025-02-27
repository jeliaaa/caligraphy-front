import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../redux/store";
import { fetchRenovation } from "../redux/thunks/renovationThunk";
import banner from "../assets/banners/Green-Remodeling-in-Process.jpeg"
import Progress from "./Progress";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const Track = () => {
    const { id } = useParams();
    const [inputVal, setInputVal] = useState(id !== "0" ? id : ""); // Set initial value conditionally
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const { data, status } = useSelector((state: RootState) => state.renovation)
    const isLoading = useMemo(() => status === 'loading' || status === 'idle', [status]);
    const [details, setDetails] = useState(false)
    useEffect(() => {
        dispatch(fetchRenovation(id))
    }, [dispatch, id])
    // Sample renovation data
    const renovationDetails = {
        manager: "ჯონი ჯანდიერი",
        stage: "ფითხით დამუშავება და შეღებვა",
        progress: 60, // Percentage completion for the progress bar
        location: "123 ქუჩა, ბათუმი.",
        photos: [
            "https://picsum.photos/800/600?random=1",
            "https://picsum.photos/800/600?random=2",
            "https://picsum.photos/800/600?random=3",
        ],
        invoiceUrl: "https://example.com/invoice.pdf",
    };

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

    return (
        <div style={{ backgroundImage: `url(${banner})` }} className="w-full p-5 min-h-[80dvh] flex flex-col items-center gap-y-4">
            <h1 className="text-center font-bold mt-2 bg-white inline-block px-10 text-3xl py-5">
                ჩემი პროექტი {id !== "0" && `: ${id}`}
            </h1>
            <div className="flex justify-center items-center h-[50px] w-[70%]">
                <input
                    type="text"
                    className="border-4 rounded-l-md h-full w-[80%] outline-none pl-3 focus:border-b-main-color border-r-0"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    onKeyDown={(e) => keyDown(e)}
                    placeholder="შეიყვანეთ პროექტის აიდი"
                />
                <button
                    className="bg-main-color text-white font-bold h-full w-[20%] rounded-r-md"
                    onClick={() => onSearchClick()}
                >
                    ძიება
                </button>
            </div>

            {isLoading ? 'Loading...' : status === 'failed' ? "No such renovation" : <>
                <div className="w-full mt-10 p-5 bg-white rounded-2xl">
                    <h2 className="text-2xl font-bold mb-4">{data?.track}</h2>
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
                            <span className="font-bold">პროგრესი:</span>
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
                                {details &&
                                    <Progress serviceId={data?.service.id} />
                                }
                                <button className="self-end flex gap-2 text-lg text-main-color" onClick={() => setDetails(!details)}>
                                    დეტალები
                                    {details
                                        ? <FaArrowUp />
                                        : <FaArrowDown />
                                    }
                                </button>
                                <p className="text-red-700">დეტალების სანახავად გაიარეთ რეგისტრაცია.</p>
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
        </div>
    );
};

export default Track;
