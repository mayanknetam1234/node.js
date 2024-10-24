const os=require("os");

// the user of the computer

console.log(os.userInfo());


//time that computer been used

console.log(`The time computer been used is ${os.uptime()} in seconds`);


const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()

};

console.log(currentOS);