// 函数的类型

// 函数声明
function sum(x: number, y: number): number {
  return x + y;
}

// 函数表达式

let mySum = function (x: number, y: number): number {
  return x + y;
};

// 这是可以通过编译的，不过事实上，上面的代码只对等号右侧的匿名函数进行了类型定义，而等号左边的 mySum，
// 是通过赋值操作进行类型推论而推断出来的。如果需要我们手动给 mySum 添加类型，则应该是这样：


let mySum2: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y;
};

// 注意不要混淆了 TypeScript 中的 => 和 ES6 中的 =>。

// 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。

// 用接口定义函数的形状
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  return source.search(subString) !== -1;
}

// 可选参数
function buildName(firstName: string, lastName?: string) {
  if (lastName) {
    return firstName + ' ' + lastName;
  } else {
    return firstName;
  }
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');

// 需要注意的是，可选参数必须接在必需参数后面。换句话说，可选参数后面不允许再出现必须参数了：


// 参数默认值  TypeScript 会将添加了默认值的参数识别为可选参数

function buildName2(firstName: string, lastName: string = 'Cat') {
  return firstName + ' ' + lastName;
}
let tomcat2 = buildName2('Tom', 'Cat');
let tom2 = buildName2('Tom');

// 此时就不受「可选参数必须接在必需参数后面」的限制了


//  剩余参数

function push(array, ...items) {
  items.forEach(function(item) {
    array.push(item);
  });
}

function push2(array: any[], ...items: any[]) {
  items.forEach(function(item) {
    array.push(item);
  });
}

// 重载

function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('');
  }
}








