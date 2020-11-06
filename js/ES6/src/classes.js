function Anything () {
    // _name = "Classname"
    this.name = "Anything";
    this.getName = function () {
        return getFullname();
    }
    function getFullname () {
        return "getFullname";
    }
};


const anything = new Anything();
Anything.prototype.type = "Animal"
Anything.prototype.getType = function () {
    return this.type
}

console.log(anything)
// console.log(anything.type)
// console.log(anything.getType())
// console.log(anything.getName())

class User {
    constructor(data) {
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.age = data.age;
        this.gender = data.gender;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

User.prototype.sarvesh = function (value) {
    return value*value
}

const userData = {
    firstName: "Manish",
    lastName: "Mahant",
    age: 27,
    gender: "male",
    other: "asdasd",
    other2: "dasf",
    other3: "sdfdsff",
}

const manish = new User(userData);
console.log(manish)
console.log(manish.getFullName())