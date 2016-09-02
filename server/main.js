import { Meteor } from 'meteor/meteor';

import { Template } from 'meteor/templating';

import { ReactiveDict } from 'meteor/reactive-dict';



Meteor.startup(() => {

});




Meteor.methods({
    'CrearPartida': function(nombrePartida){
        //var currentUserId = Meteor.user._id;     Meteor.userId()
        if(this.userId){
          var npartida= nombrePartida
          var usuarios=[{
            userId: this.userId,
            name: Meteor.user().username,
            
          }]
        	Partidas.insert({npartida,usuarios});
        	console.log(Meteor.user().username + " a creado la partida "+npartida);


        }else{console.log("no hay un user activo");}
         
    },

    'UnirsePartida': function(nombrePartida){
     	 var usuarios={
            userId: this.userId,
            name: Meteor.user().username,
            
          };
          var nompartida= nombrePartida;
     
        //Partidas.update({npartida:nombrepartida}, {"$set": {"grupos.segmentos.1.dineroInvertido": argu},
	    Partidas.update({npartida:nompartida},{ $push: {usuarios:usuarios}});
	    //Partidas.update({npartida:nombrepartida},{ $set: {usuarios:usuarios}}); //el $set, me sobreescribe
	    console.log("Se ha unido "+Meteor.user().username+" a la partida "+nompartida);
                      
    },

});