// To render the footer content in real-time
const navi = document.querySelector(".navigation");
const showmenu = document.querySelector("#menu");

showmenu.addEventListener('click', function() {
    navi.classList.toggle('show');
    showmenu.classList.toggle('show');

})

document.getElementById("currentyear").textContent = new Date().getUTCFullYear();
document.getElementById("lastmodified").textContent = "lastmodified: " + document.lastModified;



const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  {
    templeName: "Calgary Alberta Temple",
    location: "Canada",
    dedicated: "2021, October,28",
    area:33000,
    imageUrl:"https://upload.wikimedia.org/wikipedia/commons/0/07/Calgary_alberta_temple.jpg"

  },
  {
    templeName:"Veracruz Mexico Temple",
    location:"Boca del Rio, Veracruz, Mexico",
    dedicated:"2000, July, 9",
    area:10700,
    imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Templo_de_Veracruz_by_Sr.Patronio_cropped.jpg/500px-Templo_de_Veracruz_by_Sr.Patronio_cropped.jpg"
  },
  {
    templeName:"Guatemala City Guatemala Temple",
    location: "Guatemala City, Guatemala",
    dedicated:"1984, June,9",
    area: 12000,
    imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Guatemala_City_Temple_by_rkuhnau.jpg/500px-Guatemala_City_Temple_by_rkuhnau.jpg"
  }
];

CreateTempleCard();
// Temples larger than 90000 square feets
const largeArea = document.querySelector("#large-than-90000");
largeArea.addEventListener("click", () =>{
  const filteredTemples = temples.filter(temple => temple.area > 90000);
  CreateTempleCard(filteredTemples);
});
// Temples older than 1900
const oldTemples = document.querySelector("#before-1900");
oldTemples.addEventListener("click", () =>{
  const filtered = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year < 1900;
  });
  CreateTempleCard(filtered);
});

// Temples dedicated after year 2000
const recentTemples = document.querySelector("#after-2000");
recentTemples.addEventListener("click", () =>{
  filteredRecentTemples = temples.filter(temple =>{
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year > 2000;
  });
  CreateTempleCard(filteredRecentTemples);
});

// Temples with area smaller than 10000 suqre feets
const smallArea = document.querySelector("#smaller-than-10000");
smallArea.addEventListener("click", () =>{
  const filteredTempleArea = temples.filter(temple => temple.area < 10000);
  CreateTempleCard(filteredTempleArea);
});

// To display all the temples
const home = document.querySelector("#home");
home.addEventListener("click", () =>{
  CreateTempleCard();
});

// Function to create temple card
function CreateTempleCard(filteredList= temples){
  document.querySelector(".fig-image").innerHTML = "";
    filteredList.forEach(temple =>{
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedicated = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML =`<span class="label">Location:</span> ${temple.location}`;
        dedicated.innerHTML =`<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML =`<span class="label">Size:</span> ${temple.area}`;

        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "easy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".fig-image").appendChild(card);

     })}
