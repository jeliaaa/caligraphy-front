import { useEffect, useMemo, useState } from 'react'
import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from 'redux/store'
import { fetchStage } from '../../redux/thunks/stagesThunk'
import StageCard from './StageCard'
import StageCardSkeleton from './StageCardSkeleton'
import useStageModal from '../../hooks/useStageModal'
import { useTranslation } from 'react-i18next'

interface StageFeedProps {
    serviceId: number | undefined
}

function StageFeed({
    serviceId
}: StageFeedProps) {
    const { data, status } = useSelector((state: RootState) => state.stages)
    const dispatch = useDispatch<AppDispatch>()
    const { onOpen, setData } = useStageModal()
    const loading = useMemo(() => status === 'loading', [status]);
    const { t } = useTranslation();

    const progress = useMemo(() => {
        if (!data || data.length === 0) return 0
        const completed = data.filter(stage => stage.is_completed).length
        return Math.round((completed / data.length) * 100)
    }, [data])

    useEffect(() => {
        if (serviceId) {
            dispatch(fetchStage(serviceId))
        }
    }, [serviceId])

    return (
        <div className='w-full flex flex-col gap-5 justify-center'>
            <div className='flex border-b-2 border-[#4c583e] pb-5 justify-start w-full flex-col items-start gap-2'>
                <div className='flex font-bold w-full text-[#4c583e] text-sm justify-between'>
                    <span>{progress}%</span>
                    <span>100%</span>
                </div>
                <div className="w-full bg-white rounded-full h-4 overflow-hidden">
                    <div
                        className="bg-[#4c583e] h-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
            <h2 className='px-6 text-[#4c583e] rounded-lg font-semibold py-2 bg-white w-fit'>{t('stages')}</h2>
            <div className={clsx(
                'grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-5 w-full',
                data?.length !== 0 ? "grid" : "flex justify-center py-5"
            )}>
                {loading ? (
                    [...Array(4)].map((_, i) => (
                        <StageCardSkeleton key={i} />
                    ))
                ) : (
                    data.length !== 0 ?
                        (
                            data?.map((stage) => (
                                <StageCard onSelectStage={() => {
                                    setData(stage)
                                    onOpen()
                                }} key={stage.id} {...stage} />
                            ))
                        )
                        : (
                            <h2 className='text-xl text-[#4c583e] font-semibold'>{t('noSuchStages')}</h2>
                        )
                )}
            </div>
        </div>
    )
}

export default StageFeed
