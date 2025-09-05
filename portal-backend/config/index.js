const config = {
  env: process.env.NODE_ENV || "development",
  isProduction: process.env.NODE_ENV === "production",
  port: process.env.PORT || 3000,
};

module.exports = config;
