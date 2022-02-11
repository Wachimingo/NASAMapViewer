const dotenv = require('dotenv');

//Handling unexpected exception for production env
if (process.env.NODE_ENV === 'prod') {
    process.on('uncaughtException', (err) => {
        console.log('TCL: server.js --> uncaughtException', err.name, err.message)
        console.log('TCL: server.js --> msg', "Uncaught exception, shutting down...");
        process.exit(1);
    });
}
//Server configuration through the .env file
dotenv.config({ path: './.env' });

const app = require('./app');
const localPort = process.env.PORT ? process.env.PORT : 3000; // If no port has been setup manually, port 3000 will be default

const server = app.listen(localPort, () => {
    console.log('TCL: Server.js', 'App is running on port: ' + localPort)
});
//Caughting rejection exception in express
process.on('unhandledRejection', (err) => {
    console.log('TCL: server.js --> unhandledRejection', err.name, err.message);
    console.log('TCL: server.js --> msg', 'Unhandle rejection, shutting down....');
    server.close(() => {
        process.exit(1)
    });
})