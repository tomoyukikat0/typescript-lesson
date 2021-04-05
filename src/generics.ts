// genericsは型を引数として受け取れる
function copy<T>(value: any) {
  return value;
}

console.log(copy<string>('hello'));