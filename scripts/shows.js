function displayHeaders() {

  const cardEl = document.createElement("div");
  cardEl.classList.add("shows__heading");

  const dateHeaderEl = document.createElement("h3");
  dateHeaderEl.innerText = "DATE";
  dateHeaderEl.classList.add("shows__heading--date");

  const venueHeaderEl = document.createElement("h3");
  venueHeaderEl.innerText = "VENUE";
  venueHeaderEl.classList.add("shows__heading--venue");

  const locationHeaderEl = document.createElement("h3");
  locationHeaderEl.innerText = "LOCATION";
  locationHeaderEl.classList.add("shows__heading--location");

  const buttonHeaderEl = document.createElement("h3");
  buttonHeaderEl.innerText = "";
  buttonHeaderEl.classList.add("shows__heading--button");

  cardEl.appendChild(dateHeaderEl);
  cardEl.appendChild(venueHeaderEl);
  cardEl.appendChild(locationHeaderEl);
  cardEl.appendChild(buttonHeaderEl);

  return cardEl;
}

function displayShows(show) {


  const date = new Date (show.date);
  const dateFormatted = date.toDateString();

  const cardEl = document.createElement("article");
  cardEl.classList.add("shows__listing");

  const dateHeaderEl = document.createElement("h3");
  dateHeaderEl.innerText = "DATE";
  dateHeaderEl.classList.add("shows__listing--header");

  const dateEl = document.createElement("h2");
  dateEl.classList.add("shows__listing--date");
  dateEl.innerText = dateFormatted;

  const venueHeaderEl = document.createElement("h3");
  venueHeaderEl.innerText = "VENUE";
  venueHeaderEl.classList.add("shows__listing--header");

  const venueEl = document.createElement("h2");
  venueEl.classList.add("shows__listing--venue");
  venueEl.innerText = show.place;

  const locationHeaderEl = document.createElement("h3");
  locationHeaderEl.innerText = "LOCATION";
  locationHeaderEl.classList.add("shows__listing--header");

  const locationEl = document.createElement("h2");
  locationEl.classList.add("shows__listing--location");
  locationEl.innerText = show.location;

  const buttonEl = document.createElement("button");
  buttonEl.classList.add("shows__listing--button");
  buttonEl.innerText = "BUY TICKETS";


  cardEl.appendChild(dateHeaderEl);
  cardEl.appendChild(dateEl);
  cardEl.appendChild(venueHeaderEl);
  cardEl.appendChild(venueEl);
  cardEl.appendChild(locationHeaderEl);
  cardEl.appendChild(locationEl);
  cardEl.appendChild(buttonEl);

  return cardEl;
}





axios
  .get('https://project-1-api.herokuapp.com/showdates?api_key=${api_key}')
  .then((response) => {

const shows = response.data;

function renderShows() {

  const myShowsEl = document.querySelector("#my-shows");

  myShowsEl.innerHTML = "";

  myShowsEl.appendChild(displayHeaders());

  for (let i = 0; i < shows.length; i++) {
      myShowsEl.appendChild(displayShows(shows[i]));
  }
}

renderShows();

let showItems = document.querySelectorAll("#my-shows > article");

console.log(showItems);

for (let article of showItems) {
  
  article.addEventListener("click", function(){

    for (let article of showItems) {
      article.classList.remove('active');
      console.log('class removed');
    }
    
    this.classList.add('active');
    console.log('class added');
  });
  
}

}
).catch((error) => {
  console.log(error);
}
);
