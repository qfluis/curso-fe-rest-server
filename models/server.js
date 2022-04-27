const express = require('express');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        // Middlewares
        this.middlewares()


        // rutas
        this.routes();
    }

    middlewares() {

        // Directorio público
        this.app.use( express.static('public'));
    }

    routes() {        
        this.app.get('/api', (req, res) => {
            res.send('Hello World');
        });
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor escuchando en puerto " + this.port);
        });
    }
}

module.exports = Server;