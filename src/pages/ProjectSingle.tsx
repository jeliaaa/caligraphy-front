import React, { useEffect, useMemo, useState, useTransition } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link,  useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../redux/store";
import { fetchRenovation } from "../redux/thunks/renovationThunk";
import banner from "../assets/banners/Green-Remodeling-in-Process.jpeg";
import { useTranslation } from "react-i18next";
import StagesProgress from "../components/StageProgress";
import RenovationInfo from "../components/renovations/RenovationInfo";
import StageFeed from "../components/stages/StageFeed";
import Loader from "../components/Loader";

const ProjectSingle = () => {
    const { id } = useParams();
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useTranslation()

    const { singleData: data, status } = useSelector((state: RootState) => state.renovation);
    const isLoading = useMemo(() => status === "loading" || status === "idle", [status]);

    useEffect(() => {
        if (id && id !== "0") {
            dispatch(fetchRenovation(id));
        }
    }, [dispatch, id]);
    
    if(isLoading){
        return <Loader/>
    }

    return (
        <div className="w-full px-5 flex flex-col gap-5 py-5">
            <div className="flex items-center gap-1 md:gap-5">
                <div className="w-full md:w-2/5 flex justify-start items-center">
                    <Link className="px-6 py-2 font-semibold text-[#daded8] bg-[#4c583e] rounded-xl" to={'/profile'}>
                        {t("back")}
                    </Link>
                </div>
                <div className="w-full md:w-1/5 flex justify-center items-center">
                    <div className='px-6 py-2 lg:px-10 lg:py-4 bg-[#4c583e] rounded-xl w-fit'>
                        <h2 className='lg:text-2xl text-[#daded8] font-bold'>{t("progress")}</h2>
                    </div>
                </div>
                <div className="w-full md:w-2/5 flex justify-end items-center">
                    <div className='px-6 py-2 lg:px-10 lg:py-4 bg-[#4c583e] rounded-xl w-fit'>
                        <h2 className='lg:text-2xl text-[#daded8] font-bold'>#{data?.track}</h2>
                    </div>
                </div>
            </div>
            <RenovationInfo {...data!}/>
            <StageFeed serviceId={data?.service?.id}/>
        </div>
    );
};

export default ProjectSingle;