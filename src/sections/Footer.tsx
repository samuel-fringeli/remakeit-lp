import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faDiscord } from "@fortawesome/free-brands-svg-icons";
import RemakeItLogo from "../shared-components/RemakeItLogo";
import { trackEvent } from "../utils/analytics";
import { getTrackingParams, addLangParam } from "../utils/urlHelper";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  
  const footerMenus = [
    {
      title: t("Help"),
      links: [
        { label: t("Tutorials"), url: addLangParam("https://app.remakeit.io/tutorials"), external: true },
        { label: t("Community"), url: "https://t.me/+pBkwZKLauvk2MGVk?sc=289924664efbd5683f7623c4624dabde3c84b3787", external: true },
        { label: t("Contact us"), url: "https://docs.remakeit.io/Contact_Us_Remakeit.pdf", external: true },
      ],
    },
    {
      title: t("Company"),
      links: [
        { label: t("Commercial proposals"), url: "mailto:myselfpro.contact@gmail.com", external: false },
        { label: t("Affiliation"), url: "https://affiliate.remakeit.io/", external: true },
        { label: t("About us"), url: "https://docs.remakeit.io/About_Us_Remakeit.pdf", external: true },
        { label: t("Pricing"), url: `/pricing${getTrackingParams()}`, external: false },
      ],
    },
    {
      title: t("Legal"),
      links: [
        { label: t("General conditions"), url: "https://docs.remakeit.io/Terms_Conditions_Remakeit.pdf", external: true },
        { label: t("Shipping Policy"), url: "https://docs.remakeit.io/Delivery_Shipping_Policy_Remakeit.pdf", external: true },
        { label: t("Legal Attestation"), url: "https://docs.remakeit.io/Legal_Attestation_Remakeit_Formatted.pdf", external: true },
        { label: t("Privacy policy"), url: "https://docs.remakeit.io/Privacy_Policy_Remakeit.pdf", external: true },
        { label: t("Refund policy"), url: "https://docs.remakeit.io/Refund_Policy_Remakeit.pdf", external: true },
        { label: t("Cancellation policy"), url: "https://docs.remakeit.io/-%20[x]%20Cancellation_policy_Remakeit.pdf", external: true },
      ],
    },
    {
      title: t("Social"),
      links: [
        { label: <FontAwesomeIcon icon={faInstagram} />, url: "https://www.instagram.com/remakeit.io", external: true },
        { label: <FontAwesomeIcon icon={faDiscord} />, url: "https://discord.gg/6XYxkNkrg6", external: true },
      ],
    },
  ];

  const handleGetStartedNow = () => {
    // Track event
    trackEvent("get_started_now_clicked", pathname);
    
    const trackingParams = getTrackingParams();
    
    // If already on home page, just scroll to top
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Navigate to home first, then scroll to top
      navigate(`/${trackingParams}`);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <section
      id="footer"
      className="relative mx-auto text-white flex flex-col items-center justify-center gap-8 py-24 bg-primary"
    >
      <div className="font-semibold text-2xl">
        {t("Create your next viral video")}
      </div>
      <div className="opacity-80 text-xl text-center">
        {t("Turn your ideas into attractive shorts in just seconds.")}
      </div>
      <Button
        className="!rounded-full !bg-linear-to-b from-black/20 to-black/0 hover:bg-linear-to-b hover:from-white/20 hover:to-white/0 !text-white !px-4 z-10"
        size="large"
        onClick={handleGetStartedNow}
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
                    <a 
                      href={link.url}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                    >
                      {link.label}
                    </a>
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
    </section>
  );
};

export default Footer;
