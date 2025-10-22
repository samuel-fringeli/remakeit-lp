import { a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  TrackingParams: a
    .model({
      content: a.string(),
    })
    .authorization((allow) => [allow.guest().to(['read'])]),
});

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: {
      expiresInDays: 7,
    },
  },
});
