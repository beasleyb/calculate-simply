$(function(){

	// Global Variables
	var $Operator	    = $('.operator'),
		$Value 			= $('.value'),
		$Screen		    = $('#screen'),
		$Clear			= $('#clear'),
		$Delete			= $('#delete'),
		$Equals			= $('#equals'),
		Equation;

	// Operator click
	$Operator.on('click', function(e){
		e.preventDefault();
		console.log('operator '+$(this).attr("id")+' clicked');
	});
    
    // Value click
    $Value.on('click', function(e){
		e.preventDefault();
		console.log('value '+$(this).attr("id")+' clicked');
	});
});