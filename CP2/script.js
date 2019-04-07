//CURRENT WEATHER
document.getElementById("wordSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("wordInput").value;
  const APIKEY = "0496fc79-9dea-432b-9162-5539a0e4e639";
  if (value === "") {
    console.log(value);
    return;
  }
  else {
    const url = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/" + value + "?key=" + APIKEY;
    fetch(url).then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";
      //parsedData = JSON.parse(data);
      results += '<h2>Definition of ' + value + "</h2>";
      results += "<br>" + "<p>";
      for (let i=0; i < json[0].shortdef.length; i++) {
        results += (i+1) + ".     "  + json[0].shortdef[i] + "<br>"
      }
      console.log(json[0].shortdef);
      document.getElementById("wordResults").innerHTML = results;
      delete json
    });

  }
});
