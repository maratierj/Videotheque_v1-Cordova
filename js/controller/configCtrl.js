function configCtrl($scope,GetAppService,$timeout,$modal,$log){
	/******************************************************/
	/* GENERAL                                            */
	/******************************************************/
	$scope.panel = 0;
	$(".rt-parameters").fadeIn(500);

	$('a').on('touchstart', function(e){
		$(this).addClass('tapped');
	});

	$('a').on('touchend', function(e){
		$(this).removeClass('tapped');
	});

	$('a').on('tap', function(e){
		e.preventDefault();
		
		//do your thing
		
		return false;
	});


	$scope.backConfig = function(panel){
		if(panel == 2){
			$scope.panel=1;
		}
		else if(panel ==1){
			$(".view").css("overflow-x","hidden");
			$scope.panel=0;
			$(".rt-general").hide();
			$(".rt-parameters").fadeIn(500);
		}
	}
	$scope.test = function(){
		$scope.panel = 2;
	}

	/******************************************************/
	/* IMPORTATION DES DONNEES                            */
	/******************************************************/
	$scope.importData = function(){	
		$(".view").css("overflow-x","initial");			
		$scope.panel = 1;
		$(".rt-general").hide();
		$(".rt-import-data").fadeIn(500);
		$scope.config_action = 0;
		//Test des status pour le traitements des états des boutons et des icônes
		browseStatus();
	}

	$scope.dataInitialize = function(){
		//Création de la base et des tables avec test d'existence des tables pour chaque étapes (le tout externalisé dans un fichier séparé)
		if(!$('.btn-data-import').hasClass('btn-data-import-disabled')){
			$(".loader").show();
			importDataBase();
		}
	}
	$scope.dataDelete = function(){
		if(!$('.btn-data-delete').hasClass('btn-data-delete-disabled')){
			$(".loader").show();
			deleteDataBase();
		}
	}
	$scope.dataLogs = function(){
		//TEST
		logs = '';
		db = window.openDatabase("Videotheque_v1","1.0","Videotheque database",200000);
		db.transaction(dataLogsAction,function(){
			//log
			alert('error dataLogs');
		},function(){
			alert(logs);		
		});
	}
	function dataLogsAction(tx){
		tx.executeSql("SELECT COUNT(*) AS result FROM movie_typeavis",[],function(tx,response){
			logs += "movie_typeavis : " + response.rows.item(0).result;
		},function(tx,error){});
		tx.executeSql("SELECT COUNT(*) AS result FROM movie",[],function(tx,response){
			logs += " -> movie : " + response.rows.item(0).result;
		},function(tx,error){});
		tx.executeSql("SELECT COUNT(*) AS result FROM movie_typemovies",[],function(tx,response){
			logs += " -> movie_typemovies : " + response.rows.item(0).result;
		},function(tx,error){});
	}

	/******************************************************/
	/* GESTION DES UTILISATEURS                           */
	/******************************************************/
	$scope.configUsers = function(){
		//$scope.loader = true;
		$(".view").css("overflow-x","initial");
		$scope.panel = 1;
		$(".rt-general").hide();
		$(".rt-config-user").fadeIn(500);
		$scope.config_action = 1;
		$scope.userList = "";
		$scope.initConfigUser();
	}
	$scope.initConfigUser = function(){
		var tempList = GetAppService.getUsers($scope);
        $timeout(function(){ $scope.$apply(function(){
        });}, 50);
	}

	$scope.expand = function(e){
		$elem = $(e.currentTarget);
		$(".config-user-name-left").hide();
		$(".config-user-name-right").hide();
		$("#" + e.currentTarget.id + " div.config-user-name-left").show();
		$("#" + e.currentTarget.id + " div.config-user-name-right").show();

		addDynamicTappedClass("config-user-name-left");
		addDynamicTappedClass("config-user-name-right");

		$elem.addClass('ra_config_user').siblings().removeClass('ra_config_user');
	}

	$scope.users = '';

	$scope.open = function (size,template,user,e) {
		switch(template){
			case "mdEditUser.html":
				$scope.users = user;

				var modalInstance = $modal.open({
				  templateUrl: template,
				  controller: 'modalCtrl',
				  size: size,
				  resolve: {
				    users: function () {
				      return $scope.users;
				    }
				  }
				});

				modalInstance.result.then(function() {
				 	$scope.initConfigUser();
				}, function () {
				  $log.info('Modal dismissed at: ' + new Date());
				});
			break;

			case "mdDeleteUser.html":
				if(!user.is_pret){
					$scope.users = user;
					var modalInstance = $modal.open({
					  templateUrl: template,
					  controller: 'modalCtrl',
					  size: size,
					  resolve: {
					    users: function () {					    	
					      return $scope.users;
					    }
					  }
					});
					modalInstance.result.then(function (selectedItem) {
					  	$scope.initConfigUser();
					}, function () {
					  $log.info('Modal dismissed at: ' + new Date());
					});
				}
			break;
		}
		
	};


	$scope.userPretInfo = function(){
		alert('info utilisateur');
	}
	/******************************************************/
	/* AJOUT DES UTILISATEURS                             */
	/******************************************************/
	$scope.addUser = function(){
		$(".view").css("overflow-x","initial");
		$scope.panel = 1;
		$(".rt-general").hide();
		$(".rt-add-user").fadeIn(500);
		$scope.config_action = 2;
		//Test de l'xistence du dernier utulisateur ajouté
		lastUserAdd();
	}
	$(".lastname-user").bind("change paste keyup", function() {
       btnSaveUserStatus(); 
    });
    $(".firstname-user").bind("change paste keyup", function() {
       btnSaveUserStatus(); 
    });
    function btnSaveUserStatus(){
    	var firstname = $(".firstname-user").val();
    	var lastname = $(".lastname-user").val();
    	if(firstname != "" && lastname != ""){
    		if($('.btn-save-new-user').hasClass('btn-save-new-user-disabled')){
				$('.btn-save-new-user').removeClass('btn-save-new-user-disabled');
    		}
    	}
    	else{
    		if(!$('.btn-save-new-user').hasClass('btn-save-new-user-disabled')){
				$('.btn-save-new-user').addClass('btn-save-new-user-disabled');
    		}
    	}
    }
	$scope.saveNewUser = function(){
		var firstname = $(".firstname-user").val();
		var lastname = $(".lastname-user").val();
		if(!$('.btn-save-new-user').hasClass('btn-save-new-user-disabled')){
			if(firstname != "" && lastname != ""){
				saveUser(firstname,lastname);	
			}
		}
	}
	/******************************************************/
	/* SAUVEGARDE DES DONNEES                             */
	/******************************************************/
	$scope.saveData = function(){
		$scope.panel = 1;
		$(".rt-general").hide();
		$(".rt-save-data").fadeIn(500);
		$scope.config_action = 3;
	}
}