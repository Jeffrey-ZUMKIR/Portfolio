var langChecked = document.getElementById("check_lang").checked;


if(langChecked){
	var arrayGD = [
		['Nourriture Rapide', 'FR_NourritureRapide.html']/*,
		['10 Pagers', 'FR_10Pagers.html']*/
	]

	var arrayGraph = [
		/*['Pixel Art','FR_PixelArt.html'],*/
		['Cyber Drunk','FR_CyberDrunk.html']/*,
		['Chaos User','FR_ChaosUser.html']*/
	]

	var arrayProg = [
		['Ping Fight', 'FR_PingFight.html'],
		['Liminal Museum', 'FR_LiminalMuseum.html'],
		['The 4 Suits', 'FR_The4Suits.html']
	]

	var arrayTheme = [
		['Home', '#Home'],
		['Game Design', '#GD'],
		['Graphisme', '#Graph'],
		['Programmation', '#Prog']
	]
}else{
	var arrayGD = [
		['Nourriture Rapide', 'EN_NourritureRapide.html']/*,
		['10 Pagers', 'EN_10Pagers.html']*/
	]

	var arrayGraph = [
		/*['Pixel Art','EN_PixelArt.html'],*/
		['Cyber Drunk','EN_CyberDrunk.html']/*,
		['Chaos User','EN_ChaosUser.html']*/
	]

	var arrayProg = [
		['Ping Fight', 'EN_PingFight.html'],
		['Liminal Museum', 'EN_LiminalMuseum.html'],
		['The 4 Suits', 'EN_The4Suits.html']
	]
	var arrayTheme = [
		['Home', '#Home'],
		['Game Design', '#GD'],
		['Graphics', '#Graph'],
		['Programming', '#Prog']
	]
}



let navBar = document.getElementById('nav');
let ulBar = document.createElement("ul");
navBar.appendChild(ulBar);

for (var i = 0; i < arrayTheme.length; i++) {
	//Ajout élément liste globale
	let liBar = document.createElement("li");
	liBar.setAttribute("id", "LI"+i)
	if(i!=0){
		liBar.classList.add("dropdown");
	}

	ulBar.appendChild(liBar);
	//Ajout élément dans liste
	let aLiBar = document.createElement("a");
	aLiBar.setAttribute("href",arrayTheme[i][1]);
	if (i!=0) {
		aLiBar.innerHTML = arrayTheme[i][0]+"<span>&rsaquo;</span>";
	}else{
		/*if (document.title == "Home") {
			aLiBar.setAttribute("href","./index.html");
		}else{
			aLiBar.setAttribute("href","../index.html");
		}*/
		aLiBar.setAttribute("href","./FR_Intro.html");
		aLiBar.innerHTML = arrayTheme[i][0];
	}
	liBar.appendChild(aLiBar);

	if(i!=0){
		let ulUlBar = document.createElement("ul");
		ulUlBar.setAttribute("id", "UL"+i);
		ulUlBar.classList.add(".w3-animate-opacity");

		liBar.appendChild(ulUlBar);
	}

}

document.getElementById("LI0").classList.add("current");

addPage("UL1","LI1",arrayGD);
addPage("UL2","LI2",arrayGraph);
addPage("UL3","LI3",arrayProg);


function addPage(theUl,theLi,theArray){

	var theUl3 = document.getElementById(theUl);
	for (var i = 0; i < theArray.length; i++) {
		var newLi = document.createElement("li");
		theUl3.appendChild(newLi);
		var newA = document.createElement("a");
		/*if(document.title == "Home"){
			newA.setAttribute("href", "./HTML/"+theArray[i][1]);
		}else{
			newA.setAttribute("href", "../HTML/"+theArray[i][1]);
		}*/
		newA.setAttribute("href", "./"+theArray[i][1]);
		newA.innerHTML = theArray[i][0];
		newLi.appendChild(newA);

		if(document.title == theArray[i][0]){
			newLi.classList.add("current");
			document.getElementById(theLi).classList.add("current");
			document.getElementById("LI0").classList.remove("current");
		}
	}
}

function changeLang(){
	/*var currentPage = document.title;
	var lang = currentPage.substr(0,2);
	console.log(lang);*/
	if(langChecked){
		window.location.href = "EN_"+document.title.split(" ").join("")+".html";
	}else{
		window.location.href = "FR_"+document.title.split(" ").join("")+".html";
	}
}