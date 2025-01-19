import React, { useEffect, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { fetchServices } from '../redux/thunks/serviceThunk'
import { Work } from 'types/apiTypes/types'
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
        <div className='flex w-full items-center justify-evenly pt-10 flex-wrap gap-y-10'>
            {isLoading ? 'loading...' :
                data.map((work: Work) => (
                    <Link to={work.id.toString()} key={work.id} className='flex items-center gap-x-9 p-5 w-[300px]  lg:w-1/4 box-border bg-grayish hover:shadow-secondary-color hover:shadow-lg'>
                        <img src={karkasi} alt='karkasis foto' className='w-[100px] aspect-square rounded-full' />
                        <h3 className='text-3xl text-main-color capitalize'>{work.name}</h3>
                    </Link>
                ))
            }

        </div>
    )
}

export default Services