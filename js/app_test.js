var db = null;
document.addEventListener('deviceready',function(){
	//ici du code au lancement de l'appli
	//navigator.splashscreen.hide();
	//db = window.openDatabase("Test","1.0","Testing database",200000);
	//db.transaction(PopulateDatabase,errorDB,successDB);
},false);
//var app = angular.module('app', ['ngRoute']);
	
///////////////////////////////////////////
            //GET DATA//                           
///////////////////////////////////////////
function GetData(){
	db = window.openDatabase("Test","1.0","Testing database",200000);
	db.transaction(SelectData,errorGet,successGet);	
}
function errorGet(){
	alert("Impossible de récupérer les données");
	//possibilité de mettre à jour des logs
}
function successGet(){
	//possibilité de mettre à jour des logs
}
function SelectData(tx){
	tx.executeSql("SELECT * FROM demo",[],successGetData,errorGetData);
}
function successGetData(tx, response){
	var div = document.getElementById("resultRender");
	var temp = "<table border=\"1\"><tr><th>title</th><th>image</th><th>description</th></tr>";
	for(var i=0;i<response.rows.length;i++){
		temp += "<tr><td>" + response.rows.item(i).title + "</td><td>" + response.rows.item(i).image + "</td><td>" + response.rows.item(i).description + "</td></tr>";
	}
	temp += "</table>";


	div.innerHTML =temp;
}
function errorGetData(error){
	alert('Il n\'existe aucunnes données');
	var div = document.getElementById("resultRender");
	div.innerHTML = "";
	//possibilité de mettre à jour des logs
}
///////////////////////////////////////////
			//SET DATA//
///////////////////////////////////////////
function SetData(){
	db = window.openDatabase("Test","1.0","Testing database",200000);
	db.transaction(PopulateDatabase,errorSet,successSet);
}
function PopulateDatabase(tx){
	//On teste si la table existe pour la créer et la remplir ou ne rien faire
	tx.executeSql("SELECT COUNT(*) AS result FROM sqlite_master WHERE name='demo';",[],successTrySet,errorTrySet);
}
function successTrySet(tx, response){
	if(response.rows.item(0).result == 1){
		alert("Les données ont déjà étés renseignées");
	}
	else{
		tx.executeSql('CREATE TABLE IF NOT EXISTS demo (title,image,description)');
		tx.executeSql("INSERT INTO DEMO(title,image,description)VALUES('titre1','image1','description1')");
		tx.executeSql("INSERT INTO DEMO(title,image,description)VALUES('titre2','image2','description2')");
		alert("Les données ont bien étés renseignées");
	}
	//possibilité de mettre à jour des logs
}
function errorTrySet(){
	//possibilité de mettre à jour des logs
}
function errorSet(){
	//possibilité de mettre à jour des logs
}
function successSet(){
	//possibilité de mettre à jour des logs
}
///////////////////////////////////////////
			//REMOVE DATA//
///////////////////////////////////////////
function RemoveData(){
	db = window.openDatabase("Test","1.0","Testing database",200000);
	db.transaction(removeTable,errorRemove,successRemove);
}
function removeTable(tx){
	//On teste si la table existe pour la supprimer ou ne rien faire
	tx.executeSql("SELECT COUNT(*) AS result FROM sqlite_master WHERE name='demo';",[],successTryRemove,errorTryRemove);
}
function successTryRemove(tx, response){
	if(response.rows.item(0).result == 1){
		tx.executeSql('DROP TABLE IF EXISTS demo');
		alert("Les données ont bien étés vidés");
	}
	else{
		alert("Les données ont déjà étés vidés");
	}
	//possibilité de mettre à jour des logs
}
function errorTryRemove(){
	//possibilité de mettre à jour des logs
}

function successRemove(){
	//possibilité de mettre à jour des logs
}
function errorRemove(){
	//possibilité de mettre à jour des logs
}


/*app.factory('GeolocationService', function($window, $q, $rootScope){
	var geolocation = $window.navigator.geolocation;
	return{
		getCurrentPosition : function(onSuccess,onError){
			geolocation.getCurrentPosition(function(position){
				$rootScope.$apply(function(){
					onSuccess(position);
				})
			},function(){
				$rootScope.$apply(function(){
					onError();
				})
			})
			
		}
	}
})

app.config(function($routeProvider){
	$routeProvider.when('/home',{templateUrl:'partials/home.html'}).when('/about',{templateUrl:'partials/about.html'}).otherwise({redirectTo:'/home'});
});

app.controller('navCtrl',navCtrl); 
app.controller('connectCtrl',connectCtrl); */