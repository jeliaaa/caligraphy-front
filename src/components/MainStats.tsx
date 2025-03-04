import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface StatisticData {
    title: string;
    value: number;
    total: number;
}

const StatisticSection: React.FC = () => {
    const [statistics, setStatistics] = useState<StatisticData[]>([]);
    const [progress, setProgress] = useState<number[]>([0, 0, 0]);
    const { t } = useTranslation()
    const gap = 20; // This is the space you want to leave in the circle, in percentage.

    // Mock API data
    const mockApiData = useMemo(() => [
        { title: t("completed_projects"), value: 150, total: 120 },
        { title: t("ongoing_projects"), value: 210, total: 150 },
        { title: t("planned_projects"), value: 1000, total: 200 },
    ], [t]);

    // Using useCallback to fetch the statistics
    const fetchStatistics = useCallback(() => {
        setTimeout(() => {
            setStatistics(mockApiData);
        }, 1000); // Simulating 1 second delay for data fetch
    }, [mockApiData]);

    useEffect(() => {
        fetchStatistics();
    }, [fetchStatistics]);

    // Handling progress animation for each stat
    useEffect(() => {
        if (statistics.length > 0) {
            statistics.forEach((stat, index) => {
                let counter = 0;
                const interval = setInterval(() => {
                    if (counter < stat.total) {
                        counter += 1;
                        setProgress((prev) => {
                            const newProgress = [...prev];
                            newProgress[index] = Math.min((counter / stat.total) * (100 - gap), 100 - gap);
                            return newProgress;
                        });
                    } else {
                        clearInterval(interval);
                    }
                }, 7); // Speed of increment (0.7 seconds)

                return () => clearInterval(interval); // Clean up interval
            });
        }
    }, [statistics]);

    return (
        <section className="py-16 px-32 bg-main-color text-center">
            <h2 className="text-3xl font-bold text-grayish mb-8">{t("statistic")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {statistics.map((stat, index) => (
                    <div className="stat-card" key={index}>
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
                                        strokeDashoffset: `${282.74 - (282.74 * progress[index]) / 100}`,
                                        transition: 'stroke-dashoffset 0.07s ease',
                                    }}
                                />
                            </svg>
                            <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-grayish">
                                {stat.value} +
                            </span>
                        </div>
                        <p className="mt-4 text-xl font-semibold text-grayish">{stat.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StatisticSection;
