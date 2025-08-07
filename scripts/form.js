const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const selectElement = document.getElementById("productName");
// Loop through each product
products.forEach(product =>{
    const option = document.createElement("option");
    // To set the value of the option to the product's ID
    option.value = product.id;
    // Set the text to the product's name
    option.textContent = product.name;
    // Add the new option to the dropdown
    selectElement.appendChild(option);
});

// Counter
let reviewCount = localStorage.getItem("reviewCount");
if(reviewCount == null)
{
    reviewCount = 0;
}
else
{
    reviewCount = parseInt(reviewCount);
}
reviewCount += 1;
localStorage.setItem("reviewCount", reviewCount);


// To dynamically display time
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastmodified").textContent = "Lastmodified" + document.lastModified;