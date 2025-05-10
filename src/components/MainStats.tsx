import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Stats } from 'types/apiTypes/types';
interface StatisticSectionProps {
    stats: Stats[] | [];
}

const StatisticSection: React.FC<StatisticSectionProps> = ({ stats }) => {
    const [progress, setProgress] = useState<number[]>([0, 0, 0]);
    const { t } = useTranslation()
    const gap = 20; // This is the space you want to leave in the circle, in percentage.



    // Handling progress animation for each stat
    useEffect(() => {
        if (stats?.length > 0) {
            stats.forEach((stat, index) => {
                let counter = 0;
                const interval = setInterval(() => {
                    if (counter < 100) {
                        counter += 1;
                        setProgress((prev) => {
                            const newProgress = [...prev];
                            newProgress[index] = Math.min((counter / 100) * (100 - gap), 100 - gap);
                            return newProgress;
                        });
                    } else {
                        clearInterval(interval);
                    }
                }, 7); // Speed of increment (0.7 seconds)

                return () => clearInterval(interval); // Clean up interval
            });
        }
    }, [stats]);

    return (
        // bg-gray-50 
        <div className='flex flex-col items-center '>
            <div className="bg-main-color rounded-full z-10 text-grayish border-4 border-main-color py-5 px-20 my-10 text-2xl">
                {t("statistic")}
            </div>
            <div className="py-16 md:px-32 w-full bg-main-color text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {stats?.map((stat) => (
                        <div className="stat-card" key={stat.id}>
                            <div className="relative w-32 h-32 mx-auto">
                                <svg className="absolute top-0 left-0 transform rotate-[-90deg]" width="100%" height="100%" viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="45" className="stroke-gray-300" strokeWidth="10" fill="none" />
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="45"
                                        className="stroke-main-color"
                                        strokeWidth="10"
                                        fill="none"
                                        style={{
                                            strokeDasharray: `${282.74 * (1 - gap / 100)}`,
                                            strokeDashoffset: `${282.74 - (282.74 * progress[0]) / 100}`,
                                            transition: 'stroke-dashoffset 0.07s ease',
                                        }}
                                    />
                                </svg>
                                <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-grayish">
                                    {stat.value}
                                </span>
                            </div>
                            <p className="mt-4 text-xl font-semibold text-grayish">{stat.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StatisticSection;
