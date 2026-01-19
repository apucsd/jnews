import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ArticleSlider from './components/ArticleSlider';
import MainSection from './components/MainSection';

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            <ArticleSlider />

            <MainSection />

            <Footer />
        </main>
    );
}
