import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { trackEvent } from "../utils/analytics";
import CustomButton from "./CustomButton";

const TryCustomButton = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const handleTryButton = () => {
    // Track event
    trackEvent("try_it_now_clicked", pathname);
    
    // Navigate to app sign-up
    globalThis.location.href = "https://app.remakeit.io/sign-up";
  };

  return <CustomButton label={t("Try it now")} onClick={handleTryButton} />;
};

export default TryCustomButton;

