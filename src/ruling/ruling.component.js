import template from './ruling.html';
import constants from '../data.json'; // Get JSON containing calculation constants

let rulingComponent = {
  template,
  controller: function($scope, $location) {
    this.year = constants.currentYear;
    this.nominalExpenseRates = constants.nominalExpenseRates;
  }
};

export default rulingComponent;
