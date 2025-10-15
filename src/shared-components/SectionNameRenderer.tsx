import { useTranslation } from "react-i18next";

const SectionNameRenderer = ({
  name,
  isDark = false,
}: {
  name: string;
  isDark?: boolean;
}) => {
  const { t } = useTranslation();
  const classes = isDark ? "text-white bg-primary" : "border-primary";
  return (
    <div
      className={`uppercase rounded-full border px-3 py-1 text-xs w-fit font-semibold ${classes}`}
    >
      {t(name)}
    </div>
  );
};

export default SectionNameRenderer;
