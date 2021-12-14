const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== "1";
  const isStaging =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === "1";

  if (isDev) {
    console.log("Dev deployment");
  } else if (isStaging) {
    console.log("Staging deployment");
  } else if (isProd) {
    console.log("Prod deployment");
  }

  // next.config.js object
  return {
    env: {
      DEALERSHIP_API: process.env.DEALERSHIP_API,
    },
    reactStrictMode: true,
  };
};
