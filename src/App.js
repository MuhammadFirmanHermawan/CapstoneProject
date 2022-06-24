import "./components/Style.css";
import NavigationBar from "./components/NavigationBar";
import Artikel from "./components/Artikel";
import Informasi from "./components/Informasi";

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
    </div>
  );
}

export default App;
