import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "redux/store";
import { fetchStage } from "../redux/thunks/stagesThunk";
import { Stage } from "types/apiTypes/types";
import clsx from "clsx";

const Progress = ({
    serviceId,
    progress,
}: {
    serviceId: number;
    progress: number;
}) => {
    const dispatch = useDispatch<AppDispatch>();
    const { data, status } = useSelector((state: RootState) => state.stages);
    const isLoading = useMemo(
        () => status === "loading" || status === "idle",
        [status]
    );

    useEffect(() => {
        dispatch(fetchStage(serviceId));
    }, [dispatch, serviceId]);

    const stageCount = data.length;

    return (
        <div className="w-full flex flex-col gap-1 justify-start items-start">            
            <div className="flex justify-between w-full">
                <div className="h-full border-b-2 rounded-sm border-black gap-1 flex">
                    <p className="font-bold text-[#808080]">{progress}%</p>
                </div>
                <div className="h-full border-b-2 rounded-sm border-black self-end gap-1 flex">
                    <p className="font-bold text-[#808080]">100%</p>
                </div>
            </div>
              <div 
                className={clsx(
                    'grid w-full bg-gray-200 py-0.5 grid-cols-4 md:grid-cols-6 lg:grid-cols-8',
                    isLoading && "rounded-full"
                )}
                style={{
                  gridTemplateColumns: stageCount < 8 ? `repeat(${stageCount}, minmax(0, 1fr))` : ""
                }}
                
                >
                {isLoading ? (
                  <div 
                    className="bg-gray-600 h-[20px] w-2/4 rounded-full animate-pulse"
                    style={{
                        width: `${progress}%`
                    }}
                  ></div>
                ) : (
                    data.map((stage, i) => {
                        return (
                        <button
                            onClick={() => alert(stage.id)}
                            key={i}
                            disabled={!stage.is_completed}
                            style={{
                            background: stage.is_completed ? "green" : "gray",
                            }}
                            className={`group h-full w-full border relative`}
                        >
                            <div className="absolute group-hover:flex hidden justify-center items-center flex-col bottom-[110%] w-full">
                            <div 
                                className="w-[full] border-2 text-sm h-full text-white py-3 px-1 rounded-2xl"
                                style={{
                                background: stage.is_completed ? "green" : "gray",
                                }}
                            >
                                {stage.name}
                            </div>
                            <div
                                className="w-[10px] border-b-2 h-[5px]  rounded-b-full"
                                style={{
                                    background: stage.is_completed ? "green" : "gray",
                                }}
                            ></div>
                            </div>
                            <div className="text-sm font-bold z-20 text-white">
                            {i + 1}
                            </div>
                        </button>
                        );
                    })
                )}
              </div>
          </div>
    )
};

export default Progress;
