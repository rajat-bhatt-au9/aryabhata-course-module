import 'babel-polyfill';

import UserModel from './UserModel';
import constants from './constants';
import * as consts from './constants';
import { APP_NAME, APP_VERSION, getVersion } from './constants';

const userOne = new UserModel();

// console.log(userOne);
// userOne.setName('manis');
// console.log(userOne);
// console.log(userOne.getName());
// console.log(constants);
// console.log(consts);
// console.log(APP_NAME);
// console.log(APP_VERSION);
// console.log(getVersion);

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

// console.log(getName());

const myArray = [];
const myObject = {};
myArray.push(1);
myObject.name = "myobjname";

// console.log(myArray);
// console.log(myObject);

// Destructuring
// `...` called as spraed operaters

const userObject = {
    name: "Jammi",
    place: "Place",
    pet: "Dog",
    address: "Address",
    number: "+91 9999999999",
};

// userObject.name = "Manish";
// console.log(userObject);

const profile = {
    name: "profile",
    imageName: "Image",
    coverName: "Cover",
};
// Dot Notation
// console.log(userObject.name);
// As an Array
// console.log(userObject['name']);
// Destructuring
let { place, address, ...rest } = userObject;
const abc = "constCheck";
const newobj = { [abc]:"testing", ...userObject, name:"Manish", ...profile, lastName: "Mahant" };
// newobj.name = "Manish"
// console.log(newobj);
// console.log(place, address, rest);
// console.log(otherName, otherName2, name3);
// console.log(userObject["name"])

const userObjectArr = [
    "Jammi",
    "Lakshmi",
    "Mayur",
    "Rahul",
    "Jyotirmay",
    {
        name:"name"
    }
];

// console.log(userObjectArr);
const [ one, na, any, ...rests ] = userObjectArr;
// console.log(one, na, any, rests)
const newArray = [ ...userObjectArr, 1, 2, 5, "aakjdhd"];
// console.log(newArray)
// const [ nameOne, nameTwo, someName, ...otherNames ] = userObjectArr;
// console.log(nameOne, nameTwo, someName, otherNames)
// console.log(userObjectArr[userObjectArr.length -1])

// Template literals
// const myName = ["Arya", "Robert"];
const myName = {name:"Arya"};
console.log(1+"123")
const myAge = 27;
console.log("Hello! my name is "+myName[0]+" & I am "+myAge+" years old.")
const literal = `Hello! I am ${myName.name} & I am using literals`;
console.log(literal);

// Arrow functions
