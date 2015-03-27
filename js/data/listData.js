function populateFilterTypeMovie($scope){
	//Récupère la liste des types de films
	db = window.openDatabase("Videotheque_v1","1.0","Videotheque database",200000);	
	db.transaction(function(tx){
		tx.executeSql("SELECT * FROM movie_typemovies;",[],function(tx,response){
			if (response != null && response.rows != null) {
				var newJson = { $resources: [] };
				for (var k = 0; k < response.rows.length; k++) {

                    var row = response.rows.item(k);
                    newJson.$resources[k] = { id: row.id , type: row.type};
                }
				$scope.listFilter = newJson;
			}
		},function(tx,error){
			//log
			alert('error tableExists')
		});
	});	
}

function listMovie($scope){
	db = window.openDatabase("Videotheque_v1","1.0","Videotheque database",200000);	
	db.transaction(function(tx){
		tx.executeSql("SELECT movie.id AS id,movie.pret_id AS pret_id,movie.title AS title,movie.num_movie AS num_movie,movie.nb_disc AS nb_disc,movie.is_pret AS is_pret,movie.date_maj AS date_maj,typemovies.type AS type,pret.lastname AS lastname,pret.firstname AS firstname,(SELECT round(avg(rate),0) FROM movie_rate WHERE movie_id = movie.id) AS round_rate FROM movie movie LEFT JOIN movie_typemovie typemovie ON movie.id = typemovie.movie_id LEFT JOIN movie_typemovies typemovies ON typemovies.id = typemovie.type_movie_id LEFT JOIN movie_pret pret ON pret.id = movie.pret_id LIMIT 0,50;"
		,[],function(tx,response){
			if (response != null && response.rows != null) {
				var newJson = { $resources: [] };
				for (var k = 0; k < response.rows.length; k++) {

                    var row = response.rows.item(k);
                    newJson.$resources[k] = { id: row.id ,
                								pret_id: row.pret_id,
                								date_maj:row.date_maj,
                								type: row.type,
                								lastname: row.lastname,
                								firstname: row.firstname,
                								round_rate: row.round_rate,
                								num_movie: row.num_movie,
            									nb_disc: row.nb_disc,
            									is_pret: row.is_pret,
            									title: row.title};
                }
				$scope.listMovies = newJson;
			}
		},function(tx,error){
			//log
			alert('error tableExists')
		});
	});
}