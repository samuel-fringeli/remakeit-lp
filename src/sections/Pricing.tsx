import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import GradientOutline from "../shared-components/GradientOutline";
import { trackEvent } from "../utils/analytics";
import { useLocation } from "react-router-dom";
import { Button } from "@mui/material";

const pricingPlans = [
  {
    labelKey: "Creator",
    monthlyPrice: 22,
    annualPrice: 228,
    badgeKey: null,
    featuresAvailable: [
      { count: "3600", key: "Credits Remakeit Shorts" },
      { count: "720", key: "Text to Speech" },
      { count: "+3", key: "background music tracks" },
      { count: "", key: "Prompt to Viral video" },
    ],
    featuresUnavailable: [
      "Access to private support",
      "Automatic publishing ⚡",
    ],
    buttonTextKey: "Choose the package",
    isMostPopular: false,
  },
  {
    labelKey: "Expert",
    monthlyPrice: 39,
    annualPrice: 420,
    badgeKey: "Most Popular",
    featuresAvailable: [
      { count: "7200", key: "Credits Remakeit Shorts" },
      { count: "1400", key: "Text to Speech" },
      { count: "", key: "All background music" },
      { count: "", key: "Prompt to Viral video" },
      { count: "", key: "Access to private support" },
      { count: "", key: "Automatic publishing ⚡" },
    ],
    featuresUnavailable: [],
    buttonTextKey: "Choose the package",
    isMostPopular: true,
  },
  {
    labelKey: "Professional",
    monthlyPrice: 89,
    annualPrice: 900,
    badgeKey: null,
    featuresAvailable: [
      { count: "", key: "Unlimited Remakeit Shorts" },
      { count: "", key: "Unlimited Text to Speech" },
      { count: "", key: "All background music" },
      { count: "", key: "Prompt to Viral video" },
      { count: "", key: "Access to private support" },
      { count: "", key: "Automatic publishing ⚡" },
    ],
    featuresUnavailable: [],
    buttonTextKey: "Choose the package",
    isMostPopular: false,
  },
];

const Pricing = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  const handleChoosePackage = () => {
    // Track event
    trackEvent("choose_package_clicked", pathname);

    // Navigate to app sign-up
    globalThis.location.href = "https://app.remakeit.io/pricing-auth";
  };

  return (
    <motion.section
      id="pricing"
      className="relative pt-24 pb-8 px-4 flex flex-col gap-8 items-center bg-white overflow-hidden"
      initial={{ y: 10 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Primary color cloud background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/20 md:top-1/12 left-1/2 -translate-x-1/2 w-full md:w-[1200px] h-[100px] md:h-[300px] bg-primary opacity-60 md:opacity-40 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 flex flex-col gap-8 items-center w-full">
        <div className="md:text-6xl text-4xl text-gray-900 font-bold text-center uppercase">
          {t("Invest in your virality")}
        </div>

        <div className="hidden md:block md:text-lg text-sm text-gray-600 font-semibold text-center max-w-3xl">
          {t("Whether you are a beginner creator or a seasoned professional, choose the plan that fits your needs. No commitment, cancel whenever you want")}
        </div>

        <div className="flex flex-col items-center justify-center w-full">
          {/* Billing Toggle */}
          <div className="flex items-center bg-gray-100 border border-gray-200 rounded-full p-1 mb-10">
            <button
              className={`px-6 py-2 rounded-full transition-all ${
                billing === "monthly"
                  ? "bg-primary text-white font-semibold"
                  : "text-gray-600"
              }`}
              onClick={() => setBilling("monthly")}
            >
              {t("Monthly")}
            </button>
            <button
              className={`px-6 py-2 rounded-full transition-all ${
                billing === "yearly"
                  ? "bg-primary text-white font-semibold"
                  : "text-gray-600"
              }`}
              onClick={() => setBilling("yearly")}
            >
              {t("Yearly")} <span className="opacity-70">-15%</span>
            </button>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-6 md:px-16 w-full max-w-6xl">
            {pricingPlans.map((plan) => (
              <motion.div
                key={plan.labelKey}
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <GradientOutline
                  borderRadius="rounded-3xl"
                  borderWidth="p-1"
                >
                  <div
                    className={`relative rounded-3xl p-8 flex flex-col justify-between shadow-xl ${
                      plan.isMostPopular
                        ? "bg-[#e1dff7] text-gray-900"
                        : "bg-white text-gray-900"
                    }`}
                    style={{ minHeight: "500px" }}
                  >
                  {/* Badge */}
                  {plan.badgeKey && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-sm px-4 py-1 rounded-full shadow-lg">
                      {t(plan.badgeKey)}
                    </div>
                  )}

                  {/* Header */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">{t(plan.labelKey)}</h3>
                    <div className="text-4xl font-bold mb-1 flex items-center gap-2">
                      {billing === "monthly"
                        ? `${plan.monthlyPrice}€`
                        : `${Math.round(plan.annualPrice / 12)}€`}

                      <div
                        className={`font-medium !text-xs "text-gray-600"`}
                      >
                        <div>{t("per month")}</div>
                        {billing === "yearly" && (
                          <div>({plan.annualPrice}€ {t("per year")})</div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="mt-6 flex-1 space-y-2">
                    {plan.featuresAvailable.map((f) => (
                      <li key={f.key} className="flex items-center gap-2">
                        <span
                          className="text-primary"
                        >
                          <FontAwesomeIcon icon={faCircleCheck} />
                        </span>{" "}
                        <span>
                          {f.count && <strong>{f.count} </strong>}
                          {t(f.key)}
                        </span>
                      </li>
                    ))}
                    {plan.featuresUnavailable.map((f) => (
                      <li key={f} className="flex items-center gap-2 line-through">
                        <span className="text-red-500">
                          <FontAwesomeIcon icon={faCircleXmark} />
                        </span>{" "}
                        <span className="opacity-50">{t(f)}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <Button
                    fullWidth
                    disableElevation
                    variant="contained"
                    onClick={handleChoosePackage}
                    className={`!mt-8 !py-3 !rounded-xl !font-semibold !transition-all ${
                      plan.isMostPopular
                        ? "!bg-white !text-primary hover:!bg-gray-100"
                        : "!bg-primary !text-white hover:!bg-primary/90"
                    }`}
                  >
                    {t(plan.buttonTextKey)}
                  </Button>
                  </div>
                </GradientOutline>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Pricing;
