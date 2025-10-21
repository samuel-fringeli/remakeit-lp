const SectionNameRenderer = ({
  name,
  isDark = false,
}: {
  name: string;
  isDark?: boolean;
}) => {
  const classes = isDark ? "text-white bg-primary" : "border-primary";
  return (
    <div
      className={`uppercase rounded-full border px-3 py-1 text-xs w-fit font-semibold ${classes}`}
    >
      {name}
    </div>
  );
};

export default SectionNameRenderer;
