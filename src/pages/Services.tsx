import React, { useEffect, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { fetchServices } from '../redux/thunks/serviceThunk'
import { Service } from 'types/apiTypes/types'
import { Link } from 'react-router-dom'
import karkasi from "../assets/photos/karkasi.jpeg"


const Services = () => {
    const dispatch = useDispatch<AppDispatch>();
    const data = useSelector((state: RootState) => state.services.data);
    const status = useSelector((state: RootState) => state.services.status);
    const isLoading = useMemo(() => status === 'loading' || status === 'idle', [status]);
    useEffect(() => {
        dispatch(fetchServices())
    }, [dispatch])


    return (
        <div className='flex w-full items-center justify-evenly py-10 flex-wrap gap-y-10'>
            {isLoading ? 'loading...' :
                data.map((service: Service) => (
                    <Link to={service.id.toString()} key={service.id} className='relative flex items-center gap-x-9 p-5 w-[60dvw] sm:w-[30dvw] aspect-square box-border bg-white hover:shadow-secondary-color hover:shadow-lg'>
                        <img src={karkasi} alt='karkasis foto' className='w-full aspect-square object-cover' />
                        <h3 className='text-3xl text-main-color capitalize absolute bg-white py-2'>{service.name}</h3>
                    </Link>
                )) 
            }

        </div>
    )
}

export default Services