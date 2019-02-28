let animalsArray = ["cat", "dog", "bird", "turtle", "rabbit", "gerbil", "hamster", "lizard", ""]
function animalButtons() {

}
//On-click event that fires the ajax request
$("button").on("click", function () {
	let animal = $(this).attr("data-animal");
	let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=FTViY2V2MIS19Yl7mzS6P9Y7QUXhJWw0&limit=10";
	$.ajax({
		url: queryURL,
		method: "GET",
	}).then(function(response) {
		const results = response.data;
		for (let i = 0; i < results.length; i++) {
			let gifDiv = $("<div>");
			let rating = results[i].rating;
			let p = $("<p>").text("Rating: " + rating);
			let animalImage = $("<img>").attr("src", results[i].images.fixed_height.url);
			gifDiv.prepend(p);
			gifDiv.prepend(animalImage);
			$("#gifs").prepend(gifDiv);
		}
	})
})