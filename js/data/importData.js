/******************************************************/
/* GESTION DE L'IMPORTATION DES DONNEES               */
/******************************************************/
/*STRUCTURE
	TABLES:
		movie_rate(id,movie_id,rate,type_avis_id)
		movie_image(id,url,alt,title)
		movie(id,image_id,pret_id,title,num_movie,nb_disc,is_pret,date_maj)*
		movie_pret(id,lastname,firstname)
		movie_typeavis(id,name)*
		movie_typemovie(movie_id,type_movie_id)
		movie_typemovies(id,type)*
*/
//Tableau de la liste des tables
var tableList = ['movie_rate','movie_image','movie','movie_pret','movie_typeavis','movie_typemovie','movie_typemovies'];

function browseStatus(){
	//Test d'existence des tables
	if($(".step-status-ok").hasClass('status-disabled')){
		$(".step-status-ok").removeClass('status-disabled')
	}
	tableExists(null,true);
}
//Fonction d'initialisation de la base de données
function importDataBase(){
	//Création des tables
	createTables();
}
//Fonction de création des tables
function createTables(){
	//On supprime d'abord toutes les tables
	deleteTables(true);
	//On recrée les tables
	addTables();
	//On renseigne les données
	//A AUTOMATISER AVEC UN FICHIER A CHARGER PAR EXEMPLE
	addData();
}
//Fonction test d'existence des tables
//param:table -> (string) nom de ta table à tester
//param:all -> (boolean) détermine si toutes les tables doivent-être testés
function tableExists(table,all){	
	if(all){
		var tableListString = '';	
		db = window.openDatabase("Videotheque_v1","1.0","Videotheque database",200000);
		for(var i=0;i < tableList.length; i++){	
			if(tableListString == ''){
				tableListString += '\'' + tableList[i] + '\''
			}	
			else{
				tableListString += ',\'' + tableList[i] + '\''
			}	
		}
		db.transaction(function(tx){
			tx.executeSql("SELECT COUNT(*) AS result FROM sqlite_master WHERE name in (" + tableListString + ");",[],function(tx,response){
				if(response.rows.item(0).result == 0){
					if($(".notok-structure").hasClass('status-disabled')){
						$(".notok-structure").removeClass('status-disabled')
					}
					if($(".notok-data").hasClass('status-disabled')){
						$(".notok-data").removeClass('status-disabled')
					}
					if($('.btn-data-import').hasClass('btn-data-import-disabled')){
						$('.btn-data-import').removeClass('btn-data-import-disabled')
					}
					$(".ok-structure").addClass('status-disabled');
					$(".ok-data").addClass('status-disabled');	
					$('.btn-data-delete').addClass('btn-data-delete-disabled');													
				}
				else{
					if($(".ok-structure").hasClass('status-disabled')){
						$(".ok-structure").removeClass('status-disabled')
					}
					if($(".ok-data").hasClass('status-disabled')){
						$(".ok-data").removeClass('status-disabled')
					}
					if($('.btn-data-delete').hasClass('btn-data-delete-disabled')){
						$('.btn-data-delete').removeClass('btn-data-delete-disabled')
					}
					$(".notok-structure").addClass('status-disabled');
					$(".notok-data").addClass('status-disabled');	
					$('.btn-data-import').addClass('btn-data-import-disabled');	
				}
			},function(tx,error){
				//log
				alert('error tableExists')
			});
		});
	}
	else{
		db = window.openDatabase("Videotheque_v1","1.0","Videotheque database",200000);
		db.transaction(function(tx){
			tx.executeSql("SELECT COUNT(*) AS result FROM sqlite_master WHERE name='" + table + "';",[],function(tx,response){
				if(response.rows.item(0).result != 1){
											
				}
			},function(tx,error){
				//log
			});
		});	
	}
}

