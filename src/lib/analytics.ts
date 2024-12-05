import ReactGA from 'react-ga4';

const GA_TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID;

export const initGA = () => {
  if (!GA_TRACKING_ID) {
    console.error('Google Analytics Measurement ID is missing.');
    return;
  }
  ReactGA.initialize(GA_TRACKING_ID);
};

export const trackPageView = (url: string) => {
  if (GA_TRACKING_ID) {
    ReactGA.send({ hitType: 'pageview', page: url });
  }
};

export const trackEvent = (action: string, category: string, label: string, value?: number) => {
  if (GA_TRACKING_ID) {
    ReactGA.event({
      action,
      category,
      label,
      value,
    });
  }
};
