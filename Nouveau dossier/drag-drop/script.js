$(document).ready(function() {
    $( "#draggable" ).draggable();
	$('#drag').draggable();
	$('#test').droppable({
    	drop : function(){
        alert('Action terminée !'); // cette alerte s'exécutera une fois le bloc déposé
    		}
		});
	
   	$('#draggable2').draggable({
			snap : true
		});
	
		
		
	$('#not-drag').draggable();

	$('#drop').droppable({
    	accept : '#drag', // je n'accepte que le bloc ayant "drag" pour id
    	drop : function(){
        alert('Action terminée !');
    	}
	});
		
		$('#valid').draggable({
			revert : 'valid' // sera renvoyé à sa place s'il est déposé dans #drop
		});
			
		$('#valid').mouseup(function(){
			$('#valid').clone();
		});
				
			
			

$('#invalid').draggable({
    revert : 'invalid' // sera renvoyé à sa place s'il n'est pas déposé dans #drop
});

$('#dropp').droppable({
    drop : function(){
        alert('Action terminée !');
    	}
	});
	

	$( "#ec2" ).draggable(function(){
		$( "ec2" ).mouseup(function() {
    		$("#ec2").clone().append("#ec");
  });
			
		});
		
	
	
});