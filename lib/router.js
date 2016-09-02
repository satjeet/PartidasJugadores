

Router.configure({
    layoutTemplate: 'ApplicationLayout'
});





Router.route('/', function () {
  this.render('main'  ,//busca el template main 
  //{ to:"main"}  // busca el la region main osea la yield main
  
  );

});

