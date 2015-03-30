var db = null;
var logs = null;
document.addEventListener('deviceready',function(){
	//ici du code au lancement de l'appli
	navigator.splashscreen.hide();
},false);

var app = angular.module('app', ['ngRoute','ui.bootstrap']);

app.factory('GetAppService',function($rootScope){
	return{
		getUsers : function($rootScope){
			listUser($rootScope);
		},
		getFilters : function($rootScope){
			populateFilterTypeMovie($rootScope);
		},
		getListMovie : function($rootScope){
			listMovie($rootScope);
		},
		getMovieAvisAll : function($rootScope){
			allMovieAvis($rootScope);
		}
	}
});


app.config(function($routeProvider){
	$routeProvider.when('/home',{templateUrl:'partials/home.html'}).when('/list',{templateUrl:'partials/list.html'}).when('/add',{templateUrl:'partials/add.html'}).when('/exchange',{templateUrl:'partials/exchange.html'}).when('/config',{templateUrl:'partials/config.html'}).otherwise({redirectTo:'/home'});
});

app.controller('modalCtrl',modalCtrl); 
app.controller('navCtrl',navCtrl); 
app.controller('homeCtrl',homeCtrl); 
app.controller('listCtrl',listCtrl); 
app.controller('addCtrl',addCtrl); 
app.controller('exchangeCtrl',exchangeCtrl); 
app.controller('configCtrl',configCtrl); 
