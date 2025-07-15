import { Link } from "react-router-dom";
import ArrowLeftIcon from "../../icons/ArrowLeftIcon";

export default function GoBackButton() {
  return (
    <Link to="/" className="m-5 flex items-center justify-left w-[80%] mx-auto">
      <ArrowLeftIcon width={30} height={30} stroke={"#26acd0"} />
      <span className="text-2xl font-bold text-primary">Volver</span>
    </Link>
  );
}
