const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

// This uses phases as outlined here: https://nextjs.org/docs/#custom-configuration
module.exports = (phase) => {
  // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  // when `next build` or `npm run build` is used
  const isProd =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== "1";
  // when `next build` or `npm run build` is used
  const isStaging =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === "1";

  if (isDev) {
    console.log("Dev deployment");
  } else if (isStaging) {
    console.log("Staging deployment");
  } else if (isProd) {
    console.log("Prod deployment");
  }

  console.log("process.env");
  console.log(process.env);

  // next.config.js object
  return {
    env: {
      DEALERSHIPAPI: process.env.DEALERSHIPAPI,
    },
  };
};
