angular.module('app', [])
    .controller('mainCtrl', mainCtrl)
.directive('avatar', avatarDirective);


function mainCtrl($scope) {


    $scope.users = [];

    /**
     * Let's just make sure something happens when the user submits the form
     * by binding the declared 'addNew' function to the scope. You can see we
     * are expecting a user object as a parameter. This is 'userForm'
     */
    $scope.addNew = function(user) {
        $scope.users.push({
            name: user.name,
            email: user.email,
            avatarUrl: user.url
        }); /* [1] */

        user.name = ''; /* [2] */
        user.url = ''; /* [2] */
        user.email = '';
        
    };



}

function avatarDirective() {
    return {
        scope: {
            user: '=' /* [1] */
        },
        restrict: 'E',
        /* [2] */
        replace: 'true',
        template: (
            '<div class="Avatar">' +
            '<img ng-src="{{user.avatarUrl}}" />' +
            '<h4>{{user.name}} : {{user.email}}</h4>' +
            '</div>'
        ),
        /* [3] */
        link: link
    };

    function link(scope) { /* [4] */
        if (!scope.user.avatarUrl) {
            scope.user.avatarUrl = 'https://www.drupal.org/files/issues/default-avatar.png';
        }
    }

}
