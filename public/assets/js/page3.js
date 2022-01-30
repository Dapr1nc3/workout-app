


// FETCH EXERCISE DB API DATA. ALL EXERCISES THAT ONLY REQUIRE  NO EQUIPMENT
var workout = function () {
	var API_Key = "463cbaf394msh91dc3d7f346a349p1d3252jsnbb618bc09a1d";

	var apiUrl = `https://exercisedb.p.rapidapi.com/exercises/equipment/body%20weight?rapidapi-key=${API_Key}`;

	fetch(apiUrl).then(function (response) {
		if (response.ok) {
			response.json().then(function (data) {
				// console.log(data);
			});
		} else {
			alert("Error");
		}
	});
};

