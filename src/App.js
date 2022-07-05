import NavigationBar from "./components/NavigationBar";
import Artikel from "./components/Artikel";
import Informasi from "./components/Informasi";
import Footer from "./components/Footer";
import News from "./components/Article";

function App() {
  return (
    <div className="container-all">
      <NavigationBar />
      <div>
        <News />
      </div>
      <div>
        <Informasi />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
