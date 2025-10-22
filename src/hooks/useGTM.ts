import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

/**
 * Custom hook to initialize Google Tag Manager
 */
export const useGTM = () => {
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: 'GTM-P3BW3B6C'
    };
    TagManager.initialize(tagManagerArgs);
  }, []);
};

