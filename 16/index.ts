// 类

// 类(Class)：定义了一件事物的抽象特点，包含它的属性和方法

// 对象（Object）：类的实例，通过 new 生成

// 面向对象（OOP）的三大特性：封装、继承、多态

// 封装（Encapsulation）：将对数据的操作细节隐藏起来，只暴露对外的接口。外界调用端不需要（也不可能）知道细节，就能通过对外提供的接口来访问该对象，同时也保证了外界无法任意更改对象内部的数据

// 继承（Inheritance）：子类继承父类，子类除了拥有父类的所有特性外，还有一些更具体的特性

// 多态（Polymorphism）：由继承而产生了相关的不同的类，对同一个方法可以有不同的响应。比如 Cat 和 Dog 都继承自 Animal，但是分别实现了自己的 eat 方法。此时针对某一个实例，我们无需了解它是 Cat 还是 Dog，就可以直接调用 eat 方法，程序会自动判断出来应该如何执行 eat

// 重写是子类对父类的允许访问的方法的实现过程进行重新编写, 返回值和形参都不能改变。即外壳不变，核心重写！

// 重载(overloading) 是在一个类里面，方法名字相同，而参数不同。返回类型可以相同也可以不同。

// 存取器（getter & setter）：用以改变属性的读取和赋值行为

// 修饰符（Modifiers）：修饰符是一些关键字，用于限定成员或类型的性质。比如 public 表示公有属性或方法

// 抽象类（Abstract Class）：抽象类是供其他类继承的基类，抽象类不允许被实例化。抽象类中的抽象方法必须在子类中被实现

// 接口（Interfaces）：不同类之间公有的属性或方法，可以抽象成一个接口。接口可以被类实现（implements）。一个类只能继承自另一个类，但是可以实现多个接口


// 属性和方法

class Animal {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    return `My name is ${this.name}`;
  }
}

// let a = new Animal('Jack');
// console.log(a.sayHi()); // My name is Jack

// 类的继承

class Cat extends Animal {
  constructor(name) {
    super(name); // 调用父类的 constructor(name)
    console.log(this.name);
  }
  sayHi() {
    return 'Meow, ' + super.sayHi(); // 调用父类的 sayHi()
  }
}

// 存取器

// 使用 getter 和 setter 可以改变属性的赋值和读取行为：

class Animal2 {
  constructor(name) {
    this.name = name;
  }
  get name() {
    return 'Jack';
  }
  set name(value) {
    console.log('setter: ' + value);
  }
}

// 静态方法
class Animal3 {
  static isAnimal(a) {
    return a instanceof Animal3;
  }
}

let a = new Animal3();
Animal3.isAnimal(a); // true
a.isAnimal(a); // TypeError: a.isAnimal is not a function


// ES7 中类的用法

// 实例属性

class Animal4 {
  name = 'Jack';

  constructor() {
      // ...
  }
}

let aa = new Animal4();
console.log(aa.name); // Jack

// 静态属性

class Animal5 {
  static num = 42;

  constructor() {
      // ...
  }
}

console.log(Animal5.num); // 42

// TypeScript 中类的用法

// TypeScript 可以使用三种访问修饰符（Access Modifiers），分别是 public、private 和 protected。

// public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的

// private 修饰的属性或方法是私有的，不能在声明它的类的外部访问

// protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的

class Animal6 {
  public name;
  private name2;
  public constructor(name) {
    this.name = name;
  }
}

// 使用 private 修饰的属性或方法，在子类中也是不允许访问的：

// 而如果是用 protected 修饰，则允许在子类中访问：



// 抽象类

// abstract 用于定义抽象类和其中的抽象方法。

// 什么是抽象类？

// 首先，抽象类是不允许被实例化的：

abstract class Animal7 {
  public name;
  public constructor(name) {
      this.name = name;
  }
  public abstract sayHi();
}

// let a = new Animal7('Jack');  // error

// 其次，抽象类中的抽象方法必须被子类实现：

abstract class Animal8 {
  public name;
  public constructor(name) {
    this.name = name;
  }
  public abstract sayHi(); // 必须被子类实现
}

class Cat extends Animal8 {
  public eat() {
    console.log(`${this.name} is eating.`);
  }
}

let cat = new Cat('Tom');

// 类的类型
// 给类加上 TypeScript 的类型很简单，与接口类似：


class Animal9 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sayHi(): string {
    return `My name is ${this.name}`;
  }
}

let b: Animal9 = new Animal9('Jack');
console.log(b.sayHi()); // My name is Jack

















