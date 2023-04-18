
let quonte = document.querySelector(".wise__quote");
let author = document.querySelector(".wise__author");
let wiseAll = []; 
let item = [];

const getRandomBackground = () => {
  const randomIndex = Math.floor(Math.random() * item.length);
  return `url('https://source.unsplash.com/random/?${randomIndex}')`;
}

      

const dataQuestion = () => {
  fetch("../json/dummy01.json")  
    .then(res => res.json())       
    .then(items => {                

      let totIndex = Math.round(Math.random() * items.quotes.length);
      quonte.innerHTML = ` ${items.quotes[totIndex].id}. ${items.quotes[totIndex].quote} `;
      author.innerHTML = `- ${items.quotes[totIndex].author}`;


      items.quotes.forEach(element => {


        item.push({
          id: element.id,
          quote: element.quote,
          author: element.author
          
        });
      });
    })
    .catch((err) => console.log(err));
}

dataQuestion();

setInterval(() => {
  dataQuestion();

  let totIndex = Math.round(Math.random() * item.length);
  quonte.innerHTML = `${item[totIndex].id}. ${item[totIndex].quote} `;
  author.innerHTML = `- ${item[totIndex].author}`;
  document.querySelector("body").style.transition = "all 0.1s";
  document.querySelector("body").style.backgroundImage = getRandomBackground();

  }, 1000);
  
   