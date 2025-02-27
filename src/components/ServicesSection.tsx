import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'redux/store';
import { fetchServices } from '../redux/thunks/serviceThunk';
import { Link } from 'react-router-dom';
import serviceImg from '../assets/photos/karkasi.jpeg';

type Props = {};

const ServicesSection = (props: Props) => {
    const dispatch = useDispatch<AppDispatch>();
    const data = useSelector((state: RootState) => state.services.data);
    const status = useSelector((state: RootState) => state.services.status);
    const isLoading = useMemo(() => status === 'loading' || status === 'idle', [status]);

    useEffect(() => {
        dispatch(fetchServices());
    }, [dispatch]);

    const mockUpData = [
        { id: 0, description: 'ჩვენი სარემონტო სერვისი მოიცავს ნებისმიერი მასშტაბის სამუშაოს: დაწყებული მცირე განახლებებიდან, დასრულებული სივრცის სრული ტრანსფორმაციით.', name: 'სარემონტო სამუშაოები' },
        { id: 1, description: 'გარდა სარემონტო სამუშაოებისა, ჩვენ გთავაზობთ სივრცის მოწყობას თანამედროვე ავეჯითა და ტექნიკით.', name: 'ავეჯითა და ტექნიკით უზრუნველყოფა' },
        { id: 2, description: 'გაგვიზიარე შენს სტილსა და კომფორტზე მორგებული საჭიროებები და ჩვენი პროფესიონალების გუნდი, სივრცის განსაახლებლად ინდივიდუალურ სერვის შემოგთავაზებს.', name: 'შენზე მორგებული რემონტი' }
    ];

    return (
        <div className='mt-16 pb-10 w-full p-5 '>
            {isLoading ? (
                <div className='flex flex-wrap justify-around gap-y-5'>
                    {[0, 1, 2].map((id) => (
                        <div key={id} className='w-[30%] rounded-lg h-[250px] bg-gray-200 animate-pulse' />
                    ))}
                </div>
            ) : (
                <div className='flex flex-wrap md:flex-row flex-col gap-y-5 items-center justify-around w-full'>
                    {mockUpData.map((service) => (
                        <Link
                            className='relative cursor-custom flex items-center justify-center rounded-lg border-2 border-grayish h-[250px] bg-center bg-cover bg-no-repeat w-[70%] md:w-[30%] hover:border-main-color hover:-translate-y-2 transition-all delay-75'
                            to={`/services/${service.id}`}
                            key={service.id}
                            style={{ backgroundImage: `url(${serviceImg})` }}
                        >
                            <span className='bg-grayish text-main-color p-2 text-2xl'>{service.name}</span>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ServicesSection;
