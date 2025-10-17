import { useState } from "react";
import { Tabs, Tab, TextField, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faA } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

const PromptOrYoutube = () => {
  const [tabValue, setTabValue] = useState(0);

  const tabs = [
    { label: "Prompt", icon: faA },
    { label: "YouTube", icon: faYoutube },
  ];

  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center w-full gap-3">
      {/* Tabs */}
      <Tabs
        value={tabValue}
        onChange={(_, v) => setTabValue(v)}
        className="bg-white rounded-lg px-1"
        TabIndicatorProps={{ className: "hidden" }}
      >
        {tabs.map((tab, i) => (
          <Tab
            className="!p-1"
            key={i}
            disableRipple
            label={
              <div
                className={`flex items-center justify-center gap-1 w-full py-1.5 px-3 rounded-md text-sm transition-all ${
                  tabValue === i
                    ? "bg-gray-200 text-gray-700"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                <FontAwesomeIcon icon={tab.icon} className="size-4" />
                {t(tab.label)}
              </div>
            }
          />
        ))}
      </Tabs>

      {/* Input Area */}
      <div className="bg-primary/20 w-full lg:w-2/3 rounded-lg p-4 !space-y-2">
        <TextField
          fullWidth
          size="small"
          placeholder={
            tabValue === 0 ? t("Write your video idea") : t("YouTube video URL")
          }
          slotProps={{
            input: { className: "bg-white/20" },
            htmlInput: { className: "text-center !text-white" },
          }}
        />

        <Button
          fullWidth
          variant="contained"
          disableElevation
          className="!bg-white !text-primary !uppercase !font-semibold hover:!bg-gray-100 transition"
        >
          {t("Generate the TikTok")}
        </Button>
      </div>

      <div className="text-xs text-white opacity-80">
        *{t("No bank card required")}
      </div>
    </div>
  );
};

export default PromptOrYoutube;
