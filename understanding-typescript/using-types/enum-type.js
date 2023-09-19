let Role;
(function (Role) {
  Role[(Role.ADMIN = 0)] = 'ADMIN';
  Role[(Role.READ_ONLY = 1)] = 'READ_ONLY';
  Role[(Role.AUTHOR = 2)] = 'AUTHOR';
})(Role || (Role = {}));
const person2 = {
  name: 'Alan',
  age: 30,
  hasPet: true,
  hobbies: ['Basketball', 'Cooking', 'Coding'],
  role: Role.ADMIN,
};
console.log('person2:', person2);
console.log('enum ADMIN:', Role.ADMIN);
