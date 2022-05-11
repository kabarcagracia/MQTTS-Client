var mqtt = require('mqtt');

var topicSubscribe = "/devices";
var client  = mqtt.connect(
    'mqtt://34.230.28.13', 
    {
        clientId: "Nodejs",
        username:"SIM7600SA",
        password:"SIM7600SAPWD",
        clean:true
    })
 
client.on('connect', function () {
  client.subscribe(topicSubscribe, function (err) {
    if (!err) {
      console.log("conectado al topic: ", topicSubscribe);
      
        //client.publish('presence', 'Hello mqtt')
    }
  })

  client.subscribe('/conectado', function (err) {
    if (!err) {
      //console.log("conectado al topic: ", topicSubscribe);
      
        //client.publish('presence', 'Hello mqtt')
    }
  })

  setInterval(function data(){
    client.publish('/input', 'mensaje desde servidor');
    console.log('enviando al cliente');
  }, 20000);
})
 
client.on('message', function (topic, message) {
  // message is Buffer
  console.log(topic);
  console.log(message.toString())
  //client.end()
})


