var __slice = [].slice;

Meteor.atServer = function(fn) {
  if (Meteor.isServer) {
    return fn.call();
  }
};

/* With Cordova support, a better meaning of 'atClient'
   is "not at the server".
*/
Meteor.atClient = function(fn) {
  if (!Meteor.isServer) {
    return fn.call();
  }
};

Meteor.atCordova = function(fn) {
  if (Meteor.isClient && Meteor.isCordova) {
    return fn.call();
  }
};
Meteor.atDevice = Meteor.atCordova;

Meteor.atBrowser = function(fn) {
  if (Meteor.isClient && !Meteor.isCordova) {
    return fn.call();
  }
};
