// genericsは型を引数として受け取れる
function copy<T extends { name: string }>(value: T): T {
  
  return value;
}

console.log(copy({name: 'Bob'}));
type K = keyof { name: string; age: number };