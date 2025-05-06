const sayHello = (name: string): string => {
    const sanitizedName = name.replace(/[^a-zA-Z0-9 ]/g, '');
    return `Hello World! I'm ${sanitizedName}`;
};

const user = "Username";
const hello = sayHello(user);