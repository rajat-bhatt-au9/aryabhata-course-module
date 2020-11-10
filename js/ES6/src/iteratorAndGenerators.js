import 'babel-polyfill';

const Iterable = {
    [Symbol.iterator]() {
        let step = 0;
        const iterator = {
            next() {
                step++;
                if (step === 1)
                    return { value: 'Example', done: 'false' }
                else if (step === 2)
                    return { value: 'for', done: 'false' }
                else if (step === 3)
                    return { value: 'Iterator', done: 'false' }
                return { value: undefined, done: 'true' }
            }
        };
        return iterator;
    }
}
var iterator = Iterable[Symbol.iterator]();

const itOne = {
    step: 0,
    next: function() {
        this.step++;
        if (this.step === 1)
            return { value: 'Example', done: 'false' }
        else if (this.step === 2)
            return { value: 'for', done: 'false' }
        else if (this.step === 3)
            return { value: 'Iterator', done: 'false' }
        return { value: undefined, done: 'true' }
    }
}
// console.log(itOne.next());
// console.log(itOne);
// console.log(itOne.next());
// console.log(itOne);
// console.log(itOne.next());
// console.log(itOne);
// console.log(itOne.next());
// console.log(itOne);

const abc = () => {
    setTimeout(() => "abc",2000)
}

function* increment(i) {
    yield i + 1;
    // yield abc();
    yield i + 3;
    return i + 5;
}
var obj = increment(10);
// console.log(obj.next())
// console.log(obj.next())
// console.log(obj.next())
// console.log(obj.next())
// console.log(obj.next())

function* objectEntries(obj) {
    const propKeys = Reflect.ownKeys(obj);
    console.log(propKeys);
    for (const propKey of propKeys) {
        // `yield` returns a value and then pauses
        // the generator. Later, execution continues
        // where it was previously paused.
        yield [propKey, obj[propKey]];
    }
}

const user= { name: 'raja', age: 25};

const output = objectEntries(user);
console.log(output.next())
console.log(output.next())
console.log(output.next())


// const apiCall = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve(12)
//         },1000);
//     });
// }



// console.log(apiCall());

// const thrirdBlockCode = () => {
//     return new Promise((resolve,reject)=>{
//         console.log('code 3')
//         setTimeout(()=>{
//             resolve('code 4')
//         },2000)
//     });
// }
// const testing = async () => {
//     console.log('code 1')
//     console.log('code 2')
//     const dataFromThird = await thrirdBlockCode();
//     console.log(dataFromThird);
//     console.log('code 5')
// }

// testing();