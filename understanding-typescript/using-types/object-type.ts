const person: {
  name: string;
  age: number;
  hasPet: boolean;
  hobbies: string[];
  role: [string, boolean];
} = {
  name: 'Alan',
  age: 30,
  hasPet: true,
  hobbies: ['Basketball', 'Cooking', 'Coding'],
  role: ['admin', false],
};

console.log(person.name);
