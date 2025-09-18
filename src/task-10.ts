interface User {
    id: number,
    name: string,
};

const users = ["alice", "bob", "charlie"];

function toUserObjects(names: string[]): User[] {
    return names.map((name, index) => ({
        id: index + 1,
        name
    }));
}

const result = toUserObjects(users);
console.log(result);
