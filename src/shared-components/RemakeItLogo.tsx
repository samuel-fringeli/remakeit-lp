import { useNavigate } from "react-router-dom";
import LogoImage from "../assets/LogoImage";

const RemakeItLogo = ({ className }: { className?: string }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`text-primary text-xl font-bold flex h-fit items-center cursor-pointer select-none ${className}`}
      onClick={() => {
        navigate("/");
      }}
    >
      <LogoImage className="size-6" />
      Remakeit
    </div>
  );
};

export default RemakeItLogo;
