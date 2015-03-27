function lastUserAdd(){
	//Récupère le dernier utilisateur ajouté
	db = window.openDatabase("Videotheque_v1","1.0","Videotheque database",200000);	
	db.transaction(function(tx){
		tx.executeSql("SELECT COUNT(*) AS result FROM movie_pret;",[],function(tx,response){
			if(response.rows.item(0).result == 0){
				$(".last-add-user").hide();												
			}
			else{
				tx.executeSql("SELECT * FROM movie_pret ORDER BY id DESC LIMIT 1",[],function(tx,response){
						$(".last-add-user-firstname").html(response.rows.item(0).firstname);
						$(".last-add-user-lastname").html(response.rows.item(0).lastname);
						$(".last-add-user").show();	
					},function(tx,error){});
			}
		},function(tx,error){
			//log
			alert('error tableExists')
		});
	});
}
function saveUser(firstname,lastname){
	//Sauvegarde un nouvel utilisateur
	db = window.openDatabase("Videotheque_v1","1.0","Videotheque database",200000);	
	db.transaction(function(tx){
		tx.executeSql("INSERT INTO movie_pret(lastname,firstname,is_pret)VALUES('" + lastname + "','" + firstname + "',0);",[],function(tx,response){
			$(".lastname-user").val('');
			$(".firstname-user").val('');
			lastUserAdd();
			if(!$('.btn-save-new-user').hasClass('btn-save-new-user-disabled')){
				$('.btn-save-new-user').addClass('btn-save-new-user-disabled');
    		}											
		},function(tx,error){
			//log
			alert('error tableExists')
		});
	});
}
function listUser($scope){
	//Récupère la liste des utilisateurs
	db = window.openDatabase("Videotheque_v1","1.0","Videotheque database",200000);	
	db.transaction(function(tx){
		tx.executeSql("SELECT * FROM movie_pret;",[],function(tx,response){
			if (response != null && response.rows != null) {
				var newJson = { $resources: [] };
				for (var k = 0; k < response.rows.length; k++) {

                    var row = response.rows.item(k);
                    newJson.$resources[k] = { id: row.id , lastname: row.lastname , firstname:row.firstname, is_pret:row.is_pret };
                }
				$scope.userList = newJson;
			}
		},function(tx,error){
			//log
			alert('error tableExists')
		});
	});
}
//Modification d'un utilisateur
function editUserData(user,modalInstance,lastnameUser,firstnameUser){
	db = window.openDatabase("Videotheque_v1","1.0","Videotheque database",200000);	
	db.transaction(function(tx){
		tx.executeSql("UPDATE movie_pret SET lastname = '"+ lastnameUser +"',firstname = '"+ firstnameUser +"' WHERE id = "+ user.id +";",[],function(tx,response){
			modalInstance.close();										
		},function(tx,error){
			//log
			alert('error tableExists')
		});
	});
}
//Suppression d'un utilisateur
function deleteUserData(user,modalInstance){
	db = window.openDatabase("Videotheque_v1","1.0","Videotheque database",200000);	
	db.transaction(function(tx){
		tx.executeSql("DELETE FROM movie_pret WHERE id = "+ user.id +";",[],function(tx,response){
			modalInstance.close();										
		},function(tx,error){
			//log
			alert('error tableExists')
		});
	});
}