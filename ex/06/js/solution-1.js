
let quonte = document.querySelector(".wise__quote");
let author = document.querySelector(".wise__author");
let wiseAll = []; 
let item = [];


const preloadImages = () => {
  const images = [
    "https://source.unsplash.com/random/?0",
    "https://source.unsplash.com/random/?1",
    "https://source.unsplash.com/random/?2",
  ];

  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

const getRandomBackground = () => {
  const randomIndex = Math.floor(Math.random() * 10);
  return `url('https://source.unsplash.com/random/?${randomIndex}')`
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
  document.querySelector("body").style.transition = "background-image 0.1s";
  document.querySelector("body").style.backgroundImage = getRandomBackground();
  
  }, 1000);
  
   