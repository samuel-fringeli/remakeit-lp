import { useTranslation } from "react-i18next";

const SectionNameRenderer = ({ name }: { name: string }) => {
  const { t } = useTranslation();
  return (
    <div className="uppercase rounded-full border border-primary px-4 py-1 text-sm w-fit">
      {t(name)}
    </div>
  );
};

export default SectionNameRenderer;
