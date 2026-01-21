const newsSection = () => {
    return (
        <div className="bg-white shadow-sm rela">
            <div className="aspect-[16/9] overflow-hidden">
                <img
                    src="https://jnews.io/citynews/wp-content/uploads/sites/47/2018/06/demo-34-750x375.jpg"
                    alt="Featured"
                    className="w-full h-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                />
            </div>
            <div className="p-10 relative bg-white bottom-[-10%] mt-[-10%] mx-5">
                <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-4 block">
                    POLITICS
                </span>
                <h2 className="text-2xl font-condensed font-black mb-4 hover:text-red-600 cursor-pointer transition-colors leading-tight">
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
                <p className="text-gray-500 text-[13px] leading-relaxed line-clamp-2 mb-8">
                    When we get out of the glass bottle of our ego and when we escape like the squirrels in the...
                </p>
                <button className="border shadow-sm border-gray-200 px-6 py-2.5 text-[11px] font-black tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-300">
                    Read More
                </button>
            </div>
        </div>
    );
};

export default newsSection;
