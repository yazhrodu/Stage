$(function(){
	$('#ajouter').on('click', '#button_aj', function(){
		$('#button_aj').fadeOut(200, function(){
			$('#reduit').fadeIn(300);
			$('#wrapper').fadeOut(200);
			$('#ajouter2').fadeIn(300);
			
			});
		});
	});
$(function(){
	$('#ajouter').on('click', '#test', function(){
		$('header').fadeOut(200);
		$('#ajouter2').fadeOut(200);
		$('#wrapper').fadeOut(200);
		$('#test').fadeOut(200);
		$('#button_aj').fadeOut(200, function(){
			$('#ec').fadeIn(200);
			$('#fc').fadeIn(200);
			$('#depose').fadeIn(200);
		});
			
		});
	});

$(function(){
	$('#ajouter2').on('click', '#annuler', function(){
		$('#reduit').toggle();
		$('#ajouter2').fadeOut(200);
		$('header').fadeIn(200);
		$('#button_aj').fadeIn(200);	
		$('#wrapper').fadeIn(200);
		$('#test').fadeIn(200);
		
		});
	});

$(function(){
	$('#ec').on('click', '#sortir', function(){
		$('#ec').fadeOut(200);
		$('#fc').fadeOut(200);
		$('#depose').fadeOut(200, function(){	
			$('header').fadeIn(200);
			$('#ajouter').fadeIn(200);
			$('#button_aj').fadeIn(200);
			$('#wrapper').fadeIn(200);
			$('#test').fadeIn(200);
			
			
		});
			
		});
	});
	$("#sortir").mouseover(function(){
		$(this).css("opacity", "0.80")
	});
	
	$("#sortir").mouseleave(function(){
		$(this).css("opacity", "0.5")
	});
	
	
	$(function(){
	$('#wrapper').on('click', '.active', function(){
		$('header').fadeOut(200);
		$('#ajouter2').fadeOut(200);
		$('#ajouter').fadeOut(200);
		$('#wrapper').fadeOut(200);
		$('#test').fadeOut(200);
		$('#button_aj').fadeOut(200, function(){
			$('#ec').fadeIn(200);
			$('#fc').fadeIn(200);
			$('#depose').fadeIn(200);
		});
			
		});
	});
	$("#ajouter3").click(function(){
		$('#reduit').toggle();
		$('#ajouter2').fadeOut(200);
		$('header').fadeIn(200);
		$('#button_aj').fadeIn(200);	
		$('#wrapper').fadeIn(200);
		$('#test').fadeIn(200);
		
		
		var nom = document.getElementById("nom_ecran").value;  
		var li = document.createElement('li');
		$(li).addClass('col-sm');
		$(li).append('<img class="active" src="assets/images/sativa.png" alt="img"/><p id="nom_ecran">'+ nom + '</p>');
		$('#portfolio').append(li)
	});
$(document).ready(function() {
	$("#portfolio li").each(function(){
		var chargement1 = chargement.query('SELECT nom_ec FROM ecrans');
		var li = document.createElement('li');
		$(li).addClass('col-sm');
		$(li).append('<img class="active" src="assets/images/sativa.png" alt="img"/><p id="nom_ecran">'+ chargement1 +'</p>');
		$('#portfolio').append(li)
	});
	
});



	

	$( function() {
    $( "#ec2" ).draggable();
	});
	$('#fc1').draggable({
    revert : true
});
	

	