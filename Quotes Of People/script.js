const quotes = [
    {
        name:'Stephen King',
        quote:'get busy living or get busy dying.'
    },
    {
        name:'Rick Astley',
        quote:'never gonna give you up.'
    },
    {
        name:'John F.Kennedy',
        quote:'Those who dare to fall miserably can achive greatly.'
    },
    {
        name:'Abraham Lincolin',
        quote:'Im sucess today because I had a friend who believed in me and I didnt have the heart to let him down.'

    },
    {
        name:'Leo Tolstoy',
        quote:'If you want to be happy,be.'
    }
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote (){

    let number = Math.floor(Math.random()*quotes.length);
   quoteAuthor.innerHTML = quotes[number].name;
   quote.innerHTML = quotes[number].quote;

}