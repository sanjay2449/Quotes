let quotes = document.getElementById('quotes');
let author = document.getElementById('author');
let newQuote = document.getElementById('newQuote');
let quoteData = "";
const setData = ()=>{
    quotes.innerText = quoteData.quote;
    author.innerText = quoteData.author;
}
const getQuote = async () => {
    const api = "https://quotes-api-self.vercel.app/quote";
    try {
        let data = await fetch(api);
        quoteData = await data.json();
        setData();
    } catch (error) {
        console.log(error.message);  
    }
}
getQuote();
newQuote.addEventListener('click', getQuote);
