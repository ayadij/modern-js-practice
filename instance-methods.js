// https://rails.devcamp.com/modern-javascript/194/guide-javascript-oop-instance-methods


class Instructor {
  constructor({ name, role = 'assistant' }) {
    this.name = name;
    this.role = role;
  }

  renderDetails() {
    console.log(`${this.name}: ${this.role}`);
  }
}

const ayattaze = new Instructor({name: 'Aya Dijkwel'});
const czm = new Instructor({name: 'Caleb', role: 'teacher'});
const tantan = new Instructor({name: 'Kanta', role: 'life coach'});
ayattaze.renderDetails();
czm.renderDetails();
tantan.renderDetails();