import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faDiscord } from "@fortawesome/free-brands-svg-icons";
import RemakeItLogo from "../shared-components/RemakeItLogo";

const Footer = () => {
  const { t } = useTranslation();

  const footerMenus = [
    {
      title: t("Help"),
      links: [
        { label: t("Tutorials"), url: "#" },
        { label: t("Community"), url: "#" },
        { label: t("Contact us"), url: "#" },
      ],
    },
    {
      title: t("Company"),
      links: [
        { label: t("Commercial proposals"), url: "#" },
        { label: t("Affiliation"), url: "#" },
        { label: t("Pricing"), url: "#" },
      ],
    },
    {
      title: t("Legal"),
      links: [{ label: t("General conditions"), url: "#" }],
    },
    {
      title: t("Social"),
      links: [
        { label: <FontAwesomeIcon icon={faInstagram} />, url: "#" },
        { label: <FontAwesomeIcon icon={faDiscord} />, url: "#" },
      ],
    },
  ];

  return (
    <div className="relative mx-auto text-white flex flex-col items-center justify-center gap-8 py-24 bg-primary">
      <div className="font-semibold text-2xl">
        {t("Create your next viral video")}
      </div>
      <div className="opacity-80 text-xl text-center">
        {t("Turn your ideas into attractive shorts in just seconds.")}
      </div>
      <Button
        className="!rounded-full !bg-linear-to-b from-black/20 to-black/0 hover:bg-linear-to-b hover:from-white/20 hover:to-white/0 !text-white !px-4 z-10"
        size="large"
      >
        <span className="text-lg">{t("Get started now")}</span>
      </Button>
      <div className="container">
        <div className="bg-white w-full rounded-[64px] py-10 px-24 space-y-4 text-primary">
          <div className="flex flex-wrap text-center text-lg font-semibold space-y-8">
            <div className="w-full lg:w-[20%]">
              <RemakeItLogo />
            </div>

            {footerMenus.map((menu, index) => (
              <div
                className="w-full md:w-[50%] lg:w-[20%] lg:last:w-[10%] md:text-left space-y-4"
                key={index}
              >
                <div>{menu.title}</div>
                {menu.links.map((link, index) => (
                  <div
                    key={index}
                    className="text-black/80 hover:text-primary/70"
                  >
                    <a href={link.url}>{link.label}</a>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="text-center text-lg">© 2025 Remakeit.</div>
        </div>
      </div>
      {/* Bg text */}
      <div className="absolute top-0 sm:text-[20vw] font-bold leading-40 tracking-tight select-none opacity-0 md:opacity-5">
        REMAKEIT
      </div>
    </div>
  );
};

export default Footer;
