(function() {
    'use strict';

    angular
        .module('app')
        .factory('BudgetFactory', BudgetFactory);

    BudgetFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function BudgetFactory($http, $q) {
        var service = {
            grabRevenue: grabRevenue,
            addIncome: addIncome,
            grabExpense: grabExpense,
            addExpense: addExpense
        };
        return service;

        ////////////////

        function grabRevenue() {
            var defer = $q.defer();

            $http.get('/revenues')
                .then(
                    function(response) {
                        defer.resolve(response);
                    },
                    function(error) {
                        defer.reject(err.data.message);
                    });

            return defer.promise;
        }

        function addIncome(revenue){
        	var defer = $q.defer();

        	$http.post('/revenues', revenue)
        	     .then(
        	     	function(response){
        	     		defer.resolve(response);
        	     		//console.log(response);
        	     	},
        	     	function(error){
        	     		defer.reject(err.data.message);
        	     	});
        	return defer.promise;
        }

        function grabExpense() {
            var defer = $q.defer();

            $http.get('/expenses')
                .then(
                    function(response) {
                        defer.resolve(response);
                    },
                    function(error) {
                        defer.reject(err.data.message);
                    });

            return defer.promise;
        }

        function addExpense(expense){
            var defer = $q.defer();

            $http.post('/expenses', expense)
                 .then(
                    function(response){
                        defer.resolve(response);
                    },
                    function(error){
                        defer.reject(err.data.message);
                    });
            return defer.promise;
        }


    }
})();
