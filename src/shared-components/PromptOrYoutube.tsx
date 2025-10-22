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
      globalThis.location.href = `https://app.remakeit.io/prompt-to-video/videos/new?prompt=${encodedValue}`;
    }
  };

  return (
    <div className="flex flex-col items-center w-full gap-3 px-4">
      {/* Input Area */}
      <div className="bg-primary/20 w-full lg:w-2/3 rounded-lg p-2 md:p-4 flex flex-col gap-2">
        <div className="relative w-full">
          <TextField
            fullWidth
            multiline
            rows={3}
            size="small"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleGenerateClick();
              }
            }}
            placeholder=" "
            slotProps={{
              input: { 
                className: "bg-white backdrop-blur-sm md:!text-lg md:!py-3",
                style: { textAlign: 'center' }
              },
              htmlInput: { 
                className: "text-center !text-primary md:!text-lg",
                style: { textAlign: 'center' }
              },
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
                  className="text-primary text-sm md:text-lg"
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
            className="!bg-white !text-primary !uppercase !font-semibold hover:!bg-white/90 transition !rounded-md md:!py-3 md:!text-base"
          >
            {t("Generate the TikTok")}
          </Button>
        </div>
      </div>

      <div className="text-xs md:text-sm text-white opacity-80">
        *{t("No bank card required")}
      </div>
    </div>
  );
};

export default PromptOrYoutube;
