class Sockets {

    constructor( io ) {
        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        // Conexion
        this.io.on('connection', ( socket ) => { 
            console.log('Cliente conectado: ' + socket.id );
            // Escuchar el evento
            socket.on( 'mensaje-to-server', ( data ) => {
                console.log(data);
                //socket.emit( 'mensaje-from-server', data ); // Envia el mensaje solo al cliente conectado
                this.io.emit( 'mensaje-from-server', data ); // Envia el mensaje a todos los clientes conectados
            });
        });
    }
}

module.exports = Sockets;