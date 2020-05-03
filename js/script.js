const baseUrl = "http://www.omdbapi.com/?apikey=7ea00fe1";
const movieUrl = `${baseUrl}&s=Star_wars`;

fetch(movieUrl)
   .then(function (response) {
      return response.json();
   })
   .then(function (json) {
      movieData(json);
   })
   .catch(function (error) {
      displayError(error);
      console.dir(error);
   });

const movieData = (json) => {
   const search = json.Search;
   const movieContainer = document.querySelector(".results");
   let resultsHTML = " ";

   for (let i = 0; i < search.length; i++) {
      resultsHTML += `<div class="col-sm-6 col-md-4 col-lg-3">
                      <div class="card">
                      <img class="image" src="${search[i].Poster}" alt="${search[i].Title}" />
                      <div class="details">
                      <h4 class="name">${search[i].Title}</h4>
                      <p><b>Year: </b>${search[i].Year}</p>
                      <p><b><a href="https://www.imdb.com/title/${search[i].imdbID}" target="_blank">IMDb </a></b></p>
                      <a class="btn btn-primary" href="details.html?id=${search[i].imdbID}">Details</a>
                      </div>
                      </div>
                      </div>`;
   }
   movieContainer.innerHTML = resultsHTML;
};

// Display error in heading element if an error occurs
const displayError = () => {
   const errorMessage = document.querySelector(".content");
   const resultsHTML = `<h1>Looks something went wrong on our end, try again later</h1>`;
   errorMessage.innerHTML = resultsHTML;
};
