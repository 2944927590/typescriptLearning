// 内置对象

// JavaScript 中有很多内置对象，它们可以直接在 TypeScript 中当做定义好了的类型。

// 内置对象是指根据标准在全局作用域（Global）上存在的对象。这里的标准是指 ECMAScript 和其他环境（比如 DOM）的标准。


// ECMAScript 的内置对象

// ECMAScript 标准提供的内置对象有：

// Boolean、Error、Date、RegExp 等。

// 我们可以在 TypeScript 中将变量定义为这些类型：

let b: Boolean = new Boolean(1);
let e: Error = new Error('Error occurred');
let d: Date = new Date();
let r: RegExp = /[a-z]/;

// DOM 和 BOM 的内置对象

// DOM 和 BOM 提供的内置对象有：

// Document、HTMLElement、Event、NodeList 等。

// TypeScript 中会经常用到这些类型：

let body: HTMLElement = document.body;
let allDiv: NodeList = document.querySelectorAll('div');
document.addEventListener('click', function(e: MouseEvent) {
  // Do something
});


