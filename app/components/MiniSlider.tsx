'use client';

import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const miniSliderItems = [
    {
        title: 'Ngurah Rai International Airport To Close For 24 Hours For Nyepi',
        imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=300',
    },
    {
        title: 'The Chinese smartphone upstarts taking on Apple and Samsung',
        imageUrl: 'https://jnews.io/citynews/wp-content/uploads/sites/47/2018/07/demo-20-75x75.jpg',
    },
    {
        title: 'Presidential Train Now Available For Jakartans Traveling To Bandung',
        imageUrl: 'https://jnews.io/citynews/wp-content/uploads/sites/47/2018/06/demo-14-1-75x75.jpg',
    },
    {
        title: 'The Chinese smartphone upstarts taking on Apple and Samsung',
        imageUrl: 'https://jnews.io/citynews/wp-content/uploads/sites/47/2018/07/demo-20-75x75.jpg',
    },
];

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
        onClick={onClick}
        className="text-gray-300 cursor-pointer border w-[20px] h-[60px] flex items-center justify-center hover:text-gray-600 transition-colors shrink-0"
    >
        <IoIosArrowForward size={20} />
    </button>
);

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
        onClick={onClick}
        className="text-gray-300 cursor-pointer border w-[20px] h-[60px] flex items-center justify-center hover:text-gray-600 transition-colors shrink-0"
    >
        <IoIosArrowBack size={20} />
    </button>
);

const MiniSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="bg-white p-4 shadow-sm border border-gray-100 mini-slider-container">
            <Slider {...settings}>
                {miniSliderItems.map((item, index) => (
                    <div key={index} className="px-3">
                        <div className="flex items-center gap-3 group cursor-pointer">
                            <div className="w-12 h-12 flex-shrink-0 overflow-hidden">
                                <img src={item.imageUrl} alt="" className="w-full h-full object-cover" />
                            </div>
                            <p className="text-[11px] font-condensed font-normal leading-tight group-hover:text-red-600">
                                {item.title}
                            </p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default MiniSlider;
