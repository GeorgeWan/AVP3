var gitSearchServices = angular.module("gitSearchServices", []);

gitSearchServices.service("userSearchService", function ($http) {
    var self = this;
    this.userSearchString = "";
    this.getUsers = function () {
        return $http.get('https://api.github.com/search/users?q='.concat(self.userSearchString))
                    .then(function (response) {
                        return response.data;
                    })
    }
})

gitSearchServices.service("repoSearchService", function ($http) {
    var self = this;
    this.repoSearchString = "";
    this.getRepos = function () {
        return $http.get('https://api.github.com/search/repositories?q='.concat(self.repoSearchString))
                    .then(function (response) {
                        return response.data;
                    })
    }
})