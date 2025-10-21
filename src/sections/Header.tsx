import { useEffect, useState } from "react";
import clsx from "clsx";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
} from "@mui/material";
import LanguageSelector from "../shared-components/LanguageSelector";
import RemakeItLogo from "../shared-components/RemakeItLogo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import CustomButton from "../shared-components/CustomButton";
import { useTranslation } from "react-i18next";
import { trackEvent } from "../utils/analytics";

const signInUrl = "https://app.remakeit.io/sign-in";
const signUpUrl = "https://app.remakeit.io/sign-up";

const Header = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const [isOnDarkSection, setIsOnDarkSection] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [t("Concept"), t("Services"), t("Pricing")];

  const handleMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMenuClose = () => {
    setMobileMenuOpen(false);
  };

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMenuItemClick = (item: string) => {
    // Track event
    const eventName = item.toLowerCase() + "_nav_menu_clicked";
    trackEvent(eventName, pathname);
    
    // Navigate to pricing page if Pricing item (compare with translation)
    if (item === t("Pricing")) {
      navigate("/pricing");
      window.scrollTo({ top: 0, behavior: "smooth" });
      handleMenuClose();
      return;
    }
    
    // For other items, navigate to home and scroll to section
    if (pathname === "/") {
      handleScroll(item.toLowerCase());
    } else {
      navigate("/");
      // Wait for navigation before scrolling
      setTimeout(() => {
        handleScroll(item.toLowerCase());
      }, 100);
    }
    
    // Close mobile menu
    handleMenuClose();
  };

  const handleSignIn = () => {
    // Track sign in event
    trackEvent("sign_in_clicked", pathname);
    // Navigate to external sign in page
    globalThis.location.href = signInUrl;
  };

  const handleSignUp = () => {
    // Track sign up event
    trackEvent("sign_up_clicked", pathname);
    // Navigate to external sign up page
    globalThis.location.href = signUpUrl;
  };

  useEffect(() => {
    // Observe either hero or pricing section depending on current page
    const darkSectionId = pathname === "/pricing" ? "pricing" : "hero";
    const darkSection = document.getElementById(darkSectionId);
    
    if (!darkSection) {
      setIsOnDarkSection(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOnDarkSection(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.05,
      }
    );

    observer.observe(darkSection);
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <AppBar
      id="header"
      position="static"
      className={`!shadow-none py-2 z-20 !bg-transparent transition-colors duration-200 !pb-0 ${
        isOnDarkSection ? "!text-primary" : "!text-white"
      } backdrop-blur-lg`}
      sx={{ position: "fixed", top: 0 }}
    >
      <Toolbar className="flex justify-between items-center max-w-7xl mx-auto w-full px-4">
        {/* Left: Logo */}
        <RemakeItLogo
          className={`transition-colors duration-200 ${isOnDarkSection ? "text-white" : "text-primary"}`}
        />

        {/* Center menu (desktop) */}
        <Box
          className={clsx(
            isOnDarkSection
              ? "bg-white/60 backdrop-blur-lg border border-white/20"
              : "bg-primary/60 backdrop-blur-lg border border-primary/20",
            "hidden lg:absolute right-1/2 translate-x-1/2 w-fit lg:flex items-center gap-6 rounded-full px-6 py-2 transition-all duration-200"
          )}
        >
          {menuItems.map((item) => (
            <Button
              key={item}
              className="!text-inherit font-medium hover:text-gray-200"
              onClick={() => handleMenuItemClick(item)}
            >
              {item}
            </Button>
          ))}
        </Box>

        {/* Right side:  buttons */}
        <Box className="hidden lg:flex items-center gap-3">
          <LanguageSelector
            className={`transition-colors duration-200 ${isOnDarkSection ? "!text-white" : "!text-primary"}`}
          />
          {/* Login */}
          <CustomButton
            isShadow={false}
            label={t("Login")}
            onClick={handleSignIn}
          />

          {/* Register */}
          <CustomButton
            isShadow={false}
            variant="secondary"
            label={t("Register")}
            onClick={handleSignUp}
          />
        </Box>

        {/* Mobile menu button */}
        <Box className="flex lg:hidden">
          <LanguageSelector
            className={`transition-colors duration-200 ${isOnDarkSection ? "!text-white" : "!text-primary"}`}
          />

          <IconButton 
            onClick={handleMenuToggle}
            className="transition-colors duration-200"
            aria-controls="navbar-menu"
            aria-expanded={mobileMenuOpen}
          >
            <FontAwesomeIcon icon={faBars} className={`${isOnDarkSection ? "text-white" : "text-primary"}`} />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile collapsible menu */}
      <div 
        id="navbar-menu"
        className={`${
          mobileMenuOpen ? 'max-h-126 opacity-100' : 'max-h-0 opacity-0'
        } w-full lg:hidden transition-all duration-300 ease-in-out overflow-hidden`}
      >
        <ul className="flex flex-col px-4 pt-2 pb-4 border-t border-gray-200 bg-white/75 backdrop-blur-lg">
          {menuItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => handleMenuItemClick(item)}
                className="block w-full text-left py-3 px-4 text-sm text-primary rounded-lg hover:bg-primary/10 transition-colors"
              >
                {item}
              </button>
            </li>
          ))}
          <li className="mt-2 flex gap-2 justify-center px-4">
            <CustomButton
              isShadow={false}
              label={t("Login")}
              onClick={() => {
                handleSignIn();
                handleMenuClose();
              }}
            />
            <CustomButton
              isShadow={false}
              variant="secondary"
              label={t("Register")}
              onClick={() => {
                handleSignUp();
                handleMenuClose();
              }}
            />
          </li>
        </ul>
      </div>
    </AppBar>
  );
};

export default Header;
