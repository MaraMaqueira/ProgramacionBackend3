module.exports = {
  openapi: '3.0.0',
  info: {
    title: 'User API',
    version: '1.0.0',
    description: 'API para gestionar usuarios'
  },
  paths: {
    '/api/users': {
      get: {
        summary: 'Obtener todos los usuarios',
        responses: {
          '200': {
            description: 'Lista de usuarios'
          }
        }
      }
    }
  }
};
