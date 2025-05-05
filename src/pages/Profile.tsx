import { useTranslation } from "react-i18next";
import karkasi from "../assets/photos/karkasi.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "redux/store";
import { fetchRenovations } from "../redux/thunks/renovationThunk";
import clsx from "clsx";
import RenovationCard from "../components/renovations/RenovationCard";

const projects = [
    { id: 'CQ7YTlkOPilmSmhe', title: "Project A", description: "Description for Project A", path: "/project-a" },
    { id: 2, title: "Project B", description: "Description for Project B", path: "/project-b" },
    { id: 3, title: "Project C", description: "Description for Project C", path: "/project-c" },
    { id: 4, title: "Project D", description: "Description for Project D", path: "/project-d" },
];


const Profile = () => {
    const { t } = useTranslation();
    const { logout, isAuthenticated } = useAuth();
    const nav = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const { data, status } = useSelector((state: RootState) => state.renovation)
    const isLoading = useMemo(() => status === 'loading' || status === 'idle', [status]);

    useEffect(() => {
        dispatch(fetchRenovations());
    }, [dispatch])
    useEffect(() => {
        if (!isAuthenticated) {
            nav('/')
        }
    }, [isAuthenticated, nav])

    console.log(data);

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
                    <div key={i} className="block border rounded-lg shadow-lg hover:shadow-xl transition">
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