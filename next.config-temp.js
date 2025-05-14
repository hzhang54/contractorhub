// Disable TypeScript checking
const nextConfig = require("./next.config.js");
module.exports = { ...nextConfig, typescript: { ignoreBuildErrors: true } };