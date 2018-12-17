#!/usr/bin/env node

/**
 * Module dependencies.
 */

const app = require('./index');
const debug = require('debug')('src:src');
const http = require('http');

require('dotenv').config();

/**
 * Get port from environment and store in Express.
 */

const port: any = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP src.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val: any): string | boolean | number {
    const port: number = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP src "error" event.
 */

function onError(error: any) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind: string = typeof port === 'string'
        ? `Pipe ${port}`
        : `Port ${port}`;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP src "listening" event.
 */

function onListening(): void {
    const addr: {port: number} = server.address();
    console.log('Listening on port', addr.port);
    const bind: string = typeof addr === 'string'
        ? `pipe ${addr}`
        : `port ${addr.port}`;
    debug(`Listening on ${bind}`);
}
