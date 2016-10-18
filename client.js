var app = angular.module('basicApp', []);

app.controller('BasicController', function() {
  console.log('BasicController loaded');

  var self = this; // holds the value of 'this'
  self.employees = [];


  self.createEmployee = function() {
    console.log('Submitted employee: ', self.employee.firstName + ' ' + self.employee.lastName);
    self.employees.push(angular.copy(self.employee));
    self.getTotal();
  };

  self.totalMonthlySalary = 0;

  self.getTotal = function() {
    self.totalMonthlySalary = 0;
    self.employees.forEach(function(employee) {
    self.totalMonthlySalary += employee.annualSalary;
    });
    self.totalMonthlySalary /= 12;
    self.totalMonthlySalary = self.totalMonthlySalary.toFixed(2);
};

  self.deleteEmployee = function($index) {
    console.log('Deleted ', self.employee.firstName + ' ' + self.employee.lastName);
    self.employees.splice($index, 1);
    self.getTotal();
  };

});
