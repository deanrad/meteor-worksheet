// TODO replace with CoffeeScript source 
var __slice = [].slice;

Meteor.atServer = function(fn) {
  if (Meteor.isServer) {
    return fn.call();
  }
};

Meteor.atClient = function(fn) {
  if (Meteor.isClient) {
    return fn.call();
  }
};

Meteor.atClient(function() {
  return Meteor.subscribe = (function(subscribe) {
    return (function(_this) {
      return function() {
        var args, name;
        name = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
        return (function(coll, global) {
          Meteor.Collections || (Meteor.Collections = {});
          Meteor.Collections[_.str.titleize(name)] = coll;
          global[_.str.titleize(name)] = coll;
          return subscribe.apply(null, [name].concat(__slice.call(args)));
        })(new Meteor.Collection(name), _this);
      };
    })(this);
  })(Meteor.subscribe);
});
