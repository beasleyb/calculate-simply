// TODO:
// - Limit Equation size
//		- Based on viewport size
// - Exception handling for delete button
// - Eval result checking
//		- If number has a decimal, do not add another
//		- Limit returned answer size
// - Add keyboard functionality?

$(function(){

	// Global Variables
	var	$Operator	= $('.operator'),
		$Value		= $('.value'),
		$Screen		= $('#screen'),
		Operations	= ['/', 'x', '-', '+'],
		DecimalAdded	= false,
		Equation	= '';

	// Operator click (keep order)
	$Operator.on('click', function(e){
		e.preventDefault();
		console.log('operator '+$(this).attr('id')+' clicked');

		// Get ID and operation of button
		var	OperatorID	= $(this).attr('id'),
			Operation	= $(this).text();

		// If clear button pressed, remove equation from screen
		if (OperatorID == 'clear') {
			Equation = '';
			$Screen.empty();
			DecimalAdded = false;
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
				var Answer = eval(Equation); // Returns number
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

				// If last character is an operator, do not append
				if ($.inArray(Equation.slice(-1), Operations) != -1) {
					// Do nothing
				}
				
				// Else, update equation, screen, and DecimalAdded
				else {
					Equation += Operation;
					$Screen.text(Equation);
					DecimalAdded = false;
				}
			}
		}
	});
    
    // Value click
    $Value.on('click', function(e){
		e.preventDefault();
		console.log('value '+$(this).attr('id')+' clicked');

		// TODO:
		// - Add keyboard functionality?
		var	ValueID		= $(this).attr('id'),
			ThisValue	= $(this).text();

		// If no equation, do not start with a decimal point
		if (!Equation && ValueID == 'point') {
			// Do Nothing
		}

		// Check to see if decimal point has already been added
		else if (ValueID == 'point') {

			// If there is a decimal in the number, do not add
			if (DecimalAdded) {
				// Do nothing
			}

			// Else, update equation, screen, and DecimalAdded
			else {
				Equation += ThisValue;
				$Screen.text(Equation);
				DecimalAdded = true;
			}
		}

		// Update equation, append to screen
		else {
			Equation += ThisValue;
			$Screen.text(Equation);
		}
	});
});
