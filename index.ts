function sayHello(name: string = "Guest"): string {
    return `Hello World! I'm ${name}`;
}

const user = "Username";
const hello = sayHello(user);
console.log(hello);