// $(document).ready(function () {});
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

// ON CLICK EVENT ATTACHED TO HTML SEARCH FILTER BUTTONS
var targetMuscleExercises = function () {
  var checkedTargetMuscle = document.querySelector(
    'input[name="target_muscle"]:checked'
  ).value;

   workout(checkedTargetMuscle);
};

// FILTERS OUT BODY WEIGHT EXERCISES INTO A NEW ARRAY
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
};

// APPENDS GIFS INTO CAROUSEL ON THE PAGE (FIRST ONE NEEDS TO BE "ACTIVE")

var displayExercises = function (exercises) {
  var carouselContainerEL = document.querySelector(
    "#exercise_carousel_container"
  );

  carouselContainerEL.innerHTML = "";

  if (exercises[0]) {
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

async function logout() {
  const response = await fetch('/api/users/logout', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('#logout').addEventListener('click', logout);