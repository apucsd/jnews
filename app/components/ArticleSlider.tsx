'use client';

import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const articles = [
    {
        category: 'POLITICS',
        title: 'Jokowi, Prabowo could buy more time in VP selection',
        date: 'AUGUST 10, 2018',
        imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
    },
    {
        category: 'SPORTS',
        title: 'Annual open water swim returns to Western Australia in February',
        date: 'AUGUST 10, 2018',
        imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
    },
    {
        category: 'CULTURE',
        title: 'The Sacred Balinese "Fire Horse" Dance: Sanghyang Jaran Dance',
        date: 'FEBRUARY 17, 2020',
        imageUrl: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800',
    },
    {
        category: 'LIFESTYLE',
        title: 'A Digital Media Startup Growing Up With Millennial Women',
        date: 'AUGUST 10, 2018',
        imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
    },
    {
        category: 'BUSINESS',
        title: "China To Build Indonesia's Longest Bridge In North Kalimantan",
        date: 'AUGUST 8, 2018',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
    },
    {
        category: 'POLITICS',
        title: 'Jokowi, Prabowo could buy more time in VP selection',
        date: 'AUGUST 10, 2018',
        imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
    },
    {
        category: 'SPORTS',
        title: 'Annual open water swim returns to Western Australia in February',
        date: 'AUGUST 10, 2018',
        imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
    },
    {
        category: 'CULTURE',
        title: 'The Sacred Balinese "Fire Horse" Dance: Sanghyang Jaran Dance',
        date: 'FEBRUARY 17, 2020',
        imageUrl: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800',
    },
    {
        category: 'LIFESTYLE',
        title: 'A Digital Media Startup Growing Up With Millennial Women',
        date: 'AUGUST 10, 2018',
        imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
    },
    {
        category: 'BUSINESS',
        title: "China To Build Indonesia's Longest Bridge In North Kalimantan",
        date: 'AUGUST 8, 2018',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
    },
    {
        category: 'POLITICS',
        title: 'Jokowi, Prabowo could buy more time in VP selection',
        date: 'AUGUST 10, 2018',
        imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
    },
    {
        category: 'SPORTS',
        title: 'Annual open water swim returns to Western Australia in February',
        date: 'AUGUST 10, 2018',
        imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
    },
    {
        category: 'CULTURE',
        title: 'The Sacred Balinese "Fire Horse" Dance: Sanghyang Jaran Dance',
        date: 'FEBRUARY 17, 2020',
        imageUrl: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=800',
    },
    {
        category: 'LIFESTYLE',
        title: 'A Digital Media Startup Growing Up With Millennial Women',
        date: 'AUGUST 10, 2018',
        imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
    },
    {
        category: 'BUSINESS',
        title: "China To Build Indonesia's Longest Bridge In North Kalimantan",
        date: 'AUGUST 8, 2018',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
    },
];

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
        onClick={onClick}
        className="absolute opacity-0 group-hover:opacity-100 duration-300 cursor-pointer right-0 top-1/2 -translate-y-1/2 bg-white/80 p-3 hover:bg-white shadow-md transition-all z-10"
        aria-label="Next"
    >
        <IoIosArrowForward size={24} className="text-gray-600" />
    </button>
);

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
        onClick={onClick}
        className="absolute opacity-0 group-hover:opacity-100 duration-300 cursor-pointer left-0 top-1/2 -translate-y-1/2 bg-white/80 p-3 hover:bg-white shadow-md transition-all z-10"
        aria-label="Previous"
    >
        <IoIosArrowBack size={24} className="text-gray-600" />
    </button>
);

const ArticleSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        touchMove: true,
        mouseDrag: true,
        swipeToSlide: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="relative w-full group  bg-gray-50 border-y border-gray-100">
            <Slider {...settings}>
                {articles.map((article, index) => (
                    <div key={index} className="">
                        <div className="bg-white group cursor-pointer border-r border-gray-100 h-full">
                            <div className="aspect-[3/2] ">
                                <img
                                    src={article.imageUrl}
                                    alt={article.title}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="p-6 text-center">
                                <p className="mb-3 font-condensed text-[12px] tracking-widest text-gray-400">
                                    {article.category}
                                </p>
                                <h3 className="mb-4 font-condensed text-lg font-bold leading-tight line-clamp-2">
                                    {article.title}
                                </h3>
                                <p className="text-[11px] uppercase tracking-wider text-gray-400">{article.date}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>

            <style jsx global>{`
                .slick-track {
                    display: flex !important;
                }
                .slick-slide {
                    height: inherit !important;
                }
                .slick-slide > div {
                    height: 100%;
                }
            `}</style>
        </div>
    );
};

export default ArticleSlider;
