function valid()
{
	var human =  document.getElementById('human');

	if (human.value == 'yes' | human.value == 'Yes' | human.value == 'YES' | human.value == 'yup')
		{
		
			submit.type = 'submit';
			document.getElementById("submit").disabled = false;
			submit.value = "SUBMIT FORM";
		}
	else
		{
			document.getElementById("submit").disabled = true;
			submit.value = "FILL OUT ALL FIELDS";
		}
}