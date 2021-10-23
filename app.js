
	fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations/30')
	.then(function(resp) { return resp.json() })
	.then(function(data) {
		/*let population = data.location.country_population;
		let update = data.location.last_updated;
		let confirmedCases = data.location.latest.confirmed;
		let deaths = data.location.latest.deaths;

		document.getElementById('population').innerHTML = population.toLocaleString('en');
		document.getElementById('update').innerHTML = update.substr(0, 10);
		document.getElementById('cases').innerHTML = confirmedCases.toLocaleString('en');
		document.getElementById('deaths').innerHTML = deaths.toLocaleString('en');
		document.getElementById('percent').innerHTML = ((Number(deaths)/Number(confirmedCases))*100).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "%"; */
     
        console.log(data)
        console.log(data.location.country)
		//console.log(data.locations[48].province)
		//console.log(data.locations[30].id)
		printDados(data)
		Tabela(data)

	})
	.catch(function() {
		console.log("error");
	})

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


	setconfirmed(result.location.latest.confirmed)
	setdeaths(result.location.latest.deaths)
	setpopulation(result.location.country_population)
	setupadated(result.location.last_updated)
}
	

function Tabela(dados){
  var tabela = document.getElementById("tbody");
  

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

} 