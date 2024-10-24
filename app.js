//npm-global command that comes with node
// npm --version

//local dependency- use it only in this particular project
//nmp i <packagename>

//global dependency - use it for all the project
//npm i -g <packagename>

//package.json- manifest file( it stores the info about the dependencies that are installed)
// three ways to make package.json file:-
// manual approach-create package.json in the root directory, create properties etc.
// npm init ( step by step you set the properties, press enter to skip)
// npm init -y (everything default)

const _=require("lodash");

const item=[1,[1,[2,[4]]]];

const items=_.flattenDeep(item);

console.log(items);