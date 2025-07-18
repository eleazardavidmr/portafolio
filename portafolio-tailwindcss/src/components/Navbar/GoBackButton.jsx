import { Link } from "react-router-dom";
import ArrowLeftIcon from "../../icons/ArrowLeftIcon";

export default function GoBackButton() {
  return (
    <Link
      to="/"
      className="m-5 flex items-center justify-left w-[80%] mx-auto backdrop-blur-3xl p-5 rounded-lg bg-black/10 border border-white/10"
    >
      <ArrowLeftIcon width={30} height={30} stroke={"#26acd0"} />
      <span className="text-2xl font-bold text-primary">Volver</span>
    </Link>
  );
}
