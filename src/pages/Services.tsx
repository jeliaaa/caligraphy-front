import { Service } from 'types/apiTypes/types'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import services3 from '../assets/photos/karkasi.jpeg';
import services1 from "../assets/renders/services1.jpg"
import services2 from "../assets/renders/services2.jpg"


const Services = () => {
    const { t } = useTranslation()
    const images = [services1, services2, services3];
    const mockUpData = [
        { id: 0, isUploaded: true, serviceImg: services1, description: t("home_renovation_description"), name: t("service1") },
        { id: 1, isUploaded: true, serviceImg: services2, description: t("furniture_and_appliance_provision_description"), name: t("service2") },
        { id: 2, isUploaded: false, serviceImg: services3, description: t('customized_renovation_description'), name: t("service3") }
    ];


    return (
        <div className='flex max-w-full items-center flex-col md:flex-row justify-between py-2 md:h-[80dvh]'>
            {mockUpData.map((service: Service, index: number) => (
                <>
                    <Link
                        to={service.id.toString()}
                        key={service.id}
                        className='relative hidden md:flex flex-1 h-24 md:h-full transition-[flex] group duration-500 hover:md:flex-[2]'
                    >
                        <img
                            src={images[index % images.length]} // Cycle through the images array
                            alt='Service'
                            className='w-full h-full object-cover transition-transform duration-300 md:group-hover:z-10'
                        />
                        {!service.isUploaded && <div className='w-full h-full items-center justify-center flex text-grayish text-2xl absolute left-0 top-0 bg-black bg-opacity-50'>{t('photosWillAppearSoon')}</div>}
                        <div className='absolute flex items-end inset-0 bg-black bg-opacity-50 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300'>
                            {!service.isUploaded && <div className='w-full h-full items-center justify-center flex text-grayish text-2xl absolute left-0 top-0 bg-black bg-opacity-50'>{t('photosWillAppearSoon')}</div>}
                            <div className='md:bg-white z-10 p-5 max-w-full'>
                                <h3 className='text-3xl text-white md:text-main-color'>{service.name}</h3>
                                <p className='text-lg text-main-color hidden md:block'>{service.description}</p>
                            </div>
                        </div>
                    </Link>
                    <Link
                        className='relative flex md:hidden cursor-custom items-center bg-blend-multiply justify-center rounded-lg border-2 border-grayish h-[250px] bg-center bg-cover bg-no-repeat w-[70%] md:w-[30%] hover:border-main-color hover:-translate-y-2 transition-all mb-5 delay-75'
                        to={service.id.toString()}
                        key={service.id}
                        style={{ backgroundImage: `url(${service.serviceImg})`, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                    >
                        <span className='text-grayish p-2 text-2xl text-center'>{service.name}</span>
                    </Link>
                </>
            ))}
        </div>
    );
}

export default Services;
