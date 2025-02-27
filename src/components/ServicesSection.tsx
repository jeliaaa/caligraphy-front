import { Link } from 'react-router-dom';
import serviceImg from '../assets/photos/karkasi.jpeg';

type Props = {};

const ServicesSection = (props: Props) => {
    const mockUpData = [
        { id: 0, description: 'ჩვენი სარემონტო სერვისი მოიცავს ნებისმიერი მასშტაბის სამუშაოს: დაწყებული მცირე განახლებებიდან, დასრულებული სივრცის სრული ტრანსფორმაციით.', name: 'სარემონტო სამუშაოები' },
        { id: 1, description: 'გარდა სარემონტო სამუშაოებისა, ჩვენ გთავაზობთ სივრცის მოწყობას თანამედროვე ავეჯითა და ტექნიკით.', name: 'ავეჯითა და ტექნიკით უზრუნველყოფა' },
        { id: 2, description: 'გაგვიზიარე შენს სტილსა და კომფორტზე მორგებული საჭიროებები და ჩვენი პროფესიონალების გუნდი, სივრცის განსაახლებლად ინდივიდუალურ სერვის შემოგთავაზებს.', name: 'შენზე მორგებული რემონტი' }
    ];

    return (
        <div className='mt-16 pb-10 w-full p-5 '>
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
        </div>
    );
};

export default ServicesSection;
