import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { useTranslation } from "react-i18next";

import SectionNameRenderer from "../shared-components/SectionNameRenderer";
import TryCustomButton from "../shared-components/TryCustomButton";
import Subtext from "../shared-components/Subtext";
import TitleRenderer from "../shared-components/TitleRenderer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown } from "@fortawesome/free-regular-svg-icons";

const Faq = () => {
  const { t } = useTranslation();

  const accordionContent = [
    {
      title: t("What is RemakeIt?"),
      description:
        t("Remakeit is an artificial intelligence that makes it possible to quickly transform YouTube videos into viral and monetizable TikTok content, without requiring editing skills.m ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."),
    },
    {
      title: t("Do I need video editing skills to use Remakeit?"),
      description:
        t("No, no assembly skills are required. Remakeit simplifies the process by automating the conversion of YouTube videos into TikTok-friendly formats and other turnkey features."),
    },
    {
      title: t("What are the benefits of using Remakeit?"),
      description:
        t("Remakeit offers instant conversion of YouTube videos to TikTok, promotes increased monetization through better visibility, and requires no editing skills, making the process accessible to everyone."),
    },
    {
      title: t("Can I monetize videos created with Remakeit?"),
      description:
        t("Yes, videos generated with Remakeit are designed to increase your visibility and monetization opportunities on TikTok and other short content platforms."),
    },
    {
      title: t("Can I customize my videos after converting with Remakeit?"),
      description:
        t("Yes, after automatic generation, you can easily personalize your videos by adding text, hashtags, or other elements to increase their attractiveness on TikTok."),
    },
  ];

  return (
    <section
      id="faq"
      className="container flex flex-col lg:flex-row gap-8 mx-auto my-16"
    >
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-8">
        <SectionNameRenderer name={t("FAQs")} />
        <TitleRenderer
          title={t("Your questions, our responses")}
          highlightIndexes={[-1]}
        />
        <Subtext text={t("Here are answers to the most frequently asked questions about RemakeIt. If you have others, our team is available to help you")} />
        <TryCustomButton />
      </div>

      <div className="w-full lg:w-1/2 space-y-8">
        {accordionContent.map((item, _) => (
          <Accordion
            key={item.title}
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
    </section>
  );
};

export default Faq;
