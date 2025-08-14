// Create menu click
const webLink = document.querySelector(".website-links");

const displayMenu = document.querySelector("#menu");

displayMenu.addEventListener('click', function() {
webLink.classList.toggle('show');
displayMenu.classList.toggle('show');
})

// Artisan information
const artisans = [
    { name: "Iyanu Adeleye", service: "bricklayer", location: "Lagos", phone: "09059597376" },
    { name: "Toyin Emmanuel", service: "electrician", location: "Akure", phone: "07069597376" },
    { name: "Charles Ifedayo", service: "plumber", location: "Ado-Ekiti", phone: "07060492195" }
];

// Select DOM elements
const searchForm = document.querySelector("form");
const searchInput = document.getElementById("search-input");
const featuredService = document.querySelector(".featured-services");

// Restore last search on page reload
window.addEventListener("DOMContentLoaded", () => {
    const lastSearch = localStorage.getItem("lastSearch");
    if (lastSearch) {
        searchInput.value = lastSearch;
        displayResults(searchArtisans(lastSearch));

    }
});

// Submit button event
searchForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form from reloading the page
    const searchQuery = searchInput.value.trim().toLowerCase();

    localStorage.setItem("lastSearch", searchQuery);

    const matchedInfo = searchArtisans(searchQuery);
    displayResults(matchedInfo);
});

// Function to search
function searchArtisans(searchQuery) {
    return artisans.filter(artisan =>
        artisan.service.toLowerCase().includes(searchQuery) ||
        artisan.location.toLowerCase().includes(searchQuery)
    );
}

// Function to display results
function displayResults(matches) {
    if (matches.length === 0) {
        featuredService.innerHTML = `<p>No results found for "${searchInput.value}"</p>`;
    } else {
        featuredService.innerHTML = `
            <h2>Search Results</h2>
            <ul>
                ${matches.map(a =>
                    `<li>
                        ${a.name} - (${a.location})<br>
                        <small>${a.phone}</small>
                    </li>`
                ).join('')}
            </ul>
        `;
    }
}

document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.getElementById("lastmodified").textContent = "lastmodified: " + document.lastModified;
