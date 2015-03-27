function listCtrl($scope,GetAppService,$timeout){
	/******************************************************/
	/* GENERAL                                            */
	/******************************************************/
	$scope.panel = 0;
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
		}
		else if(panel ==1){
			$(".view").css("overflow-x","hidden");
			$scope.panel=0;
			$(".rt-general").hide();
			$(".rt-filter-list").fadeIn(500);
		}
	}
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

	/******************************************************/
	/* RECHERCHE / FILTRES                                */
	/******************************************************/	
	$scope.populateTypeMovie = function(){
		$scope.listFilter = "";
		var tempList = GetAppService.getFilters($scope);
	}
	$scope.selectFilter = function(filterId,filterType){
		var htmlFilter = filterType + '&nbsp;<span class="caret"></span>';
		$(".hf-filter-type-id").val(filterId);
		$(".filter-type").html(htmlFilter);
	}
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
    }
    //Recherche de films par rapport aux filtres
    $scope.filterMovie = function(){
    	var title = $(".filter-title").val();
    	var idType = $(".hf-filter-type-id").val();
    	if(title != "" && idType != null && idType != undefined){
    		alert('filtre');
    	}
    }
    //Recherche de tous les films
    $scope.searchMovie = function(){
    	$scope.panel=1;
    	$(".rt-general").hide();
    	$(".rt-result-list").fadeIn(500);
    	$scope.listMovies = "";
		var tempList = GetAppService.getAllList($scope);
		$timeout(function(){ $scope.$apply(function(){
        });}, 100);
    }
    /******************************************************/
	/* LISTE DE FILMS                                     */
	/******************************************************/
	$scope.expand = function(e){
		$elem = $(e.currentTarget);
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

		//Agrandissement du contenu
		$elem.addClass('ra_list_movies').siblings().removeClass('ra_list_movies');
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

		//Ajout de la classe tapped sur le bouton
		addDynamicTappedClass("btn_edit_movie");
	}
	$scope.editMovie = function(idMovie){
		alert(idMovie);
	}
}