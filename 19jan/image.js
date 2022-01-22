var reviews = [
  {
      id: 1,
      person: "Reyhan Sina",
      profession: "Software Architect",
      img: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 2,
      person: "Layla Marcus",
      profession: "Web Developer",
      img: "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 3,
      person: "Emir Tahrun",
      profession: "Full Stact Developer",
      img: "https://images.pexels.com/photos/716411/pexels-photo-716411.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 4,
      person: "Sanem Kurlos",
      profession: "Training Engineer",
      img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 5,
      person: "Safar Barjus",
      profession: "Java Developer",
      img: "https://images.pexels.com/photos/7518945/pexels-photo-7518945.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 6,
      person: "Nihan Enreo",
      profession: "Software Engineer",
      img: "https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    }
];
var imgElement = document.getElementById("img");
var person = document.getElementById("person");
var profession = document.getElementById("profession");
var details = document.getElementById("details");
var prevBtn = document.getElementById("prev");
var nextBtn = document.getElementById("next");
var randomBtn = document.getElementById("read");
var social = document.getElementById("social")
var currentIndex = 0;
prevBtn.addEventListener("click", prevClick);
nextBtn.addEventListener("click", nextClick);
randomBtn.addEventListener("click", randomaize);
function prevClick() {
  if (currentIndex === 0) {
    currentIndex = reviews.length - 1;
  } else {
    currentIndex--;
  }
  console.log(currentIndex);
  updateUserDetails();
}
function nextClick() {
  if (currentIndex === reviews.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  console.log(currentIndex);
  updateUserDetails();
}
function randomaize() {
  currentIndex = Math.floor(Math.random() * reviews.length);
  console.log(currentIndex);
  updateUserDetails();
}
function updateUserDetails() {
  imgElement.src = reviews[currentIndex].img;
  person.innerText = reviews[currentIndex].person;
  profession.innerText = reviews[currentIndex].profession;
  details.innerText = reviews[currentIndex].details;
  social.innerText = reviews[currentIndex].social;
}