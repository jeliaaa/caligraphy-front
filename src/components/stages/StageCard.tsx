import clsx from "clsx"
import { useTranslation } from "react-i18next";
import { Stage } from "types/apiTypes/types";



interface StageCardProps extends Stage {
    onSelectStage: () => void;
}

function StageCard({
    is_completed,
    name,
    onSelectStage
}: StageCardProps) {
    const { t } = useTranslation()
    return (
        <button disabled={!is_completed} onClick={onSelectStage} className='w-full min-h-[80px] h-full cursor-pointer rounded-lg flex flex-col py-3.5 px-5 bg-white disabled:bg-white/50 shadow-2xl'>
            <div className='flex w-full gap-2 h-full items-center justify-between'>
                <h2 className="text-start font-semibold">{name}</h2>
                <p className={clsx(
                    'text-sm px-4 py-2 rounded-lg font-semibold text-[#daded8]',
                    is_completed ? "bg-[#4c583e]" : " bg-red-500"
                )}>{is_completed ? t("completed") : t("notCompleted")}</p>
            </div>
        </button>
    )
}

export default StageCard
