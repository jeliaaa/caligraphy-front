import { Service, SafeService } from 'types/apiTypes/types'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import services3 from '../assets/photos/karkasi.jpeg';
import services1 from "../assets/renders/services1.jpg"
import services2 from "../assets/renders/services2.jpg"
import { useEffect, useState } from 'react';
import { axiosV2 } from '../utils/axios';
import clsx from 'clsx';


const Services = () => {
    const { t } = useTranslation()
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axiosV2.get("/service/view").then((res) => {
            setServices(res.data)
        }).catch((err) => {
            console.log(err);  
        }).finally(() => {
            setLoading(false)
        })
    }, [])
    console.log(loading)

    return (
        <div className='flex max-w-full items-center flex-col md:flex-row justify-between py-2 md:h-[80dvh]'>
            {loading ? SkeletonItems : services.map((service: SafeService, index: number) => (
                    <>
                        <Link
                            to={service.id.toString()}
                            key={service.id}
                            className={clsx(
                                'relative hidden md:flex flex-1 h-24 md:h-full transition-[flex] group duration-500 hover:md:flex-[2]',
                                !service.image && "bg-main-color"
                            )}
                        >
                            {service.image && (
                                <img
                                    src={`${process.env.REACT_APP_URL}/${service?.image}`} // Cycle through the images array
                                    alt='Service'
                                    className='w-full h-full object-cover transition-transform duration-300 md:group-hover:z-10'
                                />
                            )}
                            {!service?.image && <div className={clsx(
                                'w-full h-full items-center justify-center flex text-grayish text-2xl absolute left-0 top-0',
                                service?.image && "bg-black bg-opacity-50"
                            )}>{t('photosWillAppearSoon')}</div>}
                            <div className='absolute flex items-end inset-0 bg-black bg-opacity-50 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300'>
                                {!service?.image && <div className={clsx(
                                    'w-full h-full items-center justify-center flex text-grayish text-2xl absolute left-0 top-0',
                                    service?.image && "bg-black bg-opacity-50"
                                )}>{t('photosWillAppearSoon')}</div>}
                                <div className='md:bg-white z-10 p-5 max-w-full'>
                                    <h3 className='text-3xl text-white md:text-main-color'>{service.name}</h3>
                                    <p className='text-lg text-main-color hidden md:block'>{service.preview}</p>
                                </div>
                            </div>
                        </Link>
                        {service.image && (
                            <Link
                                className='relative flex md:hidden cursor-custom items-center bg-blend-multiply justify-center rounded-lg border-2 border-grayish h-[250px] bg-center bg-cover bg-no-repeat w-[70%] md:w-[30%] hover:border-main-color hover:-translate-y-2 transition-all mb-5 delay-75'
                                to={service.id.toString()}
                                key={service.id}
                                style={{ backgroundImage: `url(${process.env.REACT_APP_URL}/${service?.image})`, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                            >
                                <span className='text-grayish p-2 text-2xl text-center'>{service.name}</span>
                            </Link>
                        )}
                    </>
                ))}
        </div>
    );
}


const SkeletonItems = new Array(3).fill(null).map((_, index) => (
    <div
        key={index}
        className="flex-1 h-24 md:h-full animate-pulse bg-gray-300 rounded-md mx-2 md:flex hidden"
    />
));

export default Services;
