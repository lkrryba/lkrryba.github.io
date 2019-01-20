$(document).ready(async function() {
  // create ul, using createElement
  const data = await getData();
  var ul = document.createElement("ul");
  document.getElementById("bunny-list").appendChild(ul);
  // const bluebells = data.filter(bunny => bunny.name === "Bluebell");
  // then for each array entry in data
  data.forEach(function(arrayentry) {
    // create li with bunnydata using create element and add it to ul
    var li = document.createElement("li");
    li.innerHTML = `${arrayentry.name}, ${arrayentry.size}`; //LR - not adding the right stuff
    ul.appendChild(li);
    // don't forget that you can give those elements classes bu addClass.
  });
  // for extra grade think about creating a separate function that RETURNS/APPENDS
  // li element to ul element
});

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
// style bunny data
// POST more bunnies on bunny form - read 'how to post ofrm data to api endpoint'
//make delete bunny button
