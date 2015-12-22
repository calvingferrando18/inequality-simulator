var rules = [
  {label: 'Salary', action: 'this.total += 2 * this.incomeMultiplier'},
  {label: 'Investment', action: 'this.total += this.investmentAbility * this.total'},
  {label: 'Enterprise', action: 'this.total += 1.5 * this.total',
    condition: ['Math.random() < 0.05', 'this.isEntrepreneur == true']},
  {label: 'Spending', action: 'this.total -= 1 * this.spendingHabits'},
];

var simulation = new Simulation(rules);

var incomes = [1, 2];
var incomeLabels = ['low-salary', 'high-salary'];
var investmentAbilities = [0, 0.1];
var investmentLabels = ['not-investor', 'investor'];
var entrepreneurness = [true, false];
var entrepreneurLabels = ['entrepreneur', 'not-entrepreneur'];

for (var i = 0; i < incomes.length; i++) {
  for (var j = 0; j < investmentAbilities.length; j++) {
    for (var k = 0; k < entrepreneurness.length; k++) {
      var label = incomeLabels[i] + ' ' + investmentLabels[j] + ' ' + entrepreneurLabels[k];
      simulation.addActor({
        label: label,
        incomeMultiplier: incomes[i],
        investmentAbility: investmentAbilities[j],
        isEntrepreneur: entrepreneurness[k],
        spendingHabits: 1
      });
    }
  }
}
