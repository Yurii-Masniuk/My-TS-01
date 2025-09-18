interface User {
    name: string,
    age: number,
};

const users: User[] = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
];
users.push({ name: "Alex", age: 40 });

console.log('Users:', users);
