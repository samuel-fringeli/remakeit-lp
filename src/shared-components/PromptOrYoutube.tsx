import { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { trackEvent } from "../utils/analytics";
import { youtubeLinkRegex } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import GradientOutline from "./GradientOutline";
import CustomButton from "./CustomButton";

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
      <div id="generate-tiktok-section" className="bg-primary/20 w-full lg:w-2/3 rounded-lg p-2 md:p-4 flex flex-col gap-2">
        <GradientOutline borderRadius="rounded-md">
          <div className="relative w-full bg-white rounded-md">
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
                  className: "bg-white md:!text-lg md:!py-3",
                  style: { textAlign: 'center' }
                },
                htmlInput: { 
                  className: "text-center !text-primary md:!text-lg",
                  style: { textAlign: 'center' }
                },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    border: 'none',
                  },
                  '&:hover fieldset': {
                    border: 'none',
                  },
                  '&.Mui-focused fieldset': {
                    border: 'none',
                  },
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
                    className="text-sm md:text-lg font-medium"
                    style={{
                      background: 'linear-gradient(90deg, #5147E7 0%, #A908F5 50%, #5147E7 100%)',
                      backgroundSize: '200% auto',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      animation: 'gradient-shift 2s linear infinite'
                    }}
                  >
                    {placeholders[placeholderIndex]}
                  </motion.div>
                </AnimatePresence>
              </div>
            )}
            <style>{`
              @keyframes gradient-shift {
                0% {
                  background-position: 0% center;
                }
                100% {
                  background-position: 200% center;
                }
              }
            `}</style>
          </div>
        </GradientOutline>

        <CustomButton
          label={t("Generate the TikTok")}
          onClick={handleGenerateClick}
          isShadow={false}
          size="large"
        />
      </div>

      <div className="text-xs md:text-sm text-gray-600">
        *{t("No bank card required")}
      </div>
    </div>
  );
};

export default PromptOrYoutube;
