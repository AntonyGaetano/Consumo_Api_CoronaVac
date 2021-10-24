 // <==== Evento Onload para inicar as principais funções que é o printDados e a Tabela onde fica os ids dos pais!  ====>
  window.addEventListener("load", function(){
    Tabela()
    PegaId(30) // Iniciando com o país Brazil
  })


// <== Essa função foi criada para receber o id do input e jogar para o printDados ==>
const PegaId = (id) =>{
	
	fetch(`https://coronavirus-tracker-api.herokuapp.com/v2/locations/${id}`)
	.then(function(resp) { return resp.json() })
	.then(function(data) {
	
		printDados(data)
	})
	.catch(function() {
		console.log("error");
	})
	
}

// <=== Essa função é para printar os dados na tela ===>
function printDados(dados){

	var population = document.getElementById("population")
    var deaths = document.getElementById("deaths")
	var country = document.getElementById("country")
	var confirmed = document.getElementById("confirmed")
	var updated = document.getElementById("updated")

	country.innerHTML = dados.location.country;
	confirmed.innerHTML = dados.location.latest.confirmed
	deaths.innerHTML = dados.location.latest.deaths
	updated.innerHTML = (dados.location.last_updated).substr(0, 10)
	population.innerHTML = dados.location.country_population

}  
	
// <=== Essa função é para formar a tabela com o id, o nome do pais, e aprovincia dos país ===>
function Tabela(){

	var tabela = document.getElementById("tbody");

	fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations/')
	.then(function(resp) { return resp.json() })
	.then(function(dados) {
		for(let i = 0; i < 279; i++){
			var tr = document.createElement("tr");
			var td1 = document.createElement("td");
			var td2 = document.createElement("td");
			var td3 = document.createElement("td");
		  
		  
			td1.innerHTML = dados.locations[i].id;
			td2.innerHTML = dados.locations[i].country;
			td3.innerHTML = dados.locations[i].province;
		  
			tr.appendChild(td1)
			tr.appendChild(td2)
			tr.appendChild(td3)
			tabela.appendChild(tr)
		} 
	})
	.catch(function() {
		console.log("error");
	})
      
} 


// Local para chamar as funções pelo o click

document.querySelector("button").addEventListener("click", function(){
	var inputV = document.querySelector("input").value
	PegaId(inputV)
})