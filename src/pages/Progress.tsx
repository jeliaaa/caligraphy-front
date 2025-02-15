import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "redux/store";
import { fetchStage } from "../redux/thunks/stagesThunk";
import clsx from "clsx";
import useStageModal from "../hooks/useStageModal";

const Progress = ({
    serviceId
}: {
    serviceId: number | undefined
}) => {
    const dispatch = useDispatch<AppDispatch>();
    const { data, status } = useSelector((state: RootState) => state.stages);
    const { setData, onOpen } = useStageModal()
    const isLoading = useMemo(
        () => status === "loading" || status === "idle",
        [status]
    );

    useEffect(() => {
        if (serviceId) {
            dispatch(fetchStage(serviceId));
        }
    }, [dispatch, serviceId]);

    const stageCount = data.length;
    return (
        <div className="w-full flex flex-col gap-1 justify-start items-start">
            {isLoading && <h2 className="self-center">Loading...</h2>}
            <div
                className={clsx(
                    'grid w-full py-0.5 grid-cols-4 md:grid-cols-6 lg:grid-cols-8',
                )}
                style={{
                    gridTemplateColumns: (stageCount < 8 && !isLoading) ? `repeat(${stageCount}, minmax(0, 1fr))` : ""
                }}
            >
                {isLoading ?
                    Array.from({ length: 11 }).map((_, i) => (
                        <div className={`group h-full w-full animate-pulse border relative flex justify-center items-center bg-grayish`}>
                            <div className="text-sm h-[20px] font-bold z-20 text-white">
                            </div>
                        </div>
                    ))
                    :
                    data.map((stage, i) => {
                        return (
                            <button
                                onClick={() => {
                                    setData(stage)
                                    onOpen()
                                }}
                                key={i}
                                disabled={!stage.is_completed}
                                className={clsx("group h-full w-full border relative",
                                    stage.is_completed ? "bg-main-color text-grayish" : "bg-grayish text-main-color"
                                )}
                            >
                                <div className="absolute group-hover:flex hidden justify-center items-center flex-col bottom-[110%] w-full">
                                    <div
                                        className={clsx('w-[full] border-2 text-sm h-full bg-m1ain-color py-3 px-1 rounded-2xl',
                                            stage.is_completed ? "bg-main-color text-grayish" : "bg-grayish text-main-color"
                                        )}
                                    >
                                        {stage.name}
                                    </div>
                                    <div
                                        className={clsx("w-[10px] border-b-2 h-[5px]  rounded-b-full",
                                            stage.is_completed ? 'bg-main-color' : 'bg-grayish'
                                        )}
                                    ></div>
                                </div>
                                <div className={clsx("text-sm font-bold z-20", stage.is_completed ? "text-grayish" : "text-main-color")}>
                                    {i + 1}
                                </div>
                            </button>
                        );
                    })
                }
            </div>
        </div>
    )
};

export default Progress;
