interface Nameable {
  name: string;
}

interface Human extends Nameable {
  age: number;
  greeting(message: string): void;
}

class Developer implements Human {
  constructor(public name: string, public age: number, public experience: number,) {}
    greeting(message: string) {
      console.log('Hello!');
  }
}


