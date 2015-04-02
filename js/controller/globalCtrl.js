///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
//                                                                   //
//                             GENERAL                               //
//                                                                   //
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

function addDynamicTappedClass(domClass){
    $('.' + domClass + ' a').on('touchstart', function(e){
        $(this).addClass('tapped');
    });

    $('.' + domClass + ' a').on('touchend', function(e){
        $(this).removeClass('tapped');
    });

    $('.' + domClass + ' a').on('tap', function(e){
        e.preventDefault();
        
        //do your thing
        
        return false;
    });
}

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
//                                                                   //
//                    MODAL CONTROLLER                               //
//                                                                   //
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

function modalCtrl ($scope, $modalInstance,users) {
    $scope.users = users;
    $scope.deleteInit = function(){
        addDynamicTappedClass("user-delete");
    };
    $scope.cancelInit = function(){
        addDynamicTappedClass("user-cancel");
    };
    $scope.editInit = function(){
        addDynamicTappedClass("user-edit");
    };
    $scope.editUser = function () {
        var lastnameUser = $('.lastname-user-edit').val();
        var firstnameUser = $('.firstname-user-edit').val();
        editUserData(users,$modalInstance,lastnameUser,firstnameUser);
    };
    $scope.cancelEdit = function () {
        $modalInstance.dismiss('cancel');
    };
    $scope.deleteUser = function () {             
        deleteUserData(users,$modalInstance);
    };
    $scope.cancelDelete = function () {
        $modalInstance.dismiss('cancel');
    };
}


///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
//                                                                   //
//                     ADD  CONTROLLER                               //
//                                                                   //
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

function addCtrl($scope){
    $scope.menu='home';
}


///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
//                                                                   //
//                    CONFIG CONTROLLER                              //
//                                                                   //
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

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
    };
    $scope.test = function(){
        $scope.panel = 2;
    };

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
    };

    $scope.dataInitialize = function(){
        //Création de la base et des tables avec test d'existence des tables pour chaque étapes (le tout externalisé dans un fichier séparé)
        if(!$('.btn-data-import').hasClass('btn-data-import-disabled')){
            $(".loader").show();
            importDataBase();
        }
    };
    $scope.dataDelete = function(){
        if(!$('.btn-data-delete').hasClass('btn-data-delete-disabled')){
            $(".loader").show();
            deleteDataBase();
        }
    };
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
    };
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
    };

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
    };
    $scope.initConfigUser = function(){
        $scope.loader = true;
        var tempList = GetAppService.getUsers($scope);
        $timeout(function(){ $scope.$apply(function(){
            $scope.loader = false;
        });}, 50);
    };

    $scope.expand = function(e){
        $elem = $(e.currentTarget);
        $(".config-user-name-left").hide();
        $(".config-user-name-right").hide();
        $("#" + e.currentTarget.id + " div.config-user-name-left").show();
        $("#" + e.currentTarget.id + " div.config-user-name-right").show();

        addDynamicTappedClass("config-user-name-left");
        addDynamicTappedClass("config-user-name-right");

        $elem.addClass('ra_config_user').siblings().removeClass('ra_config_user');
    };

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
    };
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
    };
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
    };
    $scope.saveNewUser = function(){
        var firstname = $(".firstname-user").val();
        var lastname = $(".lastname-user").val();
        if(!$('.btn-save-new-user').hasClass('btn-save-new-user-disabled')){
            if(firstname != "" && lastname != ""){
                saveUser(firstname,lastname);   
            }
        }
    };
    /******************************************************/
    /* SAUVEGARDE DES DONNEES                             */
    /******************************************************/
    $scope.saveData = function(){
        $scope.panel = 1;
        $(".rt-general").hide();
        $(".rt-save-data").fadeIn(500);
        $scope.config_action = 3;
    };
}


///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
//                                                                   //
//                    EXCHANGE CONTROLLER                            //
//                                                                   //
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

function exchangeCtrl($scope){
    $scope.menu='home';
}


///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
//                                                                   //
//                     HOME CONTROLLER                               //
//                                                                   //
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

function homeCtrl($scope){

}


///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
//                                                                   //
//                     LIST CONTROLLER                               //
//                                                                   //
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

