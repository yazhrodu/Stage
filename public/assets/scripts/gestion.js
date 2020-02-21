
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

	io.on('depot2x',function(myJSONx){
			$('#wrapper').on('click', '.active', function(){
				var obj =JSON.parse(myJSONx); 
				obj.jsonn = eval("(" + obj.jsonn + ")");
				console.log(unescape(myJSONx)+"***********************************************************");
				console.log(obj)+"****************1111111111111111111111111111111******************************");
		});
	});
	
	
	
	
	
	
	io.on('depot',function(myJSON, rows){
		var i,nom ="";
		
	//Active l'interface d'édition pour les écrans
	$('#wrapper').on('click', '.active', function(){
		//var id_dep = $(this).find('#id_dept').attr('value');
		
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
			var element = document.getElementById("nom_ecranss");
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
		connectToSortable: ".dropfalsee"
	});
	$( "ul, li" ).disableSelection();
  
	
	//chargement de l'interface

	
	
	
	
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
		
		
		$('.ecran','#depose').dblclick(function(){
				$('#droite').fadeIn(200, function(){
					$('.ecran').click(function(){
						$('#droite').fadeOut();
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
	
	$( ".ecran" ).sortable({
      revert: "invalid",
	   receive: function (event, ui){
		   
		   
		  console.log("DropYLU marche");
		/*   var data = [];
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
		   io.emit('depot11',data1);*/
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
		/*
		
		$('.ecran','#depose').dblclick(function(){
				$('#droite').fadeIn(200, function(){
					$('.ecran').click(function(){
						$('#droite').fadeOut();
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
				});*/
			
		
		
		}
	});

});
	