//Fonction de suppression des tables si elles existent
//param: forImport -> (boolean) détermine si c'est une suppression avant importation de la nouvelle base ou non
function deleteTables(forImport){
	db = window.openDatabase("Videotheque_v1","1.0","Videotheque database",200000);
	db.transaction(deleteTablesAction,function(){
		//log
		$(".loader").hide();
		alert('error deleteTables');
	},function(){
		if(!$(".ok-structure").hasClass('status-disabled')){
			$(".ok-structure").addClass('status-disabled')
		}
		if($(".notok-structure").hasClass('status-disabled')){
			$(".notok-structure").removeClass('status-disabled')
		}
		if(!$(".ok-data").hasClass('status-disabled')){
			$(".ok-data").addClass('status-disabled')
		}
		if($(".notok-data").hasClass('status-disabled')){
			$(".notok-data").removeClass('status-disabled')
		}
		if(!$('.btn-data-delete').hasClass('btn-data-delete-disabled')){
			$('.btn-data-delete').addClass('btn-data-delete-disabled');	
		}
		if($('.btn-data-import').hasClass('btn-data-import-disabled')){
			$('.btn-data-import').removeClass('btn-data-import-disabled');	
		}
		if(!forImport){
			$(".loader").hide();
		}
	});
	
}
function deleteTablesAction(tx){
	tx.executeSql("DROP TABLE IF EXISTS movie_rate;");
	tx.executeSql("DROP TABLE IF EXISTS movie_image;");
	tx.executeSql("DROP TABLE IF EXISTS movie;");
	tx.executeSql("DROP TABLE IF EXISTS movie_pret;");
	tx.executeSql("DROP TABLE IF EXISTS movie_typeavis;");
	tx.executeSql("DROP TABLE IF EXISTS movie_typemovie;");
	tx.executeSql("DROP TABLE IF EXISTS movie_typemovies;");
}
//Fonction d'ajout des tables
function addTables(){
	db = window.openDatabase("Videotheque_v1","1.0","Videotheque database",200000);
	db.transaction(addTablesAction,function(){
		//log
		$(".loader").hide();
		alert('error addTables');
	},function(){
		if($(".ok-structure").hasClass('status-disabled')){
			$(".ok-structure").removeClass('status-disabled')
		}
		if(!$(".notok-structure").hasClass('status-disabled')){
			$(".notok-structure").addClass('status-disabled')
		}
		if($('.btn-data-delete').hasClass('btn-data-delete-disabled')){
			$('.btn-data-delete').removeClass('btn-data-delete-disabled');	
		}		
	});
}
function addTablesAction(tx){
	tx.executeSql('CREATE TABLE "movie_rate" ("id" INTEGER PRIMARY KEY  AUTOINCREMENT  NOT NULL  UNIQUE , "movie_id" INTEGER NOT NULL , "rate" INTEGER NOT NULL , "type_avis_id" INTEGER NOT NULL)');
	tx.executeSql('CREATE TABLE "movie_image" ("id" INTEGER PRIMARY KEY  AUTOINCREMENT  NOT NULL  UNIQUE , "url" VARCHAR NOT NULL , "alt" VARCHAR NOT NULL , "title" VARCHAR NOT NULL)');
	tx.executeSql('CREATE TABLE "movie" ("id" INTEGER PRIMARY KEY  AUTOINCREMENT  NOT NULL  UNIQUE , "image_id" INTEGER, "pret_id" INTEGER, "title" VARCHAR NOT NULL , "num_movie" INTEGER NOT NULL, "nb_disc"  INTEGER NOT NULL, "is_pret" BOOL, "date_maj" DATETIME)');
	tx.executeSql('CREATE TABLE "movie_pret" ("id" INTEGER PRIMARY KEY  AUTOINCREMENT  NOT NULL  UNIQUE , "lastname" VARCHAR NOT NULL , "firstname" VARCHAR NOT NULL, "is_pret" BOOL)');
	tx.executeSql('CREATE TABLE "movie_typeavis" ("id" INTEGER PRIMARY KEY  AUTOINCREMENT  NOT NULL  UNIQUE , "name" VARCHAR NOT NULL)');
	tx.executeSql('CREATE TABLE "movie_typemovie" ("movie_id" INTEGER NOT NULL, "type_movie_id" INTEGER NOT NULL)');
	tx.executeSql('CREATE TABLE "movie_typemovies" ("id" INTEGER PRIMARY KEY  AUTOINCREMENT  NOT NULL  UNIQUE , "type" VARCHAR NOT NULL)');
}


//Fonction de suppression de la base de données
function deleteDataBase(){
	deleteTables(false);
}
