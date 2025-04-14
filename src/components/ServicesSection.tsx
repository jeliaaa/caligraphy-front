import { Link } from 'react-router-dom';
import services3 from '../assets/photos/karkasi.jpeg';
import { useTranslation } from 'react-i18next';
import services1 from "../assets/renders/services1.jpg"
import services2 from "../assets/renders/services2.jpg"

type Props = {};

const ServicesSection = (props: Props) => {
    const { t } = useTranslation()
    const mockUpData = [
        { id: 0, serviceImg: services1, description: t("home_renovation_description"), name: t("service1") },
        { id: 1, serviceImg: services2, description: t("furniture_and_appliance_provision_description"), name: t("service2") },
        { id: 2, serviceImg: services3, description: t('customized_renovation_description'), name: t("service3") }
    ];

    return (
        // bg-gray-50
        <div className='flex flex-col items-center'>
            <div className="bg-main-color rounded-full z-10 text-grayish border-4 border-main-color py-5 px-20 my-10 text-2xl">
                {t("services")}
            </div>
            <div className='flex flex-wrap md:flex-row flex-col gap-y-5 items-center justify-around w-full'>
                {mockUpData.map((service) => (
                    <Link
                    className="relative shadow-lg md:shadow-none cursor-custom odd:self-start even:self-end flex even:flex-row-reverse items-center 
                               justify-center rounded-lg lg:border-2 border-grayish h-[250px] w-full md:w-[30%] 
                               hover:border-main-color hover:-translate-y-2 transition-all delay-75 overflow-hidden"
                    to={`/services/${service.id}`}
                    key={service.id}
                  >
                    <div className='w-2/4 relative h-full md:w-full'>
                        <img
                        src={service.serviceImg}
                        alt="..."
                        className="w-full rounded-lg object-cover h-full"
                        />
                        <div className="absolute rounded-lg w-full inset-0 bg-black bg-blend-multiply opacity-50 pointer-events-none"></div>
                    </div>
                    <span className='text-main-color md:text-grayish md:absolute px-4 md:px-14 p-2 w-2/4 md:w-full text-center text-2xl z-10'>
                      {service.name}
                    </span>
                  </Link>
                ))}
            </div>
            
        </div>
    );
};

export default ServicesSection;
