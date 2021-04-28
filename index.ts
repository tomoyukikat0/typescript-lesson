let hasValue = true;
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12
let single: string = 'hello';
let double: string = `hello`;

const person = {
  name: 'Jack',
  age: 21
}

const fruits: string[] = ['Apple', 'Banana', 'Grape'];

const book: [string, number, boolean] = ['business', 1500, true];

enum CoffeeSize {
  SHORT,
  TALL,
  GRANDE,
  VENTI
}

const coffee = {
  hot: true,
  size: CoffeeSize.TALL
}

let unionType: number | string = 10;
let unionTypes: (number | string)[] = [21, 'hello']