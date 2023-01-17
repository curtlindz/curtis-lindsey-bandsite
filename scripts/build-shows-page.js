axios
  .get('https://project-1-api.herokuapp.com/showdates?api_key=${api_key}')
  .then((response) => {
    const shows = response.data;
    console.log(shows);
    function displayHeaders() {

      const cardEl = document.createElement("div");
      cardEl.classList.add("shows__heading");
  
      const dateHeaderEl = document.createElement("h3");
      dateHeaderEl.innerText = "DATE";
      dateHeaderEl.classList.add("shows__heading--date");
  
      const placeHeaderEl = document.createElement("h3");
      placeHeaderEl.innerText = "VENUE";
      placeHeaderEl.classList.add("shows__heading--place");
  
      const locationHeaderEl = document.createElement("h3");
      locationHeaderEl.innerText = "LOCATION";
      locationHeaderEl.classList.add("shows__heading--location");
  
      const buttonHeaderEl = document.createElement("h3");
      buttonHeaderEl.innerText = "";
      buttonHeaderEl.classList.add("shows__heading--button");
  
      cardEl.appendChild(dateHeaderEl);
      cardEl.appendChild(placeHeaderEl);
      cardEl.appendChild(locationHeaderEl);
      cardEl.appendChild(buttonHeaderEl);
    
      return cardEl;
    }
  
  
    function displayShows(show) {

      const date = new Date (show.date);
      const dateFormatted = date.toDateString();
      console.log(dateFormatted);
  
      const cardEl = document.createElement("article");
      cardEl.classList.add("shows__listing");
  
      const dateHeaderEl = document.createElement("h3");
      dateHeaderEl.innerText = "DATE";
      dateHeaderEl.classList.add("shows__listing--header");
  
      const dateEl = document.createElement("h2");
      dateEl.classList.add("shows__listing--date");
      dateEl.innerText = dateFormatted;
  
      const placeHeaderEl = document.createElement("h3");
      placeHeaderEl.innerText = "VENUE";
      placeHeaderEl.classList.add("shows__listing--header");
  
      const placeEl = document.createElement("h2");
      placeEl.classList.add("shows__listing--place");
      placeEl.innerText = show.place;
  
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
      cardEl.appendChild(placeHeaderEl);
      cardEl.appendChild(placeEl);
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

