import Conclusion from "../components/Conclusion";
import Estimate from "../components/Estimate";
import Points from "../components/Points";
import "../styles/Result.scss"

export default function Result() {
  return (
    <>
      <Estimate />
      <Conclusion />
      <Points />
    </>
  );
}
