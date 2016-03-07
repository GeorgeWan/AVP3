var gitSearchControllers = angular.module("gitSearchControllers", []);



gitSearchControllers.controller("searchController", ["$scope", "$log", "userSearchService", 'repoSearchService', '$location', function ($scope, $log, userSearchService, repoSearchService, $location) {
    $scope.searchString = "user";
    $scope.search = function () {
        if ($scope.searchString === "user") {

            userSearchService.userSearchString = $scope.inputString.trim();
            $location.path('/user');

        } else if ($scope.searchString === "repo") {
            //$log.info(repoSearchService.repoSearchString);
            repoSearchService.repoSearchString = $scope.inputString.trim();
            //$log.info(repoSearchService.repoSearchString);
            $location.path('/repository');
        }
        
    }

}]);


gitSearchControllers.controller("userController", ["$scope", "$log", 'userSearchService', function ($scope, $log, userSearchService) {
    $scope.searchResult = userSearchService.getUsers();
    $log.warn($scope.searchResult);
    
}]);

gitSearchControllers.controller("repositoryController", ["$scope", "$log", 'repoSearchService', function ($scope, $log, repoSearchService) {
    $scope.searchResult = repoSearchService.getRepos();
    $log.warn($scope.searchResult);

}]);