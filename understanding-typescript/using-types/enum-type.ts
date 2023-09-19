enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person2 = {
  name: 'Alan',
  age: 30,
  hasPet: true,
  hobbies: ['Basketball', 'Cooking', 'Coding'],
  role: Role.ADMIN,
};

console.log('person2:', person2);
console.log('enum ADMIN:', Role.ADMIN);
