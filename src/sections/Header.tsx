import { useState } from "react";
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
      const headerHeight = 50;
      console.log(headerHeight);
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
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
      // Wait for navigation and hero section to render before scrolling
      setTimeout(() => {
        // Use requestAnimationFrame to ensure DOM is fully updated
        requestAnimationFrame(() => {
          handleScroll(item.toLowerCase());
        });
      }, 500);
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

  return (
    <AppBar
      id="header"
      position="static"
      className="!shadow-none py-2 z-20 !bg-transparent !text-gray-900 !pb-0 backdrop-blur-lg"
      sx={{ position: "fixed", top: 0 }}
    >
      <Toolbar className="flex justify-between items-center max-w-7xl mx-auto w-full px-4">
        {/* Left: Logo */}
        <div 
          onClick={() => {
            navigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
            handleMenuClose();
          }}
        >
          <RemakeItLogo
            className="md:!text-primary !text-gray-900"
          />
        </div>

        {/* Center menu (desktop) */}
        <Box
          className="hidden lg:absolute right-1/2 translate-x-1/2 w-fit lg:flex items-center gap-6 rounded-full px-6 py-2 bg-white/60 backdrop-blur-lg border border-gray-200"
        >
          {menuItems.map((item) => (
            <Button
              key={item}
              className="!text-gray-900 font-medium hover:!text-primary"
              onClick={() => handleMenuItemClick(item)}
            >
              {item}
            </Button>
          ))}
        </Box>

        {/* Right side:  buttons */}
        <Box className="hidden lg:flex items-center gap-3">
          <LanguageSelector
            className="!text-gray-900"
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
            className="!text-gray-900"
          />

          <IconButton 
            onClick={handleMenuToggle}
            aria-controls="navbar-menu"
            aria-expanded={mobileMenuOpen}
          >
            <FontAwesomeIcon icon={faBars} className="text-gray-900" />
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
