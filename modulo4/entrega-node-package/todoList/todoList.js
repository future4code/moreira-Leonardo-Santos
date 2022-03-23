// Exercício 3

const todoList = () => {
    const list = [];

    for (let i = 2; i < process.argv.length; i++) {
        item = process.argv[i];
        list.push(item);
    }

    return console.log(list);
};
todoList();