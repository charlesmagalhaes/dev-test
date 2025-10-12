export const swaggerDocument = {
  swagger: '2.0',
  info: {
    description: 'Api Tarefas',
    version: '1.0.0',
    title: 'My Todo List',
  },
  tags: [
    {
      name: 'task',
      description: 'Task management',
    },
  ],
  paths: {
    '/task': {
      get: {
        tags: ['task'],
        summary: 'Get existing tasks',
        description: 'Get existing tasks',
        produces: ['application/json'],
        responses: {
          200: {
            description: 'successful operation',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/Task',
              },
            },
          },
          400: {
            description: 'Error occurred',
          },
        },
      },
      post: {
        tags: ['task'],
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
            description: 'Task object',
          },
          400: {
            description: 'Error created',
          },
        },
      },
      put: {
        tags: ['task'],
        summary: 'Update an existing task',
        description: '',
        operationId: 'updateTask',
        consumes: ['application/json'],
        produces: ['application/xml'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'Task object that needs to be added to the store',
            required: true,
            schema: {
              $ref: '#/definitions/Task_',
            },
          },
        ],
        responses: {
          400: {
            description: 'Invalid ID supplied',
          },
          404: {
            description: 'Task not found',
          },
          405: {
            description: 'Validation exception',
          },
        },
      },
    },
    '/task/{taskId}': {
      delete: {
        tags: ['task'],
        summary: 'Deletes a task',
        description: '',
        operationId: 'deleteTask',
        produces: ['application/json'],
        parameters: [
          {
            name: 'api_key',
            in: 'header',
            required: false,
            type: 'string',
          },
          {
            name: 'taskId',
            in: 'path',
            description: 'Task id to delete',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          400: {
            description: 'Invalid ID supplied',
          },
          404: {
            description: 'Task not found',
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
    Task_: {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
          example: 3,
        },
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
    TaskId: {
      type: 'object',
      properties: {
        description: {
          type: 'number',
          example: '10',
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
