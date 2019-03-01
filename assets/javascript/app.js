//Array of actors to create the starter buttons dynamically
let actorsArray = ["ian mckellen", "elijah wood", "viggo mortensen", "orlando bloom", "sean astin", "dominic monaghan", "billy boyd", "john rhys-davies", "cate blanchett", "liv tyler"];
//Function that dynamically creates the starting buttons based on the array above.
function actorButtons() {
	$("#buttons").empty();
	for (let i = 0; i < actorsArray.length; i++) {
		let aBtn = $("<button>").attr("class", "actor");
		aBtn.attr("data-name", actorsArray[i]);
		aBtn.text(actorsArray[i]);
		$("#buttons").append(aBtn);
	}
}
//Function that adds a new actor after user types name and hits submit
$("#add-actor").on("click", function(event) {
	event.preventDefault();
	let newActor = $("#actor-input").val().trim();
	actorsArray.push(newActor);
	actorButtons();
})
actorButtons();
//On-click event that fires the ajax request
$("button").on("click", function () {
	let actor = $(this).attr("data-name");
	let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + actor + "&api_key=FTViY2V2MIS19Yl7mzS6P9Y7QUXhJWw0&limit=10";
	$.ajax({
		url: queryURL,
		method: "GET",
	}).then(function(response) {
		console.log(response)
		let results = response.data;
		for (let i = 0; i < results.length; i++) {
			let gifDiv = $("<div>");
			let rating = results[i].rating;
			let p = $("<p>").text("Rating: " + rating);
			let actorImage = $("<img>").attr("src", results[i].images.fixed_height.url);
			gifDiv.append(p);
			gifDiv.append(actorImage);
			$("#gifs").prepend(gifDiv);
		}
	})
})