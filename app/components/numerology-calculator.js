import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class NumerologyCalculatorComponent extends Component {
  @tracked name = '';
  @tracked result = null;

  numerologyMap = {
    A: 1, I: 1, J: 1, Q: 1, Y: 1,
    B: 2, K: 2, R: 2,
    C: 3, G: 3, L: 3, S: 3,
    D: 4, M: 4, T: 4,
    E: 5, H: 5, N: 5, X: 5,
    U: 6, V: 6, W: 6,
    O: 7, Z: 7,
    F: 8, P: 8,
  };

  @action
  handleInput(event) {
    this.name = event.target.value.toUpperCase().replace(/[^A-Z]/g, '');
    this.calculate();
  }

  calculate() {
    let sum = 0;

    for (let char of this.name) {
      sum += this.numerologyMap[char] || 0;
    }

    while (sum > 9) {
      sum = sum.toString().split('').reduce((acc, val) => acc + parseInt(val), 0);
    }

    this.result = sum || null;
  }
}
