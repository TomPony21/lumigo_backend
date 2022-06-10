import { FastifyPluginCallback, FastifyReply, FastifyRequest } from 'fastify';
import { messagesRouteSchema } from './schemas';
import { messageQueue } from './types';
import { startSleepFunction } from '../../../Logics/Scheduler';
import { getStatistics ,addTotalInstance } from '../../../AppStorage';


export const functionsRoutes: FastifyPluginCallback = (server, option, done): void => {
    server.get('/statistics', (request: FastifyRequest, reply: FastifyReply): void => {
        try {
            const statistics = getStatistics();
            reply.send(statistics);
        } catch (error: any) {
            reply.code(500).send(error.message);
        }
    });

    server.post('/messages', { schema: { body: messagesRouteSchema } }, async(request: FastifyRequest, reply: FastifyReply): Promise<void> => {
        try {
            const { message } = request.body as messageQueue;
            await startSleepFunction(message);
            addTotalInstance();
            reply.send('Start Running Process !');
        } catch (error: any) {
            reply.code(500).send(error.message);
        }
    });

    done();
};

export default functionsRoutes;
