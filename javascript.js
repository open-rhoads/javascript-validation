/* function validateForm below will loop through the form fields in the first form.
	Using the DOM/dynamic selection methods throughout, it will check that a value has
	been entered by the user in each field type. 
	If the user has not entered a value for any of the form fields, the function will return
	an error message asking the user to enter a value in that field name.
	*/
	function validateForm()
	{
		
	//loop through all elements/fields in the first form within the document
		for (var i=0;i<(document.forms[0].elements.length);i++){
			
			//conditional logic to determine whether the contextual element (i) is a radio button OR checkbox
			//If so, assign a Boolean variable with a value of false
			//Store the names of each radio button in an array (won't they be the same...?)
			//Store a constant of the length of that array (# of radio buttons)
			//Store the entire array in a variable
			//All to be refered to later in a loop through the radio buttons
			if (document.forms[0].elements[i].type == 'radio' || document.forms[0].elements[i].type == 'checkbox'){
				
				let isChecked = false;
				let fieldNames = document.forms[0].elements[i].name;
				const radioCheckLength = document.getElementsByName(fieldNames).length;
				let namesObject = document.getElementsByName(fieldNames);
					
					//Loop through the previously created array of radio buttons
					//For each one, check if it is checked.
					//If even one is, then the Boolean marker variable will turn True 
					//and no message will display on submit
					//If none are checked, alert displays
					for (var j=0;j<radioCheckLength;j++){
						if (namesObject[j].checked == true){
						
							isChecked = true;
						}
					}
					
						if (isChecked == false){
						
							alert("Please enter a value for " + fieldNames);
							return false;
						}
			}
			
				//conditional logic to determine whether the user entered a string of nothing, in any remaining field
				//If so, display error message with an alert
				if (document.forms[0].elements[i].value == ''){
				
					let fieldName = document.forms[0].elements[i].name;
					alert("Please enter a value for " + fieldName);
					return false;
				
				}

		}
			
	}
