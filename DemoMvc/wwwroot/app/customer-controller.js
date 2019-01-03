angular.module('QuizApp', [])
    .controller('QuizCtrl', function ($scope, $http) {
        $scope.answered = false;
        $scope.title = "loading customer...";
        $scope.options = [];
        $scope.correctAnswer = false;
        $scope.working = false;

        $scope.answer = function () {
            return $scope.correctAnswer ? 'correct' : 'incorrect';
        };

        $scope.nextQuestion = function () {
            $scope.working = true;
            $scope.answered = false;
            $scope.title = "loading customer...";
            $scope.options = [];

            $http.get("http://lazerpanther-001-site1.atempurl.com/api/customers/98").then(function (response) {
                $scope.title = "Customer";
                $scope.working = true;
                $scope.id = response.data.id;
                $scope.firstName = response.data.firstName;
                $scope.lastName = response.data.lastName;
                $scope.city = response.data.city;
                $scope.country = response.data.country;
                $scope.phone = response.data.phone;
            }, function (error) {
                $scope.title = "Oops... something went wrong";
                $scope.working = false;
            });

            $scope.sendAnswer = function (option) {
                $scope.working = true;
                $scope.answered = true;

                $http.post('/api/trivia', { 'questionId': option.questionId, 'optionId': option.id }).success(function (data, status, headers, config) {
                    $scope.correctAnswer = (data === true);
                    $scope.working = false;
                }).error(function (data, status, headers, config) {
                    $scope.title = "Oops... something went wrong";
                    $scope.working = false;
                });
            };
        };
    });