function listCtrl($scope,GetAppService,$timeout){
    /******************************************************/
    /* GENERAL                                            */
    /******************************************************/
    $scope.panel = 0;
    $scope.itemsPerPage = 25;
    $scope.loader = false;
    $scope.titleMovie = '';
    $scope.typeMovieId = 0;
    $scope.filtered = true;

    $(".rt-filter-list").fadeIn(500);

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
            $(".rt-movie-detail").hide();
            $(".rt-result-list").fadeIn(500);

            $('.panel-movie-detail').translate3d(
                { x: '100%', y: '0px', z: '0px'},
                true,
                500,
                function(){}
            );

            $('.panel-movie-list').translate3d(
                { x: 0, y: 0, z: 0},
                false,
                500,
                function(){
                    $('.pagination-content').fadeIn(300);
                }
            );

            
        }
        else if(panel ==1){
            $(".view").css("overflow-x","hidden");
            $scope.panel=0;
            $(".rt-general").hide();
            $(".rt-filter-list").fadeIn(500);
            $('.pagination-content').fadeOut(100);
            $('.panel-movie-list').translate3d(
                {  x: '100%', y: '0px', z: '0px'},
                true,
                500,
                function(){}
            );

            $('.panel-movie-filter').translate3d(
                { x: 0, y: 0, z: 0},
                false,
                500,
                function(){
                    $('.pagination-content').fadeOut(300);
                }
            );
            
        }
    };
    function addDynamicTappedClass(domClass){
        $('.' + domClass + ' a').on('touchstart', function(e){
            $(this).addClass('tapped');
        });

        $('.' + domClass + ' a').on('touchend', function(e){
            $(this).removeClass('tapped');
        });

        $('.' + domClass + ' a').on('tap', function(e){
            e.preventDefault();
            
            //do your thing
            
            return false;
        });
    };

    /******************************************************/
    /* RECHERCHE / FILTRES                                */
    /******************************************************/    
    $scope.populateTypeMovie = function(){
        $scope.listFilter = "";
        var tempList = GetAppService.getFilters($scope);
    };
    $scope.selectFilter = function(filterId,filterType){
        var htmlFilter = filterType + '&nbsp;<span class="caret"></span>';
        $(".hf-filter-type-id").val(filterId);
        $(".filter-type").html(htmlFilter);
    };
    $(".filter-title").bind("change paste keyup", function() {
       btnFilterStatus(); 
    });
    function btnFilterStatus(){
        var title = $(".filter-title").val();
        var idType = $(".hf-filter-type-id").val();
        if(title != "" && idType != null && idType != undefined){
            if($('.btn-filter-filter').hasClass('btn-filter-disabled')){
                $('.btn-filter-filter').removeClass('btn-filter-disabled');
            }
        }
        else{
            if(!$('.btn-filter-filter').hasClass('btn-filter-disabled')){
                $('.btn-filter-filter').addClass('btn-filter-disabled');
            }
        }
    };

    //Recherche de films
    $scope.searchMovie = function(filtered,firstLoad){
        $(".view").css("overflow-x","initial");
        var title = '';
        var idType = 0;
        if(filtered){
            title = $(".filter-title").val();
            idType = $(".hf-filter-type-id").val();
            $scope.titleMovie = title;
            $scope.typeMovieId = idType;
        }
        $scope.filtered = filtered;
        $scope.loader = true;
        
        if(firstLoad){
            $scope.currentPage  = 1;
            $scope.beginItems = 0;
        }
        $scope.listMovies = "";

        var tempList = GetAppService.getListMovie($scope);   
        $timeout(function(){ $scope.$apply(function(){
            $scope.loader = false;
            $(".rt-general").hide();
            $scope.panel=1;
            $(".rt-result-list").fadeIn(500);
            $('.panel-movie-filter').translate3d(
                { x: '-100%', y: '0px', z: '0px'},
                true,
                500,
                function(){
                    $('.pagination-content').fadeOut(300);
                }
            );
            $('.panel-movie-list').translate3d(
                { x: 0, y: 0, z: 0},
                false,
                500,
                function(){
                    $('.pagination-content').fadeIn(100);
                }
            );
        });}, 150);
    };

    /******************************************************/
    /* LISTE DE FILMS                                     */
    /******************************************************/
    $scope.expand = function(e){
        $elem = $(e.currentTarget);
        $badgeMovie = $(".movie_nb_disc_badge");
        $badgeMovieTarget = $("#" + e.currentTarget.id + " span.movie_nb_disc_badge");
        $colorMovie = $(".color_movies_pret");
        $colorMovieTarget = $("#" + e.currentTarget.id + " div.color_movies_pret");
        $btnEditMovie = $(".btn_edit_movie");
        $btnEditMovieTarget = $("#" + e.currentTarget.id + " span.btn_edit_movie");
        $titleMovie = $(".movie_title");
        $titleMovieTarget = $("#" + e.currentTarget.id + " div.movie_title");
        $nbMovieMovie = $(".movie_nbMovie");
        $nbMovieMovieTarget = $("#" + e.currentTarget.id + " div.movie_nbMovie");
        $nbDiscMovie = $(".movie_nbDisc");
        $nbDiscMovieTarget = $("#" + e.currentTarget.id + " div.movie_nbDisc");
        $typeMovie = $(".movie_type");
        $typeMovieTarget = $("#" + e.currentTarget.id + " div.movie_type");
        $avisMovie = $(".movie_avis");
        $avisMovieTarget = $("#" + e.currentTarget.id + " div.movie_avis");
        $avisValueTarget = $("#" + e.currentTarget.id + " input.avis-value");
        $avisBarTarget = $("#" + e.currentTarget.id + " div.vote_progress");

        //Agrandissement du contenu
        $elem.addClass('ra_list_movies').siblings().removeClass('ra_list_movies');

        //Traitement du badge
        $badgeMovie.removeClass('movie_nb_disc_badge_xs').addClass('movie_nb_disc_badge_sm');
        $badgeMovieTarget.removeClass('movie_nb_disc_badge_sm').addClass('movie_nb_disc_badge_xs');

        //Traitement de la banière couleur
        $colorMovie.removeClass('color_movie_pret_xs').addClass('color_movie_pret_sm');
        $colorMovieTarget.removeClass('color_movie_pret_sm').addClass('color_movie_pret_xs');

        //Traitement du bouton de mofification
        $btnEditMovie.removeClass('btn_edit_movie_xs').addClass('btn_edit_movie_sm');
        $btnEditMovieTarget.removeClass('btn_edit_movie_sm').addClass('btn_edit_movie_xs');

        //Traitement du titre
        $titleMovie.removeClass('movie_title_xs').addClass('movie_title_sm');
        $titleMovieTarget.removeClass('movie_title_sm').addClass('movie_title_xs');

        //Traitement du numéro de film
        $nbMovieMovie.removeClass('movie_nbMovie_xs').addClass('movie_nbMovie_sm');
        $nbMovieMovieTarget.removeClass('movie_nbMovie_sm').addClass('movie_nbMovie_xs');

        //Traitement du numéro de disque
        $nbDiscMovie.removeClass('movie_nbDisc_xs').addClass('movie_nbDisc_sm');
        $nbDiscMovieTarget.removeClass('movie_nbDisc_sm').addClass('movie_nbDisc_xs');

        //Traitement du type
        $typeMovie.removeClass('movie_type_xs').addClass('movie_type_sm');
        $typeMovieTarget.removeClass('movie_type_sm').addClass('movie_type_xs');

        //Traitement de l'avis
        $avisMovie.removeClass('movie_avis_xs').addClass('movie_avis_sm');
        $avisMovieTarget.removeClass('movie_avis_sm').addClass('movie_avis_xs');

        //Traitement de la barre d'avis
        var color = '';
        if(0 <= Number($avisValueTarget.val()) &&  Number($avisValueTarget.val()) <= 2){
            color = 'rgba(201,48,44,1)';
        }
        else if(3 <= Number($avisValueTarget.val()) && Number($avisValueTarget.val()) <= 5){
            color = 'rgba(236,151,31,1)';
        }
        else if(Number($avisValueTarget.val()) > 5){
            color = 'rgba(68,157,68,1)';
        }
        $avisBarTarget .css("width", $avisValueTarget.val() + "0%");
        $avisBarTarget .css("background-color",color);

        //Ajout de la classe tapped sur le bouton
        addDynamicTappedClass("btn_edit_movie");
    };
    $scope.editMovie = function(movie){ 
        $scope.panel = 2;
        $scope.movie = movie;
        $scope.loader = true;

        $(".rt-result-list").hide();
        $(".rt-movie-detail").fadeIn(500);

        $('.pagination-content').fadeOut(300);

        $scope.listAvis = '';
        var tempList = GetAppService.getMovieAvisAll($scope);   
        $timeout(function(){ $scope.$apply(function(){
            $('.panel-movie-list').translate3d(
                { x: '-100%', y: '0px', z: '0px'},
                true,
                500,
                function(){
                    $('.pagination-content').fadeOut(300);
                }
            );


            $scope.loader = false;
            $('.panel-movie-detail').translate3d(
                { x: 0, y: 0, z: 0},
                false,
                500,
                function(){

                }
            );
        });}, 150);
    };
    $scope.getPage = function(){
        $scope.beginItems = (($scope.currentPage - 1) * $scope.itemsPerPage);
    };
        
  $scope.pageChanged = function() {
    $scope.getPage(); 
    $scope.searchMovie($scope.filtered,false);
  };
}


///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
//                                                                   //
//                      NAV CONTROLLER                               //
//                                                                   //
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

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
    };
}