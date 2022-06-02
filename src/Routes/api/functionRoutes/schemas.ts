export const messagesRouteSchema = {
    type: 'object',
    properties: {
        message: { type: 'string' }
    },
    required: ['message']
};