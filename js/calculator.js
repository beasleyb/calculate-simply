$(function(){

	// Global Variables
	var $operator	    = $('.operator'),
		$value 			= $('.value'),
		$screen		    = $('#screen'),
		$clear			= $('#clear'),
		$delete			= $('#delete');

	// Operator click
	$operator.on('click', function(e){
		e.preventDefault();
		console.log('operator '+$(this).text()+' clicked');
	});
    
    $value.on('click', function(e){
		e.preventDefault();
		console.log('value '+$(this).text()+' clicked');
	});
});