interface Container<T> {
    items: T[];
    addItem(item: T): void;
    getItem(index: number): T | undefined;
};

function getLastElement<T>(container: Container<T>): T {
    return container.items[container.items.length - 1];
}

const numberContainer: Container<number> = {
    items: [1, 2, 3],
    addItem(item) {
        this.items.push(item);
    },
    getItem(index) {
        return this.items[index];
    },
};

const stringContainer: Container<string> = {
    items: ['Alice', 'Bob'],
    addItem(item) {
        this.items.push(item);
    },
    getItem(index) {
        return this.items[index];
    },
};

console.log(getLastElement(numberContainer));
console.log(getLastElement(stringContainer));