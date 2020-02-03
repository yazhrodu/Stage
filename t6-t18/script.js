	var username ="";
		function send_message(message){
			var prevState = $("#container").html();
			
			if(prevState.length > 3){
				prevState = prevState + "<br>";
				 
			}
			//bot, jQuery animation 
			var ecrit = "Chatbot est en train d'écrire.. ";
			$("#container").html(prevState +"<span class = 'encours'>"+ ecrit +"</span>"+"<span class = 'current_message'>"+"<span class = 'bot'>Chatbot: </span>" + message + "</span>");
			$(".encours").delay(700).fadeOut(300);
			$(".current_message").hide();
			$(".current_message").delay(1000).fadeIn(400);
			$(".current_message").removeClass("current_message");
		}
		function get_username(){
		 	send_message("Bonjour, quel est votre nom?");
		  }
		//chatbot Reactions
		function ai(message){
			
			if(username.length <=1){
				username = message;
				send_message("Enchanté " + username +", comment allez vous?");
			}
			if (message.indexOf("comment allez vous?")>=0){
				send_message("bien, merci");
			}
			
			if ((message.indexOf("bien")>=0)  || (message.indexOf("merci")>=0) || (message.indexOf("Bien")>=0) ){
				send_message("Voulez-vous, connaitre l'heure actuelle?");
			}
			
			
			if ( (message.indexOf("oui")>=0) || (time == 1) ){
				var date = new Date();
				var h = date.getHours();
				var m = date.getMinutes();
				send_message("Il est: "+h+":"+m);
				
			}
			
			
			if ( (message.indexOf("heures")>=0) || (message.indexOf("heure")>=0) ){
				var date = new Date();
				var h = date.getHours();
				var m = date.getMinutes();
				send_message("Il est: "+h+":"+m);
			}
		}
		$(function(){
			get_username();
			//Document has been loaded
			//permet d'interagir avec le clavier
			$("#textbox").keypress(function(event){
				//si la checkbox portant l'identifiant enter est cocher et qu'il a taper sur entré alors on affiche dans la console un message pour confirmé que le code marche, si les conditions sont remplis un message sera envoyé et affiché dans le contaigner
				if(event.which ==13){
					if($("#enter").prop("checked") ){
						console.log("enter pressed, checkbox is checked");
						$( "#textbox" ).empty();

						
				//var newMessage = $("#textbox").val();
				//$("textbox").val("");
				//var prevState = $("#container").html();
				//$("#container").html(prevState + "<br>" + newMessage);
						//si il click sur le button, affiche la fonction par defaut
						$("#send").click();
						event.preventDefault();
					}
				}
			});
			//pour envoyer un message à partir du button
			$("#send").click(function(){
				
				var username = "<span class='username'>You: </span>";
				
				var newMessage = $("#textbox").val();
				
				$("#textbox").val("");
				
				var prevState = $("#container").html();
				
				if(prevState.length > 3){
					prevState = prevState + "<br>";
				}
				
				
				$("#container").html(prevState + username + newMessage);
				
				$("#container").scrollTop($("#container").prop("scrollHight"));
				
				ai(newMessage);
			});
		});
			