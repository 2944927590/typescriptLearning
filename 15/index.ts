// 枚举

// 枚举（Enum）类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等。

enum Days { Sun, Mon, Tue, Wed, Thu, Fri, Sat };


// let Day = {
//   '0': 'Sun',
//   '1': 'Mon',
//   '2': 'Tue',
//   '3': 'Wed',
//   '4': 'Thu',
//   '5': 'Fri',
//   '6': 'Sat',
//   Sun: 0,
//   Mon: 1,
//   Tue: 2,
//   Wed: 3,
//   Thu: 4,
//   Fri: 5,
//   Sat: 6 
// }

const enum Directions {
  Up,
  Down,
  Left,
  Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];

// let directions2 = [Directions[0], Directions[1], Directions[2], Directions[3]];

// 外部枚举
// 外部枚举（Ambient Enums）是使用 declare enum 定义的枚举类型：

declare enum Directions1 {
  Up,
  Down,
  Left,
  Right
}

let directions1 = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];





