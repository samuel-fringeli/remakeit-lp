import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

const LANGUAGES = ["fr", "en", "es"];

const LanguageSelector = () => {
  const {
    i18n: { language },
  } = useTranslation();

  const handleLanguageChange = (lng: string) => {
    if (language !== lng) {
      i18n.changeLanguage(lng);
    }
  };

  return (
    <div className="flex items-center gap-2 w-fit">
      {LANGUAGES.map((lng) => (
        <Button
          key={lng}
          onClick={() => handleLanguageChange(lng)}
          className={`!text-white !p-1 !text-xs !min-w-0  ${
            language === lng ? "!border border-white rounded-full" : ""
          }`}
        >
          {lng.toUpperCase()}
        </Button>
      ))}
    </div>
  );
};

export default LanguageSelector;
