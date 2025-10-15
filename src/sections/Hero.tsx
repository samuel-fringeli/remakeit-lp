import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import RemakeItLogo from "../shared-components/RemakeItLogo";
import LanguageSelector from "../shared-components/LanguageSelector";

const Hero: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => setAnchorEl(null);

  const menuItems = ["Concept", "Services", "Pricing"];
  const languages = [
    { code: "fr", flag: "🇫🇷" },
    { code: "en", flag: "🇬🇧" },
    { code: "es", flag: "🇪🇸" },
  ];

  return (
    <AppBar
      position="static"
      className="!bg-primary text-white shadow-none py-2 z-20"
      sx={{ position: "sticky", top: 0 }}
    >
      <Toolbar className="flex justify-between items-center max-w-7xl mx-auto w-full px-4">
        {/* Left: Logo */}
        <RemakeItLogo className="text-white w-68" />

        {/* Center menu (desktop) */}
        <Box
          className={clsx(
            "hidden w-fit md:flex items-center gap-6 rounded-full px-6 py-2 bg-white/10 backdrop-blur-lg border border-white/20"
          )}
        >
          {menuItems.map((item) => (
            <Button
              key={item}
              className="!text-white font-medium hover:text-gray-200"
            >
              {item}
            </Button>
          ))}
        </Box>

        {/* Right side:  buttons */}
        <Box className="hidden md:flex items-center gap-3">
          <LanguageSelector />
          {/* Login */}
          <Button
            variant="contained"
            className="text-white !bg-gradient-to-r from-indigo-500 to-purple-500 hover:bg-primary/20 rounded-full px-5"
          >
            Login
          </Button>

          {/* Register */}
          <Button
            variant="contained"
            className="!text-primary bg-gradient-to-r from-gray-100 to-gray-300 rounded-full px-5 shadow-sm hover:from-gray-200 hover:to-gray-400"
          >
            Register
          </Button>
        </Box>

        {/* Mobile menu button */}
        <Box className="flex md:hidden">
          <IconButton onClick={handleMenuOpen} className="text-white">
            <FontAwesomeIcon icon={faBars} />
          </IconButton>
        </Box>

        {/* Mobile menu drawer */}
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          PaperProps={{
            className:
              "bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 text-white",
          }}
        >
          {menuItems.map((item) => (
            <MenuItem key={item} onClick={handleMenuClose}>
              {item}
            </MenuItem>
          ))}
          <MenuItem>
            <div className="flex gap-2">
              {languages.map((lang) => (
                <span key={lang.code}>{lang.flag}</span>
              ))}
            </div>
          </MenuItem>
          <MenuItem>
            <Button
              fullWidth
              variant="contained"
              className="bg-indigo-600 text-white rounded-full"
            >
              Login
            </Button>
          </MenuItem>
          <MenuItem>
            <Button
              fullWidth
              variant="contained"
              className="bg-gray-100 text-gray-800 rounded-full"
            >
              Register
            </Button>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Hero;
