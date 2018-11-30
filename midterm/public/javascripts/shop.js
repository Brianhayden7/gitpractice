angular.module('product', [])
    .controller('MainCtrl', [
        '$scope', '$http',
        function($scope, $http) {

            $scope.pizzas = [];

            $scope.addProduct = function() {
                var newcomment = { name: $scope.formContent1, cost: $scope.form2, orders: 0, img: $scope.formContent3 };
                $http.post('/products', newcomment).success(function(data) {
                    $scope.pizzas.push(data);
                });
                $scope.formContent = '';
            };

            $scope.Purchase = function() {
                angular.forEach($scope.pizzas, function(value, key, obj) {
                    if ($scope.pizzas.selected) {
                        $http.put('/products/' + obj._id + '/order').success(function(data) {
                            console.log("upvote worked");
                            obj.orders += 1;
                        });
                    }

                });

            };

            $scope.delete = function(pizza) {
                $http.delete('/products/' + pizza._id)
                    .success(function(data) {
                        console.log("delete worked");
                        $scope.getAll();
                    });
            };

            $scope.getAll = function() {
                return $http.get('/products').success(function(data) {
                    angular.copy(data, $scope.pizzas);
                });
            };

            $scope.getAll();
        }
    ]);
