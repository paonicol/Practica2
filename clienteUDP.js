//IMPORTA UN MODULO
var dgram = require('dgram');
//CREACION DEl SOCKET SOBRE EL PROTOCOLO UDP	 
var client = dgram.createSocket("udp4");
console.log('Bienvenido al Sistema LAB 273');
console.log('****** Ingrese usuario y contraseña(user/pass)******');
//LEEMOS POR TECLADO
var mensaje = process.stdin.on('data',function(data){
//ENVIAMOS EL PUERTO, EL IP
client.send(data, 0, data.length, 8887, "localhost", function (err,bytes) {
if (err)
    //SI HAY ALGUN ERROR AQUI LO MOSTRARA
    console.error('error: ' + err);
});
});
//RECIBE EL MENSAJE DEL SERVIDOR
client.on("message",function(msg){
	//SE IMPRIME EL MENSAJE
	console.log(msg.toString())

var ans = msg.toString().trim();
datos = ans.split(" ");
var men = datos[0];
if(men == "Bienvenido"){
    //CERRAMOS LA CONEXION
        console.log('SERVIDOR DESCONECTADO!');
        client.close();
        process.exit();
}
else{
//volvemos a enviar el mensaje para que el usuario ingrese nuevamente los datos
    console.log('****** Ingrese usuario y contraseña(user/pass)******');
    }
});
