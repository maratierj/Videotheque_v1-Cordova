function navCtrl($scope){
	$scope.menu='home';

	$scope.nav = function(page,cssClass){
		$("#icon-header").removeClass().addClass(cssClass);
		$scope.menu = page;
		//On masque les div titre des sections right en cas de navigation forcée
		$(".rt-import-data").hide();
		$(".rt-config-user").hide();
		$(".rt-add-user").hide();
		$(".rt-save-data").hide();
	}
}