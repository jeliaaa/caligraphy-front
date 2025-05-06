import { Autoplay, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { useTranslation } from "react-i18next"
import { useEffect, useState } from "react"
import { axiosV2 } from "../utils/axios"
import { SafeTeam } from "types/apiTypes/types"



const TeamSlider: React.FC<{ slider: boolean }> = ({ slider }) => {
    const { t } = useTranslation();
    const [isPaginationEnabled, setIsPaginationEnabled] = useState(window.innerWidth < 640);
    const [team, setTeam] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
            setLoading(true)
            axiosV2.get("/team/view").then((res) => {
                setTeam(res.data)
            }).catch((err) => {
                console.log(err);  
            }).finally(() => {
                setLoading(false)
            })
    }, [])

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
                {loading ? 
                    skeletons.map((_, i) => (
                        <SwiperSlide key={i}>
                            {skeletons[i]}
                        </SwiperSlide>
                    ))
                    :team.map((member: SafeTeam, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative rounded-lg h-full overflow-hidden hover:shadow-lg flex flex-col group justify-between duration-300">
                            <img
                                loading="lazy"
                                src={`${process.env.REACT_APP_URL}/${member.image}`}
                                alt={member.name}
                                className="w-full h-[400px] md:h-[500px] object-cover object-top transition-all duration-300"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-white p-3 md:p-4 
                opacity-100 translate-y-0 md:opacity-0 md:translate-y-full 
                group-hover:opacity-100 group-hover:translate-y-0 
                transition-all duration-300 ease-in-out">
                                <h3 className="text-lg md:text-xl font-semibold text-gray-800">{t(member.name)}</h3>
                                <p className="text-sm md:text-base text-gray-600">{t(member.position)}</p>
                            </div>
                        </div>
                    </SwiperSlide>

                ))}
            </Swiper> :
                <div className="flex flex-wrap pb-10 gap-6 justify-center">
                    {loading ? 
                        skeletons.map((_, i) => (
                            skeletons[i]
                        )) : 
                        team.map((member: SafeTeam, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg w-80 flex flex-col justify-between transition-shadow duration-300">
                                <img src={`${process.env.REACT_APP_URL}/${member.image}`} alt={member.name} className="w-full h-60 object-cover object-top" />
                                <div className="p-4 flex-1">
                                    <h3 className="text-xl font-semibold text-gray-800">{t(member.name)}</h3>
                                    <p className="text-gray-600">{t(member.position)}</p>
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

const skeletons = new Array(5).fill(null).map((_, i) => (
    <div
      key={i}
      className="bg-gray-200 animate-pulse rounded-lg w-80 h-[500px] flex flex-col justify-end overflow-hidden"
    >
      <div className="w-full h-3/4 bg-gray-300" />
      <div className="p-4">
        <div className="h-5 w-3/4 bg-gray-400 rounded mb-2" />
        <div className="h-4 w-1/2 bg-gray-300 rounded" />
      </div>
    </div>
  ));

export default TeamSlider;


