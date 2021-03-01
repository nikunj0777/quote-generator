const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

//show loading
function loading() {
  loader.hidden = false;
  quoteContainer.hidden=true;
}
// Hide Loading
function complete() {
  if (!loader.hidden) {
      quoteContainer.hidden = false;
      loader.hidden = true;
  }
} 
//get quote from api.
async function getQuote() {
  loading();
    const proxyUrl = 'https://whispering-tor-04671.herokuapp.com/'
    const apiUrl= 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try{
        const response = await fetch(proxyUrl + apiUrl);
        const data = await response.json();
      
        if (data.quoteAuthor === ''){
            authorText.innerText = 'Unknown';

        }else {
            authorText.innerText = data.quoteAuthor;
              }
          //Reduce font size
          if (data.quoteText.length > 40){
            quoteText.classList.add('long-quote');

          }else{
            quoteText.classList.remove('long-quote');
        }
        //passing our data to the element 
          quoteText.innerText = data.quoteText;
    complete();
    }catch (error) {
      
    getQuote();
    }

}
// Tweet Quote
function tweetQuote() {

  const quote =  quoteText.innerText;
  const author = authorText.innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote}-${author}`;
  window.open(twitterUrl, '_blank');  
}
// not getting quote and author on twitter page
newQuoteBtn.addEventListener ('click', getQuote);
twitterBtn.addEventListener ('click', tweetQuote);


//On Load
getQuote();
