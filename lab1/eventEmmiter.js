import{EventEmitter}from "node:events"
const task =new EventEmitter();
function sayHi(name) =>{
    console.log(`Logged In ${name}`);
};
const start =() =>{
    console.log("system started");
};
task.on("greet",start);
task.on("greet",sayHi);//event and method binding 
task.on("greet",(name)) =>{
    console.log(`${name} starts shopping`);
});
task.on("greet",(name)) =>{
    console.log(`${name} logged out`)
});
}
}
task.emit("greet" ,"Anil Pandey");//announcement