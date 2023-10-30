import { Outlet } from "react-router-dom";
import "./styles/App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}
export default App;
