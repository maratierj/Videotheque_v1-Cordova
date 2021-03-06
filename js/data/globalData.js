///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
//                                                                   //
//                         IMPORT DATA                               //
//                                                                   //
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
function addData(){
	db = window.openDatabase("Videotheque_v1","1.0","Videotheque database",200000);
	db.transaction(addDataAction,function(){
		//log
		$(".loader").hide();
		alert('error addData');
	},function(){
		if($(".ok-data").hasClass('status-disabled')){
			$(".ok-data").removeClass('status-disabled')
		}
		if(!$(".notok-data").hasClass('status-disabled')){
			$(".notok-data").addClass('status-disabled')
		}
		if($('.btn-data-delete').hasClass('btn-data-delete-disabled')){
			$('.btn-data-delete').removeClass('btn-data-delete-disabled');	
		}
		if(!$('.btn-data-import').hasClass('btn-data-import-disabled')){
			$('.btn-data-import').addClass('btn-data-import-disabled');	
		}	
		$(".loader").hide();	
	});
}
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
function addDataAction(tx){	
	//movie_typeavis
	tx.executeSql("INSERT INTO movie_typeavis(name)VALUES('Effets spéciaux')");
	tx.executeSql("INSERT INTO movie_typeavis(name)VALUES('Scénario')");
	tx.executeSql("INSERT INTO movie_typeavis(name)VALUES('Action')");

	//TEST sur is_pret
	//movie
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(1,1,0,'L''affaire pélican')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(2,2,1,'Adicted to love')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(3,3,1,'Amours troubles')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(4,4,0,'Fourmiz')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(5,5,0,'Allumeuses')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(6,6,1,'Amours sans préavis')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(7,7,0,'Alexandre')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(8,8,0,'L''associé du diable')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(9,9,0,'X-files')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(10,10,0,'Pirate des caraibes 2')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(11,11,0,'Ghost in the shell 2')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(12,12,0,'Stargate')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(13,13,0,'Arsène lupin')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(14,14,0,'Star trek premier contact')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(15,15,0,'Troie')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(16,16,0,'American history X')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(17,17,0,'Alien VS predator')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(18,18,0,'Aliens')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(19,19,0,'Pirates des caraibes')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(20,20,0,'Amicalement votre part 5')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(21,21,0,'Albator 84 le film')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(22,22,0,'Amicalement votre part 7')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(23,23,0,'Amicalement votre part 1')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(24,24,0,'Amicalement votre part 4')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(25,25,0,'Amicalement votre part 2')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(26,26,0,'Amicalement votre part 3')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(27,27,0,'Amicalement votre part 6')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(28,28,0,'American beauty')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(29,29,0,'Vaillant')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(30,30,0,'Abyss')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(31,31,0,'Anthony Kavanagh')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(32,32,0,'Les indestructibles')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(33,33,0,'Gang de requins ')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(34,34,0,'Brice de nice')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(35,35,0,'Le bazar de l''épouvante')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(36,36,0,'Horton')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(37,37,0,'Braquage à l''italienne')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(38,38,0,'Le baiser mortel du dragon')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(39,39,0,'Battle royale')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(40,40,0,'Bruce tout puissant')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(41,41,0,'Le boulet')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(42,42,0,'Bigar des animaux et des hommes part 2')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(43,43,0,'Bigar des animaux et des hommes part 1')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(44,44,0,'Bad boys 2')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(45,45,0,'Big fish')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(46,46,0,'Blade trinity')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(47,47,0,'Batman return')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(48,48,0,'Benjamin gates')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(49,49,0,'Blade')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(50,50,0,'Big hit')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(51,51,0,'Blue berry')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(52,52,0,'Blade 2')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(53,53,0,'Le jour d''après')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(54,54,0,'Beyond reanimator')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(55,55,0,'Burst Angel part 8')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(56,56,0,'Burst Angel part 5')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(57,57,0,'Burst Angel part 6')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(58,58,0,'Batman begins')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(59,59,0,'Beetlejuice')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(60,60,0,'Burst Angel part 7')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(61,61,0,'Battle royale 2')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(62,62,0,'Cobra vol 1')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(63,63,0,'Braveheart')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(64,64,0,'Cobra vol 2')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(65,65,0,'Le chocolat')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(66,66,0,'Cobra vol 3')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(67,67,0,'The commitments')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(68,68,0,'La cité de la peur')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(69,69,0,'Le caméléon saison 2 (1-12)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(70,70,0,'')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(71,71,0,'Cœur de dragon')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(72,72,0,'Le jeu de la vérité')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(73,73,0,'Le caméléon saison 2 (13-22)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(74,74,0,'')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(75,75,0,'Couple de star')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(76,76,0,'Ce que veulent les femmes')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(77,77,0,'Coup de foudre à Nothing Hill')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(78,78,0,'Les choristes')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(79,79,0,'Calme blanc')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(80,80,0,'Maléfique')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(81,81,0,'Outlander')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(82,82,0,'Outlander')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(83,83,0,'Babylon A.D')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(84,84,0,'Calculs meurtriers')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(85,85,0,'Cellular')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(86,86,0,'Le convoyeur')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(87,87,0,'Un crime dans la tête')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(88,88,0,'Reanimator')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(89,89,0,'Cube 2')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(90,90,0,'Couvre feu')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(91,91,0,'Contact')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(92,92,0,'The crow 2')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(93,93,0,'Cobra vol 5')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(94,94,0,'Master and commander')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(95,95,0,'Chevaliers')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(96,96,0,'Catwoman')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(97,97,0,'Daredevil')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(98,98,0,'Cobra vol 4')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(99,99,0,'Danse avec les loups')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(100 ,100 ,0,'Prince des ténèbres')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(101 ,101 ,0,'Dead birds')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(102 ,102 ,0,'Le diamant du nil')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(103 ,103 ,0,'Dany boon au bataclan')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(104 ,104 ,0,'Dark angel ép 1-2')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(105 ,105 ,0,'Dodge ball')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(106 ,106 ,0,'Le dernier samourai')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(107 ,107 ,0,'Darkness falls')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(108 ,108 ,0,'Hypnose')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(109 ,109 ,0,'Wicked little thing')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(110 ,110 ,0,'Les disparues')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(111 ,111 ,0,'Dark blue')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(112 ,112 ,0,'Desperado 2')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(113 ,113 ,0,'Duel')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(114 ,114 ,0,'Dark city')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(115 ,115 ,0,'Double zero')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(116 ,116 ,0,'Alien 3')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(117 ,117 ,0,'Event horizon')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(118 ,118 ,0,'Atlantide')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(119 ,119 ,0,'Le 13ème guerrier')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(120 ,120 ,0,'Gladiator')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(121 ,121 ,0,'L''empire des loups')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(122 ,122 ,0,'Mystic river')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(123 ,123 ,0,'Ennemi d''état')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(124 ,124 ,0,'Star trek 1')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(125 ,125 ,0,'Le chien des baskervilles')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(126 ,126 ,0,'Elektra')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(127 ,127 ,0,'Star trek nemesis')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(128 ,128 ,0,'Les experts las vegas saison 3 (15-23)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(129 ,129 ,0,'Les experts las vegas saison 2 (15-23)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(130 ,130 ,0,'Existenz')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(131 ,131 ,0,'Les experts las vegas saison 3 (1-14)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(132 ,132 ,0,'Les experts las vegas saison 5 (1-12)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(133 ,133 ,0,'Les experts las vegas saison 5 (14-24)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(134 ,134 ,0,'Kaamelott Livre 1 vol 1')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(135 ,135 ,0,'Planète interdite')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(136 ,136 ,0,'Outland')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(137 ,137 ,0,'Espace détente')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(318 ,318 ,0,'Eternal sunshine')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(139 ,139 ,0,'Evolution')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(140 ,140 ,0,'Elie semoun petites annonces vol 1')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(141 ,141 ,0,'Band of brothers vol 1')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(142 ,142 ,0,'Band of brothers vol 2')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(143 ,143 ,0,'Band of brothers vol 3')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(144 ,144 ,0,'Band of brothers vol 4')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(145 ,145 ,0,'Band of brothers vol 5')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(146 ,146 ,0,'Le flic de beverly hills')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(147 ,147 ,0,'Fast n'' furious')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(148 ,148 ,0,'Le flic de beverly hills 3')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(149 ,149 ,0,'Alien 4')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(150 ,150 ,0,'Le flic de beverly hills 2')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(151 ,151 ,0,'Benjamin gates 2')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(152 ,152 ,0,'Fight club')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(153 ,153 ,0,'2 fast and 2 furious')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(154 ,154 ,0,'Le fugitif')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(155 ,155 ,0,'Final cut')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(156 ,156 ,0,'Fréquence interdite')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(157 ,157 ,0,'Fenêtre secrète')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(158 ,158 ,0,'Fantome contre fantome')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(159 ,159 ,0,'La guerre des roses')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(160 ,160 ,0,'The game')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(161 ,161 ,0,'Kung fu panda')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(162 ,162 ,0,'Constantine')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(163 ,163 ,0,'Doom')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(164 ,164 ,0,'The girl next door')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(165 ,165 ,0,'La gorge du diable')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(166 ,166 ,0,'Gothika')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(167 ,167 ,0,'I.Robot')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(168 ,168 ,0,'The grudge')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(169 ,169 ,0,'XXX')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(170 ,170 ,0,'Hard cash')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(171 ,171 ,0,'Hannibal')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(172 ,172 ,0,'Collateral')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(173 ,173 ,0,'Hollywood homicide')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(174 ,174 ,0,'Le monde de nemo')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(175 ,175 ,0,'Hulk')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(176 ,176 ,0,'Hollow man')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(177 ,177 ,0,'The island')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(178 ,178 ,0,'Ils se sont aimés')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(179 ,179 ,0,'Ils s''aiment')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(180 ,180 ,0,'Il était une fois dans l''ouest')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(181 ,181 ,0,'Intolérable cruauté')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(182 ,182 ,0,'Jurassic park 2')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(183 ,183 ,0,'Instincts meurtriers')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(184 ,184 ,0,'In the cut')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(185 ,185 ,0,'Identity')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(186 ,186 ,0,'Un fauteuil pour deux')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(187 ,187 ,0,'Independance day')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(188 ,188 ,0,'Immortel')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(189 ,189 ,0,'Indiana jones 1')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(190 ,190 ,0,'indiana jones 2')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(191 ,191 ,0,'indiana jones 3')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(192 ,192 ,0,'Les incorruptibles')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(193 ,193 ,0,'Jurassic park')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(194 ,194 ,0,'Jurassic park 3')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(195 ,195 ,0,'Père et flic')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(196 ,196 ,0,'Judge dredd')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(197 ,197 ,0,'Jamel 100% Debouze')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(198 ,198 ,0,'Jeux d''enfants')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(199 ,199 ,0,'L''âge de glace')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(200 ,200 ,0,'John Q')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(201 ,201 ,0,'Le règne du feu')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(202 ,202 ,0,'Jean michel jarre Aero')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(203 ,203 ,0,'Johnny english')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(204 ,204 ,0,'Poltergheist')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(205 ,205 ,0,'Kolobos')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(206 ,206 ,0,'Kingdomof heaven')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(207 ,207 ,0,'Kill bill vol 1')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(208 ,208 ,0,'Kill bill vol 2')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(209 ,209 ,0,'Pas un mot')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(210 ,210 ,0,'Léon')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(211 ,211 ,0,'Laurent Gerra')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(212 ,212 ,0,'Last action hero')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(123 ,123 ,0,'Lost in translation')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(214 ,214 ,0,'Love actually')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(215 ,215 ,0,'Légendes d''automne')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(216 ,216 ,0,'La ligne verte')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(217 ,217 ,0,'La légende de zorro')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(218 ,218 ,0,'Minuit dans le jardin du bien et du mal')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(219 ,219 ,0,'Mon nom est personne')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(220 ,220 ,0,'Le masque de zorro')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(221 ,221 ,0,'Les experts las vegas saison 2 (1-14)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(222 ,222 ,0,'Man on fire')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(223 ,223 ,0,'La mort dans la peau')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(224 ,224 ,0,'La mémoire dans la peau')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(225 ,225 ,0,'Le maitre du jeu')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(226 ,226 ,0,'Matrix')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(227 ,227 ,0,'Matrix reloaded')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(228 ,228 ,0,'Matrix revolution')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(229 ,229 ,0,'Le proviseur')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(230 ,230 ,0,'La momie')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(231 ,231 ,0,'Mulholland drive')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(232 ,232 ,0,'Furtif')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(233 ,233 ,0,'Shade')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(234 ,234 ,0,'Le meilleur de magnum vol 1')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(235 ,235 ,0,'Le meilleur de magnum vol 2')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(236 ,236 ,0,'La vie de david gale')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(237 ,237 ,0,'Men in black 2')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(238 ,238 ,0,'Mariages')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(239 ,239 ,0,'Mensonges et trahison')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(240 ,240 ,0,'Mon voisin le tueur 2')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(241 ,241 ,0,'Le meilleur de courtemanche')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(242 ,242 ,0,'Jean michel jarre live à Pekin')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(243 ,243 ,0,'Highwaymen')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(244 ,244 ,0,'La mutante')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(245 ,245 ,0,'La mutante 2')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(246 ,246 ,0,'Et au milieu coule une rivière')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(247 ,247 ,0,'Minority report')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(248 ,248 ,0,'Les nuits avec mon ennemi')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(249 ,249 ,0,'Une nuit en enfer')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(250 ,250 ,0,'La 9ème porte')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(251 ,251 ,0,'Le nom de la rose')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(252 ,252 ,0,'Rah-xephon vol 6')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(253 ,253 ,0,'Ong bak')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(254 ,254 ,0,'Ocean''s twelve')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(255 ,255 ,0,'Ocean''s eleven')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(256 ,256 ,0,'Podium')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(257 ,257 ,0,'Planète interdite')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(258 ,258 ,0,'Père et fille')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(259 ,259 ,0,'Paycheck')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(260 ,260 ,0,'Le roi arthur')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(261 ,261 ,0,'Pearl harbor')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(262 ,262 ,0,'36 quai des orfèvres')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(263 ,263 ,0,'Phone game')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(264 ,264 ,0,'Les 7 mercenaires')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(265 ,265 ,0,'40 jours 40 nuits')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(266 ,266 ,0,'Perdu dans l''espace')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(267 ,267 ,0,'Le punisher')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(268 ,268 ,0,'13 fantomes')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(269 ,269 ,0,'Les prisoniers du temps')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(270 ,270 ,0,'La planète aux trésors')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(271 ,271 ,0,'Les 4 fantastiques')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(272 ,272 ,0,'Predator 2')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(273 ,273 ,0,'La planète des singes (original)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(274 ,274 ,0,'24 saison 3 (12-24)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(275 ,275 ,0,'24 saison 3 (1-12)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(276 ,276 ,0,'Pierre Desproges au théatre grévin 1984')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(277 ,277 ,0,'A la poursuite du diamant vert')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(278 ,278 ,0,'Piège de cristal')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(279 ,279 ,0,'Un poisson nommé wanda')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(280 ,280 ,0,'La planète des singes')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(281 ,281 ,0,'Quand harry rencontre sally')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(282 ,282 ,0,'Le retour de la momie')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(283 ,283 ,0,'Le pic de dante')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(284 ,284 ,0,'Robocop')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(285 ,285 ,0,'Robin des bois')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(286 ,286 ,0,'24 saison 1 (13-24)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(287 ,287 ,0,'RRRrrr!!!')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(288 ,288 ,0,'Le retour des morts vivants 3')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(289 ,289 ,0,'24 saison 4 (1-12)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(290 ,290 ,0,'58 minutes pour vivre')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(291 ,291 ,0,'Les rivières pourpres')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(292 ,292 ,0,'Les rivières pourpres 2')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(293 ,293 ,0,'24 saison 1 (1-12)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(294 ,294 ,0,'Le roi scorpion')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(295 ,295 ,0,'La recrue')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(296 ,296 ,0,'Retour vers le futur')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(297 ,297 ,0,'Retour vers le futur 2')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(298 ,298 ,0,'Retour vers le futur 3')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(299 ,299 ,0,'30 ans sinon rien')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(300 ,300 ,0,'Requiem for a dream')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(301 ,301 ,0,'So close')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(302 ,302 ,0,'Les sentiers de la perdition')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(303 ,303 ,0,'24 saison 4 (13-24)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(304 ,304 ,0,'Stranger than fiction')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(305 ,305 ,0,'X-men 1.5')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(306 ,306 ,0,'Spy game')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(307 ,307 ,0,'Young guns 2')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(308 ,308 ,0,'X-men 2')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(309 ,309 ,0,'Saw')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(310 ,310 ,0,'Spiderman 2')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(311 ,311 ,0,'X-1999')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(312 ,312 ,0,'Sex academy')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(313 ,313 ,0,'Wargames')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(314 ,314 ,0,'Scrubs saison 3')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(315 ,315 ,0,'Scrubs saison 1')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(316 ,316 ,0,'Solaris')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(317 ,317 ,0,'Scrubs saison 2 (1-22)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(318 ,318 ,0,'Wonderfull day')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(319 ,319 ,0,'Scary movie 3')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(320 ,320 ,0,'Spaceball')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(321 ,321 ,0,'Super size me')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(322 ,322 ,0,'Une soirée parfaite')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(323 ,323 ,0,'Very bad thing')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(324 ,324 ,0,'Saint ange')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(325 ,325 ,0,'Usual suspect')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(326 ,326 ,0,'Spartan')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(327 ,327 ,0,'Le sourire de mona lisa')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(328 ,328 ,0,'Shrek')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(329 ,329 ,0,'Spiderman')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(330 ,330 ,0,'Sin city')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(331 ,331 ,0,'Supermind vol 2')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(332 ,332 ,0,'Le secret de la pyramide')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(333 ,333 ,0,'Le vol du phoenix')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(334 ,334 ,0,'Slider saison 1(1-10) saison 2 (1-2)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(335 ,335 ,0,'Slider saison 2 (3-13) saison 3 (1)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(336 ,336 ,0,'Slider saison 3 (3-13) Supercopter (pilote)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(337 ,337 ,0,'Supermind vol 2')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(338 ,338 ,0,'S.W.A.T')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(339 ,339 ,0,'True lies')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(340 ,340 ,0,'The truman show')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(341 ,341 ,0,'Tonerre de feu')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(342 ,342 ,0,'True lies')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(343 ,343 ,0,'La tour infernale')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(344 ,344 ,0,'Total recall')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(345 ,345 ,0,'Timecop')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(346 ,346 ,0,'Un jour sans fin')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(347 ,347 ,0,'Le terminal')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(348 ,348 ,0,'Le transporteur 2')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(349 ,349 ,0,'Vanilla sky')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(350 ,350 ,0,'Le transporteur')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(351 ,351 ,0,'Tais toi')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(352 ,352 ,0,'Torque')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(353 ,353 ,0,'Taking live')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(354 ,354 ,0,'Le trou noir')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(355 ,355 ,0,'Undead')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(356 ,356 ,0,'U-boat')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(357 ,357 ,0,'Wonderland')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(358 ,358 ,0,'Le village')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(359 ,359 ,0,'Voyage au centre de la terre (original)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(360 ,360 ,0,'Van helsing')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(361 ,361 ,0,'Warlock 2 armageddon')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(362 ,362 ,0,'Willow')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(363 ,363 ,0,'The substitute')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(364 ,364 ,0,'Danny boon la vie de chantier')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(365 ,365 ,0,'Les sorcières d''eastwick')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(366 ,366 ,0,'Mr and Mrs smith')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(367 ,367 ,0,'Dinosaures')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(368 ,368 ,0,'Madagascar')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(369 ,369 ,0,'Resident evil degeneration')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(370 ,370 ,0,'Les chroniques de riddick')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(371 ,371 ,0,'1001 pattes')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(372 ,372 ,0,'Robots')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(373 ,373 ,0,'Le vaisseau de l''angoisse')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(374 ,374 ,0,'Armageddon')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(375 ,375 ,0,'L''antre de la folie')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(376 ,376 ,0,'Tron')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(377 ,377 ,0,'Starsky et hutch')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(378 ,378 ,0,'Agents secrets')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(379 ,379 ,0,'Balistic')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(380 ,380 ,0,'La somme de toutes les peurs')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(381 ,381 ,0,'Broken arrow')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(382 ,382 ,0,'Kaamelott livre 2 (1-100)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(383 ,383 ,0,'Les dents de la nuit')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(384 ,384 ,0,'Kaamelott livre 3 (1-50)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(385 ,385 ,0,'Dr house saison 1 (1-15)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(386 ,386 ,0,'Rah-xephon vol 1')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(387 ,387 ,0,'Ma vie en l''air')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(388 ,388 ,0,'Les dents de la nuit')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(389 ,389 ,0,'300')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(390 ,389 ,0,'Hero corp saison 1(1-15)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(391 ,389 ,0,'L''incroyable vérité')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(392 ,390 ,0,'Drag me to hell')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(393 ,390 ,0,'G force')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(394 ,390 ,0,'Mirrors')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(395 ,390 ,0,'The uninvited')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(396 ,390 ,0,'Watchmen part 1')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(397 ,390 ,0,'Watchmen part 2')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(398 ,391 ,0,'28 jours plus tard')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(399 ,391 ,0,'30 jours de nuit')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(400 ,391 ,0,'Chambre 1408')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(401 ,391 ,0,'Ne le dit à personne')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(402 ,391 ,0,'Indiana jones 4')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(403 ,392 ,0,'Gran torino')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(404 ,392 ,0,'Horsemen')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(405 ,392 ,0,'L''age de glace 3')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(406 ,392 ,0,'In the electric mist')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(407 ,392 ,0,'Transformers 2 part 1')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(408 ,392 ,0,'Transformers 2 part 2')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(409 ,393 ,0,'2012 part 1')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(410 ,393 ,0,'2012 part 2')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(411 ,393 ,0,'Hero corp saison 2 (1-11)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(412 ,393 ,0,'Clones')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(413 ,394 ,0,'Dexter saison 4 (9-12)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(414 ,394 ,0,'Heroes saison 4 (1-6)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(415 ,395 ,0,'Dexter saison 4 (1-8)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(416 ,396 ,0,'L''effet papillon 2')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(417 ,397 ,0,'Rah xephon vol 4')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(418 ,398 ,0,'Rah xephon vol 3')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(419 ,399 ,0,'Rah xephon vol 2')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(420 ,400 ,0,'Rah xephon vol 6')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(421 ,401 ,0,'Rah xephon vol 5')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(422 ,402 ,0,'Gad elmaleh l''autre c''est toi')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(423 ,403 ,0,'Asterix aux jeux olympiques')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(424 ,403 ,0,'Batman dark night')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(425 ,403 ,0,'Dangereuse séduction')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(426 ,403 ,0,'Hancock')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(427 ,403 ,0,'Hellboy 2')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(428 ,403 ,0,'La momie 3')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(429 ,404 ,0,'Assaut sur le central 13')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(430 ,405 ,0,'Men in black')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(431 ,406 ,0,'Les experts miami saison 1 (1-12)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(432 ,407 ,0,'Hellboy')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(433 ,408 ,0,'Les experts miami saison 1 (13-24)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(434 ,409 ,0,'Vous avez un message')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(435 ,410 ,0,'L''effet papillon')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(436 ,411 ,0,'Dommage collatéral')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(437 ,412 ,0,'Evangelion vol 5 (15-17)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(438 ,413 ,0,'Evangelion vol 4 (12-14)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(439 ,414 ,0,'Evangelion vol 2 (5-8)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(440 ,415 ,0,'Evangelion vol 3 (9-11)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(441 ,416 ,0,'The end of evangelion')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(442 ,417 ,0,'Evangelion death and rebirth')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(443 ,418 ,0,'Evangelion vol 1 (1-4)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(444 ,419 ,0,'Evangelion vol 7 (21-23)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(445 ,420 ,0,'Evangelion vol 6 (18-20)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(446 ,421 ,0,'Evangelion vol 8 (24-26)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(447 ,422 ,0,'X-files saison 6')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(448 ,423 ,0,'L''année des guignols 2004')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(449 ,424 ,0,'Society')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(450 ,425 ,0,'Alien')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(451 ,426 ,0,'Kaamelott livre 1 vol 2')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(452 ,427 ,0,'Final fantasy VII Advent children')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(453 ,428 ,0,'RTT')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(454 ,428 ,0,'Sherlock holmes')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(455 ,428 ,0,'Shutter island part 1')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(456 ,428 ,0,'Shutter island part 2')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(457 ,428 ,0,'L''incroyable vérité')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(458 ,429 ,0,'Heroes saison 3 (1-12)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(459 ,430 ,0,'Heroes saison 3 (13-24)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(460 ,431 ,0,'Daybreakers')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(461 ,431 ,0,'Edge of darkness')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(462 ,431 ,0,'Heroes saison 3 (25)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(463 ,431 ,0,'Law adibing citizen')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(464 ,431 ,0,'Paranormal activity')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(465 ,431 ,0,'V 2009 (1-3)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(466 ,432 ,0,'Cloverfield')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(467 ,432 ,0,'V (1-5)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(468 ,433 ,0,'G.I joe')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(469 ,433 ,0,'Humains')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(470 ,433 ,0,'James bond quantum of solace')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(471 ,433 ,0,'Push')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(472 ,433 ,0,'Ratatouille')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(473 ,433 ,0,'Southland tales')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(474 ,434 ,0,'Star trek 2009 part 1')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(475 ,434 ,0,'Star trek 2009 part 2')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(476 ,434 ,0,'Star trek 2')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(477 ,434 ,0,'Star trek 3')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(478 ,434 ,0,'Star trek insurection')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(479 ,434 ,0,'Star trek 5')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(480 ,435 ,0,'Surrogates')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(481 ,435 ,0,'Taken')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(482 ,435 ,0,'Terminator Renaissance')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(483 ,435 ,0,'The relic')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(484 ,435 ,0,'Les simpsons le film')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(485 ,436 ,0,'Spiderman 3')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(486 ,436 ,0,'Star trek generation')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(487 ,436 ,0,'Star wars clone wars saison 1 (1-7)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(488 ,436 ,0,'Star wars clone wars le film')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(489 ,437 ,0,'L''expérience interdite')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(490 ,437 ,0,'Pandorum')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(491 ,437 ,0,'Quarantaine')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(492 ,437 ,0,'Resident evil extinction')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(493 ,437 ,0,'Resident evil apocalypse')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(494 ,437 ,0,'Retour à la maison de l''horreur')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(495 ,438 ,0,'Appleseed ex machina')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(496 ,438 ,0,'Appleseed')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(497 ,438 ,0,'Awake')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(498 ,438 ,0,'Bee_cool')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(499 ,438 ,0,'Bee_movie')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(500 ,438 ,0,'Halloween 7 20 ans après')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(501 ,439 ,0,'99F')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(502 ,439 ,0,'Casino royale')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(503 ,439 ,0,'Christine')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(504 ,439 ,0,'Dead like me')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(505 ,439 ,0,'Evan tout puissant')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(506 ,439 ,0,'Evil dead 1')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(507 ,440 ,0,'Les 4 fantastiques et le surfeur d''argent')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(508 ,440 ,0,'From within')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(509 ,440 ,0,'Hancock')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(510 ,440 ,0,'Harry Potter and the half blood prince part 1')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(511 ,440 ,0,'Harry Potter and the half blood prince part 2')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(512 ,440 ,0,'Harry Potter et l''ordre du phoenix')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(513 ,441 ,0,'Je suis une légende part 1')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(514 ,441 ,0,'Je suis une légende part 2')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(515 ,441 ,0,'James bond quantum of solace')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(516 ,441 ,0,'Jumper')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(517 ,441 ,0,'L''incroyable hulk')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(518 ,442 ,0,'La guerre des mondes')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(519 ,442 ,0,'La maison de l''horreur')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(520 ,442 ,0,'La vengeance dans la peau')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(521 ,442 ,0,'L''age de glace 2')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(522 ,442 ,0,'Le monde de narnia chapitre 2')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(523 ,443 ,0,'Jean michel jarre concert en chine 1981')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(524 ,443 ,0,'Le petit nicolas')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(525 ,443 ,0,'Legion')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(526 ,443 ,0,'Lucky luke')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(527 ,443 ,0,'Nimitz retour vers l''enfer')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(528 ,443 ,0,'Ocean''s thirteen')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(529 ,444 ,0,'Patrick Rondat méthode 1')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(530 ,444 ,0,'Patrick Rondat exercices')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(531 ,444 ,0,'Pulp fiction part 1')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(532 ,444 ,0,'Pulp fiction part 2')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(533 ,444 ,0,'Push')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(534 ,444 ,0,'Shrooms')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(535 ,444 ,0,'The hitcher')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(536 ,445 ,0,'La proposition')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(537 ,445 ,0,'Transporter 3')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(538 ,445 ,0,'Twilight chapitre 1')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(539 ,445 ,0,'Twilight chapitre 2')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(540 ,445 ,0,'Underworld evolution')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(541 ,446 ,0,'Fast n'' furious 4')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(542 ,446 ,0,'Safari')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(543 ,446 ,0,'Les chimpanzés de l''espace')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(544 ,446 ,0,'Star wars the clone war')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(545 ,446 ,0,'Fast n'' furious 3')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(546 ,446 ,0,'Up')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(547 ,447 ,0,'Saint seiya hades (1-13)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(548 ,448 ,0,'Saint seyia Elysion (1-9)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(549 ,448 ,0,'Hitch')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(550 ,448 ,0,'X.Cross')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(551 ,448 ,0,'Zombieland')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(552 ,449 ,0,'Heroes saison 3 (1-12)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(553 ,450 ,0,'Heroes saison 4 (7-18)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(554 ,451 ,0,'Dr house saison 4 (1-13)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(555 ,452 ,0,'Dr house saison 4 (14-16-) saison 5 (1-9)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(556 ,453 ,0,'Dr house saison 5 (10-19)saison 6 (1-2)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(557 ,454 ,0,'Dr house saison 6 (3-14)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(558 ,455 ,0,'Scrubs saison 5 (1-24)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(559 ,456 ,0,'Scrubs saison 6 (1-22) saison 7 (1-2)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(560 ,457 ,0,'100 girls')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(561 ,457 ,0,'Mais qui a tué pamela rose')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(562 ,457 ,0,'Qui veut la peau de roger rabbit')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(563 ,457 ,0,'Scrubs saison 7 (3-11)')");
	tx.executeSql("INSERT INTO movie(num_movie,nb_disc,is_pret,title)VALUES(564 ,457 ,0,'Shrek 3')");


	//movie_typemovies
	tx.executeSql("INSERT INTO movie_typemovies(type)VALUES('Science fiction')");
	tx.executeSql("INSERT INTO movie_typemovies(type)VALUES('Heroic fantasy')");
	tx.executeSql("INSERT INTO movie_typemovies(type)VALUES('Thriller')");
	tx.executeSql("INSERT INTO movie_typemovies(type)VALUES('Fantastique')");
	tx.executeSql("INSERT INTO movie_typemovies(type)VALUES('Comédie')");
	tx.executeSql("INSERT INTO movie_typemovies(type)VALUES('Drame')");
	tx.executeSql("INSERT INTO movie_typemovies(type)VALUES('Animation')");
	tx.executeSql("INSERT INTO movie_typemovies(type)VALUES('Série')");


	//TEST
	tx.executeSql("UPDATE movie SET pret_id = 3 WHERE id = 2");
	tx.executeSql("UPDATE movie SET pret_id = 3 WHERE id = 3");
	tx.executeSql("UPDATE movie SET pret_id = 3 WHERE id = 6");

	tx.executeSql("INSERT INTO movie_typemovie(movie_id,type_movie_id)VALUES(1,1)");
	tx.executeSql("INSERT INTO movie_typemovie(movie_id,type_movie_id)VALUES(2,2)");
	tx.executeSql("INSERT INTO movie_typemovie(movie_id,type_movie_id)VALUES(3,3)");
	tx.executeSql("INSERT INTO movie_typemovie(movie_id,type_movie_id)VALUES(4,4)");
	tx.executeSql("INSERT INTO movie_typemovie(movie_id,type_movie_id)VALUES(5,5)");
	tx.executeSql("INSERT INTO movie_typemovie(movie_id,type_movie_id)VALUES(6,6)");
	tx.executeSql("INSERT INTO movie_typemovie(movie_id,type_movie_id)VALUES(7,7)");

	tx.executeSql("INSERT INTO movie_pret(lastname,firstname,is_pret)VALUES('Lebras','François',0)");
	tx.executeSql("INSERT INTO movie_pret(lastname,firstname,is_pret)VALUES('Maratier','Michel',0)");
	tx.executeSql("INSERT INTO movie_pret(lastname,firstname,is_pret)VALUES('Ménard','Martial',1)");
	tx.executeSql("INSERT INTO movie_pret(lastname,firstname,is_pret)VALUES('Maratier','Mathieu',0)");

	tx.executeSql("INSERT INTO movie_rate(movie_id,rate,type_avis_id)VALUES(1,7,1)");
	tx.executeSql("INSERT INTO movie_rate(movie_id,rate,type_avis_id)VALUES(1,3,2)");
	tx.executeSql("INSERT INTO movie_rate(movie_id,rate,type_avis_id)VALUES(1,8,3)");
	tx.executeSql("INSERT INTO movie_rate(movie_id,rate,type_avis_id)VALUES(2,1,1)");
	tx.executeSql("INSERT INTO movie_rate(movie_id,rate,type_avis_id)VALUES(2,2,3)");
	tx.executeSql("INSERT INTO movie_rate(movie_id,rate,type_avis_id)VALUES(3,5,3)");
	tx.executeSql("INSERT INTO movie_rate(movie_id,rate,type_avis_id)VALUES(4,5,1)");
	tx.executeSql("INSERT INTO movie_rate(movie_id,rate,type_avis_id)VALUES(4,5,2)");
	tx.executeSql("INSERT INTO movie_rate(movie_id,rate,type_avis_id)VALUES(4,5,3)");
}



///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
//                                                                   //
//                        CREATION BDD                               //
//                                                                   //
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
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




///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
//                                                                   //
//                    FILTRE DES FILMS                               //
//                                                                   //
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
function populateFilterTypeMovie($scope){
	//Récupère la liste des types de films
	db = window.openDatabase("Videotheque_v1","1.0","Videotheque database",200000);	
	db.transaction(function(tx){
		tx.executeSql("SELECT * FROM movie_typemovies ORDER BY type;",[],function(tx,response){
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
	var sql = '';
	if($scope.filtered){
		if($scope.typeMovieId == 0){
			sql = "SELECT movie.id AS id,movie.pret_id AS pret_id," + 
					"movie.title AS title,movie.num_movie AS num_movie," +
					"movie.nb_disc AS nb_disc,movie.is_pret AS is_pret," + 
					"movie.date_maj AS date_maj,typemovies.type AS type," + 
					"pret.lastname AS lastname,pret.firstname AS firstname,typemovie.type_movie_id AS type_movie_id," +
					"(round((SELECT SUM(rate * 1.0) FROM movie_rate WHERE movie_id = movie.id) / (SELECT count(*) FROM movie_typeavis))) AS round_rate," +
					"(SELECT COUNT(*) FROM (SELECT movie.id AS id,movie.pret_id AS pret_id," + 
					"movie.title AS title,movie.num_movie AS num_movie," +
					"movie.nb_disc AS nb_disc,movie.is_pret AS is_pret," + 
					"movie.date_maj AS date_maj,typemovies.type AS type," + 
					"pret.lastname AS lastname,pret.firstname AS firstname,typemovie.type_movie_id AS type_movie_id," +
					"(round((SELECT SUM(rate * 1.0) FROM movie_rate WHERE movie_id = movie.id) / (SELECT count(*) FROM movie_typeavis))) AS round_rate" +
					" FROM movie movie LEFT JOIN movie_typemovie typemovie ON movie.id = typemovie.movie_id" +
					" LEFT JOIN movie_typemovies typemovies ON typemovies.id = typemovie.type_movie_id " +
					" LEFT JOIN movie_pret pret ON pret.id = movie.pret_id " + 
					" WHERE movie.title LIKE '%" + $scope.titleMovie + "%')) AS count " +
					" FROM movie movie LEFT JOIN movie_typemovie typemovie ON movie.id = typemovie.movie_id" +
					" LEFT JOIN movie_typemovies typemovies ON typemovies.id = typemovie.type_movie_id " +
					" LEFT JOIN movie_pret pret ON pret.id = movie.pret_id " + 
					" WHERE movie.title LIKE '%" + $scope.titleMovie + "%' " +
					" LIMIT " + $scope.beginItems + "," + $scope.itemsPerPage + ";";
		}
		else{
			sql = "SELECT movie.id AS id,movie.pret_id AS pret_id," + 
					"movie.title AS title,movie.num_movie AS num_movie," +
					"movie.nb_disc AS nb_disc,movie.is_pret AS is_pret," + 
					"movie.date_maj AS date_maj,typemovies.type AS type," + 
					"pret.lastname AS lastname,pret.firstname AS firstname,typemovie.type_movie_id AS type_movie_id," +
					"(round((SELECT SUM(rate * 1.0) FROM movie_rate WHERE movie_id = movie.id) / (SELECT count(*) FROM movie_typeavis))) AS round_rate," +
					"(SELECT COUNT(*) FROM (SELECT movie.id AS id,movie.pret_id AS pret_id," + 
					"movie.title AS title,movie.num_movie AS num_movie," +
					"movie.nb_disc AS nb_disc,movie.is_pret AS is_pret," + 
					"movie.date_maj AS date_maj,typemovies.type AS type," + 
					"pret.lastname AS lastname,pret.firstname AS firstname,typemovie.type_movie_id AS type_movie_id," +
					"(round((SELECT SUM(rate * 1.0) FROM movie_rate WHERE movie_id = movie.id) / (SELECT count(*) FROM movie_typeavis))) AS round_rate" +
					" FROM movie movie LEFT JOIN movie_typemovie typemovie ON movie.id = typemovie.movie_id" +
					" LEFT JOIN movie_typemovies typemovies ON typemovies.id = typemovie.type_movie_id " +
					" LEFT JOIN movie_pret pret ON pret.id = movie.pret_id " + 
					" WHERE movie.title LIKE '%" + $scope.titleMovie + "%' AND typemovie.type_movie_id IN (" + $scope.typeMovieId + "))) AS count " +
					" FROM movie movie LEFT JOIN movie_typemovie typemovie ON movie.id = typemovie.movie_id" +
					" LEFT JOIN movie_typemovies typemovies ON typemovies.id = typemovie.type_movie_id " +
					"LEFT JOIN movie_pret pret ON pret.id = movie.pret_id " + 
					" WHERE movie.title LIKE '%" + $scope.titleMovie + "%' " + 
					" AND typemovie.type_movie_id IN (" + $scope.typeMovieId + ")" + 
					" LIMIT " + $scope.beginItems + "," + $scope.itemsPerPage + ";";
		}
	}
	else{
		sql = "SELECT movie.id AS id,movie.pret_id AS pret_id," + 
				"movie.title AS title,movie.num_movie AS num_movie," +
				"movie.nb_disc AS nb_disc,movie.is_pret AS is_pret," + 
				"movie.date_maj AS date_maj,typemovies.type AS type," + 
				"pret.lastname AS lastname,pret.firstname AS firstname,typemovie.type_movie_id AS type_movie_id," +
				"(round((SELECT SUM(rate * 1.0) FROM movie_rate WHERE movie_id = movie.id) / (SELECT count(*) FROM movie_typeavis))) AS round_rate," +
				"(SELECT count(*) FROM movie) AS count " + 
				" FROM movie movie LEFT JOIN movie_typemovie typemovie ON movie.id = typemovie.movie_id" +
				" LEFT JOIN movie_typemovies typemovies ON typemovies.id = typemovie.type_movie_id " +
				"LEFT JOIN movie_pret pret ON pret.id = movie.pret_id LIMIT " + $scope.beginItems + "," + $scope.itemsPerPage + ";";
	}
	db = window.openDatabase("Videotheque_v1","1.0","Videotheque database",200000);	
	db.transaction(function(tx){
		tx.executeSql(sql
		,[],function(tx,response){
			if (response != null && response.rows != null) {
				var newJson = { $resources: [] };
				var nbItems = 0;
				for (var k = 0; k < response.rows.length; k++) {

                    var row = response.rows.item(k);
                    var typeResult = row.type;
                    var typeIdresult = row.type_movie_id;
                    var userFullnameresult = row.firstname + " " + row.lastname;
                    var userIdresult = row.pret_id;

                    if(row.type == null){
                		typeResult = 'Tous';
                		typeIdresult = 0;
                    }
                    if(row.pret_id == null){
                    	userFullnameresult = "Aucun";
                    	userIdresult = 0;
                    }
                    newJson.$resources[k] = { id: row.id ,
                								pret_id: userIdresult,
                								date_maj:row.date_maj,
                								type: typeResult,
                								lastname: row.lastname,
                								firstname: row.firstname,
                								fullname: userFullnameresult,
                								round_rate: row.round_rate,
                								num_movie: row.num_movie,
            									nb_disc: row.nb_disc,
            									is_pret: row.is_pret,
            									title: row.title,
            									type_movie_id : typeIdresult,
            									count: row.count};
					if(nbItems == 0){
						nbItems = row.count;
					}
                }
				$scope.listMovies = newJson;
				$scope.totalItems = nbItems;
				
				$scope.getPage();				
			}
		},function(tx,error){
			//log
			alert('error tableExists')
		});
	});
}

function allMovieAvis($scope){
	//Récupère la liste de tous les avis d'un film
	db = window.openDatabase("Videotheque_v1","1.0","Videotheque database",200000);	
	db.transaction(function(tx){
		tx.executeSql("SELECT movie_typeavis.id,movie_typeavis.name," + 
						"(SELECT rate FROM movie_rate WHERE type_avis_id = movie_typeavis.id AND movie_id = " + $scope.movie.id + ") AS rate " + 
 						"FROM movie_typeavis ORDER BY name;",[],function(tx,response){
			if (response != null && response.rows != null) {
				var newJson = { $resources: [] };
				for (var k = 0; k < response.rows.length; k++) {

                    var row = response.rows.item(k);
                    var resultRate = 0;
                    row.rate == null ? resultRate = 0 : resultRate = row.rate;
                    newJson.$resources[k] = { id: row.id , name: row.name, rate: resultRate, html_id: "stars_" + row.id};
                }
				$scope.listAvis = newJson;
			}
		},function(tx,error){
			//log
			alert('error tableExists')
		});
	});
}

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
//                                                                   //
//                    MODIFICATION D'UN FILMS                        //
//                                                                   //
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

function editField(field,value,movieId,oldUserId){
	var sql = "";
	switch(field){
		case 'title':
			sql="UPDATE movie SET title = '" + value.replace("'","''") + "' WHERE id = " + movieId + " ";
		break;
		case 'numMovie':
			sql="UPDATE movie SET num_movie = " + value + " WHERE id = " + movieId + " ";
		break;
		case 'nbDisc':
			sql="UPDATE movie SET nb_disc = " + value + " WHERE id = " + movieId + " ";
		break;
		case 'type':
			sql="UPDATE movie_typemovie SET type_movie_id = " + value + " WHERE movie_id = " + movieId + " ";
		break;
		case 'pret':
			if(value == 0){
				sql="UPDATE movie SET pret_id = NULL, is_pret = 0 WHERE id = " + movieId + " ";
			}
			else{
				sql="UPDATE movie SET pret_id = " + value + ", is_pret = 1 WHERE id = " + movieId + " ";
			}
			
		break;
	}
	if(field == 'pret'){
		db = window.openDatabase("Videotheque_v1","1.0","Videotheque database",200000);	
		db.transaction(function(tx){
			tx.executeSql("SELECT COUNT(*) AS result FROM movie WHERE pret_id = " + value + ";",[],function(tx,response){
				//Si aucun film n'est attribué à l'utilisateur alors on est forcément dans le cas d'un ajout
				if(response.rows.item(0).result == 0){
					db.transaction(function(tx){								
						tx.executeSql("UPDATE movie_pret SET is_pret = 1 WHERE id = " + value + ";",[],function(tx,response){
							//Une fois fait il faut vérifier la modification à apporter dans le cas ou il y avait un autre utilisateur avant
							if(oldUserId != 0){															
								db.transaction(function(tx){tx.executeSql("SELECT COUNT(*) AS result FROM movie WHERE pret_id = " + oldUserId + "",[],function(tx,response){
									if(response.rows.item(0).result == 1){
										db.transaction(function(tx){tx.executeSql("UPDATE movie_pret SET is_pret = 0 WHERE id = " + oldUserId + " ",[],function(tx,response){
											db.transaction(function(tx){tx.executeSql(sql,[],function(tx,response){},function(tx,error){alert('error tableExists')});});
										},function(tx,error){alert('error tableExists')});});
									}
									else{
										db.transaction(function(tx){tx.executeSql(sql,[],function(tx,response){},function(tx,error){alert('error tableExists')});});
									}
								},function(tx,error){alert('error tableExists')});});
							}
							else{
								db.transaction(function(tx){tx.executeSql(sql,[],function(tx,response){},function(tx,error){alert('error tableExists')});});
							}								
						},function(tx,error){
							//log
							alert('error tableExists')
						});
					});
				}
				//si le résultat est supérieur à 0 on peut être dans le cas d'un ajout auquel cas on ne fait rien de plus ou d'un suppression dans le cas on modifie que si l'utilisateur n'à qu'un seul film	
				else if(response.rows.item(0).result == 1){
					if(oldUserId != 0 && value != oldUserId){	
						db.transaction(function(tx){tx.executeSql("SELECT COUNT(*) AS result FROM movie WHERE pret_id = " + oldUserId + "",[],function(tx,response){
							if(response.rows.item(0).result == 1){
								db.transaction(function(tx){tx.executeSql("UPDATE movie_pret SET is_pret = 0 WHERE id = " + oldUserId + " ",[],function(tx,response){
									db.transaction(function(tx){tx.executeSql(sql,[],function(tx,response){},function(tx,error){alert('error tableExists')});});
								},function(tx,error){alert('error tableExists')});});
							}
							else{
								db.transaction(function(tx){tx.executeSql(sql,[],function(tx,response){},function(tx,error){alert('error tableExists')});});
							}
						},function(tx,error){alert('error tableExists')});});
					}
					else{
						db.transaction(function(tx){tx.executeSql(sql,[],function(tx,response){},function(tx,error){alert('error tableExists')});});
					}
				}	
				else{
					//Une fois fait il faut vérifier la modification à apporter dans le cas ou il y avait un autre utilisateur avant
					if(oldUserId != 0){
						db.transaction(function(tx){tx.executeSql("SELECT COUNT(*) AS result FROM movie WHERE pret_id = " + oldUserId + "",[],function(tx,response){
							if(response.rows.item(0).result == 1){
								db.transaction(function(tx){tx.executeSql("UPDATE movie_pret SET is_pret = 0 WHERE id = " + oldUserId + " ",[],function(tx,response){
									db.transaction(function(tx){tx.executeSql(sql,[],function(tx,response){},function(tx,error){alert('error tableExists')});});
								},function(tx,error){alert('error tableExists')});});
							}
							else{
								db.transaction(function(tx){tx.executeSql(sql,[],function(tx,response){},function(tx,error){alert('error tableExists')});});
							}
						},function(tx,error){alert('error tableExists')});});
					}
					else{
						db.transaction(function(tx){tx.executeSql(sql,[],function(tx,response){},function(tx,error){alert('error tableExists')});});
					}
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
			tx.executeSql(sql,[],function(tx,response){
				//Si on est dans le cas d'un pret

			},function(tx,error){
				//log
				alert('error tableExists')
			});
		});
	}
}



///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
//                                                                   //
//                     AJOUT D'UTILISATEUR                           //
//                                                                   //
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
//                                                                   //
//                      LISTE DES UTILISATEURS                       //
//                                                                   //
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
function listUser($scope){
	//Récupère la liste des utilisateurs
	db = window.openDatabase("Videotheque_v1","1.0","Videotheque database",200000);	
	db.transaction(function(tx){
		tx.executeSql("SELECT * FROM movie_pret;",[],function(tx,response){
			if (response != null && response.rows != null) {
				var newJson = { $resources: [] };
				for (var k = 0; k < response.rows.length; k++) {

                    var row = response.rows.item(k);

                    newJson.$resources[k] = { id: row.id , lastname: row.lastname , firstname:row.firstname, is_pret:row.is_pret, fullname: row.firstname + " " + row.lastname };
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