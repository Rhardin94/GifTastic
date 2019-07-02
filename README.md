# GifTastic
### Deployed site found here: https://rhardin94.github.io/GifTastic/
## Overview
Giftastic is a single-page app dynamically poplated with gifs from the Giphy API via jQuery. The user is presented with several buttons containing the names of famous actors. When the user clicks a button, giphy returns ten gifs using the actor's name as a search parameter, and populates them on the page. The user may also add an actor via the add actor input field if they wish to return gifs not already available. If the user wishes to save a gif for future viewing, the may add any gif to the favorites section.
## How to use

When first loading up the site, the user is presented with the home page without any gifs present.

![home page](/assets/screenshots/home.jpg)

To populate the site with gifs, the user must click one of the buttons at the top of the page.

![actor buttons](/assets/screenshots/buttons.jpg)

If the user wants to add an actor button to the list they may do so with the add actor form.

![add actor form](/assets/screenshots/add.jpg)

After clicking the add actor button, the new actor is added to the existing actor buttons.

![new actor button](/assets/screenshots/new.jpg)

Once the user has clicked on an existing actor's button, the page will populate with gifs.

![gifs](/assets/screenshots/gifs.jpg)

Each gif is intially rendered in its static state, but the user may click on the gif to alternate between static and animated.

![animated gif](/assets/screenshots/animated.jpg)

If the user wishes to save a gif to their favorites section they may click the 'Add Favorite' button.

![add favorite button](/assets/screenshots/save.jpg)

Then the gif will be added to the favorites section.

![favorites section with gif added](/assets/screenshots/favorite.jpg)

The user may also clear gifs from their favorite section to start fresh with the 'Clear Favorite' Button.

![clear favorite button](/assets/screenshots/clear.jpg)

## Tech
* [jQuery](https://jquery.com/)
