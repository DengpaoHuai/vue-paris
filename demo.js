const person = {
  name: 'John Doe',
  age: 25,
  getName: () => {
    return this.name;
  }
};

console.log(person.getName());

const toto = () => 'toto';

function toto1() {
  return 'toto';
}
