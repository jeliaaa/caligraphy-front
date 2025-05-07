import { useTranslation } from "react-i18next";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "redux/store";
import { fetchRenovations } from "../redux/thunks/renovationThunk";
import clsx from "clsx";
import RenovationCard from "../components/renovations/RenovationCard";



const Profile = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch<AppDispatch>();
    const { data, status } = useSelector((state: RootState) => state.renovation)
    const isLoading = useMemo(() => status === 'loading' || status === 'idle', [status]);

    useEffect(() => {
        dispatch(fetchRenovations());
    }, [dispatch])

//     div key={i} className="block border rounded-lg shadow-lg hover:shadow-xl transition">
//     <div className="w-full animate-pulse aspect-video bg-gray-300" />
//     <div className="w-full bg-white p-4">
//         123
//         {/* <h3 className="text-lg font-semibold">{project.title}</h3> */}
//         {/* <p className="text-sm text-gray-600">{project.description}</p> */}
//     </div>
// </div>
    return (
        <div className="container mx-auto flex flex-col items-center px-4 py-8">
            <div className="bg-main-color rounded-full z-10 text-grayish border-4 border-main-color py-5 px-20 mb-10 text-2xl">
                {t("myProjects")}
            </div>
            <div className={clsx(
                "w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
                data.length !== 0 ? "grid": "flex justify-center items-center h-[200px]"
            )}>
                {!isLoading && (
                    <>
                        {data.length !== 0 
                            ? data.map((project) => (
                                <RenovationCard {...project}/>
                            ))
                            : <h2 className="text-center text-xl">{t("empty_projects")}</h2>
                        }
                    </>
                )}
                {isLoading && new Array(4).fill(0).map((_, i) => (
                    <div key={i} className="block mt-5 border w-[20dvw] rounded-lg shadow-lg hover:shadow-xl transition">
                        <div className="w-full animate-pulse aspect-video bg-gray-300" />
                        <div className="w-full bg-white flex flex-col gap-2 p-4">
                            <div className="text-lg font-semibold animate-pulse w-2/4 h-5 bg-gray-300 rounded-full"></div>
                            <div className="text-lg font-semibold animate-pulse w-1/4 h-5 bg-gray-300 rounded-full"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Profile;