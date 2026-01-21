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
        imageUrl: 'https://jnews.io/citynews/wp-content/uploads/sites/47/2018/06/demo-48-120x86.jpg',
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

const RecentNews = () => {
    return (
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
                        <h3 className="text-[14px] font-condensed font-bold leading-tight group-hover:text-red-600 transition-colors">
                            {article.title}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentNews;
