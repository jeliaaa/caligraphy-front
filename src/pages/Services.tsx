import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { fetchServices } from '../redux/thunks/serviceThunk'
import { Service } from 'types/apiTypes/types'
import { Link } from 'react-router-dom'
import karkasi from "../assets/photos/karkasi.jpeg"
import karkasi2 from "../assets/banners/Green-Remodeling-in-Process.jpeg"

const Services = () => {
    const dispatch = useDispatch<AppDispatch>();
    const data = useSelector((state: RootState) => state.services.data);
    const status = useSelector((state: RootState) => state.services.status);
    const isLoading = useMemo(() => status === 'loading' || status === 'idle', [status]);

    useEffect(() => {
        dispatch(fetchServices())
    }, [dispatch])

    const images = [karkasi, karkasi2, karkasi];


    const mockUpData = [
        { id: 0, description: 'ჩვენი სარემონტო სერვისი მოიცავს ნებისმიერი მასშტაბის სამუშაოს: დაწყებული მცირე განახლებებიდან, დასრულებული სივრცის სრული ტრანსფორმაციით.', name: 'სახლის რემონტი' },
        { id: 1, description: 'გარდა სარემონტო სამუშაოებისა, ჩვენ გთავაზობთ სივრცის მოწყობას  თანამედროვე ავეჯითა და ტექნიკით, ', name: 'ავეჯითა და ტექნიკით უზრუნველყოფა' },
        { id: 2, description: 'გაგვიზიარე შენს სტილსა და კომფორტზე მორგებული საჭიროებები და ჩვენი პროფესიონალების გუნდი, სივრცის განსაახლებლად ინდივიდუალურ სერვის შემოგთავაზებს.', name: 'შენზე მორგებული რემონტი' }
    ]
    return (
        <div className='flex max-w-full flex-col md:flex-row justify-between py-2 md:h-[80dvh]'>
            {isLoading ? 'loading...' :
                mockUpData.map((service: Service, index: number) => (
                    <Link
                        to={service.id.toString()}
                        key={service.id}
                        className='relative flex flex-1 h-24 md:h-full transition-[flex] group duration-500 hover:flex-[2]'
                    >
                        <img
                            src={images[index % images.length]} // Cycle through the images array
                            alt='Service'
                            className='w-full h-full object-cover transition-transform duration-300 group-hover:z-10'
                        />
                        <div className='absolute flex items-end inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                            <div className='bg-white z-10 p-5 max-w-full'>
                                <h3 className='text-3xl text-main-color capitalize '>{service.name}</h3>
                                <p className='text-lg text-main-color'>{service.description}</p>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default Services
