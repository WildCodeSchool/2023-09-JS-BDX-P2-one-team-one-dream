import Description from "../components/Description";
import Actuality from "../components/Actuality";
import AboutUs from "../components/AboutUs";
import Button from "../components/Button";

export default function Home() {
  console.info(import.meta.env.VITE_REACT_APP_API_TOKEN);
  return (
    <div className="components">
      <Description />
      <Button />
      <Actuality />
      <AboutUs />
    </div>
  );
}
