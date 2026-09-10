/** @type {import('dependency-cruiser').IConfiguration} */

module.exports = {
  forbidden: [
    {
      name: 'no-domain-to-infrastructure',
      from: {
        path: '^src/modules/.*/domain',
      },
      to: {
        path: '^src/(modules/.*/infrastructure|infrastructure)',
      },
    },
    {
      name: 'no-domain-to-application',
      from: {
        path: '^src/modules/.*/domain',
      },
      to: {
        path: '^src/modules/.*/application',
      },
    },
    {
      name: 'no-domain-to-interfaces',
      from: {
        path: '^src/modules/.*/domain',
      },
      to: {
        path: '^src/modules/.*/interfaces',
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
      name: 'no-domain-to-typeorm',
      from: {
        path: '^src/modules/.*/domain',
      },
      to: {
        path: 'typeorm',
      },
    },
    {
      name: 'no-application-to-infrastructure',
      from: {
        path: '^src/modules/.*/application',
      },
      to: {
        path: '^src/(modules/.*/infrastructure|infrastructure)',
      },
    },
    {
      name: 'no-application-to-interfaces',
      from: {
        path: '^src/modules/.*/application',
      },
      to: {
        path: '^src/modules/.*/interfaces',
      },
    },
    {
      name: 'no-interfaces-to-infrastructure',
      from: {
        path: '^src/modules/.*/interfaces',
      },
      to: {
        path: '^src/(modules/.*/infrastructure|infrastructure)',
      },
    },
    {
      name: 'no-core-to-application',
      from: {
        path: '^src/core',
      },
      to: {
        path: '^src/application',
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
      name: 'no-core-to-modules',
      from: {
        path: '^src/core',
      },
      to: {
        path: '^src/modules',
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
