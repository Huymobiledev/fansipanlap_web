module.exports = {
  apps: [
    {
      name: "cctpa.network",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "development",
        PORT: 3001,
       
      },
    },
  ],
};
