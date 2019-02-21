// 任意值
let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7;

// 在任意值上访问任何属性都是允许的：

let anyThingS: any = 'hello';
console.log(anyThingS.myName);
console.log(anyThingS.myName.firstName);

// 也允许调用任何方法
let anyThing: any = 'Tom';
anyThing.setName('Jerry');
anyThing.setName('Jerry').sayHello();
anyThing.myName.setFirstName('Cat');

// 未声明类型的变量

let something;
something = 'seven';
something = 7;

something.setName('Tom');

// 等价于

// let something: any;
// something = 'seven';
// something = 7;

// something.setName('Tom');