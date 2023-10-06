module.exports = {
  apps: [
    {
      name: "getActualClientRect-watcher",
      script: "npm run prepublish",
      watch: ["src"],
      autorestart: false,
    },
  ],
};
