function copy(){
	//var adresse = ;
	
	var testVar=document.getElementById("test");
	testVar.value = document.getElementById("adresseOutlook").title;
	testVar.select();
	testVar.setSelectionRange(0,99999);
	document.execCommand("copy");
	console.log(testVar);
}