import { useTranslation } from "react-i18next";
import HighlightedText from "./HighlightedText";

export default function HeroText() {
  const { t } = useTranslation();

  return (
    <>
      <div className="text-3xl md:text-7xl text-gray-900 font-bold text-center px-4">
        <div className="flex flex-row flex-wrap gap-1 md:gap-4 items-center justify-center">
          <span>{t("Create")}</span>
          <HighlightedText>
            {t("viral clips")}
          </HighlightedText>
          <span>{t("in 1 click.")}</span>
        </div>
      </div>
      <div className="hidden md:block text-gray-700 text-sm md:text-xl font-bold text-center max-w-3xl px-4">
        {t(
          "Instantly turn your videos and ideas into viral and monetizable short content"
        )}
      </div>
    </>
  );
}
