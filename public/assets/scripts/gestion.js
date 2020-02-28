
/*******************************************************uuuuu********************************************************************************m****************/
/************************************************************************************************************************************************kkkkkk*******/ /*************************************************************************************************************************************************************/
var io = io();
$(document).ready(function() {
		
//Chargement et affichage des écrans à partir de la base de données
	io.on('marche3', function(ecrans, ecrans_id, id_depott){
				var i, x = "", y="";
				for (i in ecrans_id) {
					var li = document.createElement('li');
					x = ecrans[i];
					y = ecrans_id[i];
					z = id_depott[i];
					$(li).append('<div class="active"><p id="nom_ecran" value='+ x +'></p><p id="id_dept" value="'+z+'"><p id="id_ecran" value="'+ y +'"></p></p><img src="assets/images/sativa.png" alt="img" class="feu"></div><div class="fermer"><p id="id_ecran" value="'+ y +'"></p><h3>X</h3></div><p id="nom_ecran" value=>'+ x +'</p>');
					$('#portfolio').append(li);
					
					
					//supprime un écrans quand clique sur la class fermer
					$('.fermer',li).click(function(){
						$(this).parent().remove();
						//console.log($(this).parent());
						var note = $(this).find('#id_ecran').attr('value');
						
						//console.log(note);
						idd = note;
						io.emit('news', note);
						});
					}
				
				//Affiche le nom et l'id des écrans dans la console
				console.log(ecrans);
				console.log(id_depott);
				console.log(ecrans_id);
				});
	
	
		
//Affiche le formulaire pour ajouter des ecrans.
	$('#ajouter').on('click', '#button_aj', function(){
		$('#button_aj').fadeOut(200, function(){
			$('#reduit').fadeIn(300);
			$('#wrapper').fadeOut(200);
			$('#ajouter2').fadeIn(300);
			
			});
		});

//Annule l'insertion des données dans le formulaire
	$('#ajouter2').on('click', '#annuler', function(){
		$('#reduit').toggle();
		$('#ajouter2').fadeOut(200);
		$('header').fadeIn(200);
		$('#button_aj').fadeIn(200);	
		$('#wrapper').fadeIn(200);
		$('#test').fadeIn(200);
		
		});
		
//Confirme l'insertion des données dans le formulaire
	$("#ajouter3").click(function(){
		$('#reduit').toggle();
		$('#ajouter2').fadeOut(200);
		$('header').fadeIn(200);
		$('#button_aj').fadeIn(200);	
		$('#wrapper').fadeIn(200);
		$('#test').fadeIn(200);
	});
	
	
	
	
	
	
//2eme partie

		io.on('depotF',function(dep){
			console.log("plplplplplplplplplplplplplplplplpllp11111111111111111111111111111111"+dep);
			console.log(dep+"rrrrrrrrrrrrrrrrrrrrrr");
				dep = JSON.parse(dep);
				var dix =  dep.length;
				var dix = dix;
			
				
				var nomdep = [];
				for(var i = 0; i< dep.length; i++){
				var currrentDep = dep[i];
         		Dep = currrentDep.mode;
				nomdep.push(Dep);	
				}
				
				for(var i = 0; i< nomdep.length; i++){
					console.log(nomdep);
					console.log(nomdep[0]);
					if(nomdep[i] == "model1"){
					
						console.log("test1");
						var div = document.createElement('div');
						$(div).addClass('ecran ui-draggable ui-draggable-handle');

						$(div).attr('model', 'model1');
						$(div).attr('style', 'width: 100px; height: 150px;');
						$(div).append('<div id="ec1"><div id="1eec1" page="page1" class="col" style="background-color: gold; height: 100px;"></div></div><div class="temps" style="display:block"><label for="usr">Temps(s) :</label><input/></div><div class="fermer1"><h3>X</h3></div><div class="f"></div>');
						$('#depose').append(div);
						$(".fermer1", "#depose").fadeIn();
					

					}
					
					if(nomdep[i] == "model2"){
		
						console.log("test2");
						var div = document.createElement('div');
						$(div).addClass('ecran ui-draggable ui-draggable-handle');
						$(div).attr('model', 'model2');
						$(div).attr('style', 'width: 100px; height: 150px;');
						$(div).append('<div id="ec2"><div class="row" id="ligne"><div id="2eec1" page="page1" style="background-color: darkcyan"; height: 100px;" class="col"></div><div id="2eec2" page="page2" style="background-color: green; height: 100px;" class="col"></div></div></div><div class="temps" style="display:block"><label for="usr">Temps(s) :</label><input/></div><div class="fermer1"><h3>X</h3></div><div class="f"></div>');
						
						
					
						$('#depose').append(div);
						$("#ecc2").css("width: 100px; height: 150px;");
						$(".fermer1", "#depose").fadeIn();
					
			
					}
					
					if(nomdep[i] == "model3"){
	
						console.log("test3");
						var div = document.createElement('div');
						$(div).addClass('ecran ui-draggable ui-draggable-handle');
						$(div).attr('model', 'model3');
						$(div).attr('style', 'width: 100px; height: 150px;');
						$(div).append('<div id="ec3"><div class="row" id="ligne"><div id="3eec1" page="page1" style="background-color: white; height: 50px;" class="col"></div><div id="3eec2" page="page2" style="background-color: red; height: 50px;" class="col"></div></div><div class="row" id="ligne"><div id="3eec3" page="page3" style="background-color: cornflowerblue; height: 50px;"  class="col"></div></div></div><div class="temps" style="display:block"><label for="usr">Temps(s) :</label><input/></div><div class="fermer1"><h3>X</h3></div><div class="f"></div>');
						
						$('#depose').append(div);
						$(".fermer1", "#depose").fadeIn();
				

					}
					
					if(nomdep[i] == "model4"){

						console.log("test4")
						var div = document.createElement('div');
						$(div).addClass('ecran ui-draggable ui-draggable-handle');
						$(div).attr('model', 'model4');
						$(div).attr('style', 'width: 100px; height: 150px;');
						$(div).append('<div id="ec4"><div class="row" id="ligne"><div id="4eec1" page="page1"  style="background-color: black; height: 50px;" class="col"></div><div id="4eec2"  page="page2" style="background-color: aquamarine; height: 50px;" class="col"></div></div><div class="row" id="ligne"><div id="4eec3" page="page3" style="background-color: crismon; height: 50px;"  class="col"></div><div id="4eec4" page="page4" style="background-color: coral; height: 50px;" class="col"></div></div></div><div class="temps" style="display:block"><label for="usr">Temps(s) :</label><input/></div><div class="fermer1"><h3>X</h3></div><div class="f"></div>');
						$('#depose').append(div);
						$(".fermer1", "#depose").fadeIn();
						

					}
					
				}
			$(".active").click(function(){
			console.log("plplplplplplplplplplplplplplplplpllp22222222222222222222222"+dep);
		});
	});
	
	/*
		io.on('depot2x',function(myJSONx,myJSONxx,depo){
			
			$(".active").click(function(){
				//var obj =JSON.parse(myJSONx); 
				//obj.jsonn = eval("(" + obj.jsonn + ")");
				//var tddest = unescape(myJSONx); 
		
				console.log("rrrrrrrrrrrrrrrrrrrrrr");
				var v  = myJSONxx;

				console.log(depo+"rrrrrrrrrrrrrrrrrrrrrr");
				depo = JSON.parse(depo);
				var dix =  depo.length;
				var dix = dix;
				console.log(depo[0].mode);
				
				
				var nomdep = [];
				for(var i = 0; i< depo.length; i++){
				var currrentDep = depo[i];
         		Dep = currrentDep.mode;
				nomdep.push(Dep);	
				}
				
				for(var i = 0; i< nomdep.length; i++){
					console.log(nomdep);
					console.log(nomdep[0]);
					if(nomdep[i] == "model1"){
					
						console.log("test1");
						var div = document.createElement('div');
						$(div).addClass('ecran ui-draggable ui-draggable-handle');

						$(div).attr('model', 'model1');
						$(div).attr('style', 'width: 100px; height: 150px;');
						$(div).append('<div id="ec1"></div><div class="temps" style="display:block"><label for="usr">Temps(s) :</label><input/></div><div class="fermer1"><h3>X</h3></div><div class="f"></div>');
						$('#depose').append(div);
						$(".fermer1", "#depose").fadeIn();
					

					}
					
					if(nomdep[i] == "model2"){
		
						console.log("test2");
						var div = document.createElement('div');
						$(div).addClass('ecran ui-draggable ui-draggable-handle');
						$(div).attr('model', 'model2');
						$(div).attr('style', 'width: 100px; height: 150px;');
						$(div).append('<div id="ec2"></div><div class="temps" style="display:block"><label for="usr">Temps(s) :</label><input/></div><div class="fermer1"><h3>X</h3></div><div class="f"></div>');
						$('#depose').append(div);
						$("#ecc2").css("width: 100px; height: 150px;");
						$(".fermer1", "#depose").fadeIn();
					
			
					}
					
					if(nomdep[i] == "model3"){
	
						console.log("test3");
						var div = document.createElement('div');
						$(div).addClass('ecran ui-draggable ui-draggable-handle');
						$(div).attr('model', 'model3');
						$(div).attr('style', 'width: 100px; height: 150px;');
						$(div).append('<div id="ec3"></div><div class="temps" style="display:block"><label for="usr">Temps(s) :</label><input/></div><div class="fermer1"><h3>X</h3></div><div class="f"></div>');
						$('#depose').append(div);
						$(".fermer1", "#depose").fadeIn();
				

					}
					
					if(nomdep[i] == "model4"){

						console.log("test4")
						var div = document.createElement('div');
						$(div).addClass('ecran ui-draggable ui-draggable-handle');
						$(div).attr('model', 'model4');
						$(div).attr('style', 'width: 100px; height: 150px;');
						$(div).append('<div id="ec4"></div><div class="temps" style="display:block"><label for="usr">Temps(s) :</label><input/></div><div class="fermer1"><h3>X</h3></div><div class="f"></div>');
						$('#depose').append(div);
						$(".fermer1", "#depose").fadeIn();
		

					}
					
				}
				//ob = JSON.parse(ob);
				//var ob = JSON.stringify(myJSONx) 
				//console.log("***********************************************************"+tddest);
				console.log(myJSONx+"***********************************************************");
				console.log(v+"*****************************444444444******************************");
				console.log(myJSONxx);
				
		});
	});
	*/
	
	
	
	
	
	io.on('depot',function(myJSON, rows){
		var i,nom ="";
		
	//Active l'interface d'édition pour les écrans
	$('#wrapper').on('click', '.active', function(){
		//var id_dep = $(this).find('#id_dept').attr('value');
		$("#1eec1").attr('style', 'background-color: gold; height: 100px;');
		
		$("#2eec1").attr('style', 'background-color: darkcyan; height: 100px;');
		$("#2eec2").attr('style', 'background-color: green; height: 100px;');
		
		$("#3eec1").attr('style', 'background-color: white; height: 50px;');
		$("#3eec2").attr('style', 'background-color: red; height: 50px;');
		$("#3eec3").attr('style', 'background-color: cornflowerblue; height: 50px;');
		
		$("#4eec1").attr('style', 'background-color: black; height: 50px;');
		$("#4eec2").attr('style', 'background-color: aquamarine; height: 50px;');
		$("#4eec3").attr('style', 'background-color: crismon; height: 50px;');
		$("#4eec4").attr('style', 'background-color: coral; height: 50px;');
		
		//attribut l'id et le nom de l'écran aux variables
		var id_dep = $(this).find('#id_ecran').attr('value');
		var nom = $(this).find('#nom_ecran').attr('value');
		console.log(nom);
		
		//affiche le nom de l'écran dans l'interface
		var ecranss = document.createElement('p');
		$(ecranss).append('#nom_ecranss');
		$('#nom_ecranss').append(nom);
		
		
		//affiche l'id de l'écran en console
		console.log(id_dep);
		 
		
		//affiche la requête sql en objet et en json
		var myObj = JSON.parse(myJSON);
		console.log(myObj);
		console.log(myJSON);
		
		
	    //test
		if(myObj.nom_ec = "Rapida"){
		//console.log(myObj.id);
				}
		
		
		
		//emet la variable
		io.emit('depo',id_dep);

		
		
		//----------------------
		
		//Donner un nom au depot
		
	
  		/*const n_dep = prompt('Nom du depot');
		$("#nom_contenu").append(n_dep);*/
		
		
		
		
		//attribut l'id et le nom de l'écran aux variables
		var ecran = $(this).find('#id_ecran').attr('value');
		//emet la variable
		//io.emit('depot1',ecran, n_dep);
		
		//affiche id ecran et nom du dépot
		console.log(ecran);
		//console.log(n_dep);
		
		
		
		
		$('header').fadeOut(200);
		$('#ajouter2').fadeOut(200);
		$('#ajouter').fadeOut(200);
		$('#wrapper').fadeOut(200);
		$('#test').fadeOut(200);
		$('#button_aj').fadeOut(200, function(){
		$('#wrapper3').fadeIn(200);
		
		$('#droite').fadeOut();
			});
		
		});
	});
	
	
	
	
//Quitte l'interface de l'édition des écrans
	$('#sortir').click(function(){
	
			   
		
		$('#wrapper3').fadeOut(200, function(){	
			$('header').fadeIn(200);
			$('#ajouter').fadeIn(200);
			$('#button_aj').fadeIn(200);
			$('#wrapper').fadeIn(200);
			$('#test').fadeIn(200);
			
		
			//vide 
			
			while (element.firstChild) {
				element.removeChild(element.firstChild);
			}
			
			var element1 = document.getElementById("nom_contenu");
			while (element1.firstChild) {
				element1.removeChild(element1.firstChild);
			}
			
		});
			
		});
	
	
	

	
//Augmente l'opacité de l'icone sortie quand le curseur viens sur l'icone
	$("#sortir").mouseover(function(){
		$(this).css("opacity", "0.80")
	});
		
//L'opacité de l'icone sortie reviens à la normale quand le curseur quitte l'icone
	$("#sortir").mouseleave(function(){
		$(this).css("opacity", "0.5")
	});
		


	//--------------------PAGE----------------------------------

//drag
	$( ".ecran" ).draggable({
      helper: "clone",
      revert: "invalid",
		connectToSortable: ".dropfalsee",
	});
	$( "ul, li" ).disableSelection();
  
	
	//chargement de l'interface
$( "#enleve" ).mouseup(function() {
    $("#enleve").fadeOut();
  });
	
	
	
	//drop
	//console.log("Drop marche");
	
	//ajoute l'icone pour fermer la page
	$(".ecran").append('<div class="fermer1"><h3>X</h3></div><div class="f"></div>');
	var gfg= 0;
	
	$( ".dropfalsee" ).sortable({
      revert: "invalid",
	   receive: function (event, ui){
		   
		   
		  console.log("Drop marche");
		   var data = [];
		   var data1;
		   $("#depose .ecran").each(function(){
			  	var model =  $(this).attr("model");
			   //{mode:model, data[]}
			   	data.push({mode:model, data:[]});
		   })
		
		   
		      console.log("_________________________________");
		   console.log(data);
		   data1 = JSON.stringify(data);
		   console.log(data1);
		   io.emit('depot11',data1);
		   //Data.nom_page = data;
		   
	  },
    }).droppable({
    drop : function(){

	

		/*var test = 1;
		var animals =[];
		animals.push("test");*/
		/*$( ".f, #depose" )
  .mouseup(function() {
   console.log("up");
   var data = [];
		   var data1;
		   $("#depose .ecran").each(function(){
			  	var model =  $(this).attr("model");
			   //{mode:model, data[]}
			   	data.push({mode:model, data:[]});
		   })
   
		   
		      console.log("_________________________________");
		   console.log(data);
		   data1 = JSON.stringify(data);
		   console.log(data1);
		   io.emit('depot11',data1);
  })
  .mousedown(function() {
   console.log("down");
  });*/
		


		
		$('div[class]','#depose').dblclick(function(){
			var b = $( this ).attr( "page" );
			console.log(b)
			$("#pg2").text(b);
			
			var m = $( this ).attr( "model" );
			console.log(m)
			$("#pg").text(m);
			
			/*console.log(b);
			$(this).find("#ec1", function(){
				console.log("ec1mmmmmmmmmm")
			});
			var pageec1 = $(this).find('#ec1').attr('page');
			console.log(pageec1);
			$('#pg').append(pageec1);
			
			
			var page_2eec1 = $(this).find('#ec2').attr('page');
			console.log(page_2eec1);
			$('#pg').append(page_2eec1);
			
			
			var page_2eec2 = $(this).find('#2eec2').attr('page');
			console.log(page_2eec2);
			$('#pg').append(page_2eec2);
			*/
			
			/*
			var page_3eec1 = $(this).find('#3eec1').attr('page');
			console.log(page_3eec1);
			$('#pg').append(page_3eec1);
			
			
			var page_3eec2 = $(this).find('#3eec2').attr('page');
			console.log(page_3eec2);
			$('#pg').append(page_3eec2);
			
			
			var page_3eec3 = $(this).find('#3ee3').attr('page');
			console.log(page_3eec3);
			$('#pg').append(page_3eec3);
			/*
			
			
			
			
			var page_4eec1 = $(this).find('#4eec1').attr('page');
			console.log(page_4eec1);
			$('#pg').append(page_4eec1);
			
			
			var page_4eec2 = $(this).find('#4eec2').attr('page');
			console.log(page_4eec2);
			$('#pg').append(page_4eec2);
			
			
			var page_4eec3 = $(this).find('#4ee3').attr('page');
			console.log(page_4eec3);
			$('#pg').append(page_4eec3);
			
			
			var page_4eec4 = $(this).find('#4ee4').attr('page');
			console.log(page_4eec4);
			$('#pg').append(page_4eec4);*/
			
			
			
			
			
			$('#droite').fadeIn(function(){
				
				$('.ecran').click(function(){
					$('#droite').fadeOut(function(){
						var pg = document.getElementById("pg");
						while (pg.firstChild) {
							pg.removeChild(pg.firstChild);
								}
							});
						});
					});
		     	});
		
		
		
		
		
		$('.temps','#depose').fadeIn();
			
		
			$('.fermer1','#depose').fadeIn(function(){
				$('.fermer1').click(function(){
						$(this).parent().remove();
						 var data = [];
		   var data1;
		   $("#depose .ecran").each(function(){
			  	var model =  $(this).attr("model");
			   //{mode:model, data[]}
			   	data.push({mode:model, data:[]});
		   })
   
		   
		      console.log("_________________________________");
		   console.log(data);
		   data1 = JSON.stringify(data);
		   console.log(data1);
		   io.emit('depot11',data1);
					
					});
				});
			
		
		
		}
});

	
	//--------------------FONCTIONNALITE----------------------------------
	
	$("#fc1").click(function(){
		
		$("#fonction_entre").empty();
		
		$("#fonction_entre").append('<div class="form-group"><p><label for="usr">nom du fichier :</label><input type="text" name="fichier" id="n_fich"  size="20" maxlength="15" class="form-control"/><br><label for="usr">texte :</label><input type="text" name="texte"  id="texte"  size="20"  class="form-control"/><br><br><input id="ajoute_text" type="submit" value="AJOUTER" class="btn btn-success"/><input id="annuler1" type="submit" value="ANNULER" type="button" class="btn btn-dark"/></p></div>');
		$("#fonc_entr").addClass('row');
		$("#fonction_entre").fadeIn();
		
		
		
		$("#ajoute_text").click(function(){
			var fichier = document.getElementById("n_fich").value;
			console.log(fichier);
			
			var text = document.getElementById("texte").value;
			console.log(text);
			
			text = "";
			
			var fich = document.getElementById("texte");
			while (fich.firstChild) {
				fich.removeChild(fich.firstChild);
			}
			
			
			
			
		});
		
		$("#annuler1").click(function(){
		$("#fonction_entre").fadeOut(200, function(){
			$( "#fonc_entr" ).removeClass();
		});
			 $("#fonction_entre").empty();
		
	});
	});
	
	$("#fc2").click(function(){
		
		$("#fonction_entre").empty();
		
		$("#fonction_entre").append('<div class="form-group"><p><label for="usr">nom_image :</label><input type="text" name="fichier" id="n_img"  size="20" maxlength="15" class="form-control"/><br><label for="usr">img_lien :</label><input type="img" name="img"  id="img"  placeholder="Ex :images/logo.png" size="20"  class="form-control"/><br><br><input id="ajoute_img" type="submit" value="AJOUTER" class="btn btn-success"/><input id="annuler1" type="submit" value="ANNULER" type="button" class="btn btn-dark"/></p></div>');
		$("#fonc_entr").addClass('row');
		$("#fonction_entre").fadeIn();
		
		
		
		
		$("#annuler1").click(function(){
		$("#fonction_entre").fadeOut(200, function(){
			$( "#fonc_entr" ).removeClass();
		});
		
			$("#fonction_entre").empty();
	});
		
	});
	
	$("#fc3").click(function(){
		
		$("#fonction_entre").empty();
		
		$("#fonction_entre").append('<div class="form-group"><p><label for="usr">nom du site web :</label><input type="text" name="n_site" id="n_site"  size="20" maxlength="15" class="form-control"/><br><label for="usr">URL :</label><input type="url name="site_web"  id="site_web"  size="20"  class="form-control"/><br><br><input id="ajoute_url" type="submit" value="AJOUTER" class="btn btn-success"/><input id="annuler1" type="submit" value="ANNULER" type="button" class="btn btn-dark"/></p></div>');
		$("#fonc_entr").addClass('row');
		$("#fonction_entre").fadeIn();
		
		
		$("#ajoute_url").click(function(){
			var fichier = document.getElementById("n_site").value;
			console.log(fichier);
			
			var text = document.getElementById("site_web").value;
			console.log(text);
			
		});
		
		
		$("#annuler1").click(function(){
		$("#fonction_entre").fadeOut(200, function(){
			$( "#fonc_entr" ).removeClass();
		});
			
			$("#fonction_entre").empty();
		
	});
	});
	
	$("#fc4").click(function(){
		
		$("#fonction_entre").empty();
		
		$("#fonction_entre").append('<div class="form-group"><p><label for="usr">nom de la video :</label><input type="text" name="n_video" id="n_video" size="20" maxlength="15" class="form-control"/><br><label for="usr">video :</label><input type="text" name="video"  id="video"  size="20"  class="form-control"/><br><br><input id="ajoute_video" type="submit" value="AJOUTER" class="btn btn-success"/><input id="annuler1" type="submit" value="ANNULER" type="button" class="btn btn-dark"/></p></div>');
		$("#fonc_entr").addClass('row');
		$("#fonction_entre").fadeIn();
		
		$("#annuler1").click(function(){
		$("#fonction_entre").fadeOut(200, function(){
			$( "#fonc_entr" ).removeClass();
		});
			
			$("#fonction_entre").empty();
		
	});
	});
	
	
	
	
	
	
	
	
	
	
	
	/*
	
	
		$( ".fonction" ).draggable({
      helper: "clone",
      revert: "invalid",
		connectToSortable: ".ecran"
	});
	$( "ul, li" ).disableSelection();
  
	
	//chargement de l'interface

	
	
	
	
	//drop
	//console.log("Drop marche");
	
	//ajoute l'icone pour fermer la page
	
	$( ".ecran","#deposer").sortable({
      revert: "invalid",
	   receive: function (event, ui){
		   
		   
		  console.log("DropYLU marche");
	
	  },
    }).droppable({
    drop : function(){
		
		
		}
	});*/

});
	
