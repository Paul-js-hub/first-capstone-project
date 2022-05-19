let listItems = document.querySelector(".list-items");
let navContainer = document.querySelector(".nav-container");
let listItem = document.querySelector(".list-item");
let hamburger = document.querySelector(".hamburger-container");
let bars = document.querySelector(".fa-bars");
let closeIcon = document.querySelector(".fa-times");

function toggleMenuBar() {
  if (listItems.classList.contains("show-items")) {
    listItems.classList.remove("show-items", "nav-items");
    closeIcon.style.display = "none";
    navContainer.style.display = "none";
    bars.style.display = "block";
  } else {
    listItems.classList.add("show-items", "nav-items");
    closeIcon.style.display = "block";
    navContainer.style.display = "block";
    bars.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenuBar);
closeIcon.addEventListener("click", toggleMenuBar);

let speakersObj = [
  {
    image: "images/Winnie.png",
    name: "Winnie Mwango",
    status: "Frontend Developer at Google",
    description:
      "Outstanding Speaker with more than 5 years of experience in Fronted Development.",
  },
  {
    image: "images/Paul.png",
    name: "Paul Onchera",
    status: "Software Developer at Microsoft",
    description:
      "Great Speaker with more than 6 years of experience in Software Development.",
  },
  {
    image: "images/Daisy.png",
    name: "Daisy Monroe",
    status: "Backend Developer at AirBnB",
    description:
      "Great Speaker with more than 6 years of experience in Backend Development.",
  },
  {
    image: "images/Daisy.png",
    name: "Daisy Monroe",
    status: "Backend Developer at AirBnB",
    description:
      "Great Speaker with more than 6 years of experience in Backend Development.",
  },
];

let speakersOutputTemplate = '';
const speakers = document.getElementById("speakers-id");

for(let i = 0; i < 2; i += 1){
  speakersOutputTemplate += `
  <div class="speaker">
    <div class="speaker-image">
    <img
        src="${speakersObj[i].image}"
        alt="project-image"
    />
    </div>
    <div class="speaker-details">
    <h2 class="h2 speaker-header">${speakersObj[i].name}</h2>
      <h3 class="h3 speaker-status">
        ${speakersObj[i].status}
      </h3>
      <hr class="hr-line"/>
      <h3 class="h3 speaker-description">
        ${speakersObj[i].description}
      </h3>
    </div>
    </div>
  `
}

for(let i = 2; i < speakersObj.length; i += 1){
  speakersOutputTemplate += `
  <div class="speaker" id="expand">
    <div class="speaker-image">
    <img
        src="${speakersObj[i].image}"
        alt="project-image"
    />
    </div>
    <div class="speaker-details">
    <h2 class="h2 speaker-header">${speakersObj[i].name}</h2>
      <h3 class="h3 speaker-status">
        ${speakersObj[i].status}
      </h3>
      <hr class="hr-line"/>
      <h3 class="h3 speaker-description">
        ${speakersObj[i].description}
      </h3>
    </div>
    </div>
  `
}

speakers.innerHTML = speakersOutputTemplate;
const showMore = document.querySelector(".more");
const speaker = document.querySelectorAll(".speaker");
const showMoreList = () => {
  if (speaker[2].id === "expand") {
    for (let i = 2; i < speaker.length; i += 1) {
      speaker[i].removeAttribute("id");
    }
    showMore.innerHTML = `LESS
        <span class="show-less"><i class="fa fa-angle-up" aria-hidden="true"></i
        ></span>`;
  } else {
    for (let i = 2; i < speaker.length; i += 1) {
      speaker[i].id = "expand";
    }
    showMore.innerHTML = `MORE
        <span><i class="fa fa-chevron-down" aria-hidden="true"></i>
        </span></button>`;
  }
};

showMore.onclick = showMoreList;
