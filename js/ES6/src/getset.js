const user = {
    name: "manish",
    get upperName() {
        return this.name.toUpperCase();
    },
    set upperName(val) {
        this.name = val;
    },
    set fullName (val) {
        [ this.firstName, this.lastName ] = val.split(" ");
    },
    // get fullName () {
    //     return `${this.firstName} ${this.lastName}`
    // },
    getAge() {
        return "age";
    }, 
    getAge() {
        return "age2";
    }, 
}

console.log(user)
console.log(user.upperName)
console.log("Manish Mahant".split(" "))
user.fullName = "Manish Mahant";
console.log(user.getAge())
console.log(user.firstName)