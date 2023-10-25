import Points from "./components/Points";
import "./styles/App.scss";
import Actuality from "./components/Actuality";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Header />
        <div>
          <Points />
          <Actuality />
          <AboutUs />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
