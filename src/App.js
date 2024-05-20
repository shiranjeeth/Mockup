import Bannersection from "./Components/BannerSection/Bannersection";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HotSellSection from "./Components/HotsellsSection/HotSellSection";
import Liveauctions from "./Components/LiveAuctions/Liveauctions";
import RecentlyAdded from "./Components/RecentlyAdded/RecentlyAdded";
import Topcreators from "./Components/TopCreatorsSection/Topcreators";


function App() {
  return (
    <div className="App">
      <Header/>
      <Bannersection/>
      <HotSellSection/>
       <Topcreators/>
       <Liveauctions/>
       <RecentlyAdded/>  
      <Footer/>   
    </div>  
  );
}

export default App;
