import { useTranslation } from "react-i18next";

export default function HeroText() {
  const { t } = useTranslation();

  return (
    <>
      <div className="text-4xl md:text-7xl text-white font-bold text-center px-4">
        <div className="flex flex-col md:flex-row md:space-x-4 items-center justify-center">
          <span>{t("Create")}</span>
          <span className="text-primary bg-white px-4 pb-1 md:py-4 rounded-2xl">
            {t("viral clips")}
          </span>
          <span>{t("in 1 click.")}</span>
        </div>
      </div>
      <div className="text-white text-sm md:text-xl font-bold text-center max-w-120 px-4">
        {t(
          "Instantly turn your videos and ideas into viral and monetizable short content"
        )}
      </div>
    </>
  );
}
