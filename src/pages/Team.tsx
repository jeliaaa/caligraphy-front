// import tornike from "../assets/photos/ფოტომასალაა/თორნიკეჭაღალიძე.jpg"
import dato from "../assets/photos/ფოტომასალაა/დავითჭაღალიძე.jpg"
import mirza from "../assets/photos/ფოტომასალაა/მირზაჭაღალიძე.jpg"
import dato2 from "../assets/photos/ფოტომასალაა/დათოგოგიაშვილი.jpg"
import natia from "../assets/photos/ფოტომასალაა/ნათიათოიძე.jpeg"
import natia2 from "../assets/photos/ფოტომასალაა/ნათიაჩავლეიშვილი.jpg"
import sofio from "../assets/photos/ფოტომასალაა/სოფიოშილაძე.jpg"
import beso from "../assets/photos/ფოტომასალაა/ბესომახაჭაძე.jpg"
import zviad from "../assets/photos/ფოტომასალაა/ზვიადბოლქვაძე.jpg"
import nika from "../assets/photos/ფოტომასალაა/ნიკაჯიჯავაძე.jpg"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"




const teamMembers = [
    // { name: "თორნიკე ჭაღალიძე", role: "ფინანსური დირექტორი", imgUrl: tornike },
    { name: "დათო ჭაღალიძე", role: "აღმასრულებელი დირექტორი", imgUrl: dato },
    { name: "მირზა ჭაღალიძე", role: "გაყიდვების და საზოგადოებასთან ურთიერთობის დეპარტამენტის უფროსი", imgUrl: mirza },
    { name: "დათო გოგიაშვილი", role: "ტექნიკური მენეჯერი და დამკვეთთან ურთიერთობის სპეციალისტი", imgUrl: dato2 },
    { name: "ნათია თოიძე", role: "გაყიდვების მენეჯერი", imgUrl: natia },
    { name: "ნათია ჩავლეიშვილი", role: "სოცმედიის მენეჯერი", imgUrl: natia2 },
    { name: "სოფიო შილაძე", role: "ბუღალტერი", imgUrl: sofio },
    // { name: "რუსლან ჭაღალიძე", role: "შესყიდვების მენეჯერი", imgUrl: "https://picsum.photos/100" },
    // { name: "ნინო აროშიძე", role: "ოფის მენეჯერი", imgUrl: "" },
    { name: "ბესო მახაჭაძე", role: "ხარისხის კონტროლის მენეჯერი", imgUrl: beso },
    { name: "ნიკა ჯიჯავაძე", role: "შესყიდვების მენეჯერი", imgUrl: nika },
    { name: "ზვიად ბოლქვაძე", role: "იურისტი", imgUrl: zviad },

];
const TeamSlider = () => {
    return (
        <div className="max-w-screen-xl mx-auto my-2 p-5">
            <h2 className="text-3xl text-center font-bold mb-8 text-main-color">ჩვენი გუნდი</h2>
            <Swiper
                spaceBetween={20}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                navigation={true}
                pagination={{ clickable: true }}
                modules={[Navigation, Autoplay]}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
            >
                {teamMembers.map((member, index) => (
                    <SwiperSlide key={index}>
                        <div key={index} className="bg-white rounded-lg h-full shadow-md overflow-hidden hover:shadow-lg flex flex-col justify-between transition-shadow duration-300">
                            <img src={member.imgUrl} alt={member.name} className="w-full h-[500px] object-cover object-top" />
                            <div className="p-4 h-[150px]">
                                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                                <p className="text-gray-600">{member.role}</p>
                            </div>
                            <div className="p-4 flex justify-center bg-main-color">
                                <a href={`mailto:${member.name}@example.com`} className="text-white hover:text-blue-800">კონტაქტი</a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TeamSlider;




