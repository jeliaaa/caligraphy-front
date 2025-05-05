import StartDateIcon from '../../assets/icons/start_date.png'
import EndDateIcon from '../../assets/icons/end_date.png'
import UserIcon from '../../assets/icons/user.png'
import LocationIcon from '../../assets/icons/location.png'
import ServiceIcon from '../../assets/icons/service.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import clsx from 'clsx'
import { Renovation } from 'types/apiTypes/types'
import { useTranslation } from 'react-i18next'


function RenovationCard({
    track,
    supervisor,
    address,
    start_date,
    end_date,
    progress,
    service
}: Renovation) {
    const [disabledInfo, setDisabledInfo] = useState(false)
    const nav = useNavigate()
    const {t } = useTranslation()

    return (
        <div className='w-full gap-5 rounded-lg flex flex-col py-3.5 px-5 h-fit bg-white shadow-2xl'>
            <div className='flex w-full justify-end'>
                <p className='text-sm text-[#daded8] px-4 py-2 bg-[#4c583e] rounded-lg font-semibold'>#{track}</p>
            </div>
            <ul className='text-base flex flex-col gap-2'>
               <li className='flex justify-start border-b py-1 items-center gap-2'>
                    <img className='w-5 h-5' src={LocationIcon} alt='Location'/>
                    <span className='font-bold text-[#4c583e]'>
                        {address!}
                    </span>
               </li>
               <li className='flex justify-start border-b py-1 items-center gap-2'>
                    <img className='w-5 h-5' src={UserIcon} alt='Location'/>
                    <span className='font-bold text-[#4c583e]'>
                        {supervisor?.firstname!} {supervisor?.lastname!}
                    </span>
               </li>
               <li className='flex justify-start border-b py-1 items-center gap-2'>
                    <img className='w-5 h-5' src={ServiceIcon} alt='Location'/>
                    <span className='font-bold text-[#4c583e]'>
                        {service?.name! || t("not_found")}
                    </span>
               </li>
               <li className='flex justify-start border-b py-1 items-center gap-2'>
                    <img className='w-5 h-5' src={StartDateIcon} alt='Location'/>
                    <span className='font-bold text-[#4c583e]'>
                        {start_date!}
                    </span>
               </li>
               <li className='flex justify-start border-b py-1 items-center gap-2'>
                    <img className='w-5 h-5' src={EndDateIcon} alt='Location'/>
                    <span className='font-bold text-[#4c583e]'>
                        {end_date!}
                    </span>
               </li>
               <li className='flex justify-start flex-col items-start gap-2'>
                    <div className='flex font-bold w-full text-[#4c583e] text-sm justify-between'>
                        <span>{progress!}%</span>
                        <span>100%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div
                            className="bg-[#4c583e] h-full transition-all duration-300"
                            style={{ width: `${progress!}%` }}
                        /> 
                    </div>
                </li>
            </ul>
            <div 
                className="relative w-full"
                onMouseEnter={() => !service && setDisabledInfo(true)}
                onMouseLeave={() => !service && setDisabledInfo(false)}
            >
                <div
                    className={clsx(
                        'absolute bottom-[105%] w-full left-0 text-center bg-red-500 text-white z-40 rounded p-4 shadow-lg',
                        disabledInfo && !service ? 'flex items-center justify-center' : 'hidden'
                    )}
                >
                        {t("service_not_selected_0")} <br/> {t("service_not_selected_1")}
                </div>

                <button
                    disabled={!service}
                    onClick={() => service && nav(`/profile/${track}`)}
                    className={clsx(
                        'px-4 py-2 font-semibold w-full text-center rounded-lg transition-all',
                        'text-[#daded8]',
                        service ? 'bg-[#4c583e] cursor-pointer' : 'bg-[#4c583ebe] cursor-not-allowed animate-pulse'
                    )}
                >
                    {t("details")}
                </button>
            </div>
        </div>
    )
}

export default RenovationCard
