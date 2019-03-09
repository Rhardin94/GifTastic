# GifTastic
## Giftastic is an ajax-request-based project that uses the giphy api to retrieve data. 
* The user submits the request by clicking on one of several dynamically created buttons at the top of the page that retrieves and appends 10 static gifs to the page, upon each button click, 10 more gifs are returned and prepended above the previous gifs. 
* The user may also add a button to the top of the page to search for a specific desired response that then appends dynamically to the page. 
    * Upon retrieval of the gifs, the user may click on each gif, once to change to the animated state, and click again to return to its static state. 
    * Each gif can also be added to the favorites section that appears at the top of the page once populated with multiple gifs. (The gifs are stored in local storage and are supposed to remain in the favorites section until cleared, even when page is refreshed)
    * The user can clear their favorites section by clicking on the clear button underneath each given contained there.