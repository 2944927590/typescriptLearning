// 声明文件
//  当使用第三方库时，我们需要引用它的声明文件。
// declare var jQuery: (selector: string) => any;
// 然后在使用到的文件的开头，用「三斜线指令」表示引用了声明文件：
/// <reference path="./jQuery.d.ts" />
jQuery('#foo');
// 通常我们会把类型声明放到一个单独的文件中，这就是声明文件：
