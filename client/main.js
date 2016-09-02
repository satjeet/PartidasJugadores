import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';



Template.ListaPartidas.helpers({
	alternativas:function(){
		var totalPpartidas= Partidas.find();
		return totalPpartidas;
	},
      	
      
});