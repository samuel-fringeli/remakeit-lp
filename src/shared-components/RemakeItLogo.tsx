import { useNavigate } from "react-router-dom";
import LogoImage from "../assets/LogoImage";

const RemakeItLogo = ({ className }: { className?: string }) => {
  const navigate = useNavigate();
  
  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleLogoClick();
    }
  };
  
  return (
    <button
      type="button"
      className={`text-primary text-xl font-bold flex h-fit items-center cursor-pointer select-none bg-transparent border-0 p-0 ${className}`}
      onClick={handleLogoClick}
      aria-label="Go to homepage"
    >
      <LogoImage className="size-6" />
      Remakeit
    </button>
  );
};

export default RemakeItLogo;
