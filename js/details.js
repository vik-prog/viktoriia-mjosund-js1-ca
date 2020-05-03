const queryString = document.location.search;
const movie = new URLSearchParams(queryString);

let id;

if (movie.has("id")) {
   id = movie.get("id");
} else {
   document.location.href = "/";
}

const baseUrl = "http://www.omdbapi.com/?apikey=7ea00fe1";
const movieUrl = `${baseUrl}&i=`;
const detailsUrl = `${movieUrl}${id}`;

fetch(detailsUrl)
   .then(function (response) {
      return response.json();
   })
   .then(function (json) {
      createDetails(json);
   })
   .catch(function (error) {
      displayError(error);
      console.dir(error);
   });

const createDetails = (details) => {
   const movieContainer = document.querySelector(".detail-container");
   const detailsHTML = `<img class="details-image" src="${details.Poster}" alt="${details.Title}" />
                      <div class="detail-details">
                      <h1>${details.Title}</h1>
                      <p>Year: <span class="value" id="propertyYear">${details.Year}</span></p>
                      <p>Released: <span class="value" id="propertyReleased">${details.Released}</span></p>
                      <p>Runtime: <span class="value" id="propertyRuntime">${details.Runtime}</span></p>
                      <p>Genre: <span class="value" id="propertyGenre">${details.Genre}</span></p>
                      <p>Director: <span class="value" id="propertyDirector">${details.Director}</span></p>
                      <p>Actors: <span class="value" id="propertyActors">${details.Actors}</span></p>
                      <p>Awards: <span class="value" id="propertyAwards">${details.Awards}</span></p>
                      <p>IMDb Rating: <span class="value" id="propertyRating">${details.imdbRating}</span></p>
                      <p>Plot: <span class="value" id="propertyPlot">${details.Plot}</span></p>
                      </div>`;
   movieContainer.innerHTML = detailsHTML;
   // change the page title
   document.title = details.Title + " | " + document.title;
};

// Display error in heading element if an error occurs
const displayError = () => {
   const errorMessage = document.querySelector(".content");
   const resultsHTML = `<h1>Looks something went wrong on our end, try again later</h1>`;
   errorMessage.innerHTML = resultsHTML;
};
