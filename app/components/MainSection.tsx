'use client';

import LifestyleCard from './LifeStyleCard';
import MiniSlider from './MiniSlider';
import NewsSection from './NewsSection';
import OpinionCard from './OpinionCard';
import OpinionLinks from './OpinionLinks';
import RecentNews from './RecentNews';

const MainSection = () => {
    return (
        <div className="bg-gray-100 py-10 min-h-screen">
            <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-8 items-start">
                <div className="col-span-12 lg:col-span-3 space-y-6">
                    <RecentNews />
                    <OpinionLinks />
                </div>

                <div className="col-span-12 lg:col-span-6 space-y-6">
                    <MiniSlider />
                    <NewsSection />
                </div>

                <div className="col-span-12 lg:col-span-3 space-y-6">
                    <OpinionCard />
                    <LifestyleCard />
                </div>
            </div>
        </div>
    );
};

export default MainSection;
