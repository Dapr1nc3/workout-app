// FETCH EXERCISE DB API DATA. ALL EXERCISES THAT ONLY REQUIRE  NO EQUIPMENT
var workout = function (target) {
	var API_Key = "463cbaf394msh91dc3d7f346a349p1d3252jsnbb618bc09a1d";

	var apiUrl = `https://exercisedb.p.rapidapi.com/exercises/target/${target}?rapidapi-key=${API_Key}`;

	fetch(apiUrl).then(function (response) {
		if (response.ok) {
			response.json().then(function (data) {
				// console.log(data);
				exerciseArray(data);
			});
		} else {
			alert("Error");
		}
	});
};

// FILTERS BODY WEIGHT EXERCISES BY TARGET MUSCLE
var exerciseArray = function (data) {
	var bodyEquip = "body weight";

	var bodyWeightArray = [];

	for (let i = 0; i < data.length; i++) {
		if (data[i].equipment === bodyEquip) {
			bodyWeightArray.push(data[i]);
		}
	}

    bodyWeightArray.splice(10);
    
    console.log(bodyWeightArray);

	displayExercises(bodyWeightArray);

	

	// if (data[0].equipment === bodyEquip) {

	//     var carouselContainerEL = document.querySelector("#exercise_carousel_container")

	//     var exerciseCardContainer = document.createElement("div")

	//     exerciseCardContainer.classList = "carousel-item active"

	//     carouselContainerEL.appendChild(exerciseCardContainer)

	//     var nameEl = document.createElement("h1")

	//     nameEl.classList = "text-center"

	//     nameEl.textContent = data[0].name

	//     exerciseCardContainer.appendChild(nameEl)

	//     var gifUrl = data[0].gifUrl;

	//     var demoGifEl = document.createElement("img");

	//     demoGifEl.classList = "d-block img-fluid"

	//     demoGifEl.setAttribute("src", gifUrl);

	//     exerciseCardContainer.appendChild(demoGifEl)
	// }

	// for (let i = 1; i < 5; i++) {

	// 	if (data[i].equipment === bodyEquip) {
	// 		// console.log(data[i]);

	//         var carouselContainerEL = document.querySelector("#exercise_carousel_container")

	//         var exerciseCardContainer = document.createElement("div")

	//         exerciseCardContainer.classList = "carousel-item"

	//         carouselContainerEL.appendChild(exerciseCardContainer)

	//         var nameEl = document.createElement("h1")

	//         nameEl.classList = "text-center"

	//         nameEl.textContent = data[i].name

	//         exerciseCardContainer.appendChild(nameEl)

	//         var gifUrl = data[i].gifUrl;

	//         var demoGifEl = document.createElement("img");

	//         demoGifEl.classList = "d-block img-fluid"

	//         demoGifEl.setAttribute("src", gifUrl);

	//         exerciseCardContainer.appendChild(demoGifEl)

	// 	}

	// }
};

var displayExercises = function (exercises) {

    if (exercises[0]) {
        var carouselContainerEL = document.querySelector(
            "#exercise_carousel_container"
        );

        var exerciseCardContainer = document.createElement("div");

        exerciseCardContainer.classList = "carousel-item active";

        carouselContainerEL.appendChild(exerciseCardContainer);

        var nameEl = document.createElement("h1");

        nameEl.classList = "text-center";

        nameEl.textContent = exercises[0].name;

        exerciseCardContainer.appendChild(nameEl);

        var gifUrl = exercises[0].gifUrl;

        var demoGifEl = document.createElement("img");

        demoGifEl.classList = "d-block img-fluid";

        demoGifEl.setAttribute("src", gifUrl);

        exerciseCardContainer.appendChild(demoGifEl);
    }
	for (let i = 1; i < exercises.length; i++) {
		  {
			var carouselContainerEL = document.querySelector(
				"#exercise_carousel_container"
			);

			var exerciseCardContainer = document.createElement("div");

			exerciseCardContainer.classList = "carousel-item";

			carouselContainerEL.appendChild(exerciseCardContainer);

			var nameEl = document.createElement("h1");

			nameEl.classList = "text-center";

			nameEl.textContent = exercises[i].name;

			exerciseCardContainer.appendChild(nameEl);

			var gifUrl = exercises[i].gifUrl;

			var demoGifEl = document.createElement("img");

			demoGifEl.classList = "d-block img-fluid";

			demoGifEl.setAttribute("src", gifUrl);

			exerciseCardContainer.appendChild(demoGifEl);
		}
	}
};

workout("abs");
