import LogoImage from "../assets/LogoImage";

const RemakeItLogo = ({ className }: { className?: string }) => {
  return (
    <div
      className={`text-primary text-xl font-bold flex h-fit items-center ${className}`}
    >
      <LogoImage className="size-6" />
      Remakeit
    </div>
  );
};

export default RemakeItLogo;
