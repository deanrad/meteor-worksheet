At-At
=====
Through the blowing snow of Meteor APIs, a 4 legged figure appeared.

It was an Imperial At-At

![image](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu8WL8nmVVgC4HWawdkgKTZuxb9GGTp7kUD4GlOC4AQuD61GkW)

And the APIs it wielded were a powerful force indeed.

````
// Runs the function passed on the server
// conceptually: if(Meteor.isServer){ fn.call() }
Meteor.atServer(fn)

// Runs the function passed on the client
// (Meteor.isClient || Meteor.isCordova) && !Meteor.isServer
Meteor.atClient(fn)

// Meteor.isClient && !Meteor.isCordova
Meteor.atBrowser(fn)

// Meteor.isClient && Meteor.isCordova
Meteor.atCordova(fn)

// alias for Meteor.atCordova
Meteor.atDevice(fn)
````

## Ideas

* `Meteor.atBrowser( _.once(fn) )`  - run a function in the browser only once 
* `Meteor.atServer( _.throttle(fn, 1000) )`  - run a function on the server no more than once per second
* `Meteor.atServer( _.defer(fn) )` - run a function once the call-stack has cleared *a la setTimeout(fn, 0)*
* Any function on the [Underscore](http://underscorejs.org) doc site could be used, the key point being that by taking functions, your flexibility of use is improved.
