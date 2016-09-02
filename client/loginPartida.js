


Template.CrearPartida.events({
    'click button': function (evt, template) {
        evt.preventDefault();
        console.log( template.find('#su-partida').value);
        Meteor.call('CrearPartida',npartida=template.find('#su-partida').value);
    }
});

Template.UnirsePartida.events({
    'click button': function (evt, template) {
        evt.preventDefault();

        
        Meteor.call('UnirsePartida',npartida=template.find('#li-partida').value);

        
    }
});