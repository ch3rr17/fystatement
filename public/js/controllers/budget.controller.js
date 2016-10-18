(function() {
    'use strict';

    angular
        .module('app')
        .controller('BudgetController', BudgetController);

    BudgetController.$inject = ['$log','BudgetFactory'];

    /* @ngInject */
    function BudgetController($log,BudgetFactory) {
        var vm = this;
        vm.title = 'BudgetController';

        vm.getRevenue = function(){
        	BudgetFactory.grabRevenue(vm.revenue)
						.then(
							function(response){
								vm.revenues = response;
								console.log(response);
								//vm.totalIncome += vm.revamount;
							},
							function(error){
								$log.error('Failure grabbing revenues', error);
							});	        				
        }

        vm.getRevenue();

        vm.addRevenue = function(newIncomeItem){
        	BudgetFactory.addIncome(newIncomeItem)
        	             .then(
        	             	function(response){
        	             		vm.revenues.push(response.data);
        	             		console.log(response.data);
        	             	},
        	             	function(error){
        	             		$log.error('failure adding revenue', error);
        	             	});
        	//vm.newIncome = {};
        }
    }
})();