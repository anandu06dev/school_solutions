const proxyConfig = [
  {
    context: ['/api/v1', '/api/v2'],
    target: 'https://example.com',
    secure: true,
    changeOrigin: true,
  },
  {
    context: ['**'], // Rest of other API call
    target: 'http://somethingelse.com',
    secure: false,
    changeOrigin: true,
  },
  {
    context: ['admin-ui'], // Rest of other API call
    target: 'http://localhost:4200',
    secure: false,
    changeOrigin: true,
    logLevel: 'debug',
  },
];

module.exports = proxyConfig;
