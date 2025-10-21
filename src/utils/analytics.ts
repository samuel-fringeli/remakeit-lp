import * as amplitude from "@amplitude/analytics-browser";

export const trackEvent = async (
  eventName: string,
  eventLocation: string,
  eventProperties: object = {}
) => {
  const properties = {
    ...eventProperties,
    _event: eventLocation,
  };

  // eslint-disable-next-line no-console
  console.debug(eventName, properties);

  amplitude.track(`lp_${eventName}`, properties);
};
