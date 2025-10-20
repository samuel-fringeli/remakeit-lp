import { useMemo } from "react";

const TitleRenderer = ({
  title,
  highlightIndexes,
  align = "center",
  width = "100%",
  isDark = false,
}: {
  title: string;
  highlightIndexes: number[];
  align?: string;
  width?: string;
  isDark?: boolean;
}) => {
  const textToRender = title;

  const words = useMemo(() => textToRender.split(" "), [textToRender]);

  // Normalize indexes to handle negative values
  const normalizedIndexes = highlightIndexes.map((i) =>
    i < 0 ? words.length + i : i
  );

  return (
    <div
      className={`flex gap-4 text-6xl max-w-[${width}] font-bold uppercase flex-wrap justify-${align} ${
        isDark ? "!text-white" : ""
      }`}
      style={{ maxWidth: width }}
    >
      {words.map((word, index) => (
        <span
          key={index}
          className={normalizedIndexes.includes(index) ? "text-primary" : ""}
        >
          {word}
        </span>
      ))}
    </div>
  );
};

export default TitleRenderer;
