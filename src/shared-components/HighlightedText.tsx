type HighlightedTextProps = {
  children: React.ReactNode;
  className?: string;
};

const HighlightedText = ({ children, className = "" }: HighlightedTextProps) => {
  return (
    <span className={`bg-primary text-white px-1 pb-1 md:py-3 ${className}`}>
      {children}
    </span>
  );
};

export default HighlightedText;

