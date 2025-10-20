import { useTranslation } from "react-i18next";

const Subtext = ({
  text,
  width,
  align = "center",
}: {
  text: string;
  width?: string;
  align?: string;
}) => {
  const { t } = useTranslation();
  return (
    <div
      className={`text-lg text-gray-400 font-semibold text-${align} w-${width}`}
    >
      {text}
    </div>
  );
};

export default Subtext;
