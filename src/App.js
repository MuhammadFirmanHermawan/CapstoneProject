import NavigationBar from "./components/NavigationBar";
import Artikel from "./components/Artikel";
import Informasi from "./components/Informasi";
import Footer from "./components/Footer";
import Cuaca from "./components/Weather";

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
        <Cuaca />
      </div>
    </div>
  );
}

export default App;
