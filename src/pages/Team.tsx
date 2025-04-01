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
import { useEffect, useState } from "react"




const teamMembers = [
    // { name: "თორნიკე ჭაღალიძე", role: "ფინანსური დირექტორი", imgUrl: tornike },
    { contact: true, name: "teamMember1", role: "teamMember1Role", imgUrl: dato },
    { contact: true, name: "teamMember2", role: "teamMember2Role", imgUrl: mirza },
    { contact: true, name: "teamMember3", role: "teamMember3Role", imgUrl: dato2 },
    { contact: true, name: "teamMember4", role: "teamMember4Role", imgUrl: natia },
    { contact: true, name: "teamMember5", role: "teamMember5Role", imgUrl: natia2 },
    { contact: false, name: "teamMember6", role: "teamMember6Role", imgUrl: sofio },
    // { name: "რუსლან ჭაღალიძე", role: "შესყიდვების მენეჯერი", imgUrl: "https://picsum.photos/100" },
    // { name: "ნინო აროშიძე", role: "ოფის მენეჯერი", imgUrl: "" },
    { contact: false, name: "teamMember7", role: "teamMember7Role", imgUrl: beso },
    { contact: false, name: "teamMember8", role: "teamMember8Role", imgUrl: nika },
    { contact: false, name: "teamMember9", role: "teamMember9Role", imgUrl: zviad },

];
const TeamSlider: React.FC<{ slider: boolean }> = ({ slider }) => {
    const { t } = useTranslation();
    const [isPaginationEnabled, setIsPaginationEnabled] = useState(window.innerWidth < 640);

    useEffect(() => {
        const handleResize = () => {
            setIsPaginationEnabled(window.innerWidth < 640);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    return (
        // bg-gray-50 
        <div className="flex flex-col items-center">
            <div className="bg-main-color rounded-full z-10 text-grayish border-4 border-main-color py-5 px-20 my-10 text-2xl">
                {t("team")}
            </div>
            {slider ? <Swiper
                spaceBetween={20}
                navigation={true}
                pagination={!isPaginationEnabled ? { clickable: true } : false}
                modules={[Navigation, Autoplay]}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 5 },
                }}
                className="w-full"
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
                                <h3 className="text-lg md:text-xl font-semibold text-gray-800">{t(member.name)}</h3>
                                <p className="text-sm md:text-base text-gray-600">{t(member.role)}</p>
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
                                <h3 className="text-xl font-semibold text-gray-800">{t(member.name)}</h3>
                                <p className="text-gray-600">{t(member.role)}</p>
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


