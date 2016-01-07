var monday = Alloy.Collections.monday,
    i = 0;
monday.fetch();

function logMonday() {
	if ($.weightTextBox.value === "" || $.repsTextBox.value === "") {
		alert("Please fill in both fields.");
	}
	else if (isNaN(parseInt($.weightTextBox.value)) || (isNaN(parseInt($.repsTextBox.value)))) {
		alert("Please fill in both fields with numbers only.");
	}
	 else {
		var myMonday = Alloy.createModel('monday', {
			weight : $.weightTextBox.value,
			reps : $.repsTextBox.value
		});
		monday.add(myMonday);
		myMonday.save();
		// Close the window.
		//$.Chest.close();
	}
}

//callback example
//$.addButton.addEventListener( "click", function() {
//if ($.weightTextBox.value === "" || $.repsTextBox.value === "") {
//alert("Please fill in both fields.");
//} else {
//var myChest = Alloy.createModel('chest', {
//weight : $.weightTextBox.value,
//reps : $.repsTextBox.value
//});
//chest.add(myChest);
//myChest.save();
// Close the window.
//$.Chest.close();
//	}
//}
//);

// Encase the title attribute in square brackets
function transformFunction(model) {
	// Need to convert the model to a JSON object
	var transform = model.toJSON();
	Ti.API.info(transform);
	i++;
	transform.custom = "Set " + i + " : " + transform.weight + " lbs" + " X " + transform.reps + " reps";
	if (i === monday.length) {
		i = 0;
	}
	return transform;
}