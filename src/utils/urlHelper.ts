import i18n from "../i18n";

// Parameters to propagate from landing page to app
const PARAMS_TO_PROPAGATE = [
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term',
  'fp_ref', 'fpr', 'via', 'deal', 'ref', '_from', '_go'
];

/**
 * Adds the current language and propagates tracking parameters to app.remakeit.io URLs
 */
export const addLangParam = (url: string): string => {
  const currentLang = i18n.language;
  const urlObj = new URL(url);
  
  // Add lang param if not already present
  if (!urlObj.searchParams.has("lang")) {
    urlObj.searchParams.append("lang", currentLang);
  }
  
  // Get current page URL params
  const currentParams = new URLSearchParams(window.location.search);
  
  // Propagate specified parameters from current page
  PARAMS_TO_PROPAGATE.forEach((param) => {
    const value = currentParams.get(param);
    if (value && !urlObj.searchParams.has(param)) {
      urlObj.searchParams.append(param, value);
    }
  });
  
  return urlObj.toString();
};

/**
 * Gets the current tracking parameters to preserve during internal navigation
 */
export const getTrackingParams = (): string => {
  const currentParams = new URLSearchParams(window.location.search);
  const paramsToKeep = new URLSearchParams();
  
  PARAMS_TO_PROPAGATE.forEach((param) => {
    const value = currentParams.get(param);
    if (value) {
      paramsToKeep.append(param, value);
    }
  });
  
  const queryString = paramsToKeep.toString();
  return queryString ? `?${queryString}` : '';
};

