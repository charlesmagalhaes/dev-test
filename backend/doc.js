export const swaggerDocument = {
  swagger: '2.0',
  info: {
    description: 'Api Tarefas',
    version: '1.0.0',
    title: 'My Todo List',
  },
  host: 'localhost:3000',
  tags: [
    {
      name: 'Task',
      description: 'Task management',
    },
  ],
  paths: {
    '/task': {
      get: {
        tags: ['Task'],
        summary: 'Get existing tasks',
        description: 'Get existing tasks',
        produces: ['application/json'],
        responses: {
          200: {
            description: 'successful operation',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/Account',
              },
            },
          },
          400: {
            description: 'Error occurred',
          },
        },
      },
      post: {
        tags: ['Task'],
        summary: 'Create a new task',
        description: 'Crea a new task with the received parameters',
        consumes: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'Task object',
            required: true,
            schema: {
              $ref: '#/definitions/Task',
            },
          },
        ],
        responses: {
          200: {
            description: 'Account object',
          },
          400: {
            description: 'Error created',
          },
        },
      },
    },
  },
  definitions: {
    Task: {
      type: 'object',
      properties: {
        description: {
          type: 'string',
          example: 'Fazer Compras',
        },
        pending: {
          type: 'boolean',
          example: 'false',
        },
      },
      xml: {
        name: 'Order',
      },
    },
  },
  externalDocs: {
    description: 'Find out more about Swagger',
    url: 'http://swagger.io',
  },
};
