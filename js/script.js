/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: "You miss 100% of the shots you don't take.",
    source: "Wayne Gretzky",
    year: "1983"
  },

  {
    quote: "Whether you think you can or you think you can't, you're right.",
    source: "Henry Ford"
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    source: "Confucius"
  },
  {
    quote: "There is no substitute for hard work.",
    source: "Thomas Edison",
    citation: "Adobe",
  },
  {
    quote: "Do not let making a living prevent you from making a life",
    source: "John Wooden"
  }
];




/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  
  for (let i = 0; i < quotes.length; i++) {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    let randomQuoteObject = quotes[randomNumber];
    return randomQuoteObject;
  };
};

/**
 * Returns a random object from an array list of objects.
 *
 * @let {randomNumber} uses Math function to generate random numbers.
 * @let {randomQuoteObject} selects a random object from the array list.
 * @return {randomQuoteObject} The random object.
 */




/***
 * `printQuote` function
***/
function printQuote() {
  let randomQuote = getRandomQuote();

  let html = ` 
      <p class="quote">${randomQuote.quote}</p>
       <p class="source">
          ${randomQuote.source}
  
  `;

  if (randomQuote.citation !== undefined) {
    html += `<span class="citation">${randomQuote.citation}</span>`;
  } else if (randomQuote.year !== undefined) {
    html += `<span class="year">${randomQuote.year}</span>`;
  }

  html += '</p>';

  let content = document.getElementById('quote-box').innerHTML = html;

  return content;

  
}

/**
 * Returns generates html to be displayed on the web page.
 * @let {html} creates a template literal to display the quote and source.
 * @if statement checks if the citation or year is undefined.
 * @else-if statement checks if the year is undefined.
 * @let {content} selects the quote-box div and displays the
 *
 * @return {content} The html to be displayed.
 */

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);