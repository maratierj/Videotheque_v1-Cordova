function modalCtrl ($scope, $modalInstance,users) {
    $scope.users = users;
    $scope.deleteInit = function(){
        addDynamicTappedClass("user-delete");
    }
    $scope.cancelInit = function(){
        addDynamicTappedClass("user-cancel");
    }
    $scope.editInit = function(){
        addDynamicTappedClass("user-edit");
    }
    $scope.editUser = function () {
        var lastnameUser = $('.lastname-user-edit').val();
        var firstnameUser = $('.firstname-user-edit').val();
        editUserData(users,$modalInstance,lastnameUser,firstnameUser);
    };
    $scope.cancelEdit = function () {
        $modalInstance.dismiss('cancel');
    };
    $scope.deleteUser = function () {          
              
        //deleteUserData(users,$modalInstance);
    };
    $scope.cancelDelete = function () {
        $modalInstance.dismiss('cancel');
    };
};
