import { FastifyPluginCallback } from 'fastify';
import functionsRoutes from './functionRoutes';

const apiRouts: FastifyPluginCallback = (server, option, done): void => {
    server.register(functionsRoutes, { prefix: '/functions' });

    done();
};

export default apiRouts;