let comments = [
    { name: "Connor Walton", date: "02/17/2021", comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains." },
    { name: "Emilie Beach", date: "01/09/2021", comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day." },
    { name: "Miles Acosta", date: "12/20/2020", comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough." }
  ];

  function displayComment(comment) {
    const cardEl = document.createElement("article");
    cardEl.classList.add("panel__comment");

    const avatarEl = document.createElement("img");
    avatarEl.classList.add("panel__comment--avatar");

    const detailsEl = document.createElement("div");

    const headingEl = document.createElement("div");
    headingEl.classList.add("panel__comment--details");

    const nameEl = document.createElement("h3");
    nameEl.innerText = comment.name;
  
    const dateEl = document.createElement("span");
    dateEl.innerText = comment.date;
  
    const commentEl = document.createElement("span");
    commentEl.innerText = comment.comment;
  
    cardEl.appendChild(avatarEl);
    cardEl.appendChild(detailsEl);
    detailsEl.appendChild(headingEl);
    headingEl.appendChild(nameEl);
    headingEl.appendChild(dateEl);
    detailsEl.appendChild(commentEl);
  
    return cardEl;
  }


function renderComments() {

    const myCommentsEl = document.querySelector("#my-comments");

    myCommentsEl.innerHTML = "";

    for (let i = 0; i < comments.length; i++) {
        myCommentsEl.appendChild(displayComment(comments[i]));
    }
}


const formEl = document.querySelector("#comment-form");

const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

const formattedToday = mm + '/' + dd + '/' + yyyy;

console.log(formattedToday);


function formSubmitHandler(e) {
  e.preventDefault();

  if (e.target.fullName.value === null) {
    alert("Please agree to the agreement first.");
    return;
  }

  const commentData = {
    name: e.target.fullName.value,
    date: formattedToday,
    comment: e.target.comment.value,
  };

  const formSubmission = {
    fullName: e.target.fullName.value,
    date: formattedToday,
    comment: e.target.comment.value,
  };

  console.log(formSubmission);

  formEl.reset();
  comments.unshift(commentData);
  renderComments();
}

formEl.addEventListener("submit", formSubmitHandler);

renderComments();