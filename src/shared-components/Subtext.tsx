const Subtext = ({
  text,
  width,
  align = "center",
}: {
  text: string;
  width?: string;
  align?: string;
}) => {
  return (
    <div
      className={`text-sm md:text-lg text-gray-400 font-semibold text-${align} w-${width}`}
    >
      {text}
    </div>
  );
};

export default Subtext;
