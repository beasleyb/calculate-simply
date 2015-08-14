$(function(){

	// Global Variables
	var $Operator	    = $('.operator'),
		$Value 			= $('.value'),
		$Screen		    = $('#screen'),
		Equation		= '';

	// Operator click (keep order)
	$Operator.on('click', function(e){
		e.preventDefault();
		console.log('operator '+$(this).attr("id")+' clicked');

		// Get ID and operation of button
		var OperatorID 	= $(this).attr("id"),
			Operation	= $(this).text();

		// If clear button pressed, remove equation from screen
		if (OperatorID == 'clear') {
			Equation = '';
			$Screen.empty();
		}

		// If delete button pressed, remove last index
		if (OperatorID == 'delete') {
			$Screen.text(function(index, text){
        		return text.replace(/(\s+)?.$/, '');
    		});
    		Equation = $Screen.text();
		}

		// If evaluate button pressed, evaluate equation
		else if (OperatorID == 'evaluate') {
			// Replace 'x' with '*'
			Equation = Equation.replace(/x/g, '*');

			// Only evaluate if an equation exists
			if (Equation) {
				var Answer = eval(Equation);
				$Screen.text(Answer);
				Equation = $Screen.text();
			}
		}

		// If any other operation, append to equation
		else {

			// If screen is blank, only append negative operation
			if (!Equation && OperatorID == 'subtract') {
				Equation += Operation;
				$Screen.text(Equation);
			}

			// Do not allow any other operation if blank
			else if (!Equation) {
				// Do nothing
			}

			else {
				Equation += Operation;
				$Screen.text(Equation);
			}
		}
	});
    
    // Value click
    $Value.on('click', function(e){
		e.preventDefault();
		console.log('value '+$(this).attr("id")+' clicked');

		// Update screen
		Equation += $(this).text();
		$Screen.text(Equation);
	});
});