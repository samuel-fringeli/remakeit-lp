import { useState } from "react";
import bgImage from "../assets/hero-bg.svg";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const pricingPlans = [
  {
    label: "Creator",
    monthlyPrice: 22,
    annualPrice: 228,
    badge: null,
    featuresAvailable: [
      "3600 Credits Remakeit Shorts",
      "720 Text to Speech",
      "+3 background music tracks",
      "Prompt to Viral video",
    ],
    featuresUnavailable: [
      "Access to private support",
      "Automatic publishing ⚡",
    ],
    buttonText: "Choose the package",
    theme: {
      bg: "bg-primary/20", // light violet
      border: "border-white/30",
      accent: "text-white",
    },
  },
  {
    label: "Expert",
    monthlyPrice: 39,
    annualPrice: 420,
    badge: "Most Popular",
    featuresAvailable: [
      "7200 Credits Remakeit Shorts",
      "1400 Text to Speech",
      "All background music",
      "Prompt to Viral video",
      "Access to private support",
      "Automatic publishing ⚡",
    ],
    featuresUnavailable: [],
    buttonText: "Choose the package",
    theme: {
      bg: "bg-white/60",
      border: "border-[#5f5bff]/40",
      accent: "!text-black",
    },
  },
  {
    label: "Professional",
    monthlyPrice: 89,
    annualPrice: 900,
    badge: null,
    featuresAvailable: [
      "Unlimited Remakeit Shorts",
      "Unlimited Text to Speech",
      "All background music",
      "Prompt to Viral video",
      "Access to private support",
      "Automatic publishing ⚡",
    ],
    featuresUnavailable: [],
    buttonText: "Choose the package",
    theme: {
      bg: "bg-primary/20", // light violet
      border: "border-white/30",
      accent: "text-white",
    },
  },
];

const Pricing = () => {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <motion.section
      id="pricing"
      style={{ background: `url(${bgImage})` }}
      className="pt-24 pb-8 px-4 flex flex-col gap-8 items-center"
      initial={{ y: 10 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="md:text-6xl text-4xl text-white font-bold text-center uppercase">
        Invest in your virality
      </div>

      <div className="md:text-lg text-sm text-white/50 font-semibold text-center">
        Whether you are a beginner creator or a seasoned professional, choose
        the plan that fits your needs. No commitment, cancel whenever you want
      </div>

      <div className="flex flex-col items-center justify-center">
        {/* Billing Toggle */}
        <div className="flex items-center bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-1 mb-10">
          <button
            className={`px-6 py-2 rounded-full transition-all ${
              billing === "monthly"
                ? "bg-white text-primary font-semibold"
                : "text-white"
            }`}
            onClick={() => setBilling("monthly")}
          >
            Monthly
          </button>
          <button
            className={`px-6 py-2 rounded-full transition-all ${
              billing === "yearly"
                ? "bg-white text-primary font-semibold"
                : "text-white"
            }`}
            onClick={() => setBilling("yearly")}
          >
            Yearly <span className="opacity-70">-15%</span>
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-6 md:px-16 w-full max-w-6xl">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative rounded-3xl border ${plan.theme.border} ${plan.theme.bg} p-8 flex flex-col justify-between shadow-xl hover:scale-105 transition-transform ${plan.theme.accent}`}
              whileHover={{ y: -5 }}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-sm px-4 py-1 rounded-full shadow-lg">
                  {plan.badge}
                </div>
              )}

              {/* Header */}
              <div>
                <h3 className="text-lg font-semibold mb-3">{plan.label}</h3>
                <div className="text-4xl font-bold mb-1 flex items-center gap-2">
                  {billing === "monthly"
                    ? `${plan.monthlyPrice}€`
                    : `${Math.round(plan.annualPrice / 12)}€`}

                  <div
                    className={`${plan.theme.accent}/80 font-medium !text-xs`}
                  >
                    <div> per month</div>
                    {billing === "yearly" && (
                      <div>({plan.annualPrice}€ per year)</div>
                    )}
                  </div>
                </div>
              </div>

              {/* Features */}
              <ul className="mt-6 flex-1 space-y-2">
                {plan.featuresAvailable.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span
                      className={
                        plan.label === "Expert"
                          ? "text-primary/60"
                          : "text-white"
                      }
                    >
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </span>{" "}
                    {f}
                  </li>
                ))}
                {plan.featuresUnavailable.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 line-through">
                    <span className="text-red-600 bg-white rounded-full size-3 flex items-center">
                      <FontAwesomeIcon icon={faCircleXmark} />
                    </span>{" "}
                    <span className="opacity-50">{f}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className={`mt-8 py-3 rounded-xl font-semibold transition-all ${
                  plan.label === "Expert"
                    ? "bg-[#5f5bff] text-white"
                    : "bg-white text-[#5f5bff]"
                }`}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Pricing;
