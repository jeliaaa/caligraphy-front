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
        <div className='flex flex-col items-center  '>
            <div className="bg-main-color rounded-full z-10 text-grayish border-4 border-main-color py-5 px-20 my-10 text-2xl">
                {t("services")}
            </div>
            <div className='flex flex-wrap md:flex-row flex-col gap-y-5 items-center justify-around w-full'>
                {mockUpData.map((service) => (
                    <Link
                        className='relative cursor-custom lg:px-14 flex items-center bg-blend-multiply justify-center rounded-lg border-2 border-grayish h-[250px] bg-center bg-cover bg-no-repeat w-[70%] md:w-[30%] hover:border-main-color hover:-translate-y-2 transition-all delay-75'
                        to={`/services/${service.id}`}
                        key={service.id}
                        style={{ backgroundImage: `url(${service.serviceImg})`, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                    >
                        <span className='text-grayish p-2 w-full text-center text-2xl'>{service.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ServicesSection;
