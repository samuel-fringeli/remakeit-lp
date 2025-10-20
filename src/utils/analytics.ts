import * as amplitude from "@amplitude/analytics-browser";

export const trackEvent = async (
  eventName: string,
  eventLocation: string,
  eventProperties: object = {}
) => {
  const properties = {
    ...eventProperties,
    app_name: "landing_page",
    _event: eventLocation,
  };

  // eslint-disable-next-line no-console
  console.debug(eventName, properties);

  amplitude.track(`web_${eventName}`, properties);
};
