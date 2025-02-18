// import tornike from "../assets/photos/ფოტომასალაა/თორნიკეჭაღალიძე.jpg"
import dato from "../assets/photos/დავითჭაღალიძე.jpg"
import mirza from "../assets/photos/მირზაჭაღალიძე.jpg"
import dato2 from "../assets/photos/დათოგოგიაშვილი.jpg"
import natia from "../assets/photos/ნათიათოიძე.jpeg"
import natia2 from "../assets/photos/ნათიაჩავლეიშვილი.jpg"
import sofio from "../assets/photos/სოფიოშილაძე.jpg"
import beso from "../assets/photos/ბესომახაჭაძე.jpg"
import zviad from "../assets/photos/ზვიადბოლქვაძე.jpg"
import nika from "../assets/photos/ნიკაჯიჯავაძე.jpg"
import { Autoplay, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { useTranslation } from "react-i18next"




const teamMembers = [
    // { name: "თორნიკე ჭაღალიძე", role: "ფინანსური დირექტორი", imgUrl: tornike },
    { contact: true, name: "დათო ჭაღალიძე", role: "აღმასრულებელი დირექტორი", imgUrl: dato },
    { contact: true, name: "მირზა ჭაღალიძე", role: "გაყიდვების და საზოგადოებასთან ურთიერთობის დეპარტამენტის უფროსი", imgUrl: mirza },
    { contact: true, name: "დათო გოგიაშვილი", role: "ტექნიკური მენეჯერი და დამკვეთთან ურთიერთობის სპეციალისტი", imgUrl: dato2 },
    { contact: true, name: "ნათია თოიძე", role: "გაყიდვების მენეჯერი", imgUrl: natia },
    { contact: true, name: "ნათია ჩავლეიშვილი", role: "სოცმედიის მენეჯერი", imgUrl: natia2 },
    { contact: false, name: "სოფიო შილაძე", role: "ბუღალტერი", imgUrl: sofio },
    // { name: "რუსლან ჭაღალიძე", role: "შესყიდვების მენეჯერი", imgUrl: "https://picsum.photos/100" },
    // { name: "ნინო აროშიძე", role: "ოფის მენეჯერი", imgUrl: "" },
    { contact: false, name: "ბესო მახაჭაძე", role: "ხარისხის კონტროლის მენეჯერი", imgUrl: beso },
    { contact: false, name: "ნიკა ჯიჯავაძე", role: "შესყიდვების მენეჯერი", imgUrl: nika },
    { contact: false, name: "ზვიად ბოლქვაძე", role: "იურისტი", imgUrl: zviad },

];
const TeamSlider: React.FC<{ slider: boolean }> = ({ slider }) => {
    const { t } = useTranslation();
    return (
        <div className="w-full mx-auto my-2 p-8">
            <h2 className="text-3xl text-center font-bold mb-8 text-main-color">{t("team")}</h2>
            {slider ? <Swiper
                spaceBetween={20}
                navigation={true}
                pagination={{ clickable: true }}
                modules={[Navigation, Autoplay]}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 5 },
                }}
            >
                {teamMembers.map((member, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative rounded-lg h-full overflow-hidden hover:shadow-lg flex flex-col group justify-between duration-300">
                            <img
                                loading="lazy"
                                src={member.imgUrl}
                                alt={member.name}
                                className="w-full h-[400px] md:h-[500px] object-cover object-top transition-all duration-300"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-white p-3 md:p-4 
                opacity-100 translate-y-0 md:opacity-0 md:translate-y-full 
                group-hover:opacity-100 group-hover:translate-y-0 
                transition-all duration-300 ease-in-out">
                                <h3 className="text-lg md:text-xl font-semibold text-gray-800">{member.name}</h3>
                                <p className="text-sm md:text-base text-gray-600">{member.role}</p>
                            </div>
                        </div>
                    </SwiperSlide>

                ))}
            </Swiper> :
                <div className="flex flex-wrap gap-6 justify-center">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg w-80 flex flex-col justify-between transition-shadow duration-300">
                            <img src={member.imgUrl} alt={member.name} className="w-full h-60 object-cover object-top" />
                            <div className="p-4 flex-1">
                                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                                <p className="text-gray-600">{member.role}</p>
                            </div>
                            {/* <div className="p-4 flex justify-center bg-main-color">
                                {member.contact && <a href={`mailto:${member.name}@example.com`} className="text-white">კონტაქტი</a>}
                            </div> */}
                        </div>
                    ))}
                </div>
            }
        </div>
    );
};

export default TeamSlider;


