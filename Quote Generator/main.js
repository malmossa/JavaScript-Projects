let quotesArray = [];

const quoteText = document.querySelector(".quote");
const button = document.querySelector(".btn");

button.addEventListener("click", newQuote);

// Get Quote from api
async function getQuotes() {
  const apiURL = "https://type.fit/api/quotes";

  try {
    const result = await fetch(apiURL);
    quotesArray = await result.json();
  } catch (err) {
    console.error(err);
  }
}

function newQuote() {
  const randomIndex = Math.floor(Math.random() * quotesArray.length);
  const quote = quotesArray[randomIndex];
  quoteText.textContent = quote.text;
}
// On load
getQuotes();
