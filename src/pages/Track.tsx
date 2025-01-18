import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../redux/store";
import { fetchRenovation } from "../redux/thunks/renovationThunk";

const Track = () => {
    const { id } = useParams();
    const [inputVal, setInputVal] = useState(id !== "0" ? id : ""); // Set initial value conditionally
    const [currentPhoto, setCurrentPhoto] = useState<number | null>(null); // State to track current photo in the slider
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { data, status } = useSelector((state: RootState) => state.renovation)
    const isLoading = useMemo(() => status === 'loading' || status === 'idle', [status]);

    useEffect(() => {
        dispatch(fetchRenovation({ trackId: inputVal }) as any)
    }, [dispatch, inputVal])
    console.log(data);

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
        } else {
            navigate(`/track/0`);
        }
    };



    const keyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onSearchClick();
        }
    };

    const closeSlider = () => setCurrentPhoto(null);
    const showPreviousPhoto = () => setCurrentPhoto((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
    const showNextPhoto = () => setCurrentPhoto((prev) => (prev !== null && prev < renovationDetails.photos.length - 1 ? prev + 1 : prev));

    return (
        <div className="w-full flex flex-col items-center gap-y-4">
            <div
                style={{ backgroundImage: `url(https://picsum.photos/300/100)` }}
                className="w-full flex items-center justify-center h-[200px] bg-center bg-cover"
            >
                <h1 className="text-center font-bold mt-2 bg-white inline-block px-10 text-3xl py-5">
                    ჩემი პროექტი {id !== "0" && `: ${id}`}
                </h1>
            </div>
            <div className="flex justify-center items-center h-[50px] w-[70%]">
                <input
                    type="text"
                    className="border-4 rounded-l-md h-full w-[80%] outline-none focus:border-b-blue-400 border-r-0"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    onKeyDown={(e) => keyDown(e)}
                />
                <button
                    className="bg-blue-600 text-white font-bold h-full w-[20%] rounded-r-md"
                    onClick={() => onSearchClick()}
                >
                    ძიება
                </button>
            </div>

            {id !== '0' && <>
                <div className="w-full mt-10 px-5">
                    <h2 className="text-2xl font-bold mb-4">ჩემი პროექტი</h2>
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between items-center">
                            <span className="font-bold">მმართველი:</span>
                            <span>{renovationDetails.manager}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-bold">ეტაპი:</span>
                            <span>{renovationDetails.stage}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-bold">ლოკაცია:</span>
                            <span>{renovationDetails.location}</span>
                        </div>
                        <div>
                            <span className="font-bold">პროგრესი:</span>
                            <div className="w-full bg-gray-300 rounded-full h-4 mt-2">
                                <div
                                    className={`h-4 rounded-full ${renovationDetails.progress <= 33
                                        ? "bg-red-500"
                                        : renovationDetails.progress <= 66
                                            ? "bg-orange-500"
                                            : "bg-green-500"
                                        }`}
                                    style={{ width: `${renovationDetails.progress}%` }}
                                />
                            </div>
                        </div>
                        <div>
                            <span className="font-bold">ფოტოები:</span>
                            <div className="grid grid-cols-3 gap-4 mt-2">
                                {renovationDetails.photos.map((photo, index) => (
                                    <img
                                        key={index}
                                        src={photo}
                                        alt={`Renovation ${index + 1}`}
                                        className="w-full h-[200px] object-cover rounded cursor-pointer"
                                        onClick={() => setCurrentPhoto(index)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-center mt-10">
                            <a
                                href={renovationDetails.invoiceUrl}
                                download
                                className="bg-green-500 text-white px-4 py-2 rounded font-bold"
                            >
                                ინვოისის ჩამოტვირთვა
                            </a>
                        </div>
                    </div>
                </div>

                {/* Gallery Slider */}
                {currentPhoto !== null && (
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50">
                        <button
                            onClick={closeSlider}
                            className="absolute top-5 right-5 text-white text-2xl font-bold"
                        >
                            ✕
                        </button>
                        <button
                            onClick={showPreviousPhoto}
                            className="absolute left-5 text-white text-3xl font-bold"
                        >
                            ‹
                        </button>
                        <img
                            src={renovationDetails.photos[currentPhoto]}
                            alt={`Slide ${currentPhoto + 1}`}
                            className="w-[80%] h-auto max-h-[90%] object-contain rounded"
                        />
                        <button
                            onClick={showNextPhoto}
                            className="absolute right-5 text-white text-3xl font-bold"
                        >
                            ›
                        </button>
                    </div>
                )}
            </>}
        </div>
    );
};

export default Track;
