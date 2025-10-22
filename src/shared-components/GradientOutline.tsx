type GradientOutlineProps = {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  borderWidth?: string;
  borderRadius?: string;
};

const GradientOutline = ({ 
  children, 
  className = "", 
  innerClassName = "",
  borderWidth = "p-[2px]",
  borderRadius = "rounded-lg"
}: GradientOutlineProps) => {
  return (
    <div className={`relative ${borderWidth} ${borderRadius} bg-gradient-to-r from-[#5147E7] to-[#A908F5] ${className}`}>
      <div className={innerClassName}>
        {children}
      </div>
    </div>
  );
};

export default GradientOutline;

