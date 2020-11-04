import 'babel-polyfill';

import UserModel from './UserModel';
import constants from './constants';
import * as consts from './constants';
import { APP_NAME, APP_VERSION, getVersion } from './constants';

const userOne = new UserModel();

console.log(userOne);
userOne.setName('manis');
console.log(userOne);
console.log(userOne.getName());
console.log(constants);
console.log(consts);
console.log(APP_NAME);
console.log(APP_VERSION);
console.log(getVersion);

// Let & Const

//Declaring a constant
const name = "MyName";
//Can't re assign a value to a constant
// name = "newname";
let anotherName = "MyOtherName";
function getName () {
    const name = "GetName";
    return anotherName;
}
anotherName = "MyOtherName Reassigned";

console.log(getName());

const myArray = [];
const myObject = {};
myArray.push(1);
myObject.name = "myobjname";

console.log(myArray);
console.log(myObject);

// Destructuring
// `...` called as spraed operaters

const destructure = {
    name: "Jammi",
    name2: "Lakshmi",
    name3: "Mayur",
    name4: "Rahul",
    name5: "Jyotirmay",
};
const { name: otherName, name2: otherName2, name3 } = destructure
console.log(otherName, otherName2, name3);
console.log(destructure["name"])

const destructureArr = [
    "Jammi",
    "Lakshmi",
    "Mayur",
    "Rahul",
    "Jyotirmay",
];

const [ nameOne, nameTwo, someName, ...otherNames ] = destructureArr;
console.log(nameOne, nameTwo, someName, otherNames)
console.log(destructureArr[destructureArr.length -1])

// Template literals