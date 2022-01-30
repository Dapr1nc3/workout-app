


// FETCH EXERCISE DB API DATA. ALL EXERCISES THAT ONLY REQUIRE  NO EQUIPMENT
var workout = function () {
	var API_Key = "463cbaf394msh91dc3d7f346a349p1d3252jsnbb618bc09a1d";

	var apiUrl = `https://exercisedb.p.rapidapi.com/exercises/equipment/body%20weight?rapidapi-key=${API_Key}`;

	fetch(apiUrl).then(function (response) {
		if (response.ok) {
			response.json().then(function (data) {
				// console.log(data);
                selectTargetMuscle(data);
			});
		} else {
			alert("Error");
		}
	});
};


// FILTERS BODY WEIGHT EXERCISES BY TARGET MUSCLE 
var selectTargetMuscle = function (data) {

    var targetMuscle = "abs"

    if (data[0].target === targetMuscle) {
        var carouselContainerEL = document.querySelector("#exercise_carousel_container")

        var exerciseCardContainer = document.createElement("div")

        exerciseCardContainer.classList = "carousel-item active"

        carouselContainerEL.appendChild(exerciseCardContainer)

        var nameEl = document.createElement("h1")

        nameEl.classList = "text-center"

        nameEl.textContent = data[0].name

        exerciseCardContainer.appendChild(nameEl)

        var gifUrl = data[0].gifUrl;

        var demoGifEl = document.createElement("img");
        
        demoGifEl.classList = "rounded mx-auto d-block p-5"

        demoGifEl.setAttribute("src", gifUrl);
        
        exerciseCardContainer.appendChild(demoGifEl)
    }

    for (let i = 1; i < 5; i++) {
        


		if (data[i].target === targetMuscle) {
			// console.log(data[i]);

            var carouselContainerEL = document.querySelector("#exercise_carousel_container")

            var exerciseCardContainer = document.createElement("div")

            exerciseCardContainer.classList = "carousel-item"

            carouselContainerEL.appendChild(exerciseCardContainer)

            var nameEl = document.createElement("h1")

            nameEl.classList = "text-center"

            nameEl.textContent = data[i].name

            exerciseCardContainer.appendChild(nameEl)

            var gifUrl = data[i].gifUrl;

            var demoGifEl = document.createElement("img");
            
            demoGifEl.classList = "rounded mx-auto d-block p-5"

            demoGifEl.setAttribute("src", gifUrl);
            
            exerciseCardContainer.appendChild(demoGifEl)

		}

	}
};

// workout();