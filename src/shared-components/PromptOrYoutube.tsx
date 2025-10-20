import { useState } from "react";
import { Tabs, Tab, TextField, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faA } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { trackEvent } from "../utils/analytics";
import { youtubeLinkRegex } from "../constants";

const PromptOrYoutube = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const [tabValue, setTabValue] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const tabs = [
    { label: "Prompt", icon: faA },
    { label: "YouTube", icon: faYoutube },
  ];

  const handleTabChange = (_: any, v: number) => {
    setTabValue(v);
    setInputValue(""); // Clear input when switching tabs
    // Track event
    trackEvent("prompt_or_youtube_tab_changed", pathname, { tab: tabs[v].label.toLowerCase() });
  };

  const handleGenerateClick = () => {
    if (!inputValue.trim()) return;

    const encodedValue = encodeURIComponent(inputValue.trim());
    
    if (tabValue === 0) {
      // Prompt tab
      trackEvent("generate_from_prompt_clicked", pathname, { prompt: inputValue });
      globalThis.location.href = `https://app.remakeit.io/gen/videos/new?idea=${encodedValue}`;
    } else {
      // YouTube tab - validate URL first
      if (!youtubeLinkRegex.test(inputValue.trim())) {
        return;
      }
      trackEvent("generate_from_youtube_clicked", pathname, { videoUrl: inputValue });
      globalThis.location.href = `https://app.remakeit.io/gen/videos/analyse?videourl=${encodedValue}`;
    }
  };

  const isValidInput = () => {
    if (!inputValue.trim()) return false;
    // If YouTube tab, validate URL format
    if (tabValue === 1) {
      return youtubeLinkRegex.test(inputValue.trim());
    }
    return true;
  };

  return (
    <div className="flex flex-col items-center w-full gap-3 px-4">
      {/* Tabs */}
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        className="bg-white rounded-lg px-1"
        slotProps={{ indicator: { className: "hidden" } }}
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
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleGenerateClick()}
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
          onClick={handleGenerateClick}
          disabled={!isValidInput()}
          className="!bg-white !text-primary !uppercase !font-semibold hover:!bg-gray-100 transition disabled:!opacity-50"
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
