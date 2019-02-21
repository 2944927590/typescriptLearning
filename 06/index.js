// 对象的类型——接口
var tom = {
    name: 'Tom',
    age: 23
};
var tom1 = {
    name: 'Tom',
    age: 25
};
var tom2 = {
    name: 'Tom',
    gender: 'male'
};
var tom3 = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};
var tom4 = {
    id: 89757,
    name: 'Tom',
    gender: 'male'
};
tom.id = 9527;
// index.ts(14,5): error TS2540: Cannot assign to 'id' because it is a constant or a read-only property.
