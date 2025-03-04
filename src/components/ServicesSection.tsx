import { Link } from 'react-router-dom';
import serviceImg from '../assets/photos/karkasi.jpeg';
import { useTranslation } from 'react-i18next';

type Props = {};

const ServicesSection = (props: Props) => {
    const { t } = useTranslation()
    const mockUpData = [
        { id: 0, description: t("home_renovation_description"), name: t("service1") },
        { id: 1, description: t("furniture_and_appliance_provision_description"), name: t("service2") },
        { id: 2, description: t('customized_renovation_description'), name: t("service3") }
    ];

    return (
        <div className='mt-16 pb-10 w-full p-5 '>
            <div className='flex flex-wrap md:flex-row flex-col gap-y-5 items-center justify-around w-full'>
                {mockUpData.map((service) => (
                    <Link
                        className='relative cursor-custom flex items-center bg-blend-multiply justify-center rounded-lg border-2 border-grayish h-[250px] bg-center bg-cover bg-no-repeat w-[70%] md:w-[30%] hover:border-main-color hover:-translate-y-2 transition-all delay-75'
                        to={`/services/${service.id}`}
                        key={service.id}
                        style={{ backgroundImage: `url(${serviceImg})`, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                    >
                        <span className='text-grayish p-2 text-center text-2xl'>{service.name}</span>
                    </Link>

                ))}
            </div>
        </div>
    );
};

export default ServicesSection;
