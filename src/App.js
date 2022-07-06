import NavigationBar from "./components/NavigationBar";
import Artikel from "./components/Artikel";
import Informasi from "./components/Informasi";
import Footer from "./components/Footer";
<<<<<<< HEAD
=======
import News from "./components/Article";
>>>>>>> 17b8f96cf0cd1e1cb0381b5be44ccc41844d5e08

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
