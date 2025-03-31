function sum(numbers: number[]): number {
    let sum = 0;
    for (let number of numbers) { // Fixed typo here
        sum += number;
    }
    return sum;
}

function sayHello(name: string = "Guest"): string {
    return `Hello World! I'm ${name}`;
}

function sayBye(name: string = "Guest"): string {
    return `Goodbye! I'm ${name}`;
}

const numbers = [1, 2, 3, 4, 5];
console.log(sum(numbers)); 

const user = "Username";
const hello = sayHello(user);
const bye = sayBye(user);
console.log(bye);
console.log(hello);

