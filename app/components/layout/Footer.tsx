import Link from 'next/link';
import { IoLogoFacebook, IoLogoTwitter, IoLogoYoutube, IoLogoInstagram } from 'react-icons/io5';
import { FaRss } from 'react-icons/fa';

const Footer = () => {
    const recentNews = [
        { title: "Grab tackles Jakarta's odd-even license plate policy with special algorithm", date: 'July 6, 2018' },
        { title: 'Jokowi supporters try to prevent anti-Jokowi activist from entering Batam', date: 'July 5, 2018' },
        { title: "China To Build Indonesia's Longest Bridge In North Kalimantan", date: 'July 4, 2018' },
    ];

    const categories = [
        'Business',
        'Opinion',
        'Culture',
        'Politics',
        'Lifestyle',
        'Sports',
        'National',
        'Travel',
        'News',
        'World',
    ];
    return (
        <footer className="bg-white border-t border-gray-100 pt-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div>
                        <h2 className="text-2xl font-black font-condensed tracking-tighter mb-6 uppercase">
                            THE DOWNTOWN
                        </h2>
                        <p className="text-[##98A9C3] text-[13px] font-roboto leading-relaxed mb-4 font-medium">
                            We bring you the best Premium WordPress Themes that perfect for news, magazine, personal
                            blog, etc. Visit our landing page to see all features & demos.
                        </p>
                        <Link
                            href="#"
                            className="text-[11px] font-roboto font-bold uppercase tracking-wider hover:text-gray-600 transition-colors"
                        >
                            LEARN MORE »
                        </Link>
                    </div>

                    <div>
                        <h3 className="text-[14px] font-bold uppercase mb-4 tracking-wider">Recent News</h3>
                        <div className="space-y-3">
                            {recentNews.map((news, idx) => (
                                <div key={idx} className="group cursor-pointer">
                                    <h4 className="text-[14px] font-roboto font-bold leading-snug group-hover:text-gray-600 transition-colors mb-1">
                                        {news.title}
                                    </h4>
                                    <span className="text-[11px] text-[#bbbbbb] font-medium">{news.date}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-[14px] font-bold uppercase mb-4 tracking-wider">Categories</h3>
                        <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                            {categories.map((cat) => (
                                <Link
                                    key={cat}
                                    href="#"
                                    className="text-[13px] font-bold text-black hover:text-gray-500 transition-colors"
                                >
                                    {cat}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-[14px] font-bold uppercase mb-4 tracking-wider">
                            Sign Up For Our Newsletter
                        </h3>
                        <p className="text-[#98A9C3] font-roboto text-[13px] mb-6 font-medium leading-relaxed">
                            Subscribe to our mailing list to receives daily updates direct to your inbox!
                        </p>
                        <div className="space-y-3">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full border border-gray-200 py-3 px-4 text-[13px] focus:outline-none focus:border-gray-400 font-normal bg-[#fcfcfc]"
                            />
                            <button className="w-full bg-black text-white py-3.5 text-[11px] font-bold uppercase tracking-[2px] hover:bg-gray-800 transition-colors">
                                SIGN UP
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t py-4 border-black flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-left space-y-1">
                        <p className="text-[11px] text-[#98A9C3] font-roboto font-medium uppercase tracking-wider">
                            © 2018 JNews - City News Magazine WordPress theme. All rights belong to their respective
                            owners.
                        </p>
                        <p className="text-[11px] text-[#98A9C3] font-roboto font-medium">
                            JNews is a top selling 2018 WordPress News, Blog, Newspaper & Magazine Theme.
                        </p>
                    </div>
                    <div className="flex items-center space-x-6 text-black">
                        <Link href="#" className="hover:text-gray-600 transition-colors">
                            <IoLogoFacebook size={16} />
                        </Link>
                        <Link href="#" className="hover:text-gray-600 transition-colors">
                            <IoLogoTwitter size={16} />
                        </Link>
                        <Link href="#" className="hover:text-gray-600 transition-colors">
                            <IoLogoYoutube size={16} />
                        </Link>
                        <Link href="#" className="hover:text-gray-600 transition-colors">
                            <FaRss size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
