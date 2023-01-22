// creating empty comment array
let comments = [];


// variable for form
const formEl = document.querySelector("#comment-form");


// creating new date variable
const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

const formattedToday = mm + '/' + dd + '/' + yyyy;


//form submission function
function formSubmitHandler(e) {
  e.preventDefault();
  if (e.target.fullName.value == "") {
    alert("Name must be filled out");
    return false;
  }

  if (e.target.comment.value == "") {
    alert("Comment must be filled out");
    return false;
  }

  const currentDate = new Date();
  const commentData = {
    name: e.target.fullName.value,
    timestamp: currentDate,
    comment: e.target.comment.value,
  };


axios
  .post(`https://project-1-api.herokuapp.com/comments?api_key=${api_key}`, 
  {
    name: commentData.name,
    comment: commentData.comment,
  })
  .then((response) => {
    comments.push(response.data);
  })
  .then((res) => {
    renderComments();
  })
  .catch((error) => {
    console.log(error);
  });

  formEl.reset();
  renderComments();
}

formEl.addEventListener("submit", formSubmitHandler);
renderComments();


//display comments
function displayComment(comment) {

  const date = new Date (comment.timestamp);
  const dateFormatted = date.toLocaleDateString();

  const cardEl = document.createElement("article");
  cardEl.classList.add("panel__comment");

  const avatarEl = document.createElement("img");
  avatarEl.classList.add("panel__comment--avatar");

  const detailsEl = document.createElement("div");
  detailsEl.classList.add("panel__comment--container");

  const headingEl = document.createElement("div");
  headingEl.classList.add("panel__comment--details");

  const nameEl = document.createElement("h3");
  nameEl.innerText = comment.name;

  const dateEl = document.createElement("span");
  dateEl.innerText = dateFormatted;

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

// function to render comments to page
function renderComments() {

  const myCommentsEl = document.querySelector("#my-comments");

  myCommentsEl.innerHTML = "";

  comments.sort((a,b) => b.timestamp - a.timestamp);

  for (let i = 0; i < comments.length; i++) {
      myCommentsEl.appendChild(displayComment(comments[i]));
  }
}

// function to get comment data
function getCommentData() {
  axios
  .get(`https://project-1-api.herokuapp.com/comments?api_key=${api_key}`)
  .then((response) => {
    const commentsData = response.data;
    
    for (let i = 0; i < commentsData.length;i++) {
      comments.push(commentsData[i]);
    }

    renderComments();

  }
  ).catch((error) => {
    console.log(error);
  }
  );
}

getCommentData();
