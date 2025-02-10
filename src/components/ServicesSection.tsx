import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'redux/store';
import { fetchServices } from '../redux/thunks/serviceThunk';
import { Link } from 'react-router-dom';
import serviceImg from "../assets/photos/karkasi.jpeg"

type Props = {}

const ServicesSection = (props: Props) => {
    const dispatch = useDispatch<AppDispatch>();
    const data = useSelector((state: RootState) => state.services.data);
    const status = useSelector((state: RootState) => state.services.status);
    const isLoading = useMemo(() => status === 'loading' || status === 'idle', [status]);
    useEffect(() => {
        dispatch(fetchServices())
    }, [dispatch])

    return (
        <div className='mt-16 pb-10 w-full p-5 '>
            {isLoading ?
                <div className='flex flex-wrap justify-around gap-y-5'>
                    {[0, 1, 2].map((id) => (
                    <div key={id} className='w-[30%] rounded-lg h-[250px] bg-gray-200 animate-pulse' />
                    ))}
                </div>
                :
                <div className='flex flex-wrap gap-y-5 justify-around w-full'>
                    {data.map((service) => (
                        <Link className='cursor-custom flex items-center justify-center rounded-lg border-2 border-grayish h-[250px] bg-center bg-cover bg-no-repeat w-[30%] hover:border-main-color hover:-translate-y-2 transition-all delay-75' to={`/services/${service.id}`} key={service.id} style={{ backgroundImage: `url(${serviceImg})` }}>
                            <span className='bg-grayish text-main-color p-2 text-2xl '>{service.name}</span>
                        </Link>
                    ))}
                </div>
            }
        </div>
    )
}

export default ServicesSection