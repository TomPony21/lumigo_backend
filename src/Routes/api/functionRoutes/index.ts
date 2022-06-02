import { FastifyPluginCallback, FastifyReply, FastifyRequest } from 'fastify';
import { messagesRouteSchema } from './schemas';
import { messageQueue } from './types';
import { startSleepFunction } from '../../../Logics/Scheduler';
import { getStatistics } from '../../../AppStorage';

export const functionsRoutes: FastifyPluginCallback = (server, option, done): void => {
    server.get('/statistics', (request: FastifyRequest, reply: FastifyReply): void => {
        try {
            const statistics = getStatistics();
            reply.send(statistics);
        } catch (error: any) {
            reply.code(500).send(error.message);
        }
    });

    server.post('/messages', { schema: { body: messagesRouteSchema } }, (request: FastifyRequest, reply: FastifyReply): void => {
        try {
            const { message } = request.body as messageQueue;
            startSleepFunction(message);
            reply.send('Start Running Process !');
        } catch (error: any) {
            reply.code(500).send(error.message);
        }
    });

    done();
};

export default functionsRoutes;
