import { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { trackEvent } from "../utils/analytics";
import { youtubeLinkRegex } from "../constants";
import { motion, AnimatePresence } from "framer-motion";

const PromptOrYoutube = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  const placeholders = [
    t("Write your video idea"),
    t("YouTube video URL")
  ];

  // Rotate placeholder every 2 seconds when input is empty
  useEffect(() => {
    if (inputValue.trim()) return;
    
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, [inputValue, placeholders.length]);

  const handleGenerateClick = () => {
    if (!inputValue.trim()) return;

    const encodedValue = encodeURIComponent(inputValue.trim());
    const isYouTubeLink = youtubeLinkRegex.test(inputValue.trim());
    
    if (isYouTubeLink) {
      // YouTube URL detected
      trackEvent("generate_from_youtube_clicked", pathname, { videoUrl: inputValue });
      globalThis.location.href = `https://app.remakeit.io/gen/videos/analyse?videourl=${encodedValue}`;
    } else {
      // Treat as prompt
      trackEvent("generate_from_prompt_clicked", pathname, { prompt: inputValue });
      globalThis.location.href = `https://app.remakeit.io/gen/videos/new?idea=${encodedValue}`;
    }
  };

  return (
    <div className="flex flex-col items-center w-full gap-3 px-4">
      {/* Input Area */}
      <div className="bg-primary/20 w-full lg:w-2/3 rounded-lg p-2 flex flex-col gap-1">
        <div className="relative w-full">
          <TextField
            fullWidth
            size="small"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleGenerateClick()}
            placeholder=" "
            slotProps={{
              input: { className: "bg-white backdrop-blur-sm" },
              htmlInput: { className: "text-center !text-primary" },
            }}
          />
          {!inputValue && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <AnimatePresence mode="wait">
                <motion.div
                  key={placeholderIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 0.5, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="text-primary text-sm"
                >
                  {placeholders[placeholderIndex]}
                </motion.div>
              </AnimatePresence>
            </div>
          )}
        </div>

        <div className="relative p-[2px] rounded-lg bg-gradient-to-r from-[#5147E7] to-[#A908F5]">
          <Button
            fullWidth
            variant="contained"
            disableElevation
            onClick={handleGenerateClick}
            className="!bg-white !text-primary !uppercase !font-semibold hover:!bg-white/90 transition !rounded-md"
          >
            {t("Generate the TikTok")}
          </Button>
        </div>
      </div>

      <div className="text-xs text-white opacity-80">
        *{t("No bank card required")}
      </div>
    </div>
  );
};

export default PromptOrYoutube;
