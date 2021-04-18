var arrayTheme = [
	['Home', '#Home'],
	['Game Design', '#GD'],
	['Graphisme', '#Graph'],
	['Programmation', '#Prog']
]

var arrayGD = [
	['Nourriture Rapide', 'GD_NourritureRapide.html'],
	['10 pagers', 'GD_10Oagers.html']
]

var arrayGraph = [
	['Pixel Art','Graph_PixelArt.html'],
	['Cyber Drunk','Graph_CyberDrunk.html'],
	['Chaos User','Graph_ChaosUser.html']
]

var arrayProg = [
	['Old Memories', 'Prog_OldMemories'],
	['Liminal Museum', 'Prog_LiminalMuseum'],
	['The 4 Suits', 'Prog_The4Suits']
]

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
		if (document.title == "Home") {
			aLiBar.setAttribute("href","./index.html");
		}else{
			aLiBar.setAttribute("href","../index.html");
		}
		aLiBar.innerHTML = arrayTheme[i][0];
	}
	liBar.appendChild(aLiBar);

	if(i!=0){
		let ulUlBar = document.createElement("ul");
		ulUlBar.setAttribute("id", "UL"+i);
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
		if(document.title == "Home"){
			newA.setAttribute("href", "./HTML/"+theArray[i][1]);
		}else{
			newA.setAttribute("href", "../HTML/"+theArray[i][1]);
		}
		newA.innerHTML = theArray[i][0];
		newLi.appendChild(newA);

		if(document.title == theArray[i][0]){
			newLi.classList.add("current");
			document.getElementById(theLi).classList.add("current");
			document.getElementById("LI0").classList.remove("current");
		}
	}
}