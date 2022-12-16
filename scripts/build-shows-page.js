let shows = [
    { date: "Mon Sept 06 2021", venue: "Ronald Lane", location:"San Francisco, CA"},
    { date: "Tue Sept 21 2021", venue: "Pier 3 East", location:"San Francisco, CA"},
    { date: "Fri Oct 15 2021", venue: "View Lounge", location:"San Francisco, CA"},
    { date: "Sat Nov 06 2021", venue: "Hyatt Agency", location:"San Francisco, CA"},
    { date: "Fri Nov 26 2021", venue: "Moscow Center", location:"San Francisco, CA"},
    { date: "Wed Dec 15 2021", venue: "Press Club", location:"San Francisco, CA"},
  ];

  function displayHeaders() {

    const cardEl = document.createElement("article");
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

    const cardEl = document.createElement("article");
    cardEl.classList.add("shows__listing");

    const dateHeaderEl = document.createElement("h3");
    dateHeaderEl.innerText = "DATE";
    dateHeaderEl.classList.add("shows__listing--header");

    const dateEl = document.createElement("h2");
    dateEl.classList.add("shows__listing--date");
    dateEl.innerText = show.date;

    const venueHeaderEl = document.createElement("h3");
    venueHeaderEl.innerText = "VENUE";
    venueHeaderEl.classList.add("shows__listing--header");

    const venueEl = document.createElement("h2");
    venueEl.classList.add("shows__listing--venue");
    venueEl.innerText = show.venue;

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


  function renderShows() {

    const myShowsEl = document.querySelector("#my-shows");

    myShowsEl.innerHTML = "";

    myShowsEl.appendChild(displayHeaders());

    for (let i = 0; i < shows.length; i++) {
        myShowsEl.appendChild(displayShows(shows[i]));
    }
}

renderShows();


