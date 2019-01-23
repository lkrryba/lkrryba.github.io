$(document).ready(async function() {
  $("h1").addClass("animated bounce");

  // DONE function to display bunny data from GET request on page
  // DONE create ul, using createElement
  const data = await getData();
  var ul = document.createElement("ul");
  document.getElementById("bunny-list").appendChild(ul);
  // NOTE IF WANTED TO FILTER const bluebells = data.filter(bunny => bunny.name === "Bluebell");
  // DONE then for each array entry in data
  data.forEach(function(arrayentry) {
    console.log(arrayentry);
    // DONE create li with bunnydata using create element and add it to ul
    var li = document.createElement("li");
    li.innerHTML = `name: ${arrayentry.name}, size: ${
      arrayentry.size
    }, colour: ${arrayentry.colour}, residence: ${
      arrayentry.residence
    }, real or plush toy? ${arrayentry.type}, reality status: ${
      arrayentry.reality_status
    }, age: ${arrayentry.age}, temperament: ${
      arrayentry.temperament
    }, relationship: ${arrayentry.relationship}. `;
    ul.appendChild(li);
    //if (arrayentry.age === undefined) {
    //arrayentry.age.addClass("invisible");
    // }
    // don't forget that you can give those elements classes bu addClass.
  });
  // for extra grade think about creating a separate function that RETURNS/APPENDS
  // li element to ul element
});

//GET REQUEST
async function getData() {
  try {
    const response = await fetch("https://bunny-census.herokuapp.com/census");
    if (response.status === 200) {
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      throw new Error("Rotten carrots! Bunny data not retrieved!");
    }
  } catch (error) {
    console.log("error", error);
  }
}

// to do
//find a way to hide undefined ones
// style bunny data
