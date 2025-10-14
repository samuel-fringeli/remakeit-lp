import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
} from "@mui/material";
import { useTranslation } from "react-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown } from "@fortawesome/free-regular-svg-icons";
import SectionNameRenderer from "../shared-components/SectionNameRenderer";

const Faq = () => {
  const { t } = useTranslation();

  const accordionContent = [
    {
      title: "What is RemakeIt?",
      description:
        "Remakeit is an artificial intelligence that makes it possible to quickly transform YouTube videos into viral and monetizable TikTok content, without requiring editing skills.m ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      title: "Do I need video editing skills to use Remakeit?",
      description:
        "No, no assembly skills are required. Remakeit simplifies the process by automating the conversion of YouTube videos into TikTok-friendly formats and other turnkey features.",
    },
    {
      title: "What are the benefits of using Remakeit?",
      description:
        "Remakeit offers instant conversion of YouTube videos to TikTok, promotes increased monetization through better visibility, and requires no editing skills, making the process accessible to everyone.",
    },
    {
      title: "Can I monetize videos created with Remakeit?",
      description:
        "Yes, videos generated with Remakeit are designed to increase your visibility and monetization opportunities on TikTok and other short content platforms.",
    },
    {
      title: "Can I customize my videos after converting with Remakeit?",
      description:
        "Yes, after automatic generation, you can easily personalize your videos by adding text, hashtags, or other elements to increase their attractiveness on TikTok.",
    },
  ];

  return (
    <div className="container flex flex-col lg:flex-row gap-8 mx-auto my-16">
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-8">
        <SectionNameRenderer name="FAQS" />
        <div className="text-6xl font-bold text-center">
          <span>YOUR QUESTIONS, OUR</span>
          <span className="ml-4 text-primary">RESPONSES</span>
        </div>
        <div className="text-lg text-gray-400 font-semibold text-center">
          Here are answers to the most frequently asked questions about
          RemakeIt. If you have others, our team is available to help you
        </div>
        <Button
          variant="contained"
          className="!bg-primary rounded-full hover:bg-primary/60"
          children={t("Try it now")}
        />
      </div>

      <div className="w-full lg:w-1/2 space-y-8">
        {accordionContent.map((item, index) => (
          <Accordion
            key={index}
            disableGutters
            className="!shadow-none !border !border-gray-200"
            classes={{ rounded: "!rounded-xl" }}
            sx={{ "&:before": { display: "none" } }}
          >
            <AccordionSummary
              expandIcon={
                <FontAwesomeIcon className="!size-6" icon={faCircleDown} />
              }
              className="!py-2"
              sx={{
                "&.Mui-expanded": {
                  color: "#5046e6",
                },
              }}
            >
              <span className="font-bold">{t(item.title)}</span>
            </AccordionSummary>
            <AccordionDetails className="!pt-0 !border-b-0">
              {t(item.description)}
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default Faq;
