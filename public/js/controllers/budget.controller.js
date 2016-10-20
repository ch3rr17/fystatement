(function() {
    'use strict';

    angular
        .module('app')
        .controller('BudgetController', BudgetController);

    BudgetController.$inject = ['$log', 'BudgetFactory'];

    /* @ngInject */
    function BudgetController($log, BudgetFactory) {
        var vm = this;
        vm.title = 'BudgetController';
        
        vm.totalIncome = 0;
        vm.totalExpense = 0;
        vm.totalBalance = 0;

        vm.getRevenue = function() {
            BudgetFactory.grabRevenue(vm.revenue)
                .then(
                    function(response) {
                        vm.revenues = response.data;
                        console.log(vm.revenues);
                        angular.forEach(vm.revenues, function(revenue, key) {
                            vm.totalIncome += revenue.revamount;
                            vm.totalBalance += revenue.revamount;
                        });
                    },
                    function(error) {
                        $log.error('Failure grabbing revenues', error);
                    });
        };

        vm.getRevenue();

        vm.addRevenue = function() {
            BudgetFactory.addIncome(vm.revenue)
                .then(
                    function(response) {
                        vm.revenues.push(response.data);
                        console.log(response.data);
                        //clear inputs
                        vm.revenue = {};
                    },
                    function(error) {
                        $log.error('failure adding revenue', error);
                    });
        };

        vm.getExpense = function() {
            BudgetFactory.grabExpense(vm.expense)
                .then(
                    function(response) {
                        vm.expenses = response.data;
                        angular.forEach(vm.expenses, function(expense, key) {
                            vm.totalExpense += expense.expamount;
                            vm.totalBalance -= expense.expamount;
                        });
                    },
                    function(error) {
                        $log.error('Failure grabbing expenses', error);
                    });
        };

        vm.getExpense();

        vm.addExpense = function() {
            BudgetFactory.addExpense(vm.expense)
                .then(
                    function(response) {
                        vm.expenses.push(response.data);
                        //clear inputs
                        vm.expense = {};
                    },
                    function(error) {
                        $log.error(err.data.message);
                    });
        };
    }
})();
