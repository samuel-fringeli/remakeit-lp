import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

const LANGUAGES = ["fr", "en", "es"];

const LanguageSelector = ({ className }: { className?: string }) => {
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
          className={`!p-1 !text-xs !min-w-0 ${className}  ${
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
