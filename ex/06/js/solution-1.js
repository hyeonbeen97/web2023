
let quonte = document.querySelector(".wise__quote");
let author = document.querySelector(".wise__author");
let wiseAll = []; 
let item = [];
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

  let totIndex = Math.round(Math.random() * item.length);
  quonte.innerHTML = `${item[totIndex].id}. ${item[totIndex].quote} `;
  author.innerHTML = `- ${item[totIndex].author}`;
  document.querySelector(".body").style.backgroundImage = `url(https://source.unsplash.com/random/?programming)`;
  
  }, 1000);
   