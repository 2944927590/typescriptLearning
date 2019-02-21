// 对象的类型——接口

// 在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型。

// 什么是接口

// 在面向对象语言中，接口（Interfaces）是一个很重要的概念，

// 它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implements）。

interface Person {
  name: string;
  age: number;
}

let tom: Person = {
  name: 'Tom',
  age: 23
}

// 上面的例子中，我们定义了一个接口 Person，接着定义了一个变量 tom，它的类型是 Person。
// 这样，我们就约束了 tom 的形状必须和接口 Person 一致。

// 赋值的时候，变量的形状必须和接口的形状保持一致。 不能多也不能少

// 可选属性

// 有时我们希望不要完全匹配一个形状，那么可以用可选属性：

interface Person1 {
  name: string;
  age?: number;
}

let tom1: Person1 = {
  name: 'Tom',
  age: 25
};

// 任意属性

// 有时候我们希望一个接口允许有任意的属性，可以使用如下方式：

interface Person2 {
  name: string;
  age: number;
  [propName: string]: any;
}

let tom2: Person2 = {
  name: 'Tom',
  gender: 'male'
};

// 一旦定义了任意属性，那么确定属性和可选属性都必须是它的子属性
interface Person3 {
  name: string;
  age?: number;
  [propName: string]: string;
}

let tom3: Person3 = {
  name: 'Tom',
  age: 25,
  gender: 'male'
};

// index.ts(3,5): error TS2411: Property 'age' of type 'number' is not assignable to string index type 'string'.
// index.ts(7,5): error TS2322: Type '{ [x: string]: string | number; name: string; age: number; gender: string; }' is not assignable to type 'Person'.
//   Index signatures are incompatible.
//     Type 'string | number' is not assignable to type 'string'.
//       Type 'number' is not assignable to type 'string'.

// 上例中，任意属性的值允许是 string，但是可选属性 age 的值却是 number，number 不是 string 的子属性，所以报错了。

// 另外，在报错信息中可以看出，此时 { name: 'Tom', age: 25, gender: 'male' } 的类型被推断成了 { [x: string]: string | number; name: string; age: number; gender: string; }，这是联合类型和接口的结合。


// 只读属性
interface Person4 {
  readonly id: number;
  name: string;
  age?: number;
  [propName: string]: any;
}

let tom4: Person4 = {
  id: 89757,
  name: 'Tom',
  gender: 'male'
};

tom.id = 9527;

// index.ts(14,5): error TS2540: Cannot assign to 'id' because it is a constant or a read-only property.







