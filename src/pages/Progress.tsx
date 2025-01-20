import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "redux/store";
import { fetchStage } from "../redux/thunks/stagesThunk";
import { Stage } from "types/apiTypes/types";

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

    const [tooltip, setTooltip] = useState<null | { name: string; x: number; y: number }>(null);
    const [selectedStage, setSelectedStage] = useState<null | Stage>(null); // Track selected stage for modal

    useEffect(() => {
        dispatch(fetchStage(serviceId));
    }, [dispatch, serviceId]);

    const stageCount = data.length;
    const completedStages = data.filter((stage) => stage.is_completed !== null)
        .length;

    const handleMouseEnter = (e: React.MouseEvent, stage: Stage) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setTooltip({
            name: stage.name,
            x: rect.left + rect.width / 2,
            y: -100, // Position above the button
        });
    };

    const handleMouseLeave = () => {
        setTooltip(null);
    };

    const openModal = (stage: Stage) => {
        setTooltip(null)
        setSelectedStage(stage); // Set the selected stage for the modal
    };

    const closeModal = () => {
        setSelectedStage(null); // Close the modal
    };

    return (
        <div className="w-full flex flex-col relative items-center space-y-4">
            <div className="w-full overflow-x-auto">
                <div className="min-w-[600px] lg:min-w-[800px] h-6 flex justify-start border items-center rounded-full relative">
                    {isLoading ? (
                        <div className="bg-gray-300 h-full w-2/4 rounded-full animate-pulse"></div>
                    ) : (
                        <div className="w-full flex">
                            {data.map((stage: Stage, i) => (
                                <button
                                    onClick={() => openModal(stage)} // Open modal on click
                                    key={stage.id}
                                    onMouseEnter={(e) => handleMouseEnter(e, stage)}
                                    onMouseLeave={handleMouseLeave}
                                    style={{
                                        flex: 1,
                                        background: i < completedStages
                                            ? "var(--main-color)"
                                            : "#BDBDBD",
                                    }}
                                    className="h-full min-w-[100px] first:rounded-l-full last:rounded-r-full border-l group relative"
                                >
                                    <div className="text-sm font-bold text-white">{i + 1}</div>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Tooltip (Popup) */}
            {tooltip && (
                <div
                    className="absolute bg-red-800 text-white z-50 rounded-md shadow-md text-sm p-2 w-[150px] text-center"
                    style={{
                        top: tooltip.y,
                        left: tooltip.x,
                        transform: "translateX(-50%)",
                    }}
                >
                    {tooltip.name}
                </div>
            )}

            {/* Modal */}
            {selectedStage && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-100">
                    <div className="bg-white p-4 rounded-lg max-w-[400px] w-full">
                        <h2 className="text-lg font-bold mb-2">{selectedStage.name}</h2>
                        <div className="mb-4">
                            <img
                                src='https://picsum.photos/200' // Assuming the stage has an imageUrl property
                                alt={selectedStage.name}
                                className="w-full rounded-lg"
                            />
                        </div>
                        <p className="text-sm">a;adafa;fa;nfafna</p> {/* Assuming there is a description */}
                        <button
                            onClick={closeModal}
                            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-full"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Progress;
