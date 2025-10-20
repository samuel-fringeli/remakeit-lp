import { useEffect, useState } from "react";
import clsx from "clsx";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
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

const menuItems = ["Concept", "Services", "Pricing"];

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isOnDarkSection, setIsOnDarkSection] = useState(false);

  const navigate = useNavigate();
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => setAnchorEl(null);

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
    
    // Navigate to pricing page if Pricing item
    if (item === "Pricing") {
      navigate("/" + item.toLowerCase());
    }
    
    // Scroll to section
    handleScroll(item.toLowerCase());
    
    // Close mobile menu if open
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
    const darkSection = document.getElementById("hero");
    if (!darkSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOnDarkSection(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    observer.observe(darkSection);
    return () => observer.disconnect();
  }, []);

  return (
    <AppBar
      id="header"
      position="static"
      className={`!shadow-none py-2 z-20 !bg-transparent ${
        isOnDarkSection ? "!text-white" : "!text-primary"
      }`}
      sx={{ position: "fixed", top: 0 }}
    >
      <Toolbar className="flex justify-between items-center max-w-7xl mx-auto w-full px-4">
        {/* Left: Logo */}
        <RemakeItLogo
          className={isOnDarkSection ? "text-white" : "text-primary"}
        />

        {/* Center menu (desktop) */}
        <Box
          className={clsx(
            isOnDarkSection
              ? "bg-white/10 backdrop-blur-lg border border-white/20"
              : "bg-primary/10 backdrop-blur-lg border border-primary/20",
            "hidden lg:absolute right-1/2 translate-x-1/2 w-fit lg:flex items-center gap-6 rounded-full px-6 py-2"
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
            className={isOnDarkSection ? "!text-white" : "!text-primary"}
          />
          {/* Login */}
          <CustomButton
            isShadow={false}
            onClick={handleSignIn}
          />

          {/* Register */}
          <CustomButton
            isShadow={false}
            variant="secondary"
            label="Register"
            onClick={handleSignUp}
          />
        </Box>

        {/* Mobile menu button */}
        <Box className="flex lg:hidden">
          <LanguageSelector
            className={isOnDarkSection ? "!text-white" : "!text-primary"}
          />

          <IconButton onClick={handleMenuOpen} className="text-white">
            <FontAwesomeIcon icon={faBars} />
          </IconButton>
        </Box>

        {/* Mobile menu drawer */}
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          slotProps={{
            paper: {
              className:
                "bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 text-white",
            },
          }}
        >
          {menuItems.map((item) => (
            <MenuItem key={item} onClick={() => handleMenuItemClick(item)}>
              {item}
            </MenuItem>
          ))}
          <MenuItem>
            <Button
              fullWidth
              variant="contained"
              className="bg-indigo-600 text-white rounded-full"
              onClick={handleSignIn}
            >
              {t("Login")}
            </Button>
          </MenuItem>
          <MenuItem>
            <Button
              fullWidth
              variant="contained"
              className="bg-gray-100 text-gray-800 rounded-full"
              onClick={handleSignUp}
            >
              {t("Register")}
            </Button>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
