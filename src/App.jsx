import Banner from "./components/Banner";
import Header from "./components/Header";
import Global from "./Styles/Global"
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Home/>
      <Global/>
    </div>
  );
}

export default App;
