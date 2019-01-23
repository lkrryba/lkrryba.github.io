//function to send post request on click of submit button
//(function will go here)
document.getElementById("submit").addEventListener("click", postData);

//POST REQUEST
async function postData() {
  try {
    const response = await fetch("https://bunny-census.herokuapp.com/census", {
      method: "POST",
      body: JSON.stringify({ id: "200" }) //what should this be json stringifying?
    });
    if (response.status === 200) {
      const jsonResponse = await response.json();
      //and do what with it?
    }
    console.dir(response);
    throw new Error("Soggy lettuce! Unable to post bunny data!");
  } catch (error) {
    console.log("error", error);
  }
}

//to do
// POST more bunnies on bunny form - read 'how to post from data to api endpoint'
//make delete bunny button

//  console.log("bunny");
