/* global worksheet */
function defineReactiveProperty(o, name, ival) {
    var myvar = new ReactiveVar(ival);
    return Object.defineProperty(o, name, {
        get: function() {
            return myvar.get();
        },
        set: function(x) {
            return myvar.set(x);
        }
    });
};

function defineComputedProperty (o, name, fn) {
    var myvar = new ReactiveVar;
    Tracker.autorun(function() {
        var result = fn.call(o); //'this' will be 'o'
        myvar.set(result);
    });
    return Object.defineProperty(o, name, {
        get: function() {
            return myvar.get();
        },
        set: function(x) {
          throw new Error("Formula field is read-only.");
        }
    });
};

worksheet = function (spec) {
    var wks = {};
    _.each(spec, function(val, name){
        if(_.isFunction(val)){
            defineComputedProperty(wks, name, val);
        } else {
            defineReactiveProperty(wks, name, val);
        }
    });
    return wks;
}
