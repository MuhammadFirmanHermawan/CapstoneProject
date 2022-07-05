import NavigationBar from "./components/NavigationBar";
import Artikel from "./components/Artikel";
import Informasi from "./components/Informasi";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container-all">
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
    </div>
  );
}

export default App;
