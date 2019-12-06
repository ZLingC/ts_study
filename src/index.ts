function greeter(person: string) {
    return `Hello, ${person}`
}

const user = "Jane User"
console.log(greeter(user))

function error(message: string): never{
    throw new Error(message);
}
const empty: never[] = []

// 定义数组类型
// 使用泛型:
const list: Array<number> = [1, 2, 3];
// 在元素类型后面接上 []
const list2: number[] = [1, 2, 3];


// 元组（Tuple）
// 元组继承于数组，但是比数组拥有更严格的类型检查。
let x: [string, number];
x = ['123', 123];

// Object
let value: object;
value = [];
value = {};
value = ['123', 123];
// 普通对象、枚举、数组、元组通通都是 object 类型
if(user==="Jane User"){
    
}