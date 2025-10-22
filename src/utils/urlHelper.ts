import i18n from "../i18n";

/**
 * Adds the current language as a query parameter to app.remakeit.io URLs
 */
export const addLangParam = (url: string): string => {
  const currentLang = i18n.language;
  const urlObj = new URL(url);
  
  // Only add lang param if it's not already present
  if (!urlObj.searchParams.has("lang")) {
    urlObj.searchParams.append("lang", currentLang);
  }
  
  return urlObj.toString();
};

