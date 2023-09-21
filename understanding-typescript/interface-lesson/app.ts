interface Named {
  readonly name: string;
  outputName?: string;
}
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}

let user1: Person;

user1 = {
  name: 'Alan',
  age: 30,
  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  },
};

user1 = new Person('Alan');

console.log(user1);
