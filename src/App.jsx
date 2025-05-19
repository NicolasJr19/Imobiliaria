// import Banner from "./components/Banner";
import Header from "./components/Header";
import Global from "./Styles/Global"
// import Home from "./pages/Home";
import Footer from "./components/Footer";
import Imobi from "./pages/Imobi";

function App() {
  return (
    <div className="App">
      <Header/>
      <Imobi/>
      {/* <Banner/>
      <Home/> */}
      <Footer/>
      <Global/>
    </div>
  );
}

export default App;
