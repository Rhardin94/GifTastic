//Array of actors to create the starter buttons dynamically
let topics = ["daniel radcliffe", "elijah wood", "sarah jessica parker", "martin freeman", "sean bean", "evangeline lily", "brian cranston", "jenna fischer", "kate winslet", "patrick stewart"];
//Function that dynamically creates the starting buttons based on the array above.
function actorButtons() {
	//Removes existing buttons so they are not repeated each time function is called
	$("#buttons").empty();
	$("#buttons").html("<h1> Welcome the Actors onto the Red Carpet!</h1>");
	//For loop that runs the length of topics array
	for (let i = 0; i < topics.length; i++) {
		//Creates new buttons and assigns them to aBtn variable
		let aBtn = $("<button>").attr("class", "actor");
		//Sets the attribute "data-name" to current string of topics array
		aBtn.attr("data-name", topics[i]);
		//Sets the text of each button to the currect string of topics array
		aBtn.text("Welcome, " + topics[i] + "! Who are you wearing?");
		//Appends each button to the buttons div
		$("#buttons").append(aBtn);
	}
};
actorButtons();
//On-click event that fires the ajax request
$(document.body).on("click", ".actor", function () {
	//Assigning actor variable to the data-name attribute of each button
	let actor = $(this).attr("data-name");
	//queryURL used for ajax request
	let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + actor + "&api_key=FTViY2V2MIS19Yl7mzS6P9Y7QUXhJWw0&limit=10";
	//Ajax request
	$.ajax({
		url: queryURL,
		method: "GET",
		//Promise that runs this next function once it retrieves a response
	}).then(function (response) {
		//Logs the response to ensure request is working
		console.log(response)
		//Assigns each response JSON to the results variable
		let results = response.data;
		//For loop that runs through each JSON it receives
		for (let i = 0; i < results.length; i++) {
			//Creates a div and assigns it to gifDiv
			let gifDiv = $("<div>").attr("id", "gifsDiv");
			//Retrieves the rating value from the JSON and assigns it to rating variable
			let rating = results[i].rating;
			let title = results[i].title;
			let pTitle = $("<p>").text("Title: " + title);
			//Creates paragraph tag with text that displays "Rating:" and the rating value retrieved above
			let pRating = $("<p>").text("Rating: " + rating);
			//Assigns a newly made image tag with a src contained inside retrieved JSON
			//gif returns immediately in still state for user manipulation in a later function
			let actorImage = $("<img>").attr("src", results[i].images.fixed_height_still.url);
			//Adding attributes to each img for manipulation later.
			actorImage.attr("data-still", results[i].images.fixed_height_still.url);
			actorImage.attr("data-animate", results[i].images.fixed_height.url);
			actorImage.attr("data-state", "still");
			actorImage.attr("class", "gif");
			//Appends each gif rating and image to the gifDiv
			//Adding the favorite button to each img
			let favButton = $("<button>").text("Add as favorite?");
      favButton.attr("id", "favButton");
			gifDiv.append(actorImage);      
			gifDiv.append(pTitle);
			gifDiv.append(pRating);
			gifDiv.append(favButton);
			//Prepends the gifDiv onto the page, each response above the last
			$("#gifs").prepend(gifDiv);
			//On-click event that adds gifs to favorites div
			$(document.body).on("click", "#favButton", function () {
          $("#favorites").append(gifDiv[i]);
          $(this).hide();
				}), /*Displays if request fails*/
				function (errorMessage) {
					$(gifDiv).text("The request failed:" + errorMessage.code);
				}
		}
	})
});
//On-click event that adds gifs to favorites div
$(document.body).on("click", "#favButton", function () {
	$("#favorites").append($(this));
});
//Function that adds a new actor after user types name and hits submit
$("#add-actor").on("click", function (event) {
	//Prevents form from refreshing the page and submitting data to nowhere
	event.preventDefault();
	//Captures the new actor value that user typed into box
	let newActor = $("#actor-input").val();
	//Prevent button from added empty buttons
	if (($("#actor-input").val() === "")) {
		return false;
	} else {
		//Pushes the new actor into the topics array
		topics.push(newActor);
		//Calls actorButtons function to update new button and so exisiting buttons are not added again
		actorButtons();
		$("#actor-input").val("");
	}
});
//on-click event that lets user play and pause gif at will
$(document.body).on("click", ".gif", function () {
	//Assigns state variable to the value of data-state attribute
	let state = $(this).attr("data-state");
	//If statement that determines if gif is in still state
	if (state === "still") {
		//Changes the source of each image tag from still to animated
		$(this).attr("src", $(this).attr("data-animate"));
		//Changes data-state attribute from still to animate
		$(this).attr("data-state", "animate");
	} else {
		//Returns source of each image to still state
		$(this).attr("src", $(this).attr("data-still"));
		//Returns data-state attribute to still
		$(this).attr("data-state", "still");
	}
});