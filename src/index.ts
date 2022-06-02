import fastify, { FastifyInstance } from 'fastify';
import fastifyBlipp from 'fastify-blipp';
import fastifySensible from 'fastify-sensible';
import config from './Config';
import apiRouts from './Routes/api';


const PORT = config.port;
const server: FastifyInstance = fastify();

server.register(fastifyBlipp);
server.register(fastifySensible);
server.register(apiRouts, { prefix: '/api' });

const start = async (): Promise<void> => {
    try {
        await server.listen(PORT, '0.0.0.0');
        server.blipp();
    } catch (err) {
        server.log.error(err);
    }
};

start();