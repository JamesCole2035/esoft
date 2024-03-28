const Obj = {
    name: "Misha",
    arr: [1, 2, 3],
    bool: true,
    age: 34,
    hello: function() {
        return "hello!";
    },
    colors: {black: "#ffffff", white: "#000000"}
}
function cloneObjects(obj) {
    const newObj = Array.isArray(obj) ? [] : {};
    let value;
    for (const key in obj) {
        console.log(key + ':', obj[key]);
        value =  obj[key];
        newObj[key] = (typeof obj[key] == 'object') ? cloneObjects(value) : value;        
    }
    return newObj;
}
//функцию писал сам через кучу if-else, потом нашёл, как она через тернарные пишется, так красивее, конечно
//как скопировать функцию не знаю
//как скопировать map/set в одной функции не знаю, при переборе объекта, если натыкаемся на объект, то
//проверять его с помощью Object.getPrototypeOf и на мап/сет вызывать другие функции cloneSet()/cloneMap(), аналогично вывести из функции и копирование массива
const newObj = cloneObjects(Obj);
console.log(Obj);
console.log(newObj);
