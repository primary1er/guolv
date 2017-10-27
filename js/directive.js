/**
 * Created by Administrator on 15-9-29.
 */
var directiveModule = angular.module("myapp.hideTabs",[]);
directiveModule.directive('hideTabs',function($rootScope){
    return {
        restrict:'AE',
        link:function($scope){
            $rootScope.hideTabs = 'tabs-item-hide';
            $scope.$on('$destroy',function(){
                $rootScope.hideTabs = ' ';
            })
        }
    }

})

