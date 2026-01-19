'use client';

import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FaPlay } from 'react-icons/fa';

const latestArticles = [
    {
        title: 'Unconventional Workouts That Torch Fat And Sculpt Muscle',
        imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=300',
    },
    {
        title: 'Millions of Indigenous People May Lose Voting Rights: Alliance',
        imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=300',
    },
    {
        title: "Crismonita Dwi Putri, RI's Track Cycling Athlete for Asian Games",
        imageUrl: 'https://images.unsplash.com/photo-1541572230658-351215a8952a?auto=format&fit=crop&q=80&w=300',
    },
    {
        title: 'President Joko "Jokowi" Widodo Refuses to Sign MD3 Law',
        imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=300',
    },
    {
        title: 'Garuda operates larger planes for Jakarta-Palembang route',
        imageUrl: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80&w=300',
    },
];

const opinionLinks = [
    'Tour showcases shared art history of Indonesia and Singapore',
    'Finland Has An Education System The Other Country Should Learn From',
    'Women in Politics: Urgency of Quota System',
];

const miniSliderItems = [
    {
        title: 'Ngurah Rai International Airport To Close For 24 Hours For Nyepi',
        imageUrl: 'https://images.unsplash.com/photo-1544013584-219586161471?auto=format&fit=crop&q=80&w=150',
    },
    {
        title: 'The Chinese smartphone upstarts taking on Apple and Samsung',
        imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=150',
    },
    {
        title: 'Presidential Train Now Available For Jakartans Traveling To Bandung',
        imageUrl: 'https://images.unsplash.com/photo-1474487548417-781f37625e4e?auto=format&fit=crop&q=80&w=150',
    },
];

const MainSection = () => {
    return (
        <div className="bg-gray-100 py-10 min-h-screen">
            <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-8 items-start">
                {/* Left Column: The Latest & Opinion */}
                <div className="col-span-3 space-y-6">
                    <div className="bg-white p-6 shadow-sm">
                        <h2 className="text-xl font-bold font-condensed mb-6 relative">
                            The Latest
                            <span className="absolute bottom-[-10px] left-0 w-8 h-[2px] bg-black"></span>
                        </h2>
                        <div className="space-y-6 pt-2">
                            {latestArticles.map((article, index) => (
                                <div key={index} className="flex gap-4 items-start group cursor-pointer">
                                    <div className="w-20 h-20 flex-shrink-0 overflow-hidden">
                                        <img
                                            src={article.imageUrl}
                                            alt=""
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                                        />
                                    </div>
                                    <h3 className="text-[14px] font-bold leading-tight group-hover:text-red-600 transition-colors">
                                        {article.title}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white p-6 shadow-sm">
                        <h2 className="text-xl font-bold font-condensed mb-6 relative">
                            Opinion
                            <span className="absolute bottom-[-10px] left-0 w-8 h-[2px] bg-black"></span>
                        </h2>
                        <ul className="space-y-4 pt-2">
                            {opinionLinks.map((link, index) => (
                                <li key={index} className="flex gap-3 items-start group cursor-pointer">
                                    <span className="mt-1 transform rotate-45 w-1.5 h-1.5 border-t border-r border-gray-400 group-hover:border-red-600"></span>
                                    <span className="text-[14px] font-bold group-hover:text-red-600 transition-colors">
                                        {link}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Middle Column: Mini Slider & Main Featured */}
                <div className="col-span-6 space-y-6">
                    {/* Mini Slider Wrapper */}
                    <div className="bg-white p-4 shadow-sm flex items-center justify-between gap-4 border border-gray-100">
                        <button className="text-gray-300 hover:text-black">
                            <IoIosArrowBack size={20} />
                        </button>
                        <div className="flex gap-6 flex-1 overflow-hidden">
                            {miniSliderItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 flex-1 min-w-0 group cursor-pointer"
                                >
                                    <div className="w-12 h-12 flex-shrink-0 overflow-hidden">
                                        <img src={item.imageUrl} alt="" className="w-full h-full object-cover" />
                                    </div>
                                    <p className="text-[11px] font-bold leading-tight line-clamp-2 group-hover:text-red-600">
                                        {item.title}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <button className="text-gray-300 hover:text-black">
                            <IoIosArrowForward size={20} />
                        </button>
                    </div>

                    {/* Main Featured Post */}
                    <div className="bg-white shadow-sm">
                        <div className="aspect-[16/9] overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1541872703-74c5e443d1fe?auto=format&fit=crop&q=80&w=1200"
                                alt="Featured"
                                className="w-full h-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                            />
                        </div>
                        <div className="p-10">
                            <span className="text-[10px] font-bold tracking-widest text-red-600 uppercase mb-4 block">
                                POLITICS
                            </span>
                            <h2 className="text-3xl font-black mb-4 hover:text-red-600 cursor-pointer transition-colors leading-tight">
                                ‘Election was rigged’ says opposition, police confirm three dead
                            </h2>
                            <div className="flex items-center gap-4 text-[11px] text-gray-400 mb-6 font-bold uppercase tracking-wider">
                                <span>
                                    by <span className="text-black">John Doe</span> and 2 others
                                </span>
                                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                <span>February 17, 2020</span>
                                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                <span>0</span>
                            </div>
                            <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
                                When we get out of the glass bottle of our ego and when we escape like the squirrels in
                                the...
                            </p>
                            <button className="border border-gray-200 px-6 py-2.5 text-[11px] font-black tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-300">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Column: Opinion & Lifestyle Cards */}
                <div className="col-span-3 space-y-6">
                    {/* Opinion Card */}
                    <div className="bg-white shadow-sm overflow-hidden group cursor-pointer">
                        <div className="relative aspect-[4/3]">
                            <img
                                src="https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?auto=format&fit=crop&q=80&w=600"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                            <span className="absolute top-4 left-4 bg-yellow-500 text-white text-[10px] font-black px-2 py-1 tracking-widest uppercase">
                                OPINION
                            </span>
                        </div>
                        <div className="p-8">
                            <h3 className="text-xl font-bold leading-tight mb-4 group-hover:text-red-600 transition-colors">
                                Democratic Party politician calls Prabowo ‘cardboard general’
                            </h3>
                            <div className="flex items-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-4">
                                <span>
                                    by <span className="text-black">John Doe</span>
                                </span>
                                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                <span>August 10, 2018</span>
                            </div>
                            <p className="text-gray-500 text-[14px] leading-relaxed">
                                Even the all-powerful Pointing has no control about the blind texts it is an almost
                                unorthographic life...
                            </p>
                        </div>
                    </div>

                    {/* Lifestyle Card */}
                    <div className="bg-white shadow-sm overflow-hidden group cursor-pointer">
                        <div className="relative aspect-[4/3]">
                            <img
                                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                            <span className="absolute top-4 left-4 bg-pink-500 text-white text-[10px] font-black px-2 py-1 tracking-widest uppercase">
                                LIFESTYLE
                            </span>
                        </div>
                        <div className="p-8">
                            <h3 className="text-xl font-bold leading-tight group-hover:text-red-600 transition-colors">
                                Google tracks location data even when users turn service off
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainSection;
