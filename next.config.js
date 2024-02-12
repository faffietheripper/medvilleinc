/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

const runtimeEnv = require("next-runtime-dotenv");

module.exports = runtimeEnv({
  public: ["ADMIN_PASSWORD"],
});
