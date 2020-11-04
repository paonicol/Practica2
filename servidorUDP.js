//SE IMPORTA UN MODULO
var dgram = require('dgram');
//CREAMOS EL SOCKET UDP
var server = dgram.createSocket("udp4");
//mostramos el puerto
////////////////
nom = ["Paola", "Lizet", "Fernando", "Jhoselin"]
ape = ["Alarcon", "Gandarillas", "Bautista", "Colque"]
usua = ["pao", "lizzi", "fer", "jhose"]
pass = ["p123", "l456", "f789", "j901"]
////////////////
//RECIBE EL MENSAJE DEL CLIENTE
server.on ("message", function(msg, client) {
console.log("node servidorUDP.js  " + client.port);
//CONCATENAMOS EL MENSAJE
var ans = msg.toString().trim();
datos = ans.split("/");
var usu = datos[0];
var pas = datos[1];
var re1 = false;
var re2 = false;

var pos1 = usua.indexOf(usu);
if(pos1 >= 0 & pos1 <= usua.length){
	re1 = true;
}
var pos2 = pass.indexOf(pas);
if(pos2 >= 0 & pos2 <= pass.length){
	re2 = true;
}
var ans1;
if(re1==true & re2==true ){
	ans1 = "Bienvenido " + nom[pos1]+" "+ape[pos2];
	console.log('Cliente Conectado '+ans);
}
if(re1==false & re2==true)
	ans1 = "El usuario "+usu+" es incorrecto o no existe.";
if(re1==true & re2==false)
	ans1 = "La contraseña para "+usua[pos1]+" es incorrecta.";
if(re1==false & re2==false)
	ans1 = "el usuario y la contraseña son incorrectas.";
//CON EL BUFFER ALISTAMOS EL MENSAJE
var men = new Buffer(ans1);
//ENVIAMOS EL MENSAJE LISTO
server.send(men, 0, men.length, client.port, client.address, function(){ 
	console.log('');
});
});
//CONCATENA EL SOCKET CON EL PUERTO
server.bind(8887);

