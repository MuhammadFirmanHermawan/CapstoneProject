import "./components/Style.css";
import NavigationBar from "./components/NavigationBar";
import Artikel from "./components/Artikel";
import Informasi from "./components/Informasi";
import Footer from "./components/Footer";
import Weather from "./components/Weather";

function App() {
  return (
    <div>
      <NavigationBar />
      <div>
        <Artikel />
      </div>
      <div>
        <Informasi />
      </div>
      <div>
        <Footer />
      </div>
      <div>
        <Weather />
      </div>
    </div>
  );
}

export default App;
