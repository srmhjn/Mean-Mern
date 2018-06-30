var events =require('events');
var eventEmitter = new events.EventEmitter();
eventEmitter.on("SayHi",function()
{
    console.log("hi..");
});
eventEmitter.on("say hello",function()
{
    console.log("hello..");
});
console.log("before sayHi");
eventEmitter.emit("sayHi");
console.log("after sayHi");
console.log("before sayHello");
eventEmitter.emit("before sayHello");
console.log("after sayHello");

