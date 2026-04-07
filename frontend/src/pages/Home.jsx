import BestSeller from "../components/BestSeller";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LatestCollection from "../components/LatestCollection";
import NewsletterBox from "../components/NewsletterBox";
import OurPolicy from "../components/OurPolicy";



const Home = () =>{
    return(
        <>
        <Header />
        <Categories />
        <LatestCollection/>
        <BestSeller />
        <OurPolicy />
        <NewsletterBox />
        </>
    );
}

export default Home;
