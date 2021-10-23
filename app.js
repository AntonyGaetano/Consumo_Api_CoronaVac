//window.onload = function() {
	//getCovidStats();
//}

//function getCovidStats() {
	fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations/')
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
        console.log(data.locations[30].country)
		console.log(data.locations[48].province)
		console.log(data.locations[30].id)
		Tabela(data)

	})
	.catch(function() {
		console.log("error");
	})
	//setTimeout(getCovidStats, 43200000) // update every 12 hours
//}

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