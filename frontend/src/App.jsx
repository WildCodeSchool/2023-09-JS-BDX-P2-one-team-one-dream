import "./styles/App.scss";

import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Header />
      </div>
      <Footer />
    </div>
  );
}

export default App;
