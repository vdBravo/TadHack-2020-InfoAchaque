import {enviarMensaje} from'/app/services/incidencias.service'


var cpaas = require('@avaya/cpaas');
var enums = cpaas.enums;

 numeroCel = enviarMensaje;

const { body,validationResult } = require('express-validator');

var connector = new cpaas.SmsConnector({
    accountSid: 'AC777c3e32f041cfc55dd34eff9bf97d81',
    authToken: '78c4155f661b42aa83c57db968049e7c'
});

//send sms message
connector.sendSmsMessage({
    to: numeroCel,
    from: '+1 989 256 0161',
    body: 'Hello from CPaaS!',
    statusCallback: 'http://static.zang.io/ivr/welcome/sms.xml',
    statusCallbackMethod: enums.HttpMethod.GET,
    allowMultiple: true
}).then(function (data) {
    console.log(data);
});