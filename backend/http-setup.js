const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');


class HttpSetup {

    constructor(port) {
        this._app = express();
        this.runServer(port);
        this._server = {};
    }

    initServer(port) {
        this._server = http.createServer(this._app);
        this._server.listen(port, '0.0.0.0');
        this._server.on('error', () => {return 'Something went wrong'});
        this._server.on('listening', () => {return 'Server is running on port' + port});
    }

    runServer(port) {
        this._app.set('port', port);
        this._app.use(bodyParser.json({limit: '2mb'}));
        this._app.use(bodyParser.urlencoded({limit: '2mb', extended: true}));
        this._app.use((request, response, next) => {
            response.header("Access-Control-Allow-Origin", "*");
            response.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
            response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
            next();
        });
        this._app.use('/', require('./cinemis-controller'));
    }
}

module.exports = HttpSetup;