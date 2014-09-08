// Write your package code here!
Meteor.atClient = function(fn){
  if(Meteor.isClient)
    fn.call();
}

Meteor.atServer = function(fn){
  if(Meteor.isServer)
    fn.call();
}
