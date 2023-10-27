import Description from "./components/Description";
import "./styles/App.scss";
import Actuality from "./components/Actuality";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Button from "./components/Button";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Header />
        <div className="components">
          <Description />
          <Button />
          <Actuality />
          <AboutUs />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default App;
