import Header from "./components/Header";
import Hero from "./components/Hero";
import Category from "./components/Category";
import Footer from "./components/Footer";

function HomeNotLogined() {
  return <div className="min-h-screen w-full">
     <Header/>
     <Hero/>
     <Category/>
     <Footer/>
  </div>;
}

export default HomeNotLogined;
