// question 2
const key = "918c75dde5ab4b3aaed9216be5434285";
const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${key}`;

const listContainer = document.querySelector("#list");
const loadingIndicator = document.querySelector(".lds-ring");

const fetchData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const games = data.results;

    let content = "";
    for (let i = 0; i < 8; i++) {
      const game = games[i];
      content += `<li>${game.name},${game.rating}, ${game.tags.length} tags</li>`;
    }
    loadingIndicator.style.display = "none";
    listContainer.innerHTML = content;
  } catch (error) {
    console.log("error: ", error);
    loadingIndicator.style.display = "none";
    listContainer.innerHTML = "<li>Ups! There's an error...</li>";
  }
};

fetchData();
