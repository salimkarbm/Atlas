/** @type {import('dependency-cruiser').IConfiguration} */

module.exports = {
  forbidden: [
    {
      name: 'no-domain-to-infrastructure',
      from: {
        path: '^src/modules/.*/domain',
      },
      to: {
        path: '^src/infrastructure',
      },
    },

    {
      name: 'no-domain-to-express',
      from: {
        path: '^src/modules/.*/domain',
      },
      to: {
        path: 'express',
      },
    },

    {
      name: 'no-core-to-infrastructure',
      from: {
        path: '^src/core',
      },
      to: {
        path: '^src/infrastructure',
      },
    },
    {
      name: 'no-circular-dependencies',

      severity: 'error',

      from: {},

      to: {
        circular: true,
      },
    },
  ],
  options: {
    doNotFollow: {
      path: 'node_modules',
    },
    exclude: {
      path: 'node_modules',
    },
  },
};
