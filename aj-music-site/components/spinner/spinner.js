import SpinnerIcon from "../../assets/spinner.svg";
import Image from "next/image";
const Spinner = () => {
  return <Image priority src={SpinnerIcon} alt="Spinner" className="animate-spin"></Image>;
};

export default Spinner;
