import Link from 'next/link';
import ArticleCard from './components/ArticleCard';
import Header from './components/layout/Header';

const ARTICLES = [
  {
    category: 'Sports',
    categoryColor: '#26c0ef',
    title: 'Annual open water swim returns to Western Australia in February',
    date: 'August 10, 2018',
    imageUrl: 'https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_1280.jpg',
  },
  {
    category: 'Culture',
    categoryColor: '#b38a58',
    title: 'The Sacred Balinese "Fire Horse" Dance: Sanghyang Jaran Dance',
    date: 'February 17, 2020',
    imageUrl: 'https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_1280.jpg',
  },
  {
    category: 'Lifestyle',
    categoryColor: '#ff4081',
    title: 'A Digital Media Startup Growing Up With Millennial Women',
    date: 'August 10, 2018',
    imageUrl: 'https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_1280.jpg',
  },
  {
    category: 'Business',
    categoryColor: '#2979ff',
    title: "China To Build Indonesia's Longest Bridge In North Kalimantan",
    date: 'August 3, 2018',
    imageUrl: 'https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_1280.jpg',
  },
  {
    category: 'Sports',
    categoryColor: '#26c0ef',
    title: "China's Peng banned and fined for Wimbledon corruption attempt",
    date: 'August 9, 2018',
    imageUrl: 'https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_1280.jpg',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      <Header />
      

      <section className="container mx-auto px-4 mb-20">
        <div className="flex flex-wrap lg:flex-nowrap bg-white border border-jnews-border shadow-sm">
          {ARTICLES.map((article, index) => (
            <ArticleCard 
              key={index}
              {...article}
              isLast={index === ARTICLES.length - 1}
            />
          ))}
        </div>
      </section>

      {/* Footer / Bottom spacing */}
      <footer className="py-20 text-center text-gray-400 text-sm">
        &copy; 2024 The Downtown. Inspired by JNews City News.
      </footer>
    </main>
  );
}
