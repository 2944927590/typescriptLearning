// 联合类型
// 联合类型（Union Types）表示取值可以为多种类型中的一种。
var myFavoriteNumber;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
// 访问联合类型的属性或方法
// 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法：
function getLength(something) {
    return something.length;
}
//  index.ts(2,22): error TS2339: Property 'length' does not exist on type 'string | number'.
//  Property 'length' does not exist on type 'number'.
function getString(something) {
    return something.toString();
}
