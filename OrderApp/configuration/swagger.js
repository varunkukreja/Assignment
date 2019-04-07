const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  info: {
    title: 'Order App', // Title of the documentation
    version: '1.0.0', // Version of the app
    description: 'Order App REST API', // short description of the app
  },
  host: 'localhost:3000', // the host or url of the app
  basePath: '/api', // the basepath of your endpoint
  securityDefinitions: {
    bearerAuth: {
      type: 'apiKey',
      name: 'Authorization',
      scheme: 'bearer',
      in: 'header',
    },
  },
};

// options for the swagger docs
const options = {
  // import swaggerDefinitions
  swaggerDefinition,
  // path to the API docs
  apis: ['./docs/**/*.yaml'],
};
// initialize swagger-jsdoc
module.exports = swaggerJSDoc(options);