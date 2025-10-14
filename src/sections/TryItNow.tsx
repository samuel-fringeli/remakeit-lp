import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const TryItNow = () => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto my-16">
      <div className="rounded-4xl bg-black p-16 text-white space-y-16">
        <div className="uppercase text-6xl font-bold">
          <span>{t("Ready to create your")}</span>
          <span className="text-primary"> {t("viral videos?")}</span>
        </div>
        <div className="text-xl w-1/2">
          {t(
            "Join RemakeIt now and start generating your first content in one click. Register for free and test the platform"
          )}
        </div>
        <Button
          variant="contained"
          className="rounded-full !bg-primary hover:!bg-primary/80"
          children={t("Try it now")}
        />
      </div>
    </div>
  );
};

export default TryItNow;
