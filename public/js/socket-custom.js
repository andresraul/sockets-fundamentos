var socket = io();


socket.on('connect', function() {

    console.log('Conectado al servidor');

});

socket.on('disconnect', function() {
    console.log('Servidor desconectado');
});


socket.emit('enviarMensaje', {
    usuario: 'Andrés',
    mensaje: 'Hola desde el frond-end'
}, function(resp) {
    console.log('Mensaje del Servidor: ', resp);
});

socket.on('enviarMensaje', (mensaje) => {
    console.log('Servidor: ', mensaje);
});